import JsonForm from '../JsonForm';
import ShapeOfTheRole from '../Shapes';
import { schema } from '../Shapes/shapes';
import { ShapeLayer } from '../Shapes/types';
import { useEffect, useState } from 'react';
import "./shapes-editor.css";
import { useSearchParams } from 'react-router-dom';
import { Button, Classes } from '@blueprintjs/core';

const SHAPES_KEY = 'shapes';

const convertSearchParamsToArray = (search: string) => {
    const split = search.split('-');
    const result: ShapeLayer[] = [];
    for(const s of split) {
        const [ motion, opacity, scale, label, shape ] = s.split(',');
        const opacityNumber = Number(opacity);
        const scaleNumber = Number(scale);
        const shapeyNumber = Number(shape);
        const motionBool = Boolean(motion);
        if(!isNaN(opacityNumber) && !isNaN(Number(shapeyNumber)) && !isNaN(Number(scaleNumber))) {
            result.push({
                motion: motionBool,
                opacity: opacityNumber,
                scale: scaleNumber,
                label,
                shape: shapeyNumber
            });
        }
    }
    return result;
}

const convertArrayToSearchParams = (arr: ShapeLayer[]) => {
    const search: string[] = [];
    for(const a of arr) {
        search.push(`${a.motion || ''},${a.opacity || ''},${a.scale || ''},${a.label || ''},${a.shape || ''}`)
    }
    return search.join("-");
}


const ShapesEditor: React.FunctionComponent<{ 
    title?: string, 
    storeLocally?: boolean
}> = ({ title, storeLocally }) => {


    const [ search ] = useSearchParams();
    const searchData =  search.get('data') || '';
  
    const [data, setData] = useState<ShapeLayer[]>(() => {
        const dataFromParams = convertSearchParamsToArray(searchData);
        if(dataFromParams.length > 0) {
            return dataFromParams;
        }
        if(storeLocally) {
            const d = JSON.parse(localStorage.getItem(SHAPES_KEY) || "[]");
            return d;
        }
        return [];
    });

    const getUrl = (data: ShapeLayer[]) => {
        const shareString = convertArrayToSearchParams(data);
        const location = window.location;
        return `${location.origin}${location.pathname}?${SHAPES_KEY}=${shareString}`;
    }

    const share = (data: ShapeLayer[]) => {
        const url = getUrl(data);
        if(navigator.share) {
            navigator.share( { url });
        }
       
    }

    const copy = async (data: ShapeLayer[]) => {
        const url = getUrl(data);
        if(navigator.clipboard) {
           await navigator.clipboard.writeText(url);
           alert('url copied!');
        }
       
    }
    useEffect(() => {
        if(storeLocally) {
            localStorage.setItem(SHAPES_KEY, JSON.stringify(data));
        }
    }, [ data, storeLocally ]);

    return <div className="shapes-editor">
      <h1>
          { title }
        <Button text="Share" icon="share" onClick={() => share(data)} className={Classes.MINIMAL}/>
        <Button text="Copy" icon="duplicate" onClick={() => copy(data)} className={Classes.MINIMAL}/>  
      
      </h1>
      <ShapeOfTheRole layers={data} />
      <JsonForm 
        data={data} 
        schema={schema}
        onChange={setData} />
    </div>
}

export default ShapesEditor;
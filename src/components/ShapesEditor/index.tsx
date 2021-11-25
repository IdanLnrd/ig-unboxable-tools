import JsonForm from '../JsonForm';
import ShapeOfTheRole from '../Shapes';
import { schema } from '../Shapes/shapes';
import { ShapeOfTheRoleLayer } from '../Shapes/types';
import { useEffect, useState } from 'react';
import "./shapes-editor.css";

const ShapesEditor: React.FunctionComponent<{ 
    title?: string, storeLocally?: boolean 
}> = ({ title, storeLocally }) => {

    const [data, setData] = useState<ShapeOfTheRoleLayer[]>(() => {
        const d = JSON.parse(localStorage.getItem('shapes') || "[]");
        return d;
    });

    useEffect(() => {
        if(storeLocally) {
            localStorage.setItem('shapes', JSON.stringify(data));
        }
    }, [ data, storeLocally ]);

    return <div className="shapes-editor">
      <h1>{ title }</h1>
      <ShapeOfTheRole layers={data} />
      <JsonForm 
        data={data} 
        schema={schema}
        onChange={setData} />
    </div>
}

export default ShapesEditor;
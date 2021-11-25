import JsonForm from '../JsonForm';
import ShapeOfTheRole from '../Shapes';
import { schema } from '../Shapes/shapes';
import { ShapeOfTheRoleLayer } from '../Shapes/types';
import { useEffect, useState } from 'react';

const DEF = [
  { scale: 1, label: 'l1', opacity: 1 },
  { scale: 0.95, label: 'l2', motion: true },
  { scale: 0.85, label: 'l3', motion: true },
];
const ShapesEditor: React.FunctionComponent<{ 
    title: string, storeLocally?: boolean 
}> = ({ title, storeLocally }) => {

    const [data, setData] = useState<ShapeOfTheRoleLayer[]>(() => {
        const d = JSON.parse(localStorage.getItem('shapes') || "[]");
        return d || DEF;
    });

    useEffect(() => {
        if(storeLocally) {
            localStorage.setItem('shapes', JSON.stringify(data));
        }
    }, [ data, storeLocally ]);

    return <div>
      <h1>Shape of the role</h1>
      <ShapeOfTheRole layers={data} />
      <JsonForm 
        data={data} 
        schema={schema}
        onChange={setData} />
    </div>
}

export default ShapesEditor;
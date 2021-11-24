import { useEffect, useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import ShapeOfTheRole from './components/Shapes';
import { schema } from './components/Shapes/shapes';
import { ShapeOfTheRoleLayer } from './components/Shapes/types';

const DEF = [
  { scale: 1, label: 'l1', opacity: 1 },
  { scale: 0.95, label: 'l2', motion: true },
  { scale: 0.85, label: 'l3', motion: true },
];

function App() {

  const [data, setData] = useState<ShapeOfTheRoleLayer[]>(() => {
    const d = JSON.parse(localStorage.getItem('shapes') || "[]");
    return d || DEF;
  });
  useEffect(() => {
    localStorage.setItem('shapes', JSON.stringify(data));
  }, [ data ]);
  return (
    <div className="App">
      <h1>Shape of the role</h1>
      <ShapeOfTheRole layers={data} />
      <Editor 
        data={data} 
        schema={schema}
        onChange={setData} />
    </div>
  );
}

export default App;

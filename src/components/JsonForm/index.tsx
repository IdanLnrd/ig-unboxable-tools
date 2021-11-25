import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';
import { JsonForms } from '@jsonforms/react';

const JsonForm: React.FunctionComponent<{ 
  data: any,
  schema: any, 
  onChange: (data: any) => void }> = ({ data, onChange, schema }) => {
    
    return (
        <div className='App'>
          <JsonForms
            schema={schema}
            data={data}
            renderers={materialRenderers}
            cells={materialCells} 
            onChange={({ data, errors }) => onChange(data)}
          />
        </div>
      );
}

export default JsonForm;
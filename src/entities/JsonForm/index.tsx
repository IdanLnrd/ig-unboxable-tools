import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';
import { JsonForms } from '@jsonforms/react';

const JsonForm: React.FunctionComponent<{ 
  data: any,
  schema: any, 
  onChange: (data: any, err?: any) => void }> = ({ data, onChange, schema }) => {
    
    return (
        <div>
          <JsonForms
            schema={schema}
            data={data}
            renderers={materialRenderers}
            cells={materialCells} 
            onChange={({ data, errors }) => onChange(data, errors)}
          />
        </div>
      );
}

export default JsonForm;
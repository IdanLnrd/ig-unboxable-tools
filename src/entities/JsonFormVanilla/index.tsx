import { vanillaCells, vanillaRenderers } from '@jsonforms/vanilla-renderers';
import { JsonForms } from '@jsonforms/react';

const JsonFormVanilla: React.FunctionComponent<{ 
  data: any,
  schema: any, 
  onChange: (data: any, err?: any) => void }> = ({ data, onChange, schema }) => {
    
    return (
        <div>
          <JsonForms
            schema={schema}
            data={data}
            renderers={vanillaRenderers}
            cells={vanillaCells} 
            onChange={({ data, errors }) => onChange(data, errors)}
          />
        </div>
      );
}

export default JsonFormVanilla;
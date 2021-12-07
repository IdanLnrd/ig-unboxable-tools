import { Classes, H1, TextArea } from "@blueprintjs/core";
import { FormGroup } from "@material-ui/core";
import { useEffect, useState } from "react";
import { CommApi } from "./comm-api";

const api = new CommApi();

const CommProfileEditor: React.FunctionComponent = () => {
    const [ category, setCategory ] = useState<string>('');
    const [ description, setDescription ] = useState<string>('');
    const [ err, setErr ] = useState<string>('');

    useEffect(() => {
        api.read()
    }, []);

    useEffect(() => {
        api.write({ 
            id: category, 
            category, 
            description 
        }).then().catch(err => setErr('ther is some error:' + err?.message))
    }, [ category, description ]);

    return <div>
        <H1>Communication Profile Editor</H1>
        <div>{err}</div>
        <div>
            <div>
                <FormGroup>
                    <input type="text" className={Classes.EDITABLE_TEXT_INPUT} onChange={event => setCategory(event.target.value)} value={category} />
                    <TextArea onChange={event => setDescription(event.target.value)} value={description}/>
                </FormGroup>
            </div>
        </div>
    </div>
}

export default CommProfileEditor;
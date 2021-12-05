import { FileInput } from '@blueprintjs/core';
import './nlp-label-text.css';


const texts = {
    file_text: 'Upload file',
    file_button: ''
}

const NLPLabelText: React.FunctionComponent = () => {
    const onFile = (data: any) => {
        console.log(data);
    }
    return <div className="nlp-container">
        <h1>Start labeling</h1>
        <div>
            <FileInput onChange={onFile} text={texts.file_text} buttonText={texts.file_button}/>
        </div>
        <div>

        </div>
    </div>  
}
export default NLPLabelText;
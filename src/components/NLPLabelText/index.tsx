
import { AnchorButton, Classes } from '@blueprintjs/core';
import { Outlet } from 'react-router-dom';

import './nlp-label-text.css';
const texts = {
    title: 'NLP label sessions'
}


const NLPLabelText: React.FunctionComponent = () => {
  

    return <div className="nlp-container">
        <h1>{ texts.title }</h1>
        <AnchorButton 
            className={Classes.MINIMAL} 
            href="/applications/nlp_label_text/list" 
            icon="list" 
            text="List sessions"/>
       <Outlet/>

    </div>  
}
export default NLPLabelText;
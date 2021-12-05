import { Button, Classes } from "@blueprintjs/core";
import { useState } from "react";
import { useParams } from "react-router";
import { NLPData } from "../../data";
import { INLPLabelingSession } from "../../types";
import NLPSessionViewer from "../NLPSessionViewer";
import './nlp-labeling-session.css';

const nlp = new NLPData();


const NLPLabelingSession = () => {
    const [ session, setSession ] = useState<INLPLabelingSession | undefined>();
    const { sessionId } = useParams();
  
    if(!session) {
        nlp.load(sessionId)
        .then(setSession)
        .catch(console.error);
        return <div>Loading session...</div>
    }

    return <div>
        <div className="text-">
            <h5 className="nlp-session-title">Session {sessionId}</h5>
        </div>
        <div className="nlp-session-editor">
            <Button className={Classes.MINIMAL} icon="predictive-analysis" text="Add Insight"/>
            <Button className={Classes.MINIMAL} icon="new-text-box" text="Add Text"/>
            <Button className={Classes.MINIMAL} icon="tag" text="Add Tags"/>    
        </div>
        <div className="nlp-session-viewer">
            <NLPSessionViewer session={session}/>
        </div>
    </div>
}

export default NLPLabelingSession;
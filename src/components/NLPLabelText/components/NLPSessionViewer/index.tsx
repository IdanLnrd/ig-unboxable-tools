import { INLPLabelingSession } from "../../types";

const NLPSessionViewer: React.FunctionComponent<{ 
    session: INLPLabelingSession 
}> = ({ session }) => {
 
    return <div>
        {
            Object.keys(session).map((s, i) => <div key={i}>
                <span>{s}</span>:<span>{(session as any)[s]}</span>
            </div>)
        }     
    </div>
}

export default NLPSessionViewer;
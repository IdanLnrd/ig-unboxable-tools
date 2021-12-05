import { INLPLabelingSession } from "../../types";

const NLPSessionViewer: React.FunctionComponent<{ 
    session: INLPLabelingSession 
}> = ({ session }) => {
    return <div>
        { JSON.stringify(session || '{}') }
    </div>
}

export default NLPSessionViewer;
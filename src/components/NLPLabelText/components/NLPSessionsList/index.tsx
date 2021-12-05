import { AnchorButton, Button, Classes } from '@blueprintjs/core';
import { useEffect, useState } from 'react';
import { NLPData } from '../../data';
import { INLPLabelingSession } from '../../types';
import './nlp-sessions-list.css';

const nlp = new NLPData();

const NLPSessionsList = () => {
    const [ list,  setList ] = useState<INLPLabelingSession[]>([]);
    const addSession = async () => {
        await nlp.save({ title: '', text: '', insights: [], id: '' });
        nlp.list().then(setList).catch(console.error);
    }
    useEffect(() => {
        nlp.list().then(setList).catch(console.error);
    }, []);

    const remove = async (id: string) => {
        await nlp.remove(id);
        nlp.list().then(setList).catch(console.error);
    }
    return <div>
    <div>
        <Button 
            onClick={addSession}
            className={Classes.MINIMAL} 
            icon="add" 
            text="Add session"/>
    </div>
    <ul className="session-list">
        { list.map((l, i) => 
            <li className="session-item" key={i}>
                <AnchorButton 
                    className={Classes.MINIMAL}
                    href={"/applications/nlp_label_text/session/" + l.id} text={l.title || ('New session ' + i)} />
                <Button
                    className={Classes.MINIMAL}
                    text="" icon="remove" onClick={() => remove(l.id)}/>
            </li>) }
    </ul>
</div>
}


export default NLPSessionsList;
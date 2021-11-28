import { Classes, Icon } from '@blueprintjs/core';
import './talent-card.css';
const TalentCard: React.FunctionComponent = () => {
    return <div className={`talent-container ${Classes.TEXT_MUTED}`}>
        <span className="talent-text">Comming soon... </span> 
        <Icon className="building-anim" size={40} icon="build"/> 
    </div>
}

export default TalentCard;


import './shapes.css';
import { 
    ANIM_DELAY, 
    DEFAULT_OPACITY, 
    DEFAULT_SCALE, 
    DEFAULT_SIZE, 
    getRandomShape, 
    getShape, 
    transform 
} from "./shapes";
import { ShapeOfTheRoleLayer } from './types';


const Shapes: React.FunctionComponent<{ 
    layers?: ShapeOfTheRoleLayer[],
    size?: number
}> = ({ layers = [], size = DEFAULT_SIZE }) => {
    return <div className="shapes-container" 
    style={{ width: `${size}px`, height: `${size}px`,}}>
        {
            layers.map((l,index) => (
                    <div key={index}  
                        style={{ animationDelay: -Math.floor(Math.random() * ANIM_DELAY) + 'ms' }}
                        className={ "shapes-item-container " + (l.motion ? "sotr-animate" : "" )}>
                        <img style={{ 
                                position: 'absolute',
                                width: `${size * (!isNaN(l.scale || 0) ? (l.scale || 0) : DEFAULT_SCALE)}px`,
                                opacity: (l.opacity || DEFAULT_OPACITY), 
                                transform: transform()
                            }} 
                            src={index === 0 ? getShape() :(l.shape ? getShape(l.shape) : getRandomShape())} alt={''}
                        />
                    </div>
                )
            )
        }
    </div>
}

export default Shapes;
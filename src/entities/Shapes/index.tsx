

import './shapes.css';
import { 
    ANIM_DELAY, 
    DEFAULT_OPACITY, 
    DEFAULT_SCALE, 
    DEFAULT_SIZE, 
    getLabelLocation, 
    getLabelLocationComp, 
    getRandomShape, 
    getShape, 
    transform 
} from "./shapes";
import { ShapeLayer } from './types';
import { useState } from 'react';


const Shapes: React.FunctionComponent<{ 
    layers?: ShapeLayer[],
    size?: number
}> = ({ layers = [], size = DEFAULT_SIZE }) => {
    const [ selected, setSelected ] = useState<number>(-1);
    const labels = layers.filter(l => !!l.label);
    const onLabelOver = (l: ShapeLayer, i: number) => {
        setSelected(layers.indexOf(l))
    }
    const onLabelOut = (l: ShapeLayer, i: number) => {
        setSelected(-1)
    }
    return <div className="shapes-container" 
    style={{ width: `${size}px`, height: `${size}px`,}}>
        <div className="shapes-labels">
            {
                labels.map((l, i) => (
                    <div key={i} 
                        onMouseOver={() => onLabelOver(l, i)}
                        onMouseOut={() => onLabelOut(l, i)}
                        style={getLabelLocation(i, size, labels.length)} className="shapes-label">
                        <span
                            style={{ position: 'absolute', ...getLabelLocationComp(i, labels.length) }}>{l.label}</span>
                    </div>
                ))
            }
        </div>
        <div>
        {
            layers.map((l,index) => (
                    <div key={index}
                        style={{ animationDelay: -Math.floor(Math.random() * ANIM_DELAY) + 'ms' }}
                        className={ "shapes-item-container " + (l.motion ? "sotr-animate" : "" ) + (
                            (selected === index || selected === -1 || index === 0) ? ' shape-selected ' : ' ')}>
                        <img style={{ 
                                position: 'absolute',
                                width: `${(size / 2) * (!isNaN(l.scale || 0) ? (l.scale || 0) : DEFAULT_SCALE)}px`,
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

    </div>
}

export default Shapes;
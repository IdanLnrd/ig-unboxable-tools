import { H1, Card, Classes, AnchorButton } from "@blueprintjs/core";

import { FunctionComponent } from "react";

import "./applications.css";

const Applications: FunctionComponent = () => {
    return <div>
        <H1 className="apps-title">Applications</H1>
        <div className="apps">
            <Card>
                <AnchorButton 
                    text="Unboxable Shapes" 
                    href="/applications/shapes"
                    icon="cube" className={Classes.MINIMAL} /> 
            </Card>
        </div>
    </div>
}

export default Applications;
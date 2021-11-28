import { H1, Card, Classes, AnchorButton } from "@blueprintjs/core";

import { FunctionComponent } from "react";

import "./applications.css";

const Applications: FunctionComponent = () => {
    return <div>
        <H1 className="apps-title">Applications</H1>
        <div className="apps">
            <Card className="app-item">
                <AnchorButton 
                    text="Shapes" 
                    href="/applications/shapes"
                    icon="cube" className={Classes.MINIMAL} /> 
            </Card>
            <Card className="app-item">
                <AnchorButton 
                    text="Editor" 
                    target="_blank"
                    href="https://editor.lnrd.io"
                    icon="edit" className={Classes.MINIMAL} /> 
            </Card>
            <Card className="app-item">
                <AnchorButton 
                    text="Analytics" 
                    target="_blank"
                    href="https://analytics.staging.lnrd.io"
                    icon="chart" className={Classes.MINIMAL} /> 
            </Card>
            <Card className="app-item">
                <AnchorButton 
                    text="Talent Card" 
                    target="_blank"
                    href="/applications/talent_card"
                    icon="user" className={Classes.MINIMAL} /> 
            </Card>
        </div>
    </div>
}

export default Applications;
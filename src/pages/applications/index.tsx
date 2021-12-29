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
                    icon="layers" className={Classes.MINIMAL} /> 
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
                    text="Data Services" 
                    target="_blank"
                    href="https://data-services.staging.lnrd.io"
                    icon="heatmap" className={Classes.MINIMAL} /> 
            </Card>
        </div>
    </div>
}

export default Applications;
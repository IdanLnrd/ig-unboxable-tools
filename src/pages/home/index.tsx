import { Classes, H1 } from "@blueprintjs/core";
import "./home.css";

const Home: React.FunctionComponent = () => {
    return <div>
        <H1 className="home-title">Home</H1>
        <p className={`${Classes.TEXT_MUTED} ${Classes.TEXT_LARGE} ${Classes.RUNNING_TEXT} home-desc`}>
            <section>
            <span>
                This site goal is reducing the amount of human contact and automated the solutions for some problems.
            </span>
            </section>
            <section>
                <span className={`${Classes.TEXT_SMALL}`}>Idan Gibly</span>
            </section>
        </p>
    </div>
}

export default Home;
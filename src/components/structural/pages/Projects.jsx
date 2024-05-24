import { Link } from "react-router-dom";

function Projects() {
    return (
        <div className="Main-header">
            <h2>Work in progress :D</h2>
            <p>Uh oh, looks like you're lost!</p>
            <p>
                <Link to="/">Back to safety.</Link>
            </p>
        </div>
    );
}

export default Projects;
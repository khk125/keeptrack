import { Project } from "./Project";

interface PC {
    project:Project;
}

function formatDescription(description: string): string {
    return description.substring(0, 60) + '...';
}

function ProjectCard(projProp:PC){
    const {project} = projProp;

    function HandleEditClick(project: Project): void {
        console.log(`Project being edited: ${project.name}`);
    }

    return (
        <div className="card">
            <img src={project.imageUrl} alt={project.name} />
            <section className="section dark">
                <h5 className="strong">
                <strong>{project.name}</strong>
                </h5>
                <p>{formatDescription(project.description)}</p>
                <p>Budget: {project.budget.toLocaleString()}</p>
                <button className="bordered" onClick={()=>HandleEditClick(project)}>
                    <span className="icon-edit"></span>
                    Edit
                </button>
            </section>
        </div>
    );
}

export default ProjectCard
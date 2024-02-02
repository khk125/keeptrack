import React from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface PLProps{
    projects: Project[];
}

function ProjectList({projects}: PLProps){
    const PItems = projects.map((project)=>(
        <div key={project.id} className="cols-sm">
            <ProjectCard project={project}></ProjectCard>
            <ProjectForm />
        </div>
        ));
    
    return (<div className="row">{PItems}</div>);
    
}

export default ProjectList
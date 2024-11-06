import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProject, getProjects } from "../actions/projects";

export const Projects = () => {
    const { projects } = useSelector((state) => (state.projects))
    const [newProj, setNewProj] = useState(false)
    const [projectData, setProjectData] = useState({
        title: '',
        description: '',
        successDate: '',
        observation: ''
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {


        dispatch(getProjects(1))
    }, [])

    const user = JSON.parse(localStorage.getItem('profile'))
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProject({ ...projectData, researcher: user?.result?.name }, navigate))
    }
    return (
        <div className="text-white p-8 overflow-y-scroll h-screen">
            <div className="flex justify-between">
                <h1 className="text-4xl">Projects</h1>
                <button className="bg-white text-darkest-blue p-2 rounded-md cursor-pointer" onClick={() => setNewProj(!newProj)}>Add Project</button>
            </div>
            {projects?.map((project) => (
                <div>
                    <div className="flex bg-sidebar-bg/35 backdrop:blur-md p-8 rounded-xl mt-4">
                        <div>
                            <h1 className="text-3xl font-bold">{project.title}</h1>
                            <h4 className="font-bold">by {project.researcher}</h4>
                            <p>{project.description}</p>
                            
                            <span>
                                <h2 className="font-bold">Observation: </h2>
                                <h2>{project.observation}</h2>
                            </span>
                        </div>
                    </div>
                </div>
            ))}
            <div className={`create ${newProj ? 'flex' : 'hidden'} absolute right-0 bottom-0 bg-sidebar-bg/80 backdrop:blur-md flex items-center justify-center flex-col rounded-xl h-screen w-screen`}>
                <button className="absolute z-20 text-green top-8" onClick={() => setNewProj(!newProj)}>X Close</button>
                <input required type="text" name="title" className=" w-96 m-4 p-3 text-gray-400" placeholder="Enter the title" onChange={(e) => setProjectData({ ...projectData, title: e.target.value })} />
                <input required type="text" name="desc" className=" w-96 m-4 p-3 text-gray-400" placeholder="Enter the desc" onChange={(e) => setProjectData({ ...projectData, description: e.target.value })} />
                <input required type="date" name="date" id="" className=" w-96 m-4 text-gray-400 p-3" placeholder="Enter the date" onChange={(e) => setProjectData({ ...projectData, date: e.target.value })} />
                <input required type="text" name="observation" className=" w-96 m-4 p-3 text-gray-400" placeholder="Enter the observation" onChange={(e) => setProjectData({ ...projectData, observation: e.target.value })} />
                <button className="bg-white text-darkest-blue p-2 px-8 rounded-md m-4 cursor-pointer" onClick={handleSubmit}>Create</button>
            </div>
        </div>
    )
}
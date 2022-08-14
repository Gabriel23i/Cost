import { useNavigate } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import style from './NewProject.module.css'

function NewProject(){
    const navigate = useNavigate()

    function createPost(project){
         
        // Initialize cost and services
        project.cost = 0
        project.services = []
        // Geralmente essa inicialização por segurança é feito no backend

        fetch("http://localhost:5000/projects",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body: JSON.stringify(project)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // REDIRECT
            navigate('/projects', { message: 'Projeto criado com sucesso!' })
        })
        .catch(error => console.error(error))
    }

    return (
        <div className={style.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject

import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import Container from '../layout/Container'
import Loading from '../layout/Loading'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/projectCard/ProjectCard'
import BackPage from '../layout/BackPage'

import styles from './Projects.module.css'

function Projects(){

	const [projects, setProjects] = useState([])
	const [removeLoading, setRemoveLoading] = useState(false)

	useEffect(()=>{
    setTimeout(()=>{
      fetch('http://localhost:5000/projects',{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => response.json())
      .then(data => {
        setProjects(data)
        setRemoveLoading(true)
      }).catch((error) => console.error(error))
    },300)
	},[])

  function removeProject(id){
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers:{
        "Content-Type":"application/json",
      },
    })
    .then(response => response.json())
    // Como DATA não vai ser usado pode ser func. anonymus
    .then(() => {
      //Está retornando para o proprio array o que for diferente do id passado
      setProjects(projects.filter(project => project.id !== id))
      toast.success('Projeto removido com sucesso!')
    })
    .catch(error => {
      toast.error('Erro na remoção do projeto.')
      console.error(error)
    })
  }

	return (
		<div className={styles.project_container}>
      <div className={styles.title_container}>
        <BackPage to="/" />
        <h1>Meus Projetos</h1>
        <LinkButton to='/newproject' text='Criar Projeto'/>
      </div>
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) =>(
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category}
              handleRemove={removeProject}
            />
        ))}
		    {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 &&(
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
		</div>
	)
}

export default Projects

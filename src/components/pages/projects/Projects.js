import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { axios } from '../../../api/axios'
import { URLS } from '../../../api/urls'

import Container from '../../layout/container/Container'
import Loading from '../../layout/loading/Loading'
import LinkButton from '../../layout/linkButton/LinkButton'
import ProjectCard from '../../project/projectCard/ProjectCard'
import BackPage from '../../layout/backPage/BackPage'

import styles from './Projects.module.css'

function Projects(){
	const [projects, setProjects] = useState([])
	const [removeLoading, setRemoveLoading] = useState(false)

  useEffect(()=>{
    setTimeout(() => {
      axios.get(URLS.projects)
      .then((response)=>{
        setProjects(response.data)
        setRemoveLoading(true)
      })
      .catch((error)=>console.error(error))
    }, 300);
  },[])

  function removeProject(id){
    axios.delete(`${URLS.projects}/${id}`)
    .then(()=>{
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

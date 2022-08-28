import { useEffect, useState } from 'react'

import { useFormik } from "formik"
import { registerSchema } from "../../schema/register"

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'


import { useNavigate } from 'react-router-dom'

import style from './ProjectForm.module.css'

function ProjectForm({ projectData, btnText, handlePost }){
    const [categories, setCategories] = useState([])
    const [project] = useState(projectData)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues:{
            name:project ? project.name : '',
            budget:project ? project.budget : '',
            category:project ? project.category.name : ''
        },
        onSubmit:(values)=>{
            console.log('values: ', values)
            console.log('Form project: ', project)

            
            const category = categories.find(categorie => categorie.id.toString() === values.category.toString())
            values.category = category
            
            if(projectData){
                return handlePost(values)
            } //Importante para edição do projeto!!!

            values.cost = 0
            values.services=[]

            fetch("http://localhost:5000/projects",{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                },
                body: JSON.stringify(values)
            })
            .then(data => {
                // REDIRECT
                navigate('/projects', { message: 'Projeto criado com sucesso!' })
            })
            .catch(error => console.error(error))
        },
        validationSchema:registerSchema
    })

    useEffect(()=>{
        fetch('http://localhost:5000/categories', {
            method:"GET",
            headers:{
                "Content-type":"application/json",
            },
        })
        .then(response => response.json())
        .then(data => {
            setCategories(data)
        })
        .catch(error => console.error(error))
    },[])

    return(
        <form onSubmit={formik.handleSubmit} className={style.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={formik.handleChange}
                value={formik.values.name}
                error={formik.errors.name && formik.touched.name && <>{formik.errors.name}</>}
            />
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
                handleOnChange={formik.handleChange}
                value={formik.values.budget}
                error={formik.errors.budget && formik.touched.budget && <>{formik.errors.budget}</>}
            />
            <Select
                name="category"
                text="Selecione a categoria"
                options={categories}
                handleOnChange={formik.handleChange}
                value={formik.values.category}
                error={formik.errors.category && formik.touched.category && <>{formik.errors.category}</>}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm

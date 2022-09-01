import { useFormik } from 'formik'

import Input from '../form/input/Input'
import SubmitButton from '../form/submitButton/SubmitButton'

import { validate } from '../../utils/validadeServiceForm'
import styles from '../project/ProjectForm.module.css'

function ServiceForm({ handleSubmit, btnText, projectData }){

  const formik = useFormik({
    initialValues:{
      name:'',
      cost:0,
      description:''
    },
    validate,
    onSubmit:({name, cost, description}, {resetForm})=>{
      projectData.services.push({name, cost, description})
      handleSubmit(projectData)
      resetForm()
    }
  })

  return(
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={formik.handleChange}
        value={formik.values.name}
        error={formik.errors.name && formik.touched.name ? <>{formik.errors.name}</>: ''}
      />
       <Input
        type="number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o valor total"
        handleOnChange={formik.handleChange}
        value={formik.values.cost.placeholder}
        error={formik.errors.cost && formik.touched.cost ? <>{formik.errors.cost}</>:''}
      />
       <Input
        type="text"
        text="Descrição do serviço"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChange={formik.handleChange}
        value={formik.values.description}
        error={formik.errors.description && formik.touched.description ? <>{formik.errors.description}</>:''}
      />
      <SubmitButton text={btnText}/>
    </form>
  )
}

export default ServiceForm

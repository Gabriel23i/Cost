import * as yup from 'yup'

export const registerSchema = yup.object().shape({
    name:yup.string().required('Nome é obrigatório!'),
    budget:yup.number().required('Budget é obrigatório!'),
    category:yup.number().required('Categoria obrigatória!')
})

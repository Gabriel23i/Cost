import * as yup from 'yup'

export const registerSchema = yup.object().shape({
    name:yup.string().required('O nome é obrigatório.'),
    budget:yup.number().required('O orçamento é obrigatório.'),
    category:yup.number().required('A categoria é obrigatória.'),
});

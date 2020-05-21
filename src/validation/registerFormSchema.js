import * as yup from 'yup';

const registerFormSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .min(3, 'The username must be at least three characters long')
        .required('The username is a required field'),
    email: yup.string()
        .email('The email must be a valid email address')
        .required('The email is a required field'),
    pass: yup.string()
        .min(6, 'The password must be at least 6 characters long')
        .required('You must set a password')
})

export default registerFormSchema;
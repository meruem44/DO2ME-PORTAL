import { ValidationError } from 'yup';

interface Erros {
    [key: string]: string;
};

export default function getValidationErros(err: ValidationError): Erros {
    const validationsErros: Erros = {};

    err.inner.forEach(error => {
        validationsErros[error.path] = error.message
    });

    return validationsErros;
}
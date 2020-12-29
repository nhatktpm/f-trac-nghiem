import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputField from '../form-controls/InputField';





TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const schema = yup.object().shape({
        title: yup.string().required('co loi roi'),
    });

    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        console.log('to do from ', values);
    }



    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            To do form
            <InputField name="title" label="Todo" form={form} />
        </form>
    );
}

export default TodoForm;
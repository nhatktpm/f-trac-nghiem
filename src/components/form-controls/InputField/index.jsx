import { TextField } from '@material-ui/core';
import React from 'react';
import { Controller } from 'react-hook-form';

function InputField(props) {
    const { form, name, label, disabled } = props;
    const { errors, formState } = form;
    const hasError =  formState.touched[name] && errors[name];
    console.log(errors[name], formState[name])

    return (
        <Controller
            name={name}
            control={form.control}
            as={TextField}

            fullWidth
            label={label}
            disabled={disabled}

            error={!!hasError}
            helperText={errors[name]?.message}
        />
    );
}

export default InputField;
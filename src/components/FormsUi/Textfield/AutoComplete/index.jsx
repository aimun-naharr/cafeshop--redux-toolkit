import React from "react";
import { Autocomplete } from "@mui/material";
import { useField, useFormikContext } from "formik";
import { TextField, MenuItem } from "@material-ui/core";

const AutoComplete = ({options, name, ...props  }) => {
        const [field, meta] = useField(name);
        const { setFieldValue } = useFormikContext();
        const handleSelect = (event) => {
                const { value } = event.target;
                setFieldValue(name, value);
        };
        console.log(field);
        const config = {
                ...field,
                ...props,
                select: true,
                fullWidth: true,
                onchange: handleSelect,
                variant: 'outlined'
        };

        if (meta && meta.touched && meta.error) {
                (config.error = true);
                 (config.helperText = meta.error);
        }
        return <TextField {...config}>
          {
               options.map((option, i)=><MenuItem key={i} value={option.name}>{option.name}</MenuItem>)
          }
        </TextField>;
};

export default AutoComplete;

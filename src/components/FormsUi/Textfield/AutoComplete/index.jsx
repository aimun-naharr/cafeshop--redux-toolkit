import React from "react";
import { Autocomplete } from "@mui/material";
import { useField, useFormikContext } from "formik";
import { TextField, MenuItem, InputLabel, Select } from "@material-ui/core";

const AutoComplete = ({options, name, ...props  }) => {
        const [field, meta] = useField(name);
        const { setFieldValue } = useFormikContext();
        const handleSelect = (event) => {
                const { value } = event.target;
                setFieldValue(name, value);
        };
       
        const config = {
                ...field,
                ...props,
                select: true,
                fullWidth: true,
                onChange: handleSelect
        };

        if (meta && meta.touched && meta.error) {
                (config.error = true);
                 (config.helperText = meta.error);
        }
        return <TextField {...config} defaultValue='Beverages'>
          {
               options?.map((option, i)=><MenuItem key={i}  value={option?.name? option.name : ''}>{option?.name || null}</MenuItem>)
          }
        </TextField>;
};

export default AutoComplete;

import React from 'react';
import { Autocomplete } from "@mui/material";
import { useField, useFormikContext } from "formik";
import { TextField, MenuItem } from "@material-ui/core";
import Filebase from "react-file-base64";
const ImageFile = ({name, ...props}) => {
     const [field, meta] = useField(name);
     const { setFieldValue } = useFormikContext();
     const handleImageValue= ({base64}) => {
             setFieldValue(name, base64);
     };
     
     const config = {
             ...field,
             ...props,
           
             fullWidth: true,
             type: 'file',
             
     };

     if (meta && meta.touched && meta.error) {
             (config.error = true);
              (config.helperText = meta.error);
     }
     return (
          <TextField {...config}>
           <Filebase  multiple={false} onDone={handleImageValue} />
        </TextField>
     );
};

export default ImageFile;
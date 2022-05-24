import { TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";
import { getName } from "../../utils/utils";

export default function CustomField({ label, parentName, required, ...props }) {
    const name = getName(props.name, parentName);
    const [field, meta] = useField({ ...props, name });

    return (
        <TextField
            {...field}
            {...props}
            name={name}
            label={label}
            inputProps={{ autoComplete: "off", pattern: field.pattern }}
            error={Boolean(meta.touched && meta.error)}
            color={meta.touched && !meta.error ? "success" : ""}
            helperText={meta.touched && meta.error}
            required={required}
            size="small"
        />
    );
}

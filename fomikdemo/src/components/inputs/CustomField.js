import { TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

export default function CustomField({ label, required, ...props }) {
    const [field, meta] = useField({ ...props });

    return (
        <TextField
            label={label}
            {...field}
            {...props}
            error={meta.touched && meta.error}
            color={meta.touched && !meta.error && "success"}
            helperText={meta.error}
            size="small"
        />
    );
}

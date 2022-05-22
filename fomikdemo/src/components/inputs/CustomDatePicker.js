import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useField } from "formik";
import React from "react";

export default function CustomDatePicker({ label, ...props }) {
    const [field, meta] = useField({ ...props });

    return (
        <DatePicker
            label={label}
            mask="__.__.____"
            onChange={(newValue) => field.onChange({ target: { name: field.name, value: newValue } })}
            renderInput={(params) => (
                <TextField
                    {...params}
                    {...props}
                    size="small"
                    error={meta.touched && meta.error}
                    color={meta.touched && !meta.error ? "success" : ""}
                    helperText={meta.error}
                />
            )}
        />
    );
}

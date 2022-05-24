import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useField } from "formik";
import React from "react";
import { getName } from "../../utils/utils";

export default function CustomDatePicker({ label, parentName, ...props }) {
    const name = getName(props.name, parentName);
    const [field, meta] = useField({ ...props, name });

    return (
        <DatePicker
            label={label}
            name={name}
            mask="__.__.____"
            onChange={(newValue) => field.onChange({ target: { name: field.name, value: newValue } })}
            renderInput={(params) => (
                <TextField
                    {...params}
                    {...props}
                    name={name}
                    size="small"
                    error={meta.touched && meta.error}
                    color={meta.touched && !meta.error ? "success" : ""}
                    helperText={meta.touched && meta.error}
                />
            )}
        />
    );
}

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
            {...field}
            label={label}
            name={name}
            mask="__.__.____"
            onChange={(newValue) => {
                const e = { target: { name: name, value: newValue } };
                field.onChange(e);
            }}
            renderInput={(params) => (
                <TextField
                    {...field}
                    {...params}
                    {...props}
                    name={name}
                    size="small"
                    error={Boolean(meta.touched && meta.error)}
                    color={meta.touched && !meta.error ? "success" : ""}
                    helperText={meta.touched && meta.error}
                />
            )}
        />
    );
}

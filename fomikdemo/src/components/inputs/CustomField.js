import { useField } from "formik";
import React from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

export default function CustomField({ label, required, ...props }) {
    const [field, meta] = useField({ ...props });

    return (
        <FormGroup floating>
            <Input bsSize="small" {...field} {...props} />
            <Label>
                {label}
                {required && <i className="text-danger">*</i>}
            </Label>
            {meta.touched && meta.error && <FormFeedback valid={false}>{meta.error}</FormFeedback>}
        </FormGroup>
    );
}

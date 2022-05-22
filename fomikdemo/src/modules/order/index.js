import { TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Alert, Button, Form, FormGroup, Input, Label, Row } from "reactstrap";

const initialValues = {
    cityFrom: "",
    cityTo: "",
};

const Order = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState("");
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values, { setSubmitting }) => {
            setShowAlert(false);

            setTimeout(() => {
                setMessage(`Создано: ${values.cityFrom} -> ${values.cityTo}`);
                setSubmitting(false);
                setShowAlert(true);
            }, 2000);
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Row>
                <h5>Новый заказ</h5>
            </Row>
            <Row className="my-3">
                <TextField
                    name="cityFrom"
                    label="Откуда"
                    placeholder="Откуда"
                    size="small"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cityFrom}
                    autoComplete="off"
                />
            </Row>
            <Row className="my-3">
                <TextField
                    name="cityTo"
                    label="Куда"
                    placeholder="Куда"
                    size="small"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cityTo}
                    autoComplete="off"
                />
            </Row>
            <Row className="my-3">
                <Button type="submit">Создать</Button>
            </Row>
            <Row>
                <Alert isOpen={showAlert} color="success">
                    {message}
                </Alert>
            </Row>
        </Form>
    );
};

export default Order;

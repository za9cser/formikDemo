import { TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Alert, Button, Col, Form, FormFeedback, FormGroup, FormText, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const initialValues = {
    cityFrom: "",
    cityTo: "",
};

const Order = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState("");
    const formik = useFormik({
        initialValues: initialValues,
        validate: (values) => {
            const errors = {};
            if (values.cityFrom === "") errors.cityFrom = "Поле 'Откуда' не заполненно";
            else if (values.cityFrom.length < 3) errors.cityFrom = "В поле 'Откуда' должно быть минимум 3 символа";
            if (values.cityTo === "") errors.cityTo = "Поле 'Куда' не заполненно";
            else if (values.cityTo.length < 3) errors.cityTo = "В поле 'Куда' должно быть минимум 3 символа";
            return errors;
        },
        onSubmit: (values, { setSubmitting }) => {
            setShowAlert(false);
            setIsSubmitted(false);
            setTimeout(() => {
                setMessage(`Создано: ${values.cityFrom} -> ${values.cityTo}`);
                setSubmitting(false);
                setShowAlert(true);
                setIsSubmitted(true);
            }, 4000);
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Row>
                <h5>Новый заказ</h5>
            </Row>
            <Row className="my-3">
                <FormGroup>
                    <TextField
                        name="cityFrom"
                        label="Откуда"
                        placeholder="Откуда"
                        size="small"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cityFrom}
                        disabled={formik.isSubmitting}
                        error={formik.errors.cityFrom}                        
                        autoComplete="off"
                    />
                    {formik.errors.cityFrom && <Form valid={false}>{formik.errors.cityFrom}</FormFeedback>}
                </FormGroup>
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
                    disabled={formik.isSubmitting}
                    autoComplete="off"
                />
                {formik.errors.cityTo && <FormText className="text-danger">{formik.errors.cityTo}</FormText>}
            </Row>
            <Row className="my-3 justify-content-around">
                <Col className={isSubmitted ? "text-end" : "text-center"}>
                    <Button type="submit" color="primary" disabled={formik.isSubmitting}>
                        {formik.isSubmitting && <FontAwesomeIcon icon={faSpinner} spin className="me-1" />}
                        Создать
                    </Button>
                </Col>

                {isSubmitted && (
                    <Col className="text-start">
                        <Button
                            type="button"
                            disabled={formik.isSubmitting}
                            onClick={() => {
                                setShowAlert(false);
                                setIsSubmitted(false);
                                formik.resetForm();
                            }}
                        >
                            Очистить
                        </Button>
                    </Col>
                )}
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

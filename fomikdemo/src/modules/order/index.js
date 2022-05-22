import { TextField } from "@mui/material";
import { useFormik, yupToFormErrors } from "formik";
import React, { useState } from "react";
import { Alert, Button, Col, Form, FormFeedback, FormGroup, FormText, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import * as Yup from "yup";

const orderSchema = Yup.object().shape({
    cityFrom: Yup.string().min(3, "Минимум 3 символа").max(50, "Максимум 5 символов").required("Город обязателен"),
    cityTo: Yup.string().min(3, "Минимум 3 символа").max(50, "Максимум 5 символов").required("Город обязателен"),
    phone: Yup.string().when(["cityFrom", "cityTo"], {
        is: (cityFrom, cityTo) => cityFrom !== cityTo,
        then: Yup.string().required("Телефон обязателен, если разные города"),
    }),
});

const initialValues = {
    cityFrom: "",
    cityTo: "",
    phone: "",
};

const Order = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState("");
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: orderSchema,
        // validate: (values) => {
        //     try {
        //         orderSchema.validateSync(values);
        //     } catch (yupError) {
        //         console.log("yupError", yupError);
        //         const errors = yupToFormErrors(yupError);
        //         console.log("errors", errors);
        //         return errors;
        //     }

        //     const errors = {};
        //     if (Object.keys(errors).some()) return errors;
        //     if (values.cityFrom === "") errors.cityFrom = "Поле 'Откуда' не заполненно";
        //     else if (values.cityFrom.length < 3) errors.cityFrom = "В поле 'Откуда' должно быть минимум 3 символа";
        //     if (values.cityTo === "") errors.cityTo = "Поле 'Куда' не заполненно";
        //     else if (values.cityTo.length < 3) errors.cityTo = "В поле 'Куда' должно быть минимум 3 символа";
        //     return errors;
        // },
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
                <label>Откуда</label>
                <input
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
                    className={clsx(
                        formik.touched.cityFrom && formik.errors.cityFrom && "border border-danger",
                        formik.touched.cityFrom && !formik.errors.cityFrom && "border border-success"
                    )}
                />
                {formik.errors.cityFrom && formik.touched.cityFrom && (
                    <small className="text-danger">{formik.errors.cityFrom}</small>
                )}
            </Row>
            <Row className="my-3">
                <label>Куда</label>
                <input
                    name="cityTo"
                    placeholder="Куда"
                    size="small"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cityTo}
                    disabled={formik.isSubmitting}
                    autoComplete="off"
                    className={clsx(
                        formik.touched.cityTo && formik.errors.cityTo && "border border-danger",
                        formik.touched.cityTo && !formik.errors.cityTo && "border border-success"
                    )}
                />
                {formik.errors.cityTo && formik.touched.cityTo && (
                    <small className="text-danger">{formik.errors.cityTo}</small>
                )}
            </Row>
            <Row className="my-3">
                <label>Телефон</label>
                <input
                    name="phone"
                    placeholder="телефон"
                    size="small"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    disabled={formik.isSubmitting}
                    autoComplete="off"
                    className={clsx(
                        formik.touched.phone && formik.errors.phone && "border border-danger",
                        formik.touched.phone && !formik.errors.phone && "border border-success"
                    )}
                />
                {formik.errors.phone && formik.touched.phone && (
                    <small className="text-danger">{formik.errors.phone}</small>
                )}
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
                            disabled={formik.isSubmitting || !formik.isValid}
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

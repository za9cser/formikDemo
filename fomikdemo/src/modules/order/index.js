import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Alert, Button, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import CustomField from "../../components/inputs/CustomField";

const orderSchema = Yup.object().shape({
    cityFrom: Yup.string().min(3, "Минимум 3 символа").max(50, "Максимум 5 символов").required("Город обязателен"),
    cityTo: Yup.string().min(3, "Минимум 3 символа").max(50, "Максимум 5 символов").required("Город обязателен"),
});

const initialValues = {
    countryFrom: "",
    cityFrom: "",
    countryTo: "",
    cityTo: "",
    weight: "",
    takeDate: "",
};

const Order = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = (values, { setSubmitting }) => {
        setSubmitting(true);

        setShowAlert(false);
        setIsSubmitted(false);
        setTimeout(() => {
            setMessage(`Создано: ${values.cityFrom} -> ${values.cityTo}`);
            setSubmitting(false);
            setShowAlert(true);
            setIsSubmitted(true);
        }, 4000);
    };

    return (
        <Formik initialValues={initialValues} validationSchema={orderSchema} onSubmit={handleSubmit}>
            {(formik) => (
                <Form>
                    <Row>
                        <h5>Новый заказ</h5>
                    </Row>
                    <Row className="my-3">
                        <CustomField name="countryFrom" label="Страна" placeholder="Откуда" />
                    </Row>
                    <Row className="my-3">
                        <CustomField name="cityFrom" label="Город" placeholder="Куда" />
                    </Row>
                    <Row className="my-3">
                        <CustomField name="countryTo" label="Страна" placeholder="Откуда" />
                    </Row>
                    <Row className="my-3">
                        <CustomField name="cityTo" label="Город" placeholder="Куда" />
                    </Row>
                    <Row className="my-3">
                        <CustomField name="weight" label="Вес" placeholder="Вес" />
                    </Row>
                    <Row className="my-3">
                        <CustomField name="takeDate" label="Дата забора" placeholder="Дата забора" />
                    </Row>
                    <Row className="my-3 justify-content-around">
                        <Col className="text-center">
                            <Button type="submit" color="primary" disabled={formik.isSubmitting}>
                                {formik.isSubmitting && <FontAwesomeIcon icon={faSpinner} spin className="me-1" />}
                                Создать
                            </Button>
                        </Col>
                        <Col className="text-center">
                            <Button
                                type="button"
                                disabled={formik.isSubmitting}
                                onClick={(e) => {
                                    formik.setSubmitting(true);
                                    handleSubmit(formik.values, formik);
                                }}
                            >
                                {formik.isSubmitting && <FontAwesomeIcon icon={faSpinner} spin className="me-1" />}
                                Создать черновик
                            </Button>
                        </Col>

                        {isSubmitted && (
                            <Col className="text-center">
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
            )}
        </Formik>
    );
};

export default Order;

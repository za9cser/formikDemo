import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Alert, Button, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";
import Contact, * as contact from "./contact";
import Cargo, * as cargo from "./cargo";
import Options, * as options from "./options";

const orderSchema = yup.object().shape({
    sender: yup.object().shape(contact.Schema),
    receiver: yup.object().shape(contact.Schema),
    cargo: yup.object().shape(cargo.Sсhema),
    options: yup.object().shape(options.Sсhema),
});

const initialValues = {
    sender: { ...contact.InitialValues },
    receiver: { ...contact.InitialValues },
    cargo: { ...cargo.InitialValues },
    options: { ...options.InitialValues },
};

const Order = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = (values, { setSubmitting }) => {
        console.log("values", values);
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
                    <Contact name="sender" isSender />
                    <Contact name="receiver" />
                    <Cargo name="cargo" />
                    <Options name="options" />

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

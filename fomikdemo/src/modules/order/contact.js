import { connect } from "formik";
import React from "react";
import { Container, Row } from "reactstrap";
import * as yup from "yup";
import CustomField from "../../components/inputs/CustomField";

const Contact = ({ isSender }) => {
    return (
        <Container>
            <h6>{isSender ? "Откуда" : "Куда"}</h6>
            <Row className="my-3">
                <CustomField name="country" label="Страна" placeholder="Страна" required />
            </Row>
            <Row className="my-3">
                <CustomField name="city" label="Город" placeholder="Город" required />
            </Row>
        </Container>
    );
};

export default connect(Contact);

export const InitialValues = {
    country: "",
    city: "",
};

export const Schema = {
    country: yup.string().min(3, "Минимум 3 символа").max(50, "Максимум 5 символов").required("Страна обязателена"),
    city: yup.string().min(3, "Минимум 3 символа").max(50, "Максимум 5 символов").required("Город обязателен"),
};

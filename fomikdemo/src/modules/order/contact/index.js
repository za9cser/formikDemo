import { connect, useFormikContext } from "formik";
import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import * as yup from "yup";
import CustomField from "../../../components/inputs/CustomField";
import { getName, getPropValue } from "../../../utils/utils";

const Contact = ({ name, isSender }) => {
    const formik = useFormikContext();
    const country = getPropValue(formik.values, "country", name);
    const city = getPropValue(formik.values, "city", name);

    useEffect(() => {
        if (city !== "") {
            formik.setFieldValue(getName("city", name), "");
        }
    }, [country]);

    return (
        <Container>
            <h6>{isSender ? "Откуда" : "Куда"}</h6>
            <Row className="my-3">
                <CustomField name="country" parentName={name} label="Страна" placeholder="Страна" required />
            </Row>
            <Row className="my-3">
                <CustomField name="city" parentName={name} label="Город" placeholder="Город" required />
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

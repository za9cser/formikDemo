import React from "react";
import { Container, Row } from "reactstrap";
import CustomDatePicker from "../../components/inputs/CustomDatePicker";
import * as yup from "yup";

export default function Options() {
    return (
        <Container>
            <h6>Условия</h6>
            <Row className="my-3">
                <CustomDatePicker name="takeDate" label="Дата забора" placeholder="Дата забора" required />
            </Row>
        </Container>
    );
}

export const InitialValues = { takeDate: "" };
export const Sсhema = yup.string().required("Вес обязателен");

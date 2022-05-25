import React from "react";
import { Container, Row } from "reactstrap";
import CustomField from "../../../components/inputs/CustomField";
import * as yup from "yup";

export default function Cargo({ name }) {
    return (
        <Container>
            <h6>Груз</h6>
            <Row className="my-3">
                <CustomField name="weight" parentName={name} label="Вес" placeholder="Вес" required />
            </Row>
        </Container>
    );
}

export const InitialValues = { weight: "" };
export const Schema = { weight: yup.number().min(0.3, "Минимум 0.3 кг").required("Вес обязателен") };

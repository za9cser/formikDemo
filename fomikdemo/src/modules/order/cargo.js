import React from "react";
import { Container, Row } from "reactstrap";
import CustomField from "../../components/inputs/CustomField";
import * as yup from "yup";

export default function Cargo() {
    return (
        <Container>
            <h6>Груз</h6>
            <Row className="my-3">
                <CustomField name="weight" label="Вес" placeholder="Вес" required />
            </Row>
        </Container>
    );
}

export const InitialValues = { weight: "" };
export const Sсhema = yup.string().required("Вес обязателен");

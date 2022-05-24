import React from "react";
import { Container, Row } from "reactstrap";
import CustomDatePicker from "../../components/inputs/CustomDatePicker";
import * as yup from "yup";
import moment from "moment";

export default function Options({ name }) {
    return (
        <Container>
            <h6>Условия</h6>
            <Row className="my-3">
                <CustomDatePicker
                    name="takeDate"
                    parentName={name}
                    label="Дата забора"
                    placeholder="Дата забора"
                    required
                />
            </Row>
        </Container>
    );
}

export const InitialValues = { takeDate: moment() };
export const Sсhema = {
    takeDate: yup
        .date()
        .nullable()
        .transform((curr, orig) => (orig === "" ? null : curr))
        .required("Дата забора обязательна"),
};

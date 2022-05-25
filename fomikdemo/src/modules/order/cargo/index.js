import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import CustomField from "../../../components/inputs/CustomField";
import * as yup from "yup";
import Size, * as size from "./size";
import { FieldArray, useFormikContext } from "formik";
import { getName } from "../../../utils/utils";

export default function Cargo({ name }) {
    const { values } = useFormikContext();
    const sizes = values.getProp("sizes", name);
    return (
        <Container>
            <h6>Груз</h6>
            <Row className="my-3">
                <CustomField name="weight" parentName={name} label="Вес" placeholder="Вес" required />
            </Row>
            <Row className="font-weight-bold">
                <h6>Габариты</h6>
            </Row>
            <FieldArray name={getName("sizes", name)}>
                {({ insert, remove, push }) => (
                    <Container className="my-3">
                        {sizes?.map((size, key) => (
                            <Row key={key} className="my-3">
                                <Col>
                                    <Size name={getName(`sizes[${key}]`, name)} />
                                </Col>
                                <Col>
                                    <Button className="link" onClick={() => remove(key)}>
                                        X
                                    </Button>
                                </Col>
                            </Row>
                        ))}
                        <Row className="my-3">
                            <Col xs="auto">
                                <Button color="link" onClick={() => push({ ...size.InitialValues })}>
                                    +Добавить
                                </Button>
                            </Col>
                            <Col>
                                <Button color="link" onClick={() => insert(0, { ...size.InitialValues })}>
                                    +Добавить в начало
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                )}
            </FieldArray>
        </Container>
    );
}

export const InitialValues = { weight: "", sizes: [{ ...size.InitialValues }] };
export const Schema = { weight: yup.number().min(0.3, "Минимум 0.3 кг").required("Вес обязателен") };

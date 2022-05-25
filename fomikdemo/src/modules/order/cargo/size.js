import React from "react";
import { Col, Row } from "reactstrap";
import CustomField from "../../../components/inputs/CustomField";

export default function Size({ name }) {
    return (
        <Row>
            <Col>
                <CustomField label="Д, см" name="l" parentName={name} />
            </Col>
            <Col>
                <CustomField label="Ш, см" name="w" parentName={name} />
            </Col>
            <Col>
                <CustomField label="В, см" name="h" parentName={name} />
            </Col>
        </Row>
    );
}

export const InitialValues = { l: "", w: "", h: "" };

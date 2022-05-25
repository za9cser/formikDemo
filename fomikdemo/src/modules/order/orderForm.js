import { useFormikContext } from "formik";
import React, { useEffect } from "react";
import { Button, Col, Row } from "reactstrap";
import Cargo from "./cargo";
import Contact from "./contact";
import Options from "./options";
import moment from "moment";

const template = {
    sender: {
        country: "Россия",
        city: "Санкт-Петербург",
    },
    sender: {
        country: "Армения",
        city: "Ереван",
    },
    cargo: {
        weight: 5,
    },
    options: {
        takeDate: moment("28.05.2022", "dd.MM.yyyy"),
    },
};

export default function OrderForm() {
    const formik = useFormikContext();

    const sender = formik.values.sender;
    const receiver = formik.values.receiver;

    useEffect(() => {
        if (sender?.city !== "" && receiver?.city !== "" && sender?.city !== receiver?.city) {
            formik.setFieldValue("cargo.weight", "5");
        }
    }, [sender?.city, receiver?.city]);

    return (
        <>
            <Row className="justify-content-between w-100">
                <Col>
                    <h5>Новый заказ</h5>
                </Col>
                <Col className="text-end">
                    <Button color="link" onClick={() => formik.setValues(template)}>
                        Загрузить из шаблона
                    </Button>
                </Col>
            </Row>
            <Contact name="sender" isSender />
            <Contact name="receiver" />
            <Cargo name="cargo" />
            <Options name="options" />
        </>
    );
}

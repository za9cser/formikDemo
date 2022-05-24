import { useFormikContext } from "formik";
import React, { useEffect } from "react";
import Cargo from "./cargo";
import Contact from "./contact";
import Options from "./options";

export default function OrderForm() {
    const formik = useFormikContext();

    const sender = formik.values.sender;
    const receiver = formik.values.receiver;

    useEffect(() => {
        if (sender.city !== "" && receiver.city !== "" && sender.city !== receiver.city) {
            formik.setFieldValue("cargo.weight", "5");
        }
    }, [sender.city, receiver.city]);

    return (
        <>
            <Contact name="sender" isSender />
            <Contact name="receiver" />
            <Cargo name="cargo" />
            <Options name="options" />
        </>
    );
}

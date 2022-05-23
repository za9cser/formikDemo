import React from "react";
import { Container } from "reactstrap";
import * as yup from "yup";

export default function Contact({ name, isSender, ...props }) {
    return (
        <Container>
            <h6>{isSender ? "Откуда" : "Куда"}</h6>
        </Container>
    );
}

export const initialValues = {
    country: "",
    city: "",
};

export const contactSchema = {
    country: yup.string().min(3, "Минимум 3 символа").max(50, "Максимум 5 символов").required("Страна обязателена"),
    city: yup.string().min(3, "Минимум 3 символа").max(50, "Максимум 5 символов").required("Город обязателен"),
};

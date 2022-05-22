import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import moment from "moment";
import "moment/min/locales";

moment.locale("ru");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={moment.locale("ru")}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </LocalizationProvider>
);

import React from "react";
import { Container } from "reactstrap";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    components: {
        MuiFormLabel: {
            styleOverrides: {
                asterisk: { color: "red" },
            },
        },
    },
});

export default function Layout({ children }) {
    return (
        <Container className="py-5">
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Container>
    );
}

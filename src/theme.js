import { createTheme } from "@mui/material";

const fontFamily ="'Poppins', sans-serif";

export default createTheme({
    typography: {
        l1: {
            fontSize: "26px",
            fontFamily: fontFamily,
            fontWeight: 600,
            color: "#fff"
        }
    }
})
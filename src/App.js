import "./App.css";
import Layout from "./UI/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import { Suspense } from "react";
import Patients from "./components/Pages/Patients";
import Patient from "./components/Pages/Patient";
import { ThemeProvider, createTheme } from "@material-ui/core";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#005555"
    },
    secondary: { main: "##005555" },
    grey: { main: "##005555" }
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        position: "relative",
        "& $notchedOutline": {
          borderColor: "#005555"
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "##005555",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderColor: "##005555"
          }
        },
        "&$focused $notchedOutline": {
          borderColor: "##005555",
          borderWidth: 2
        }
      }
    },
    MuiFormLabel: {
      root: {
        // "&$focused": {
        color: "##005555"
        // }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/patients/:id" element={<Patient />} />
          </Routes>
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default App;

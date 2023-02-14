import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from './components/about';
import { Service } from './components/service';
import Header from './components/header';
import { Footer } from './components/footer';
import { Service1 } from './components/sendExtradata';
import Redirect from './components/Redirect';
import ResponsiveAppBar from './components/toolbar/ResponsiveAppBar';
import { createRoot } from 'react-dom/client';
import { Loginpage } from './components/toolbar/pages/Loginpage';
import { Provider, useSelector } from 'react-redux';
import { store } from './components/ReduxStore/Store';
import { Alert, AlertTitle } from '@mui/material';
import { useState } from 'react';
import { SignupForm } from './components/toolbar/pages/Signupform';

const root = createRoot(document.getElementById("root"));

const Routing = () => {

  const loginState = useSelector((state) => state.loginuser)

  const [isSuccess, setIsSuccess] = useState(false)
  const [isFailed, setIsFaield] = useState(false)

  const dilog = () => {
    return loginState.data ? (<Alert severity="success" size="small" sx={styles}>
      <AlertTitle>Success</AlertTitle>
      This is a success alert — <strong>check it out!</strong>
    </Alert>) : null
  }

  useEffect(() => {
    if (loginState.data.length > 0) {
      setIsSuccess(true)
      setInterval(() => {
        setIsSuccess(false)
      }, 5000)
    } else if (loginState.error.length>0){
      setIsFaield(true)
      setInterval(() => {
        setIsFaield(false)
      }, 5000)
    }

  }, [loginState.data])



  const styles = {
    float: 'right',
    justifyContent: 'center',
    margin: 2,
    width: { sm: 200, md: 300 },
    "& .MuiInputBase-root": {
      height: 50
    }
  };
  console.log("isSuccess1234", isSuccess)

  return (


    <Router>

      <ResponsiveAppBar />
      {isSuccess ? (<Alert severity="success" size="small" sx={styles} >
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>) : null}
      {isFailed ?<Alert severity="error" size="small" sx={styles} >
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>:""}

      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route exact path="/login" element={<Loginpage />} />
        <Route exact path="/signup" element={<SignupForm />} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/blog/:detail" element={<Service1/>} />
        <Route path="/redirect" element={<Redirect />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}



root.render(
  <React.StrictMode>
    <Provider store={store} >
    <Routing />
    </Provider>
  </React.StrictMode>,
);

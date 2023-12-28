import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

const App=()=> {
  const [progress,setProgress] =useState(0);
  const [mode, setMode] = useState("light");
  const toggleModes = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      
    }
  };
  
    return (
      <>
        <BrowserRouter>
          <Navbar mode={mode} toggleModes={toggleModes}/>
          <LoadingBar color="#f11946" progress={progress} height ={2} shadow={true} loaderSpeed={700}  transitionTime={300}/>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News mode={mode}
                  setProgress={ setProgress}
                  pageSize={100}
                  country="in"
                  category="general"
                  apiKey="900bf35fa6e04bb1a0a53661fd8102d3"
                  key="home"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News  mode={mode}
                  setProgress={ setProgress}
                  pageSize={100}
                  country="in"
                  category="business"
                  apiKey="900bf35fa6e04bb1a0a53661fd8102d3"
                  key="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News  mode={mode}
                  setProgress={ setProgress}
                  pageSize={100}
                  country="in"
                  category="entertainment"
                  apiKey="900bf35fa6e04bb1a0a53661fd8102d3"
                  key="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News  mode={mode}
                  setProgress={ setProgress}
                  pageSize={100}
                  country="in"
                  category="general"
                  apiKey="900bf35fa6e04bb1a0a53661fd8102d3"
                  key="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News  mode={mode}
                  setProgress={ setProgress}
                  pageSize={100}
                  country="in"
                  category="health"
                  apiKey="900bf35fa6e04bb1a0a53661fd8102d3"
                  key="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News  mode={mode}
                  setProgress={ setProgress}
                  pageSize={100}
                  country="in"
                  category="science"
                  apiKey="900bf35fa6e04bb1a0a53661fd8102d3"
                  key="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News  mode={mode}
                  setProgress={ setProgress}
                  pageSize={100}
                  country="in"
                  category="sports"
                  apiKey="900bf35fa6e04bb1a0a53661fd8102d3"
                  key="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News 
                mode={mode}
                  setProgress={ setProgress}
                  pageSize={100}
                  country="in"
                  category="technology"
                  apiKey="900bf35fa6e04bb1a0a53661fd8102d3"
                  key="technology"
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }

  export default App;
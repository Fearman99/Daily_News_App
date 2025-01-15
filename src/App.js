import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);
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
        <Navbar mode={mode} toggleModes={toggleModes} />
        <LoadingBar
          color="#f11946"
          progress={progress}
          height={2}
          shadow={true}
          loaderSpeed={700}
          transitionTime={300}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                pageSize={100}
                search="forex + (usd | gbp) -cad"
                categories="business,tech"
                excludeCategories="travel"
                publishedAfter="2025-01-08"
                key="home"
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                pageSize={100}
                search="business"
                categories="business"
                publishedAfter="2025-01-08"
                key="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                pageSize={100}
                search="entertainment"
                categories="entertainment"
                publishedAfter="2025-01-08"
                key="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                pageSize={100}
                search="general"
                categories="general"
                publishedAfter="2025-01-08"
                key="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                pageSize={100}
                search="health"
                categories="health"
                publishedAfter="2025-01-08"
                key="health"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                pageSize={100}
                search="science"
                categories="science"
                publishedAfter="2025-01-08"
                key="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                pageSize={100}
                search="sports"
                categories="sports"
                publishedAfter="2025-01-08"
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
                setProgress={setProgress}
                pageSize={100}
                search="technology"
                categories="tech"
                publishedAfter="2025-01-08"
                key="technology"
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

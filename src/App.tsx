import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { XContainer } from "./pages/components/layout/XContainer";
import { YContainer } from "./pages/components/layout/YContainer";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <YContainer>
        <XContainer>
          <Routes>
            {/* <Route path="/" element={<App />}> */}
            <Route index element={<Home />} />
            {/* <Route path="teams" element={<Teams />}> */}
            {/* <Route path=":teamId" element={<Team />} /> */}
          </Routes>
        </XContainer>
      </YContainer>
    </BrowserRouter>
  );
}

export default App;

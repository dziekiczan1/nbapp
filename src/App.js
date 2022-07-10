import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import Navbar from "./components/Navbar";
import TeamDetail from "./components/TeamDetail";
import Teams from "./components/Teams";
import Home from "./components/Home";
import Players from "./components/Players";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen">
        <div className="flex overflow-hidden">
          <div className="flex justify-center md:justify-start items-between w-1/5 md:w-1/5 bg-[#A0BCC2] h-screen">
            <Navbar />
          </div>
          <div className="w-full overflow-y-auto h-screen mt-4 ml-4 mr-4">
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/teams/:id" element={<TeamDetail />} />
                <Route path="/players/" element={<Players />} />
              </Routes>
            </Layout>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import TopMenu from "./components/topMenu";
import PhotoGrid from "./components/photoGrid";
import About from "./components/about";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const w3_open = () => {
    setSidebarVisible(true);
  };

  const w3_close = () => {
    setSidebarVisible(false);
  };

  return (
    <div>
      <Sidebar sidebarVisible={sidebarVisible} w3_close={w3_close} />
      <TopMenu w3_open={w3_open} />
      <div className="w3-main w3-content w3-padding" style={{ maxWidth: "1200px", marginTop: "100px" }}>
        <PhotoGrid />
        <hr id="about" />
        <About />
        <hr />
      </div>
      <Footer />
    </div>
  );
}

export default App;

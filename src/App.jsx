import { Routes, Route } from "react-router-dom";
import Gate from "@/page/Gate";
import Work from "@/page/Work";
import PopupProvider from "@/context/PopupProvider";
import { PopupRoot, ScrollTop } from "@/layout";

function App() {
  return (
    <PopupProvider>
      <ScrollTop />
      <div className="wrapper">
        <div className="container">
          <Routes>
            <Route path="/" element={<Gate />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
      </div>
      <PopupRoot />
    </PopupProvider>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Gate from "@/page/Gate";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Routes>
          <Route path="/" element={<Gate />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Recall from "./pages/Recall.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recall" element={<Recall />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

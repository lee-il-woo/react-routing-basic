import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Bakery from "./pages/Bakery";
import BakeryDetail from "./pages/BakeryDetail";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bakery" element={<Bakery />} />
        <Route path="/bakery/:id" element={<BakeryDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App

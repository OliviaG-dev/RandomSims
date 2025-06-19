import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Lieu from "./pages/Lieu/Lieu";
import Challenge from "./pages/Challenge/Challenge";
import Header from "./components/Header/Header";
import Page404 from "./Utils/Page404/Page404";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Lieu" element={<Lieu />} />
        <Route path="/Challenge" element={<Challenge />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;

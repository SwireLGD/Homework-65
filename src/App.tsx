import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.css";
import Page from "./Containers/Page/Page";
import { Route, Routes } from "react-router-dom";
import Admin from "./Containers/Admin/Admin";
import Home from "./Containers/Home/Home";
import 'react-quill/dist/quill.snow.css';

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container-fluid mt-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/admin" element={<Admin />} />
          <Route path="/pages/:pageName" element={<Page />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
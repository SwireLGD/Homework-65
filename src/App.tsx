import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.css";
import Page from "./Containers/Page/Page";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container-fluid mt-2">
        <Routes>
          <Route path="/pages/:pageName" element={<Page />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
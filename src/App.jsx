import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddDataPage from "./Pages/AddDataPage";
import ContextProvider from "./context/ContextProvider";
import TablePage from "./Pages/TablePage";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path={"/"} element={<TablePage />} />
          <Route path={"/add"} element={<AddDataPage />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;

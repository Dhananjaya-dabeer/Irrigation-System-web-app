import AddDataPage from "./Pages/AddDataPage";
import ContextProvider from "./context/ContextProvider";
import TablePage from "./Pages/TablePage";

function App() {
  return (
    <ContextProvider>
      <TablePage />
    </ContextProvider>
  );
}

export default App;

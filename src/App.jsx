import ContextProvider from "./context/ContextProvider";
import TablePage from "./Pages/TablePage";
import "./App.css"
function App() {
  return (
  <div className="appContainer">
      <ContextProvider >
      <TablePage />
    </ContextProvider>
  </div>
  );
}

export default App;

import TableList from "./components/pages/TableList/TableList";
import SingleTable from "./components/pages/SingleTable/SingleTable";
import NotFound from "./components/pages/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<TableList />} />
        <Route path="/table/:id" element={<SingleTable />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;

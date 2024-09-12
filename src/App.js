import TableList from "./components/pages/TableList/TableList";
import SingleTable from "./components/pages/SingleTable/SingleTable";
import NotFound from "./components/pages/NotFound/NotFound";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { fetchTables } from "./redux/tablesRedux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<TableList />} />
          <Route path="/table/:tableId" element={<SingleTable />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;

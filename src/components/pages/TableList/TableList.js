import { ListGroup, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllTables } from "../../../redux/tablesRedux";
import { useSelector } from "react-redux/es/hooks/useSelector";

const TableList = () => {

    const tables = useSelector(getAllTables);

    if (tables.length === 0) {
        return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        )
    } else return (
        <>
        <h1>All tables</h1>
        {tables.map((table) => (
            <ListGroup key={table.id} horizontal className="d-flex align-items-end border-bottom py-2">
                <ListGroup.Item className="border-0"><h2>Table {table.id}</h2></ListGroup.Item>
                <ListGroup.Item className="border-0 py-1"><p><b>Status: </b>{table.status}</p></ListGroup.Item>
                <ListGroup.Item className="ms-auto border-0">
                    <Link to={`/table/${table.id}`}>
                        <Button>Show more</Button>
                    </Link>
                </ListGroup.Item>
            </ListGroup>
        ))}
        </>
    );
};

export default TableList;
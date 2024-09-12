import { ListGroup, Button } from "react-bootstrap";

const TableList = () => {
    return (
        <>
        <h1>All tables</h1>
        <ListGroup horizontal className="d-flex align-items-end border-bottom py-2">
            <ListGroup.Item className="border-0"><h2>Table 1</h2></ListGroup.Item>
            <ListGroup.Item className="border-0 py-1"><p><b>Status: </b>busy</p></ListGroup.Item>
            <ListGroup.Item className="ms-auto border-0"><Button>Show more</Button></ListGroup.Item>
        </ListGroup>
        </>
    );
};

export default TableList;
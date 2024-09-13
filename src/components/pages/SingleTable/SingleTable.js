import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import { useParams, Navigate } from "react-router-dom";
import { getTableById } from "../../../redux/tablesRedux";
import { useSelector } from "react-redux";
import { useState } from "react";

const SingleTable = () => {

    const { tableId } = useParams();
    const tableData = useSelector((state) => getTableById(state, tableId));

    const [status, setStatus] = useState(tableData.status || '');
    const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount || '0');
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount || '');
    const [bill, setBill] = useState(tableData.bill || '');

    if(!tableData) return <Navigate to="/" />

    return (
        <Form className="mx-auto" style={{ width: '30%'}}>
            <h1 className="pb-2">Table {tableData.id}</h1>
            <Row className="my-2">
                <Col><b>Status: </b></Col>
                <Col>
                    <Form.Select>
                        <option value={status}>{status}</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row className="my-2">
                <Col><b>People: </b></Col>
                <Col xs="auto">
                    <InputGroup><Form.Control style={{ maxWidth: '40px', marginRight: '-30px' }} value={peopleAmount}></Form.Control></InputGroup>
                </Col>
                <Col xs="auto">
                    <InputGroup.Text className="border-0 bg-transparent" >/</InputGroup.Text>
                </Col>
                <Col xs="auto">
                    <InputGroup><Form.Control style={{ maxWidth: '40px', marginLeft: '-30px' }} value={maxPeopleAmount}></Form.Control></InputGroup>
                </Col>
            </Row>
            {tableData.status === 'Busy' ? (
                <Row className="my-2">
                    <Col><b>Bill: </b></Col>
                    <Col xs="auto">
                        <InputGroup.Text className="border-0 bg-transparent" style={{ marginRight: '-30px' }}>$</InputGroup.Text>
                    </Col>
                    <Col xs="auto">
                        <InputGroup><Form.Control style={{ maxWidth: '60px' }} value={bill}></Form.Control></InputGroup>
                    </Col>
                </Row>
            ) : '' }
            <Button>Update</Button>
        </Form>
    );
};

export default SingleTable;
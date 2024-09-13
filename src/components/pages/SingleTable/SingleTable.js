import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getTableById } from "../../../redux/tablesRedux";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { editTableRequest } from "../../../redux/tablesRedux";

const SingleTable = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { tableId } = useParams();
    const tableData = useSelector((state) => getTableById(state, tableId));

    const [status, setStatus] = useState(tableData.status || '');
    const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount || '0');
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount || '');
    const [bill, setBill] = useState(tableData.bill || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editTableRequest({ id: tableId, status, peopleAmount, maxPeopleAmount, bill }));
        navigate('/');
    };

    if(!tableData) return <Navigate to="/" />

    return (
        <Form onSubmit={handleSubmit} className="mx-auto" style={{ width: '30%'}}>
            <h1 className="pb-2">Table {tableData.id}</h1>
            <Row className="my-2">
                <Col><b>Status: </b></Col>
                <Col>
                    <Form.Select>
                        <option value={status} onChange={e => setStatus(e.target.value)}>{status}</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row className="my-2">
                <Col><b>People: </b></Col>
                <Col xs="auto">
                    <InputGroup><Form.Control style={{ maxWidth: '40px', marginRight: '-30px' }} value={peopleAmount} onChange={e => setPeopleAmount(e.target.value)}></Form.Control></InputGroup>
                </Col>
                <Col xs="auto">
                    <InputGroup.Text className="border-0 bg-transparent" >/</InputGroup.Text>
                </Col>
                <Col xs="auto">
                    <InputGroup><Form.Control style={{ maxWidth: '40px', marginLeft: '-30px' }} value={maxPeopleAmount} onChange={e => setMaxPeopleAmount(e.target.value)}></Form.Control></InputGroup>
                </Col>
            </Row>
            {tableData.status === 'Busy' ? (
                <Row className="my-2">
                    <Col><b>Bill: </b></Col>
                    <Col xs="auto">
                        <InputGroup.Text className="border-0 bg-transparent" style={{ marginRight: '-30px' }}>$</InputGroup.Text>
                    </Col>
                    <Col xs="auto">
                        <InputGroup><Form.Control style={{ maxWidth: '60px' }} value={bill} onChange={e => setBill(e.target.value)}></Form.Control></InputGroup>
                    </Col>
                </Row>
            ) : '' }
            <Button type="submit">Update</Button>
        </Form>
    );
};

export default SingleTable;
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import { useParams, Navigate } from "react-router-dom";
import { getTableById } from "../../../redux/tablesRedux";
import { useSelector } from "react-redux";

const SingleTable = () => {

    const { tableId } = useParams();
    const tableData = useSelector((state) => getTableById(state, tableId));

    if(!tableData) return <Navigate to="/" />

    return (
        <div className="mx-auto" style={{ width: '30%'}}>
            <h1 className="pb-2">Table {tableData.id}</h1>
            <Row className="my-2">
                <Col><b>Status: </b></Col>
                <Col>
                    <Form.Select>
                        <option value="1">{tableData.status}</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row className="my-2">
                <Col><b>People: </b></Col>
                <Col xs="auto">
                    <InputGroup><Form.Control style={{ maxWidth: '40px', marginRight: '-30px' }} value={tableData.peopleAmount}></Form.Control></InputGroup>
                </Col>
                <Col xs="auto">
                    <InputGroup.Text className="border-0 bg-transparent" >/</InputGroup.Text>
                </Col>
                <Col xs="auto">
                    <InputGroup><Form.Control style={{ maxWidth: '40px', marginLeft: '-30px' }} value={tableData.maxPeopleAmount}></Form.Control></InputGroup>
                </Col>
            </Row>
            <Row className="my-2">
                <Col><b>Bill: </b></Col>
                <Col xs="auto">
                    <InputGroup.Text className="border-0 bg-transparent" style={{ marginRight: '-30px' }}>$</InputGroup.Text>
                </Col>
                <Col xs="auto">
                    <InputGroup><Form.Control style={{ maxWidth: '60px' }} value={tableData.bill}></Form.Control></InputGroup>
                </Col>
            </Row>
            <Button>Update</Button>
        </div>
    );
};

export default SingleTable;
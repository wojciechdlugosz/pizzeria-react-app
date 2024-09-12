import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";

const SingleTable = () => {
    return (
        <div className="mx-auto" style={{ width: '30%'}}>
            <h1 className="pb-2">Table 1</h1>
            <Row className="my-2">
                <Col><b>Status: </b></Col>
                <Col>
                    <Form.Select>
                        <option value="1">busy</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row className="my-2">
                <Col><b>People: </b></Col>
                <Col xs="auto">
                    <InputGroup><Form.Control style={{ maxWidth: '40px', marginRight: '-30px' }}></Form.Control></InputGroup>
                </Col>
                <Col xs="auto">
                    <InputGroup.Text className="border-0 bg-transparent" >/</InputGroup.Text>
                </Col>
                <Col xs="auto">
                    <InputGroup><Form.Control style={{ maxWidth: '40px', marginLeft: '-30px' }}></Form.Control></InputGroup>
                </Col>
            </Row>
            <Row className="my-2">
                <Col><b>Bill: </b></Col>
                <Col xs="auto">
                    <InputGroup.Text className="border-0 bg-transparent" style={{ marginRight: '-30px' }}>$</InputGroup.Text>
                </Col>
                <Col xs="auto">
                    <InputGroup><Form.Control style={{ maxWidth: '40px' }}></Form.Control></InputGroup>
                </Col>
            </Row>
            <Button>Update</Button>
        </div>
    );
};

export default SingleTable;
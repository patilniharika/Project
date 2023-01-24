import Item from "./Item";

import m1 from "../img/dessert49.png";
import { Col, Container, Row } from "react-bootstrap";

export default function MenuAdd(props){
    return(
        <Container className="my-8">
            <Row>
                <Col xs={6} lg={3}>
                <Item image={m1} />
                </Col>
                <Col xs={6} lg={3}>
                <Item image={m1} />
                </Col>
                <Col xs={6} lg={3}>
                <Item image={m1} />
                </Col>
                <Col xs={6} lg={3}>
                <Item image={m1} />
                </Col>
            </Row>
        </Container>
    );
}
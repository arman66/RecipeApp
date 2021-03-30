import React from 'react'
import {Container,Row , Col} from 'react-bootstrap'
const Footers = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className = 'text-center py 3'>
                        Copyright Armin Productions &copy;
                    </Col>
                   
                </Row>
            </Container>
        </footer>
    )
}

export default Footers

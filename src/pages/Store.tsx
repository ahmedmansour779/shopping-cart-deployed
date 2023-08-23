import { Col, Container, Row } from "react-bootstrap"
import StoreItems from "../components/StoreItems"
import storeItems from "../data/items.json"

function Store() {
    return (
        <Container className="mb-4 mt-4">
            <h1>Store</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {storeItems.map(item => (
                    <Col key={item.id}>
                        <StoreItems {...item} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Store
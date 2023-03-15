import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
function App() {
  let productInfo = {title:"ProductList"}
  let CetegoryInfo= {title:"CategoryList"}
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info={CetegoryInfo}/>
          </Col>
          <Col xs="3">
            <ProductList info={productInfo}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

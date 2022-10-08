import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import CardBS from "./components/Card/Index";
import "@fontsource/roboto/400.css";

function App() {
  return (
    <Container>
      <Row xs="auto" className="justify-content-md-center m-5">
        <CardBS color={"blue"} />
      </Row>
    </Container>
  );
}

export default App;

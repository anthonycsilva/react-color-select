import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "@mui/material/Alert";
import Fade from "@mui/material/Fade";

interface CardBsProps {
  children?: React.ReactNode;
  color: string;
}

const generateColor = () => {
  const hexList = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  const color = new Array(6)
    .fill("")
    .map(() => hexList[Math.floor(Math.random() * hexList.length)])
    .join("");
  return `#${color}`;
};

const CardBS: React.FC<CardBsProps> = (props) => {
  const [resposta, setResposta] = useState("");
  const [alternativas, setAlternativas] = useState<string[]>();
  const [usuarioPontuacao, setUsuarioPontuacao] = useState<number>(0);

  const createGameColors = () => {
    const actualColor = generateColor();
    setResposta(actualColor);
    const colors = [actualColor, generateColor(), generateColor()].sort();
    setAlternativas(colors);
  };
  useEffect(() => {
    createGameColors();
  }, []);

  let pontuacao = usuarioPontuacao;
  const handleRespostaClick = (userChoice: string) => {
    if (userChoice == resposta) {
      setUsuarioPontuacao((pontuacao += 1));
      createGameColors();
    } else {
      createGameColors();
    }
  };
  return (
    <Card>
      <Container>
        <Row>
          <Card.Header as="h5" className="text-center">
            Escolha A Cor Certa
          </Card.Header>
          <Card.Body>
            <Card.Text className="d-flex justify-content-center">
              <div
                style={{
                  width: "500px",
                  height: "500px",
                  backgroundColor: resposta,
                }}
              ></div>
            </Card.Text>
          </Card.Body>
          <Row className="d-flex justify-content-center">
            <Alert severity="info" className="d-flex justify-content-center">
              Pontos: {usuarioPontuacao}
            </Alert>
          </Row>
          <div className="d-flex justify-content-between">
            {alternativas?.map((color) => (
              <Button
                variant="primary"
                className="m-3"
                onClick={() => handleRespostaClick(color)}
                key={color}
              >
                {color}
              </Button>
            ))}
          </div>
        </Row>
      </Container>
    </Card>
  );
};

export default CardBS;

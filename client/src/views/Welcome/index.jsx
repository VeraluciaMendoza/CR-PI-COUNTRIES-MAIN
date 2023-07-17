import { Container } from "./welcome.styled";
import { Link } from "react-router-dom";

const Welcome = () => {
  console.log('homeee')
  return (
    <Container>
      <h1>Bienvenidos</h1>
      <Link to='/home'>
        <button>INGRESAR</button>
      </Link>
    </Container>
  )
}

export default Welcome;
import { Link } from "react-router-dom";
import { ContainerCard, Content } from "./card.styled";

const Card = ({ country }) => {
  return (
    <div>
      <ContainerCard>  
        <Link to={`/detail/${country?.id}`}>
          <img src={country?.imageFlag} />
          <Content>
            <h2>{country?.name.toUpperCase()}</h2>
            <p>Continente: {country?.continent}</p>
          </Content>
        </Link>
      </ContainerCard>
    </div>
  )
}

export default Card;
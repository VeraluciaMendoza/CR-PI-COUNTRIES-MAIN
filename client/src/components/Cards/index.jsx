import { ContainerCards } from "./cards.styled";
import Card from "../Card";

const Cards = ({ allCountries, firstIndex, lastIndex }) => {
  const countryList = allCountries;
  return (
    <ContainerCards>
      {
        countryList?.map((country, index) =>
          <Card key={index} country={country}/>)
      .slice(firstIndex, lastIndex)}
    </ContainerCards>
  )
}

export default Cards;
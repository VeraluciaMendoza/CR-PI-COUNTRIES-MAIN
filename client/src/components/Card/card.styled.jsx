import styled from "styled-components"

const ContainerCard = styled.div`
  background-color: #E9E3E6;
  box-shadow: 0px 1px 5px rgba(0,0,0,0.6);
  color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid 3A4F41;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
  text-align: left;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 320px;
  

  /* transition: all 400ms ease; */

  /* transform: translateZ(0);
  transition: transform 0.25s ease-out;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale; */

  /* :hover {
    transform: scale(1.05);
  } */

  :hover {
    /* box-shadow: 5px 5px 20px rgba(0,0,0,0.6); */
    transform: translateY(-2%);
    /* transform: scale(1.05); */
  }

  h2 {
    text-align: left !important;
    margin: 0;
    margin-bottom: .5rem;
    font-weight: bold;
    font-size: 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    margin: 0;
    margin-bottom: .5rem;
    font-size: 1rem;
  }

  img {
    width: 320px;
    height: 215px;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
`

export {
  ContainerCard,
  Content
}
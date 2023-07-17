import { styled } from "styled-components";

const Container = styled.div`
   background-color: rgba(255, 255, 255, 0.7);;
  border-radius: 20px;
  padding: 1rem 1rem;
  width: 19rem;
  gap: .5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1rem;
    font-weight: bolder;
  }
`

export {
  Container,
  Options
}
import { styled } from "styled-components";

const Container = styled.div`
  padding: 2rem 8rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 5rem;

  h1 {
    text-transform: uppercase;
  }

  button { 
    display: flex;
    color: #353D2F;
    background-color: rgba(255, 255, 255, 0.7)!important;
    box-shadow: 4px 4px 12px #586d61;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-around;

  div {
    padding-right: 3rem;
  }

  p {
    text-align: left;
    font-weight: 700;
    font-size: 20px;
    margin: 0;
    margin-bottom: 1rem;
  }
`

export {
  Container,
  Content
}
import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('https://i.pinimg.com/564x/ca/37/f8/ca37f85b01a483d38663a3c035c15820.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;

  button {
    position: absolute;
    top: 55%;
    left: 30%;
  }

  h1 {
    margin: 0;
    color: white;
    position: absolute;
    font-size: 5rem;
    font-weight: bolder;
    top: 40%;
    left: 15%;
  }
`
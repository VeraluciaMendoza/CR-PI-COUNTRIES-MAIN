import styled from "styled-components";

const ContainerHome = styled.div`
  text-align: center;
  padding: 3rem 3rem 2rem;

  h1 {
    text-align: left;
    font-weight: bolder;
  }
`
const NavbarHome = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ContainerFilters = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin-top: 2rem;

  select {
    background-color: #7e998a;
    width: 8rem;
    height: 2rem;
    border-radius: 5px;
    border: 1px solid #E9E3E6;
    padding: .2rem .5rem;
    color: #E9E3E6;
    font-weight: bold;
    text-align: center;
    font-size: 1rem;
  }
`

const Filters = styled.div`
  padding-top: .8rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: right;
  gap: 1rem;
  color: #7e998a;
  font-weight: bold;
  /* align-items: center; */
  /* width: 50%; */

  /* background-color: rgba(255, 255, 255, 0.7);;
  border-radius: 20px; */

  p {
    margin: 0;
    text-align: left;
    font-size: .9rem;
  }
`

export {
  ContainerHome,
  ContainerFilters,
  Filters,
  NavbarHome
}
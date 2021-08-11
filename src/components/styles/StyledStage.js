import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc 10vw / ${props => props.width}
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  @media (min-width: 200px){
    width: 80vw;
    height: 200px;
  }
  @media (min-width: 300px){
    width: 70vw;
    height: 250px;
  }
  @media (min-width: 550px){
    width: 70vw;
    height: 400px;
  }
  @media (min-width: 700px){
    width: 50vw;
    height: 500px;
  }
  @media (min-width: 850px){
    width: 40vw;
    height: 550px;
  }
  @media (min-width: 1000px){
    width: 35vw;
    height: 550px;
  }
  @media (min-width: 1200px){
    width: 30vw;
    height: 550px;
  }
  @media (min-width: 1600px){
    width: 30vw;
    height: 700px;
  }
  width: 150vw;
  height: 300px;
  background: #111;
`;
import React from 'react';
import styled from "styled-components";
import '../components/header';
import '../components/main';


const App = () => {
  return (
    <Container>
      <Wrapper>
        <header />
        <main />
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  background-color: #1c1c1c;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
`; 

export default App

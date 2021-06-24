import React from 'react'
import styled from "styled-components"


const App = () => {
  return (
    <Container>
      <Wrapper>
        <h1>test</h1>
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
`; 

export default App

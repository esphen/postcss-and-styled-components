import React from 'react';
import styled from 'styled-components';
import { Global, css } from '@emotion/core';

const Grid = styled.header`
  @import-normalize;

  display: grid;
  grid-gap: 10px;
  grid-template-columns: 100px 100px 100px;
  background-color: #fff;
  color: #444;
`;

const Box = styled.div`
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
`;

const A = styled(Box)`
  grid-column: 1 / 3;
  grid-row: 1;
`;
const B = styled(Box)`
  grid-column: 3 ;
  grid-row: 1 / 3;
`;
const C = styled(Box)`
  grid-column: 1 ;
  grid-row: 2 ;
`;
const D = styled(Box)`
  grid-column: 2;
  grid-row: 2;
`;

function App() {
  return (
    <Grid className="App">
      <A>A</A>
      <B>B</B>
      <C>C</C>
      <D>D</D>
    </Grid>
  );
}

export default App;


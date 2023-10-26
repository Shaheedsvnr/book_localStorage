import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Card from './Card';

export default function App() {
    
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size='lg' >
          <Card />
        </MDBCol>
        
      </MDBRow>
    </MDBContainer>
  );
}
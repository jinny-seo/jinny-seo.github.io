import React from "react"
// import "bootstrap/dist/css"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"

export default () => (
  <MDBRow
    className="no-gutters"
    style={{
      borderTop: `1px solid #000`,
      marginBlockEnd: `1.25rem`,
      paddingTop: `2rem`,
      margin: `4rem 0`,
    }}
  >
    <MDBCol md="6" style={{ paddingRight: `2rem` }}>
      <h1 style={{ margin: `0`, marginBlockEnd: `1.25rem` }}>
        riteHorizon 2.0 for ETC
      </h1>
    </MDBCol>
    <MDBCol md="6" style={{}}>
      <h2 style={{ margin: `0` }}>
        Updating a tolling management application used by customer service
        representatives
      </h2>
    </MDBCol>
  </MDBRow>
)

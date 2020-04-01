import React from "react"
// import "bootstrap/dist/css"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"

export default () => (
  <MDBRow
    className="section"
    style={{
      borderTop: `1px solid #000`,

      // paddingTop: `2.25rem`,
    }}
  >
    <MDBCol md="6">
      <h1 style={{}}>riteHorizon 2.0 for ETC</h1>
    </MDBCol>
    <MDBCol md="6">
      <h2 style={{}}>
        Updating a tolling management application used by customer service
        representatives
      </h2>
    </MDBCol>
  </MDBRow>
)

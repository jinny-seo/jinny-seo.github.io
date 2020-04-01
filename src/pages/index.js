import React from "react"
import { Link } from "gatsby"
// import "mdbreact/dist/css/mdb.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"
// import "bootstrap-css-only/css/bootstrap.min.css"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import TitleHeader from "../components/titleheader"

require("typeface-karla")
require("typeface-poppins")

export default () => (
  <MDBContainer>
    <TitleHeader />
    <MDBRow>
      <MDBCol md="6">.col-md-6</MDBCol>
      <MDBCol md="6">.col-md-6</MDBCol>
    </MDBRow>
  </MDBContainer>
)

import React from "react"
import { Link } from "gatsby"

import "bootstrap-css-only/css/bootstrap.min.css"
// import "mdbreact/dist/css/mdb.css"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import TitleHeader from "../components/titleheader"

require("typeface-karla")
require("typeface-poppins")

export default () => (
  <MDBContainer>
    <MDBRow>
      <MDBCol md="4">.col-md-4</MDBCol>
      <MDBCol md="4">.col-md-4</MDBCol>
      <MDBCol md="4">.col-md-4</MDBCol>
    </MDBRow>
  </MDBContainer>
)

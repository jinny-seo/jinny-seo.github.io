import React from "react"
import { Link } from "gatsby"
// import "mdbreact/dist/css/mdb.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"
// import "bootstrap-css-only/css/bootstrap.min.css"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import TitleHeader from "../components/titleheader"

import hero1 from "../images/etc/ETC-hero-1.png"
import hero2 from "../images/etc/ETC-hero-2.png"
import hero3 from "../images/etc/ETC-hero-3.png"

require("typeface-karla")
require("typeface-poppins")

export default () => (
  //   <MDBContainer size="md">
  <MDBContainer max-width fluid>
    <TitleHeader />

    <MDBRow className="no-gutters row-fluid">
      <MDBCol sm="4">
        <img className="img-hero" src={hero1} alt="ETC hero 1" />
      </MDBCol>
      <MDBCol sm="4">
        <img className="img-hero" src={hero2} alt="ETC hero 2" />
      </MDBCol>
      <MDBCol sm="4">
        <img className="img-hero" src={hero3} alt="ETC hero 3" />
      </MDBCol>
    </MDBRow>

    <MDBRow>
      <MDBCol md="6">.col-md-6</MDBCol>
      <MDBCol md="6">.col-md-6</MDBCol>
    </MDBRow>
  </MDBContainer>
)

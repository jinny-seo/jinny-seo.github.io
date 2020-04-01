import React from "react"
import { Link } from "gatsby"

import "bootstrap/dist/css/bootstrap-grid.min.css"

import ProjectHeader from "../components/projectheader"
import Footer from "../components/footer"

import hero1 from "../images/proj-etc/ETC-hero-1.png"
import hero2 from "../images/proj-etc/ETC-hero-2.png"
import hero3 from "../images/proj-etc/ETC-hero-3.png"

export default () => (
  <div className="container-fluid px-0">
    <Link to="/">Home</Link>
    <ProjectHeader
      projTitle="riteHorizon 2.0 for ETC"
      projDescription="Updating a tolling management application used by
          customer service representatives"
    />

    <div class="row no-gutters">
      <div class="col-md-4">
        <img class="img-hero" src={hero1} alt="ETC hero 1" />
      </div>
      <div class="col-md-4">
        <img class="img-hero" src={hero2} alt="ETC hero 2" />
      </div>
      <div class="col-md-4">
        <img className="img-hero" src={hero3} alt="ETC hero 3" />
      </div>
    </div>
    <Footer />
  </div>
)

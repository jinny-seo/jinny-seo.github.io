import React from "react"
import TitleHeader from "../components/titleheader"

import { Link } from "gatsby"

import { Container, Row, Col } from "react-grid-system"
import { ScreenClassRender } from "react-grid-system"
import { Visible } from "react-grid-system"

require("typeface-karla")
require("typeface-poppins")

export default () => (
  <div
    className="pink-div"
    style={{ fontFamily: `Poppins`, fontWeight: `300` }}
  >
    <Container sm fluid>
      <Link to="/contact/">blah</Link>
      <TitleHeader />

      <p>
        <span>Your current screen class is </span>
        <Visible xs>
          <strong>xs</strong>
        </Visible>
        <Visible sm>
          <strong>sm</strong>
        </Visible>
        <Visible md>
          <strong>md</strong>
        </Visible>
        <Visible lg>
          <strong>lg</strong>
        </Visible>
        <Visible xl>
          <strong>xl</strong>
        </Visible>
        <span>.</span>
      </p>
    </Container>
  </div>
)

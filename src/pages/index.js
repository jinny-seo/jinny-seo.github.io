import React from "react"

import { Container, Row, Col } from "react-grid-system"
import { Link } from "gatsby"

require("typeface-karla")

export default () => (
  <div className="pink-div" style={{ fontFamily: `Karla` }}>
    <Container>
      <Link to="/contact/">Contact</Link>
      <Row>
        <Col sm={4}>One of three columns</Col>
        <Col sm={4}>One of three columns</Col>
        <Col sm={4}>One of three columns</Col>
      </Row>
    </Container>
  </div>
)

import React from "react"

import { Row, Col } from "react-grid-system"

export default () => (
  <div>
    <Row>
      <Col md={1} debug>
        md=1
      </Col>
      <Col md={1} debug>
        md=1
      </Col>
      <Col md={1} debug>
        md=1
      </Col>
      <Col md={1} debug>
        md=1
      </Col>
      <Col md={1} debug>
        md=1
      </Col>
      <Col md={1} debug>
        md=1
      </Col>
      <Col md={1} debug>
        md=1
      </Col>
      <Col md={1} debug>
        md=1
      </Col>
      <Col md={1} debug>
        md=1
      </Col>
      <Col md={1} debug>
        md=1
      </Col>
      <Col md={1} debug>
        md=1
      </Col>
      <Col md={1} debug>
        md=1
      </Col>
    </Row>
    <Row
      className="section"
      nogutter
      style={{
        borderTop: `1px solid #000`,
        fontFamily: `Poppins`,
        paddingTop: `2.25rem`,
      }}
    >
      <Col md={6}>
        <h1
          style={{
            marginRight: `2.5rem`,
            marginBlockStart: `0`,
            marginBlockEnd: `1.25rem`,
          }}
        >
          riteHorizon 2.0 for ETC
        </h1>
      </Col>
      <Col md={6}>
        <h2
          style={{
            fontStyle: `italic`,
            marginBlockStart: `0`,
            marginBlockEnd: `0`,
          }}
        >
          Updating a tolling management application used by customer service
          representatives
        </h2>
      </Col>
    </Row>
  </div>
)

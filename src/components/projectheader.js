import React from "react"
import "bootstrap/dist/css/bootstrap-grid.min.css"

export default props => (
  <div class="container">
    <div
      class="row no-gutters"
      style={{
        borderTop: `1px solid #000`,
        marginBlockEnd: `1.25rem`,
        paddingTop: `2rem`,
        margin: `4rem 0`,
      }}
    >
      <div class="col-md-6" style={{ paddingRight: `2rem` }}>
        <h1 style={{ margin: `0`, marginBlockEnd: `1.25rem` }}>
          {props.projTitle}
        </h1>
      </div>
      <div class="col-md-6" style={{}}>
        <h2 style={{ margin: `0` }}>{props.projDescription}</h2>
      </div>
    </div>
  </div>
)

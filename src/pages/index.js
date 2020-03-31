import React from "react"
import { Link } from "gatsby"

require("typeface-karla")

export default () => (
    <div style={{ color: `purple`, fontFamily: `Karla` }}>
      <Link to="/contact/">Contact</Link>
      <p>What a world.</p>
      
    </div>
  )
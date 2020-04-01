import React from "react"
import { Link } from "gatsby"

// import Navbar from "../components/navbar.js"
import Footer from "../components/footer"

require("typeface-karla")
require("typeface-poppins")

export default () => (
  <div className="container-fluid px-0">
    <Link to="/">Home</Link>
    <Link to="/proj-etc/">ETC</Link>
    <Link to="/resume/">Resume</Link>
    <Link to="#work">Work</Link>
    <div style={{ height: `1200px` }}></div>
    <div id="work" style={{ background: `yellow`, height: `1200px` }}>
      <h2>Work</h2>
    </div>
    <Footer />
  </div>
)

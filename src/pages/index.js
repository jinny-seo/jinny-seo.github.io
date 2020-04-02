import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/index"

// import Navbar from "../components/navbar.js"
import Footer from "../components/footer"

require("typeface-karla")
require("typeface-poppins")

export default () => (
  <Layout>
    <Link to="/">Home</Link>
    <Link to="/proj-etc/">ETC</Link>
    <Link to="/resume/">Resume</Link>
    <Link to="#work">Work</Link>
    <div class="content">
      <div id="blank" style={{ background: `red`, height: `1200px` }}></div>
      <div id="work" style={{ background: `yellow`, height: `1200px` }}>
        <h2>Work</h2>
      </div>
    </div>
    <Footer />
  </Layout>
)

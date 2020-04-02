import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/index"

// import Navbar from "../components/navbar.js"
import Footer from "../components/footer"

require("typeface-karla")
require("typeface-poppins")

export default () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/proj-etc/">ETC</Link>
    <Link to="/resume/">Resume</Link>
    <Link to="#work">Work</Link>
    <Layout>
      <div style={{ backgroundColor: `pink`, height: `1200px` }}>
        asdkfjfa;dsklf
      </div>
      <div id="work" style={{ color: `pink`, height: `1200px` }}>
        <h2>Work</h2>
        asdfkj
      </div>
      <Footer />
    </Layout>
  </div>
)

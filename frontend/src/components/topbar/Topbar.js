import PropTypes from "prop-types"
import React from "react"
import './topbar.css'
import icon from '../../images/user-icon.png'

const Topbar = ({ siteTitle }) => (
  <div id="topbar">
  <div className="topbar">
    <div className="topbar-mailto">
      <a className="topbar-mailto-link" href="mailto::biagiotti@qodeinteractive.com">biagiotti@qodeinteractive.com</a>
    </div>
    <div className="topbar-main-text">
      Free shipping on international orders of $150+
    </div>
    <div className="topbar-login">
      <a className="topbar-login-link" href="#">Log In</a>
      <img className="topbar-login-link-icon" src={icon} alt='account icon'></img> 
    </div>
  </div>
  </div>

)

Topbar.propTypes = {
  siteTitle: PropTypes.string,
}

Topbar.defaultProps = {
  siteTitle: `biagiotti@qodeinteractive.com`,
}

export default Topbar

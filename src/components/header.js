import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../images/logo.png";
import {translations} from "../translations/translations";

const Header = ({ siteTitle, language }) => (
  <header
    style={{
      background: `#3a73da`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      <img src={Logo} alt="Docubyte logo" style={{
          height: `5rem`,
          marginRight: `1rem`,
          transform: `rotate(-15deg)`,
          transition: `transform 2s`,
        }}
      />
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul style={{
          listStyle: `none`,
          marginBottom: `0`,
          marginTop: `0.5rem`,
        }}  
      >
        <li style={{
            display: `inline-block`,
            paddingRight: `0.75rem`,
            borderRight: `1px solid white`,
          }}
        >
          <Link
            to="/run-pcr/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <h3 style={{ margin: `0`, }}>{translations[language].header.run_pcr}</h3>
          </Link>
        </li>
        <li style={{
            display: `inline-block`,
            paddingRight: `0.75rem`,
            paddingLeft: `0.75rem`,
            borderRight: `1px solid white`,
          }}
        >
          <Link
            to="/incubate-cultures/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <h3 style={{ margin: `0`, }}>{translations[language].header.incubate_cultures}</h3>
          </Link>
        </li>
        <li style={{
            display: `inline-block`,
            paddingLeft: `0.75rem`,
          }}
        >
          <Link
            to="/sequencing/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <h3 style={{ margin: `0`, }}>{translations[language].header.sequence}</h3>
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  language: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
  language: 'en',
}

export default Header

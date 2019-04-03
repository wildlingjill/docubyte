import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Article = ({title, urlLink, description, imageName}) => (
  <div className="article" style={{
      marginBottom: `3rem`,
      width: `45rem`,
      border: `1px solid #d3d3d329`,
      borderRadius: `10px`,
      padding: `1rem`,
      boxShadow: `0 1px 3px hsla(0, 0%, 0%, .2)`,
    }}
  >
    <Link to={urlLink} style={{
        display: `flex`,
        color: `inherit`,
        textDecoration: `none`,
        cursor: `pointer`,
      }}
    >
      <img 
        src={imageName}
        alt={imageName}
        style={{
          borderRadius: `10px`,
          height: `10rem`,
          width: `10rem`,
          marginRight: `1rem`,
        }} 
      />
      <div style={{
          width: `35rem`,
        }}
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  urlLink: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageName: PropTypes.string,
};

Article.defaultProps = {
  description: '',
  imageName: undefined,
};

export default Article;
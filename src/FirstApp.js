import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ item, subtitle }) => {

  return (
    <>
      <h1> { item } </h1>
      {/* <h1>{ JSON.stringify(hi) }</h1> */}
      <p> { subtitle }</p>
    </>
  );

}

FirstApp.propTypes = {
  item: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  subtitle: 'Default Subtitle'
}

export default FirstApp;
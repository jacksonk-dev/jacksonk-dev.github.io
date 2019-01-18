import React from 'react';
import PropTypes from 'prop-types';
import Profile from './profile';
import Projects from './projects';

const Content = ({ active, ...props }) => {
  switch (active) {
    case 'profile':
      return <Profile {...props} />;
    case 'projects':
      return <Projects {...props} />;
    default:
      return null;
  }
};

Content.propTypes = {
  active: PropTypes.string.isRequired,
};

export default Content;

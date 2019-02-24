import React from 'react';
import PropTypes from 'prop-types';

const Tab = (props) => {

  const {clickHandler, tabIndex, tabName, isActive, tabClassName} = props;

  const handleTabClick = (event) => {
    event.preventDefault();
    clickHandler(tabIndex);
  };

  return (
        <li className={`tab${tabClassName}${isActive ? ' active' : ''}`}>
          <a href={tabName} className="tab-link" onClick={handleTabClick}>{tabName}</a>
        </li>
  );
};

Tab.propTypes = {
  tabName: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  clickHandler: PropTypes.func,
  tabIndex: PropTypes.number,
  tabClassName: PropTypes.string
};

Tab.defaultProps = {
  tabClassName: '',
  isActive: false,
  clickHandler: () => {
  },
  tabIndex: 0,
};

export default Tab;
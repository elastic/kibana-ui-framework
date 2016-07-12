
import React, {
  PropTypes,
} from 'react';

import classNames from 'classnames';

const GuideNav = props => {
  const classes = classNames('guideNav', {
    'is-guide-nav-open': props.isNavOpen,
  });

  const buttonClasses = classNames('guideNav__menu fa fa-bars', {
    'is-menu-button-pinned': props.isNavOpen,
  });

  return (
    <div className={classes}>
      <div className="guideNav__header">
        <div
          className={buttonClasses}
          onClick={props.onToggleNav}
        />
        <div className="guideNav__title">
          Kibana UI Framework
        </div>
      </div>
    </div>
  );
};

GuideNav.propTypes = {
  isNavOpen: PropTypes.bool,
  onToggleNav: PropTypes.func,
};

export default GuideNav;

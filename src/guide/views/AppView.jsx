
import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Routes,
} from '../services';

import {
  GuideNav,
} from '../components';

export default class AppView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
    };

    this.onClickNavItem = this.onClickNavItem.bind(this);
    this.onToggleNav = this.onToggleNav.bind(this);
  }

  onClickNavItem() {
    this.setState({
      isNavOpen: false,
    });
  }

  onToggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    })
  }

  render() {
    return (
      <div className="guide">
        <GuideNav
          isNavOpen={this.state.isNavOpen}
          onToggleNav={this.onToggleNav}
          onClickNavItem={this.onClickNavItem}
          items={Routes.components}
        />
        <div className="guideContent">
          {this.props.children}
        </div>
      </div>
    );
  }

}

AppView.propTypes = {
  children: PropTypes.any,
  routes: PropTypes.array.isRequired,
};


import React, {
  Component,
  PropTypes,
} from 'react';

import GuideNav from '../components/guideNav/GuideNav.jsx';

export default class AppView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
    };

    this.onToggleNav = this.onToggleNav.bind(this);
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

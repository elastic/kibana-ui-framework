
import React, {
  Component,
  PropTypes,
} from 'react';

import {
  slugify,
} from '../../services';

import {
  GuidePageSideNav,
  GuidePageSideNavItem,
} from '../';

export default class GuidePage extends Component {

  constructor(props) {
    super(props);

    this.onClickLink = this.onClickLink.bind(this);
  }

  onClickLink(id) {
    // Scroll to element.
    // TODO: Load code in code viewer, too.
    $('html, body').animate({
      scrollTop: $(`#${id}`).offset().top - 100
    }, 250);
  }

  renderSideNavMenu() {
    //  Traverse children and build side nav from it.
    return this.props.children.map((section, index) => {
      return (
        <GuidePageSideNavItem
          key={index}
          id={slugify(section.props.title)}
          onClick={this.onClickLink}
        >
          {section.props.title}
        </GuidePageSideNavItem>
      );
    });
  }

  render() {
    return (
      <div className="guidePage">
        <GuidePageSideNav title={this.props.title}>
          {this.renderSideNavMenu()}
        </GuidePageSideNav>

        <div className="guidePageBody">
          {this.props.children}
        </div>
      </div>
    );
  }

}

GuidePage.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
};

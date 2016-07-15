
import React, {
  Component,
  PropTypes,
} from 'react';

import Html from '../../components/html/Html.jsx';

import {
  GuidePage,
  GuidePageSection,
} from '../../components';

const topNav1Html = require('./_topNav1.html');
const topNav1Js = require('raw!./_topNav1.js');

const topNav2Html = require('./_topNav2.html');

export default class TopNavExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GuidePage
        title={this.props.route.name}
      >
        <GuidePageSection
          title="Basic example"
          html={topNav1Html}
          js={topNav1Js}
        >
          Here's a description of this example.
        </GuidePageSection>


        <GuidePageSection
          title="Dangerous modifier"
          html={topNav2Html}
        >
          This is an example of a dangerously-red rectangle.
        </GuidePageSection>
      </GuidePage>
    );
  }

}

TopNavExample.propTypes = {
  route: PropTypes.object.isRequired,
};

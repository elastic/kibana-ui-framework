
import React, {
  Component,
  PropTypes,
} from 'react';

import Html from '../../components/html/Html.jsx';

import {
  GuidePage,
  GuidePageSection,
} from '../../components';

const markup = require('./topNav.html');
const js = require('raw!./topNav.js');

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
          markup={markup}
          js={js}
        >
          Here's a description of this example
        </GuidePageSection>
      </GuidePage>
    );
  }

}

TopNavExample.propTypes = {
  route: PropTypes.object.isRequired,
};

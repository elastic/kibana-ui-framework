
import React, {
  Component,
  PropTypes,
} from 'react';

import {
  jsInjector,
} from '../../services';

import {
  Html,
} from '../';

export default class GuidePageSection extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    jsInjector.inject(this.props.js, GuidePageSection.SCRIPT_ID);
  }

  componentWillUnmount() {
    jsInjector.remove(GuidePageSection.SCRIPT_ID);
  }

  render() {
    // TODO: Add source code viewer.
    return (
      <div className="guidePageSection">
        <div className="guidePageSection__header">
          <div className="guidePageSection__title">
            {this.props.title}
          </div>
          <div>Src</div>
        </div>

        <div>
          {this.props.children}
        </div>

        <Html>{this.props.markup}</Html>
      </div>
    );
  }

}

GuidePageSection.SCRIPT_ID = 'EXAMPLE_SCRIPT';

GuidePageSection.propTypes = {
  title: PropTypes.string,
  markup: PropTypes.string,
  js: PropTypes.string,
  children: PropTypes.any,
};


import React, {
  Component,
  PropTypes,
} from 'react';

import {
  jsInjector,
  slugify,
} from '../../services';

import {
  Html,
} from '../';

export default class GuidePageSection extends Component {

  constructor(props) {
    super(props);

    this.onClickSource = this.onClickSource.bind(this);
  }

  componentDidMount() {
    // NOTE: This will cause a race condition if a GuidePage adds and removes
    // GuidePageSection instances during its lifetime (e.g. if a user is allowed
    // to click "add" and "delete" buttons to add and remove GuidePageSections).
    //
    // In such a race condition, we could end up with GuidePageSections with
    // identical id values.
    //
    // As long as all GuidePageSection instances are added when a GuidePage
    // is instantiated, and then they're all removed when a GuidePage is
    // removed, we won't encounter this race condition.
    if (this.props.js) {
      this.id = `${GuidePageSection.SCRIPT_ID}${GuidePageSection.count}`;
      GuidePageSection.count++;
      jsInjector.inject(this.props.js, this.id);
    }
  }

  componentWillUnmount() {
    jsInjector.remove(this.id);
    GuidePageSection.count--;
  }

  onClickSource() {
    this.context.openCodeViewer({
      title: this.props.title,
      html: this.props.html,
      js: this.props.js,
    });
  }

  render() {
    return (
      <div
        id={slugify(this.props.title)}
        className="guidePageSection"
      >
        <div className="guidePageSection__header">
          <div className="guidePageSection__title">
            {this.props.title}
          </div>
          <div
            className="guidePageSection__sourceButton fa fa-code"
            onClick={this.onClickSource}
          />
        </div>

        <div>
          {this.props.children}
        </div>

        <Html>{this.props.html}</Html>
      </div>
    );
  }

}

GuidePageSection.count = 0;
GuidePageSection.SCRIPT_ID = 'EXAMPLE_SCRIPT';

GuidePageSection.contextTypes = {
  openCodeViewer: PropTypes.func,
};

GuidePageSection.propTypes = {
  title: PropTypes.string,
  html: PropTypes.string,
  js: PropTypes.string,
  children: PropTypes.any,
};


import React, {
  Component,
  PropTypes,
} from 'react';

export default class GuidePage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // TODO: Traverse children and build side nav from it.
    return (
      <div className="guidePage">
        <div className="guideSideNav">
          <div className="guideSideNav__title">
            {this.props.title}
          </div>
        </div>

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

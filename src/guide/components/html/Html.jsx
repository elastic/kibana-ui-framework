
import React, {
  Component,
  PropTypes,
} from 'react';

export default class Html extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: this.props.children }} />
    );
  }

}

Html.propTypes = {
  children: PropTypes.string,
};

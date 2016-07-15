
import {
  GuideExample,
} from '../../components';

export default class TopNavExample extends GuideExample {

  constructor(props) {
    super(props, [{
      title: 'Basic example',
      description: `Here's a description of this example.`,
      html: require('./_topNav1.html'),
      js: require('raw!./_topNav1.js'),
    }, {
      title: 'Dangerous modifier',
      description: `This is an example of a dangerously-red rectangle.`,
      html: require('./_topNav2.html'),
    }]);
  }
}

TopNavExample.propTypes = Object.assign({}, GuideExample.propTypes);

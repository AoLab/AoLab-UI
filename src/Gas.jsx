import React from 'react';

import {RadialGauge} from 'react-canvas-gauges';
import FontAwesome from 'react-fontawesome';


class Gas extends React.Component {
  constructor(props) {
    super(props);
    this.thing = props.thing;
    this.state = {
      gas: 0
    }
  }

  componentDidMount() {
    this.thing.log.then((result) => {
      this.setState({
        gas: result['gas']['value'],
      });
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-2">
          <FontAwesome name='lightbulb-o' size='5x' style={{color: this.state.gas >= 610 ? "red" : ""}} />
        </div>
        <div className="col-10">
          <RadialGauge
            title='Gas'
            height={300}
            value={this.state.gas / 10}
            minValue={0}
            maxValue={100}
            majorTicks={['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100']}
            minorTicks={5}
          ></RadialGauge>
        </div>
      </div>
    );
  }
}

export default Gas;
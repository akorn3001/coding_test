import React from 'react';
import FruitsIndexItemContainer from './fruits_index_item_container';

class FruitsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="fruits-index">
        <ul>
          {
            this.props.fruits.map((fruit, idx) => <li key={idx}>{<FruitsIndexItemContainer fruit={fruit} />}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default FruitsIndex;

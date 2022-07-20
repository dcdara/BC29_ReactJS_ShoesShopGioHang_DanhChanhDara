import React, { Component } from 'react'
import data from '../Data/Data.json'
import Render from './BaiTapShoe/Render'

export default class Body extends Component {
  state = {
    showShoe: data[0],

  };
  renderShoe = () => {
    return data.map((ele) => {
      return (
        <Render
          renderShoe={ele}
          selectedShoe={this.changeStateShoe}
          showShoe={this.state.showShoe}
          key={ele.id}
        />
      );
    });
  };
  changeStateShoe = (shoe) => {
    console.log("1", shoe);
    this.setState({
      showShoe: shoe,
    });
  };


  render() {
    return (
      <div className="container">
        <div className="row col-12">
          {this.renderShoe()}
        </div>
      </div>
    )
  }
}

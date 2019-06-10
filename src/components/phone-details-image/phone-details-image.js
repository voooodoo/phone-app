import React, { Component } from 'react';

export class PhoneDetailsImage extends Component {
  state = {
    index: 0,
    length: this.props.images.length,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.images !== this.props.images) {
      this.setState({
        index: 0,
        length: this.props.images.length,
      });
    }
  }

  prevImg = () => {
    let { index, length } = this.state;
    if (index === 0) {
      index = length - 1;
    } else {
      index--;
    }
    this.setState({
      index,
    });
  };

  nextImg = () => {
    let { index, length } = this.state;
    if (index === length - 1) {
      index = 0;
    } else {
      index++;
    }
    this.setState({
      index,
    });
  };

  render() {
    const { images, name } = this.props;
    const { index } = this.state;
    return (
      <div className="position-relative">
        <button type="button" className="arrow arrow-left" onClick={this.prevImg}>
          &#x3c;
        </button>
        <img src={`assets/${images[index]}`} alt={name} />
        <button type="button" className="arrow arrow-right" onClick={this.nextImg}>
          &#x3e;
        </button>
      </div>
    );
  }
}

export default PhoneDetailsImage;

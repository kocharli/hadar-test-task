import React, { Component } from 'react';

type BaseCardProps = {
  className?: string
}

export default class Card extends Component<BaseCardProps> {
  render() {
    return (
      <div className={`px-10 py-6 shadow border-0.5 border-silver-chalice ${this.props.className}`} >
        {this.props.children}
      </div>
    );
  }
}

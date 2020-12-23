import React, { Component } from 'react';

type NavProps = {
  className?: string
}

export default class Nav extends Component<NavProps> {
  render() {
    return (
      <div className="flex justify-center bg-milano-red h-xl text-white items-center">
        <div className="text-white uppercase">
          Calculator
        </div>
      </div>
    );
  }
}

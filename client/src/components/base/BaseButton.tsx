import React, { ChangeEvent, Component } from 'react';

type BaseButtonProps = {
  type?: "button" | "submit" | "reset",
  disabled: boolean,
  className?: string,
  onClick?: Function
}

export default class BaseButton extends Component<BaseButtonProps> {

  constructor(props: BaseButtonProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick && this.props.onClick();
  }

  render() {
    const { type = 'button' } = this.props;

    return (
      <button
        className={`rounded-sm bg-milano-red text-white px-2.5 py-2 ${this.props.disabled && 'bg-silver-chalice'} ${this.props.className}`}
        type={this.props.type}
        disabled={this.props.disabled}
        onClick={this.handleClick}
      >
        {this.props.children}
      </button>
    );
  }
}

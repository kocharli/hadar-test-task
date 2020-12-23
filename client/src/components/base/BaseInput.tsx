import React, { ChangeEvent, Component } from 'react';

type BaseInputProps = {
  value: number | string,
  type?: string,
  name?: string,
  placeholder?: string,
  className?: string,
  onChange?: Function
}

type BaseInputState = {
  value: string
};

export default class BaseInput extends Component<BaseInputProps, BaseInputState> {
  constructor(props: BaseInputProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.props.onChange && this.props.onChange(event);
  }

  render() {
    const { type = 'text', placeholder = 'Input value', value, name } = this.props;

    return (
      <input
        value={value}
        className={`border-1 rounded-sm px-2.5 py-2 mb-2.5 w-full ${this.props.className}`}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={this.handleChange}
      />
    );
  }
}

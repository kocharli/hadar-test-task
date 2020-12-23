import React, { ChangeEvent, Component } from 'react';
import BaseInput from '../base/BaseInput'
import BaseButton from '../base/BaseButton'

type SumFormProps = {
  className?: string
}

type SumFormState = {
  numberOne: number | string,
  numberTwo: number | string,
  result: number | string,
  isLoading: boolean,
  hasError: boolean
}

export default class SumForm extends Component<SumFormProps> {

  state: SumFormState = {
    numberOne: '',
    numberTwo: '',
    result: 0,
    isLoading: false,
    hasError: false
  }

  get isValid(): boolean {
    return this.state.numberOne > 0 && this.state.numberTwo > 0
  }

  get requestOptions() {
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ numberOne: this.state.numberOne, numberTwo: this.state.numberTwo })
    }
  }

  handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (): void => {
    this.setState({ isLoaded: true })

    fetch("http://127.0.0.1:5000/api/sum", this.requestOptions)
      .then(res => res.json())
      .then(
        (response) => {
          this.setState({
            isLoading: false,
            result: response.sum
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <div className={`${this.props.className}`}>
        <div className="w-full lg:w-2/3 10 m-auto">
          <div className="mb-2.5 text-silver-chalice text-center">Enter the numbers</div>
          <BaseInput
            value={this.state.numberOne}
            className="border-silver-chalice"
            type="text"
            name="numberOne"
            placeholder="number 1"
            onChange={(e: ChangeEvent<HTMLInputElement>) => { this.handleInputChange(e) }}
          />
          <BaseInput
            value={this.state.numberTwo}
            className="border-silver-chalice"
            type="text"
            name="numberTwo"
            placeholder="number 2"
            onChange={(e: ChangeEvent<HTMLInputElement>) => { this.handleInputChange(e) }}
          />
          <BaseButton
            className="text-white bg-milano-red m-auto block w-full mt-2"
            type="submit"
            disabled={!this.isValid}
            onClick={this.handleSubmit}
          >
            Submit
          </BaseButton>
        </div>
        <hr className="border-milano-red mt-14 mb-10 w-full" />
        <div className="w-full lg:w-2/3 10 m-auto">
          <div className="mb-2.5 text-silver-chalice text-center">Results</div>
          <BaseInput
            value={this.state.result}
            className="border-milano-red"
            type="text"
            placeholder="0"
          />
        </div>
      </div>
    );
  }
}

import React, { RefObject } from 'react';

interface IProps {
  value: string;
}

class Form extends React.Component {
  input: RefObject<HTMLInputElement>;
  form: React.RefObject<HTMLFormElement>;
  constructor(props: IProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.form = React.createRef();
    this.input = React.createRef();
  }

  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    // if (this.input != undefined && this.input.current != null) {
    //   this.input.current.focus();
    // this.props.setFormdata(inputValue);
    // }

    if (this.input != undefined && this.input.current != null)
      alert('Отправленное имя: ' + this.input.current.value);
  }

  // handleSubmit() {
  //   const val = this.input?.current?.value;
  //   alert(val);
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} ref={this.form}>
          <label>
            Имя:
            <input type="text" ref={this.input} />
          </label>
          <input type="submit" value="Отправить" />
        </form>
        <div>{this.input?.current?.value}</div>
      </div>
    );
  }
}

export default Form;

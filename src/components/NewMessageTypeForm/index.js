import React from 'react';

import { Field } from 'redux-form';

class NewMessageTypeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({name: e.target.value})
  }

  render() {
    let { handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <Field component="input" name="name" type="text" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NewMessageTypeForm;

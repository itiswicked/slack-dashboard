import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageType from './../components/MessageType'

class MessageTypesListContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let messageTypes = this.props.types.map(type => {
      return <MessageType {...type} />;
    });

    return (
      <ul>
        {messageTypes}
      </ul>
    )
  }
}

const mapStateToProps = ({ messageTypes }) => {
  return {
    types: messageTypes.items
  }
}

export default connect(
  mapStateToProps
)(MessageTypesListContainer)

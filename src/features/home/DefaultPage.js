import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { TodoBody } from './TodoBody';

export class DefaultPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: { date: null },
    }
  }
  render() {
    return (
      <div className="home-default-page">
        <TodoBody />
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage);

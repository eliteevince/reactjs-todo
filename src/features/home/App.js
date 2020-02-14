import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
/*
  This is the root component of your app. Here you define the overall layout
  and the container of the react router.
  You should adjust it according to the requirement of your app.
*/
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  redirectToForm = (e) => {
    e.preventDefault();
    window.location = "/todo";
  }

  static defaultProps = {
    children: '',
  };


  backClick = e => {
    window.location = "/";
  }

  render() {
    let button;
    if (!window.location.pathname.startsWith("/todo")) {
      button = <Button color="primary" onClick={this.redirectToForm}>Add</Button>;
    } else {
      button = <Button color="primary" onClick={this.backClick}>Back</Button>;
    }
    return (
      <div className="home-app">
        <header>
          <div className="logo">To Do Manager</div>
          <div className="header-body">
            {button}
          </div>
        </header>
        <ToastContainer />
        <div className="page-container">{this.props.children}</div>
      </div>
    );
  }
}

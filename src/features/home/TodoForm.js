import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import DatePicker from "react-datepicker";
import * as actions from './redux/actions';
import { toast } from 'react-toastify';

export class TodoForm extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = { isLoading: false, startDate: new Date(), todo: { title: "", description: "", eventTimeMilis: 0, isRead: false } }
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    if (id !== undefined) {
      actions.getTodoList().then(
        (result) => {
          let todoTmp = result.filter(todo => { return todo.id === Number(id) })[0];
          let dateTmp = new Date(todoTmp.eventTimeMilis);
          this.setState({ isLoading: true, todo: todoTmp, eventDate: dateTmp, hour: dateTmp.getHours(), minute: dateTmp.getMinutes() });
        },
        (error) => {
          alert("Error with api");
          this.setState({ isLoading: true });
        }
      );
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.todo.eventTimeMilis = this.state.eventDate.getTime();
    actions.saveTodos(this.state.todo).then(res => {
      if (res.msg === "ToDo Saved Successfully" || res.msg === "ToDo Updated Successfully") {
        window.location = "/";
      }
      return res;
    }).catch(err => err);
  }

  handleChange = date => {
    let evtDate = new Date(this.state.eventDate);
    let tmpTodo = this.state.todo;

    if (date.getTime === undefined) {
      tmpTodo[date.target.name] = date.target.value
      this.setState({ todo: tmpTodo });
    } else {
      tmpTodo.eventTimeMilis = date.getTime();
      this.setState({
        eventDate: date,
        todo: tmpTodo
      });
    }

  };
  render() {
    let title = "Add ToDo";
    if (this.state.isLoading) {
      title = "Update ToDo";
    }
    return (
      <div className="todo-form">
        <div className="home-todo-form">
          <Form onSubmit={this.handleSubmit}>
            <h3>{title}</h3><hr />
            <FormGroup>
              <Label for="title">Title</Label>
              <Input type="text" name="title" id="title" onChange={this.handleChange} value={this.state.todo.title} placeholder="e.g. Monday Meeting" />
            </FormGroup>
            <FormGroup>
              <Label for="desc">Description</Label>
              <Input type="textarea" name="description" placeholder="e.g. About Meeting" id="desc" onChange={this.handleChange} value={this.state.todo.description} />
            </FormGroup>
            <FormGroup>
              <Label for="date">Date</Label><br />
              <DatePicker className="form-control"
                id="date"
                selected={this.state.eventDate}
                onChange={this.handleChange}
                showTimeSelect
                dateFormat="Pp"
              />
            </FormGroup>

            <hr />
            <Button color="primary">Submit</Button>
          </Form>
        </div>
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
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);

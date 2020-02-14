import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { toast } from 'react-toastify';

export class TodoBody extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false, startDate: new Date(), time: '10:00', todo: { title: "", description: "", eventTimeMilis: 0, isRead: false } }
  }
  componentWillMount() {
    actions.getTodoList().then(
      (result) => {
        result.sort(function (a, b) { return a.eventTimeMilis - b.eventTimeMilis });
        this.setState({ isLoading: true, cardList: result });
      },
      (error) => {
        alert("Error with api");
      }
    );
  }
  updateTodos = (selectedTodo, e) => {
    window.location = "/todo/" + selectedTodo.id;
    e.preventDefault();
  }
  removeTodos = (id, e) => {
    actions.removeTodos([id]).then(res => {
      if (res.msg === "Items deleted successfully!") {
        let cardListTmp = this.state.cardList;
        let todo = cardListTmp.filter(todo => { return todo.id === id })[0];
        cardListTmp.splice(cardListTmp.indexOf(todo), 1);
        this.setState({ cardList: cardListTmp });
        toast.success(res.msg);
      }
      return res;
    }).catch(err => err);
    e.preventDefault();
  }
  renderCards = () => {
    let toDay = actions.removeMiliseconds(new Date().getTime());

        console.log(toDay);
    let startDate = actions.removeMiliseconds(this.state.cardList[0].eventTimeMilis);
    let endDate = actions.removeMiliseconds(this.state.cardList[(this.state.cardList.length - 1)].eventTimeMilis);
    let dateTitle = [];
    for (let i = startDate; i <= endDate; i += 86400000) {
      let filteredArray = this.state.cardList.filter((todo) => { return (actions.removeMiliseconds(todo.eventTimeMilis) === i) });
      console.log(filteredArray);
      if (filteredArray.length > 0) {
        if (toDay === i) {
          dateTitle.push(<div className="time-line-header" key={i}><h3>Today</h3><hr /></div>);
        } else if((toDay + 86400000) === i){
          dateTitle.push(<div className="time-line-header" key={i}><h3>Tomorrow</h3><hr /></div>);
        } else {
          dateTitle.push(<div className="time-line-header" key={i}><h3>{actions.formatDate(new Date(i))}</h3><hr /></div>);
        }

        dateTitle.push(filteredArray.map((card, index) => {
          const { id, title, eventTimeMilis, description, eventTime } = card;
          return (<Col xs="4" key={index.toString()}>
            <Card>
              <CardBody>
                <CardTitle><div className="card-title-time"><b>{title} - <span>{actions.formatTime(new Date(eventTimeMilis))}</span></b></div></CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText>{description}</CardText>
                <div className="flex-buttons" >
                  <Button color="primary" className="button master-color" onClick={(e) => this.updateTodos(card, e)}>Update</Button>
                  <Button color="danger" className="button" onClick={(e) => this.removeTodos(id, e)}>Delete</Button>
                </div>
              </CardBody>
            </Card>
          </Col>)
        }));
      }
    }
    return dateTitle;
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="home-todo-body">
          <Container>
            <Row>
              {this.renderCards()}
            </Row>
          </Container>
        </div>
      );
    } else {
      return (
        <div className="home-todo-body">
          Loading...
        </div>
      );
    }
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
)(TodoBody);

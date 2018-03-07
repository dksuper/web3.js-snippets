import React, {Component} from 'react';
import {Button} from "antd";
import PropTypes from "prop-types";
import * as exampleActions from "../../redux/actions/exampleActions";
import {bindActionCreators} from "redux";
import {drizzleConnect} from "drizzle-react";

export default class ExamplePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      item: {
        text: ''
      }
    };
  }

  handleChange = (e) => {
    const stateItem = this.state.item;
    stateItem.text = e.target.value;
    this.setState({item: stateItem});
  };

  addItem = () => {
    this.props.actions.addItem(this.state.item)
      .then(() => console.log('success'))
      .catch(error => console.log('error', error));
  };

  render() {
    console.log(this.props);
    const list = this.props.items.map(item => (<div key={item.id.toString()}>{item.text}</div>));
    return (
      <React.Fragment>
        <h1>Example of redux flow</h1>
        <h2>Add item to list</h2>
        <input
          type='text'
          onChange={this.handleChange}
          value={this.state.item.text}
        />
        <Button type="primary" onClick={this.addItem}>Add Item</Button>
        <br/>
        <hr/>
        <br/>
        {list}
      </React.Fragment>
    );
  }
}
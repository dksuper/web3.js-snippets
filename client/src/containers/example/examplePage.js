import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as exampleActions from '../../redux/actions/exampleActions';
import {Button} from "antd";

class ExamplePage extends Component {

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

ExamplePage.propTypes = {
  items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(exampleActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExamplePage);

import ExamplePage from './examplePage';
import { drizzleConnect } from 'drizzle-react'
import PropTypes from "prop-types";
import * as exampleActions from "../../redux/actions/exampleActions";
import {bindActionCreators} from 'redux';


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


export default drizzleConnect(ExamplePage, mapStateToProps, mapDispatchToProps);
import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';

import Routing from './routing/routing';
import {BrowserRouter as Router} from 'react-router-dom';

import { Layout } from 'antd';
import SideNavigation from "./components/common/sideNavigation";
import Navigation from "./components/common/navigation";
import AppFooter from "./components/common/footer";

const { Content } = Layout;


class App extends Component {

  render() {
    return (
      <Router>
        <Layout style={{ height:'100vh' }}>

          <Navigation loading={this.props.loading} />

          <Layout>
            <SideNavigation/>

            <Layout style={{ padding: '0 24px 24px' }}>
              {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
                {/*<Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                {/*<Breadcrumb.Item>List</Breadcrumb.Item>*/}
                {/*<Breadcrumb.Item>App</Breadcrumb.Item>*/}
              {/*</Breadcrumb>*/}

              <Content style={{ background: '#fff', padding: 24, paddingBottom: 0, margin: 0, minHeight: '280'}}>
                <Routing {...this.props} />
              </Content>

              <AppFooter/>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    loading: state.amountCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);

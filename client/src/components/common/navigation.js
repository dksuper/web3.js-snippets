import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu} from "antd";
import {Link} from "react-router-dom";
import LoadingDots from "../../containers/LoadingDots";
const { Header } = Layout;

const Navigation = props => {

  const { loading } = props;

  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">
          <Link to={`/`}>Home page</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={`/example`}>Example page</Link>
        </Menu.Item>
        <Menu.Item>
          {loading && <LoadingDots interval={200} dots={20}/>}
        </Menu.Item>
      </Menu>
    </Header>
  );
};

Navigation.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Navigation;

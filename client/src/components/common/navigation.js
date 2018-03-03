import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu} from "antd";
import {NavLink} from "react-router-dom";
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
          <NavLink to={`/`}>Home page</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to={`/example`}>Example page</NavLink>
        </Menu.Item>

        {loading && <LoadingDots interval={200} dots={20}/>}

      </Menu>
    </Header>
  );
};

Navigation.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Navigation;

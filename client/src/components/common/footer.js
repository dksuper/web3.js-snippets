import React from 'react';
// import PropTypes from 'prop-types';
import { Layout } from 'antd';
const { Footer } = Layout;

const AppFooter = props => {
  return (
    <Footer style={{ textAlign: 'center', paddingBottom: 0 }}>
      Web3.js Snippets ©2018 Created by Maurice Dalderup
    </Footer>
  );
};

export default AppFooter;

import React from 'react';
// import PropTypes from 'prop-types';
import { Layout } from 'antd';
const { Footer } = Layout;

const AppFooter = props => {
  return (
    <Footer style={{ textAlign: 'center', paddingBottom: 0 }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  );
};

AppFooter.propTypes = {
  // None so far
};

export default AppFooter;

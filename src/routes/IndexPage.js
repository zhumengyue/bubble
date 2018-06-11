import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Button } from 'antd-mobile';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <p className={styles.loading}>Loading....</p>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

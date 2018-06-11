import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

const IndexPage = ({ dispatch, indexpage }) => {
  function goto(){
    dispatch({ type: 'indexpage/goto'})
  }
  return (
    <div className={styles.normal}>
      <p onClick={goto} className={styles.loading}>Loading....</p>
    </div>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps({ indexpage }) {
  return {indexpage}
}
export default connect(mapStateToProps)(IndexPage);

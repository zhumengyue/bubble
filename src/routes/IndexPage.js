import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    // 这是防止页面被拖拽
    document.body.addEventListener('touchmove', (ev) => {
      ev.preventDefault();
    });
  }

  render() {
    const { dispatch } = this.props
    function goto () {
      dispatch({ type: 'indexpage/goto',payload:{click: true}})
    }
    return (
      <ReactCSSTransitionGroup
        transitionName="example"
        component="div"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={true}
        transitionEnterTimeout={300}
        transitionLeave={true}
        transitionLeaveTimeout={300}
      >
        <div className={styles.normal} key={1}>
          <div onClick={goto} className={styles.whitespace}></div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }

}

IndexPage.propTypes = {
};

function mapStateToProps({ indexpage }) {
  return {indexpage}
}
export default connect(mapStateToProps)(IndexPage);

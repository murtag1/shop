import React, { SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actionsCreators';

interface PropsType {
  children: any;
  dispatch: DispatchType;
}

function PopupWindow(props: PropsType) {
  function handelClick(event: SyntheticEvent) {
    if (event.target === event.currentTarget) props.dispatch(actions.closedPopup());
  }

  return (
    <div
      className="popup-window"
      onClick={handelClick}
    >
      <div className="popup-window__inner">
        {props.children}
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch: DispatchType) {
  return {
    dispatch,
  };
}

export default connect(mapDispatchToProps)(PopupWindow);

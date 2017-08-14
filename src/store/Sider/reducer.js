export const SIDER_COLLAPSED = 'app/SIDER_COLLAPSED';

const initialState = {
  collapsed: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIDER_COLLAPSED:
      return {
        collapsed: !state.collapsed,
      };
    default:
      return state;
  }
}

export const toggleCollapsed = () => {
  return dispatch => {
    dispatch({
      type: SIDER_COLLAPSED,
    });
  };
};

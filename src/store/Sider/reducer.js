export const SIDER_COLLAPSED = 'app/SIDER_COLLAPSED';
export const SIDER_UN_COLLAPSED = 'app/SIDER_UN_COLLAPSED';
export const SIDER_COLLAPSED_BREAKPOINT = 'app/SIDER_COLLAPSED_BREAKPOINT';
export const SIDER_UN_COLLAPSED_BREAKPOINT = 'app/SIDER_UN_COLLAPSED_BREAKPOINT';

const siderWidth = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth <= 768) {
    return 0;
  }
  return 64;
};

const initialState = {
  collapsed: false,
  collapsedIsBreakpoint: false,
  siderWidth: siderWidth(),
};

export default (state = initialState, action) => {
  siderWidth();
  switch (action.type) {
    case SIDER_COLLAPSED:
      return {
        collapsed: true,
        siderWidth: siderWidth(),
      };
    case SIDER_UN_COLLAPSED:
      return {
        collapsed: false,
        siderWidth: siderWidth(),
      };
    case SIDER_COLLAPSED_BREAKPOINT:
      return {
        collapsed: true,
        siderWidth: siderWidth(),
      };
    case SIDER_UN_COLLAPSED_BREAKPOINT:
      return {
        collapsed: false,
        siderWidth: siderWidth(),
      };
    default:
      return state;
  }
}

export const siderCollapsed = () => {
  return dispatch => {
    dispatch({
      type: SIDER_COLLAPSED,
    });
  };
};
export const siderUnCollapsed = () => {
  return dispatch => {
    dispatch({
      type: SIDER_UN_COLLAPSED,
    });
  };
};
export const collapsedBreakpoint = () => {
  return dispatch => {
    dispatch({
      type: SIDER_COLLAPSED_BREAKPOINT,
    });
  };
};
export const unCollapsedBreakpoint = () => {
  return dispatch => {
    dispatch({
      type: SIDER_UN_COLLAPSED_BREAKPOINT,
    });
  };
};

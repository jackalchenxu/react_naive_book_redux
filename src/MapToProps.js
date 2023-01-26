//决定哪一些state的变化会引起对应props的变化
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor,
  };
};

//给发起更改状态动作的组件，以props的方式，传递dispatch函数
const mapDispatchToProps = (dispatch) => {
  return {
    setThemeColor: (themeColor) => {
      dispatch({ type: "CHANGE_THEME_COLOR", themeColor });
    },
  };
};

export { mapStateToProps, mapDispatchToProps };

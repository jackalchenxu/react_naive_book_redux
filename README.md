This project is to demo React.js Redux design and evolution.

1st version is Store + Context

2nd version:

- remove `context/store` from `Header`, `Content`, `Index` and move it into a separate `react-redux`

- introduce `Dumb Component` and `connect`(connecting `context/store` with `Dumb Component`)

- leftover: `Header` etc. cannot refresh after `context/store` is removed from the component

3nd version

- remove `context/store` from `ThemeSwitch` and fix refresh issue
- introduce `mapStateToProps` and `mapDispatchToProps`
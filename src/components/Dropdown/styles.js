import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  menu: {
    height: "100%",
    marginBlockStart: "0px",
    marginBlockEnd: "0px",
    paddingInlineStart: "0px",
    display: "flex",
    justifyContent: "center"
  },
  item: {
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    // margin: "1vw"
  },
  button: {
    color: "seashell",
    display: "flex",
    alignItems: "center",
    // fontSize: "0.2vw",
    textDecoration: "none",

    borderStyle: "solid",
    borderColor: "#1C202B",
    borderWidth: "2px",
    borderRadius: "50%",
    backgroundColor: "#1C202B",

    padding: "5px",
    transition: "filter 300ms",
    "&:hover": {
      borderColor: "#2C303B",
      backgroundColor: "#2C303B",
    },
    "& svg": {
      width: "2vw",
      height: "2vw",
    }
  },
  dropdownMenu: {
    position: "absolute",
    // top: "5vw",
    marginTop: "7vh",
    width: "20vw",
    transform: "translateX(-45%)",

    borderColor: "#1C202B",
    borderStyle: "solid",
    borderRadius: "5%",
    borderWidth: "0.1px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",

    overflow: "hidden",
    zIndex: "20 ",
    // display: "flex",
  },
    // arrow: {
    //   width: "1vw",
    //   height: "1vw",
    // },
    // "& menu-primary-enter": {
    //   position: "absolute",
    //   transform: "translateX(-110%)",
    // },
    // "& menu-primary-enter-active": {
    //   transform: "translateX(0%)",
    //   transition: "all 500ms ease",
    // },
    // "& menu-primary-exit": {
    //   position: "absolute",
    // },
    // "& menu-primary-exit-active": {
    //   transform: "translateX(-110%)",
    //   transition: "all 500ms ease",
    // },
    // "& menu-secundary-enter": {
    //   transform: "translateX(110%)",
    // },
    // "& menu-secundary-enter-active": {
    //   transform: "translateX(0%)",
    //   transition: "all 500ms ease",
    // },
    // "& menu-secundary-exit": {
    // },
    // "& menu-secundary-exit-active": {
    //   transform: "translateX(110%)",
    //   transition: "all 500ms ease",
    // },
}));
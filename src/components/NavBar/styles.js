import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  title: {
    color: "seashell",
    fontSize: "3vw",
    padding: "2vw",
    paddingTop: "1vw",
    fontFamily: "helvetica",
  },
  bar: {
    width: "100%",
    height: "5.5vw",
    // lineHeight: "5.5vw",
    // textAlign: "center",
    backgroundColor: "#131722",
    backgroundImage: "linear-gradient(to bottom right, #131722, #030712)",
    display: "flex",
    justifyContent: "space-between"
  },
  menu: {
    margin: "1vw",
  },
  menuList: {
    // height: "100%",
    marginBlockStart: "0px",
    marginBlockEnd: "0px",
    paddingInlineStart: "0px",
    display: "flex",
    justifyContent: "center"
  },
  // item: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   // margin: "1vw"
  // },
  button: {
    color: "seashell",
    // fontSize: "0.2vw",
    textDecoration: "none",

    borderStyle: "solid",
    borderColor: "#1C202B",
    borderWidth: "2px",
    backgroundColor: "#1C202B",
    borderRadius: "50%",
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
  dropdownItem: {
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    fontFamily: "helvetica",
    color: "seashell",
    // display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",

    borderStyle: "solid",
    borderColor: "#1C202B",
    // borderRadius: "2%",
    backgroundColor: "#1C202B ",

    transition: "background 500ms",
    padding: "0.5rem",

    "&:hover": {
      borderColor: "#2C303B",
      backgroundColor: "#2C303B",
    },

    "& svg": {
      width: "1vw",
      height: "1vw",
    },
  },  
}));
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  background: {
    backgroundColor: "#131722",
    backgroundImage: "linear-gradient(to bottom right, #131722, #030712)",
    display: "block",
    height: "200vh"
  },
  rowOne: {
    display: "flex",
    width: "100%",
    height: "50vh",
    marginBottom: "2vw", 
  },
  twoCharts: {
    flex: 1,
    marginLeft: "1vw",
    marginRight: "1vw",
  },
  oneChart: {
    marginLeft: "1vw",
    marginRight: "1vw",
    marginTop: "-3vh"
  },
  twoChartsG: {
    flex: 2,
    marginLeft: "1vw",
    marginRight: "1vw",
  },
  twoChartsS: {
    flex: 1,
    marginLeft: "1vw",
    marginRight: "1vw",
  },
  filter:{
    // height: "2vh",
    marginBlockStart: "0px",
    marginBlockEnd: "0px",
    paddingInlineStart: "0px",
    display: "flex",
    justifyContent: "center",
    "& svg": {
      width: "2vw",
      height: "2vw",
    },  
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
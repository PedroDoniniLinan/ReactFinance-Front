import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chart: {
    height: "60vh",
    fontFamily: "helvetica",
    marginTop: "2vh"
  },
  chartTitle: {
    textAlign: "center",
    justifySelf: "center",
    fontSize: "2vw",
    display: "block",
    color: "seashell",
    fontFamily: "helvetica",
    flex: "90",
  },
  titleBadge: { 
    display: "flex", 
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1E222D",
    margin: "2px",
    borderStyle: "solid",
    borderColor: "#1E222D",
    borderRadius: "25px",
    borderWidth: "1px",
    padding: "0.5vw",
    // lineHeight: "3vw"
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
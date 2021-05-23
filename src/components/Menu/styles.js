import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  background: {
    backgroundColor: "#131722",
    backgroundImage: "linear-gradient(to bottom right, #131722, #030712)",
    display: "block",
    height: "200vh"
  },
  row: {
    display: "flex",
    marginLeft: "3vw",
    marginTop: "1vw",
    marginRight: "3vw"
  },
  button: {
    backgroundColor: "#030712",
    backgroundImage: "linear-gradient(to bottom right, #030712, #030712)",
    // display: "block",
    
    borderRadius: "12%",
    height: "70vh",
    width: "50%",
    margin: "1vw",
    
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",



  },
  link: {
    
    height: "100%",
    width: "100%",
    // margin: "1vw",
    borderRadius: "12%",

    
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",

    color: "seashell",
    fontSize: "3vw",
    textDecoration: "none",
    fontFamily: "helvetica",
    
    "&:hover": {
      borderColor: "#2C303B",
      backgroundColor: "#2C303B",
    },
  },

}));
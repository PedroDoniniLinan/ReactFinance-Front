import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  title: {
    color: "seashell",
    fontSize: "3vw",
    padding: "2vw",
    paddingTop: "1.5vw",
    fontFamily: "helvetica",
  },
  bar: {
    width: "100%",
    height: "5.5vw",
    lineHeight: "5.5vw",
    // textAlign: "center",
    backgroundColor: "#131722",
    backgroundImage: "linear-gradient(to bottom right, #131722, #030712)",
  }
}));
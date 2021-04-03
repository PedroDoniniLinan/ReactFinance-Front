import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chart: {
    height: "40vh",
    fontFamily: "helvetica",
    marginTop: "2vh"
  },
  chartTitle: {
    textAlign: "center",
    fontSize: "2vw",
    display: "block",
    color: "seashell",
    fontFamily: "helvetica",
  },
  titleBadge: { 
    display: "block", 
    backgroundColor: "#1E222D",
    margin: "2px",
    borderStyle: "solid",
    borderColor: "#1E222D",
    borderRadius: "25px",
    borderWidth: "1px",
    lineHeight: "3vw"
  }
}));
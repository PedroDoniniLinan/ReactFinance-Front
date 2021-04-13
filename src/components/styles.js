import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  background: {
    backgroundColor: "#131722",
    backgroundImage: "linear-gradient(to bottom right, #131722, #030712)",
    display: "block",
    height: "180vh"
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
}));
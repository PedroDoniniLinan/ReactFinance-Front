import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  header: {
    color: "seashell",
    width: "100%",
    height: "12vh",
    marginBottom: "5vh",
    fontFamily: "helvetica",
    display: "flex",
  },
  headerNumber: {
    flex: "1",
    textAlign: "center",
    height: "fit-content",
    fontSize: "3vw",
    borderStyle: "solid",
    borderColor: "#1C202B",
    backgroundColor: "#1C202B",
    borderRadius: "25px",
    borderWidth: "1px",
    padding: "7px",
    margin: "1vw",
  },
  headerTitle: {
    fontSize: "1vw"
  }
}));
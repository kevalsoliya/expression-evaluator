import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    flexDirection: "column",
    textAlign: "center",
    padding: 40,
  },
  menuItem: {
    color: "#000000",
  },
  select: {
    background: "#ffffff",
  },
  operators: {
    background: "#eaf5f7",
    padding: "40px 35px",
    borderRadius: 4,
  },
}));

export default useStyles;

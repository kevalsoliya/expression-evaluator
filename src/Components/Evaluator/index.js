import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useStyles from "./style";
import Operations from "./Operations";
import Button from "../../atoms/Button";

const Evaluator = () => {
  const style = useStyles();
  const [isNumberAdded, setIsNumberAdded] = useState(false);
  const [firstValue, setFirstValue] = useState(0);

  const handleInputChange = (e) => setFirstValue(+e.target.value);

  const handleAddNumber = () => {
    setIsNumberAdded(true);
  };

  if (isNumberAdded) return <Operations firstValue={firstValue} />;
  return (
    <div className={style.mainWrapper}>
      <div>
        <Typography variant="h2">Expression</Typography>
        <Typography variant="h2">Evaluator</Typography>
      </div>
      <Grid container item md={6} spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Please enter number"
            type="number"
            value={firstValue}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button onClick={handleAddNumber} disabled={!firstValue}>
            Add number
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Evaluator;

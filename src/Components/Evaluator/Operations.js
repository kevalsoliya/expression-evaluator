import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import TextField from "@material-ui/core/TextField";
import Button from "../../atoms/Button";
import useStyles from "./style";

const Operations = ({ firstValue }) => {
  const styles = useStyles();
  const [operationsList, setOperationList] = useState([]);
  const [values, setValues] = useState({ operator: "+", secondOperand: 0 });
  const handleInputChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const calculateOperation = (firstOperand, operator, secondOperand) => {
    // eslint-disable-next-line no-eval
    return eval(`${firstOperand}${operator}${secondOperand}`);
  };

  const handleAddOperation = () => {
    const { firstOperand, operator, secondOperand } = operationsList.length
      ? operationsList[operationsList.length - 1]
      : { firstOperand: firstValue };
    const value = operator
      ? calculateOperation(firstOperand, operator, secondOperand)
      : firstOperand;
    setOperationList([
      ...operationsList,
      {
        firstOperand: value,
        secondOperand: +values.secondOperand,
        operator: values.operator,
      },
    ]);
    setValues({ operator: "+", secondOperand: 0 });
  };

  return (
    <div className={styles.mainWrapper}>
      {operationsList.map((operation, index) => (
        <div key={index}>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gridGap={20}
            mb={5}
          >
            <div className={styles.operators}>{operation.firstOperand}</div>
            <div className={styles.operators}>{operation.secondOperand}</div>
            <div className={styles.operators}>{operation.operator}</div>
          </Box>
          <Box mb={5}>
            <Typography variant="h3">=</Typography>
          </Box>
          <Box mb={5}>
            <Typography variant="h2">
              {calculateOperation(
                operation.firstOperand,
                operation.operator,
                operation.secondOperand
              )}
            </Typography>
          </Box>
        </div>
      ))}
      <Grid container item md={6} spacing={1}>
        <Grid item xs={12} sm={4}>
          <TextField
            id="select"
            name="operator"
            variant="outlined"
            label="Operator"
            value={values.operator}
            className={styles.select}
            onChange={handleInputChange}
            select
          >
            <MenuItem value="+" className={styles.menuItem}>
              +
            </MenuItem>
            <MenuItem value="-" className={styles.menuItem}>
              -
            </MenuItem>
            <MenuItem value="*" className={styles.menuItem}>
              *
            </MenuItem>
            <MenuItem value="/" className={styles.menuItem}>
              /
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Operand"
            type="number"
            name="secondOperand"
            value={values.secondOperand}
          onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button onClick={handleAddOperation} disabled={!firstValue}>
            Add Operation
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Operations;

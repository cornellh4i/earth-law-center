
import * as React from 'react';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";


/** Component for Drop Down */

const DropDown = ({ placeholder, options }) => {

  const [ops, setOps] = React.useState([]);

  const handleChangeOptions = (event) => {
    const { target: { value }, } = event;
    setOps(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: "30%" }}>
        <InputLabel >{placeholder}</InputLabel>
        <Select
          multiple
          value={ops}
          onChange={handleChangeOptions}
          input={<OutlinedInput />}
          renderValue={(selected) => selected.join(', ')}
        >
          {options.map((op) => (
            <MenuItem key={op} value={op}>
              <Checkbox checked={ops.indexOf(op) > -1} />
              <ListItemText primary={op} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default DropDown;

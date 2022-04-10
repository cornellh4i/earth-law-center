// import React, { useState } from 'react';
// import styles from './DropDown.css';
// import { Box, Select, Checkbox, InputLabel, MenuItem, FormControl, ListItemText, OutlinedInput } from '@material-ui/core';
import * as React from 'react';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

// import { Box, Checkbox, FormControl } from '@material-ui/core';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 500,
    },
  },
};
/** Component for Drop Down */
const jurisdictions = [
  'National',
  'Regional/State',
  'Local',
  'International'
];
const lawTypes = [
  "Ordinance (binding)",
  "Resolution (non-binding)"
];
const DropDown = () => {
  const [jurisdiction, setJurisdiction] = React.useState([]);
  const [law, setLaw] = React.useState([]);

  const handleChangeJuris = (event) => {
    const { target: { value }, } = event;
    setJurisdiction(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChangeLaw = (event) => {
    // const { target: { value }, } = event;
    setLaw(
      // On autofill we get a stringified value.
      typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: "30%" }}>
        <InputLabel >Select a jurisdiction</InputLabel>
        <Select
          multiple
          value={jurisdiction}
          onChange={handleChangeJuris}
          input={<OutlinedInput label="Jurisdiction" />}
          renderValue={(selected) => selected.join(', ')}
        // MenuProps={MenuProps}
        >
          {jurisdictions.map((juri) => (
            <MenuItem key={juri} value={juri}>
              <Checkbox checked={jurisdiction.indexOf(juri) > -1} />
              <ListItemText primary={juri} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, width: "40%" }}>
        <InputLabel >Select a type of law</InputLabel>
        <Select
          multiple
          value={law}
          onChange={handleChangeLaw}
          renderValue={(selected) => selected.join(', ')}
        >
          {lawTypes.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={law.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default DropDown;

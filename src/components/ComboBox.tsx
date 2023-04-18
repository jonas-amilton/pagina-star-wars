import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectAll } from "../store/modules/peopleSlice";

export default function ComboBox() {
  const peopleRedux = useAppSelector(selectAll);
  const dispatch = useAppDispatch();

  /**
   * quando definir personagem
   * buscar no array e
   * setar em state PersonSLice
   */

  console.log(peopleRedux);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={peopleRedux}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} name="Movie" />}
    />
  );
}

import { TextField, TextFieldProps } from "@mui/material";
import * as React from "react";
import { Control, Controller } from "react-hook-form";

type Props = TextFieldProps & {
  name: string;
  control: Control<any>;
};

export default function TextInputField({ name, control, ...textFieldProps }: Props) {
  return <Controller name={name} control={control} render={({ field }) => <TextField {...field} {...textFieldProps} />} />;
}

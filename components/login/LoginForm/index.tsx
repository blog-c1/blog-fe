import { Box, TextField, Button } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import LogoIcon from "statics/images/logo.png";

export default function LoginForm() {
  return (
    <Box
      component="form"
      className="p-10 w-1/3 border border-[#90caf975] rounded-[12px] mx-auto bg-white flex flex-col"
    >
      <div className="flex items-center mx-auto">
        <Image src={LogoIcon} alt="logo" width={40} height={40} />
        <span className="font-bold text-xl transform translate-y-1">
          QIYANA
        </span>
      </div>
      <div className="text-center mb-5 mt-10">
        <h2 className="text-[#673ab7] text-[1.5rem] font-bold mb-2">
          Hi, Welcome Back
        </h2>
        <span className="text-[#9e9e9e]">
          Enter your credentials to continue
        </span>
      </div>
      <div className="my-2">
        <TextField label="Username" fullWidth variant="outlined" />
      </div>
      <div className="my-2">
        <TextField label="Password" fullWidth variant="outlined" />
      </div>

      <div className="py-4 mt-5">
        <Button variant="contained" type="submit" fullWidth>
          Login
        </Button>
      </div>
    </Box>
  );
}

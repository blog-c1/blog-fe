import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import TextInputField from "components/common/fields/TextInputField";
import { loginSchema } from "libs/validations/auth-schema";
import Image from "next/image";
import { useForm } from "react-hook-form";
import LogoIcon from "statics/images/logo.png";

export type LoginFormData = {
  username: string;
  password: string;
};

type Props = {
  onSubmit: (payload: LoginFormData) => void;
};

export default function LoginForm({ onSubmit }: Props) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <div className="p-10 w-1/3 border border-[#90caf975] rounded-[12px] mx-auto bg-white flex flex-col">
      <div className="flex items-center mx-auto">
        <Image src={LogoIcon} alt="logo" width={40} height={40} />
        <span className="font-bold text-xl transform translate-y-1">QIYANA</span>
      </div>
      <div className="text-center mb-5 mt-10">
        <h2 className="text-[#673ab7] text-[1.5rem] font-bold mb-2">Hi, Welcome Back</h2>
        <span className="text-[#9e9e9e]">Enter your credentials to continue</span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
        <TextInputField
          className="my-2"
          name="username"
          control={control}
          fullWidth
          variant="outlined"
          label="Username"
          error={!!errors.username}
          helperText={errors?.username?.message}
        />

        {/* Password */}
        <TextInputField
          className="my-2"
          name="password"
          control={control}
          fullWidth
          variant="outlined"
          label="Password"
          error={!!errors.username}
          helperText={errors?.username?.message}
        />

        {/* Submit button */}
        <Button variant="contained" type="submit" fullWidth className="py-4 mt-5">
          Login
        </Button>
      </form>
    </div>
  );
}

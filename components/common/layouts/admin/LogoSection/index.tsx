import { ButtonBase } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import LogoIcon from "statics/images/logo.png";

const LogoSection = () => (
  <Link href={"/admin"}>
    <div className="flex items-center gap-2">
      <Image src={LogoIcon} alt="logo" width={40} height={40} />
      <span className="font-bold transform translate-y-1">QIYANA</span>
    </div>
  </Link>
);

export default LogoSection;

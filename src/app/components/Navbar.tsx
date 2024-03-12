import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";

export const Navbar = () => {
  return (
    <nav className="bg-blue-500 flex flex-row justify-between items-center p-5">
      <AiOutlineMenu color="white" size="30px" />

      <Link href="/">
        <Image src="/me_logo.png" width={150} height={150} alt="med express" />
      </Link>

      <HiMagnifyingGlass color="white" size="30px" />
    </nav>
  );
};

import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar mb-10 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center">
      <img className="mx-2 w-12" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaTwitter />
      </div>
    </nav>
  );
}

export default Navbar;

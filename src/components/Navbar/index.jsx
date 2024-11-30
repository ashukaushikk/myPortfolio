import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar mb-10 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-12" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn */}
        <a
          className="transform transition-transform duration-300 hover:scale-125 text-[#0077B5] drop-shadow-[0_4px_4px_rgba(0,119,181,0.5)]"
          href="https://www.linkedin.com/in/ashwani-kumar-kaushik661/"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          className="transform transition-transform duration-300 hover:scale-125 drop-shadow-[0_4px_4px_rgba(14,165,233,0.5)]"
          href="https://github.com/ashukaushikk"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub />
        </a>

        {/* WhatsApp */}
        <a
          className="transform transition-transform duration-300 hover:scale-125 text-[#25D366] drop-shadow-[0_4px_4px_rgba(37,211,102,0.5)]"
          href="https://wa.me/+919872932661?text=I'm%20interested%20in%20your%20car%20for%20sale"
          target="_blank"
          rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

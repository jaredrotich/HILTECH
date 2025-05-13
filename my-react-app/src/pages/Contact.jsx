import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://github.com/jaredrotich " target="_blank"  rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
      <a href="https://www.linkedin.com/feed/ " target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
      <a href="jaredrotich3@gmail.com">
        <HiOutlineMail size={30} />
      </a>
      <a href="https://x.com/JaredRotich12" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} />
      </a>
    </div>
  );
}

export default SocialLinks;

import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function SocialNav() {
  return (
    <div className='layout-social'>
      <div className='layout-social-container'>
      <a
        className='layout-social-icon'
        href='https://www.twitter.com'
        target='_blank'
        title="Twitter"
        >
          <FaTwitter />
      </a>

      <a
        className='layout-social-icon'
        href='https://www.twitter.com'
        target='_blank'
        title="Facebook"
      >
        <FaFacebook />
      </a>
      <a
        className='layout-social-icon'
        href='https://www.twitter.com'
        target='_blank'
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>

      <a
        className='layout-social-icon'
        href='https://www.twitter.com'
        target='_blank'
        title="GitHub"
      >
        <FaGithub />
      </a>
      </div>
    </div>
  )
}
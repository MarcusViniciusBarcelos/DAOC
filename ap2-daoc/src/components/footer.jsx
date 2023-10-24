import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { SocialLink } from './SocialLinks';

export function Footer() {
  return (
    <div className='bg-slate-950 text-white py-6 border-2 border-transparent  rounded-xl p-10 transition duration-300 ease-in-out hover:border-blue-500'>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <img className="h-8 mb-2 md:mb-0 md:mr-2" src="src\assets\imgs\computação.png" alt="Logo" />
        <div className="flex mt-2 md:mt-0 md:ml-4">
          <SocialLink href="https://www.linkedin.com/in/marcusviniciusbarcelos/" icon={<FaLinkedin />} />
          <SocialLink href="https://www.instagram.com/marcus.barcelos" icon={<FaInstagram />} />
          <SocialLink href="https://github.com/MarcusViniciusBarcelos" icon={<FaGithub />} />
        </div>
      </div>
    </div>
  );
}

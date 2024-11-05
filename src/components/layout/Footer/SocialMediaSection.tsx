import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const SocialMediaSection = () => {
  return (
    <div className="flex space-x-2 text-[#3E3E3E] md:text-[#EAEAEA]">
      <div className="bg-[#EAEAEA] md:bg-[#3E3E3E] p-3 rounded-full">
        <FaInstagram />
      </div>
      <div className="bg-[#EAEAEA] md:bg-[#3E3E3E] p-3 rounded-full">
        <FaTiktok />
      </div>
      <div className="bg-[#EAEAEA] md:bg-[#3E3E3E] p-3 rounded-full">
        <FaYoutube />
      </div>
    </div>
  );
};

export default SocialMediaSection;

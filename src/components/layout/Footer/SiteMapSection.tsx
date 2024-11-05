import Link from "next/link";
import { siteMap } from "@/data/footer-links";

const SiteMapSection = () => {
  return (
    <>
      {siteMap.map((item) => (
        <Link
          key={item.title}
          href={item.link}
          className="block text-[#949494]"
        >
          {item.title}
        </Link>
      ))}
    </>
  );
};

export default SiteMapSection;

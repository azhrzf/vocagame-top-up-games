import Link from "next/link";
import { otherTopUp } from "@/data/footer-links";

const OtherTopUpSection = () => {
  return (
    <>
      {otherTopUp.map((item) => (
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

export default OtherTopUpSection;

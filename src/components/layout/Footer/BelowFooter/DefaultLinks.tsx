import Link from "next/link";

const DefaultLinks = () => {
  return (
    <div className="flex items-center justify-between text-[#949494]">
      <Link href="/" className="text-sm md:text-base">
        © PT BERMAIN BERSAMA INDONESIA, {new Date().getFullYear()}
      </Link>
      <Link href="https://azhrzf.my.id/" className="hidden md:block">
        Kebijakan Privasi
      </Link>
      <Link href="https://azhrzf.my.id/" className="hidden md:block">
        Terms of Service
      </Link>
      <Link href="https://azhrzf.my.id/" className="hidden md:block">
        Hubungi Kami
      </Link>
    </div>
  );
};

export default DefaultLinks;

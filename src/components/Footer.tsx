import Link from "next/link";
import { Divider } from "antd";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const siteMap = [
  {
    title: "Beranda",
    link: "/",
  },
  {
    title: "Semua Game",
    link: "/",
  },
  {
    title: "Masuk",
    link: "/",
  },
  {
    title: "Daftar",
    link: "/",
  },
];

const otherTopUp = [
  {
    title: "Mobile Legends",
    link: "/",
  },
  {
    title: "Free Fire",
    link: "/",
  },
  {
    title: "Pubg Mobile",
    link: "/",
  },
  {
    title: "Undawn",
    link: "/",
  },
];

export default function Footer() {
  return (
    <section className="mx-auto max-w-7xl text-white font-['Space_Grotesk'] pt-10 pb-4">
      <div className="grid grid-cols-12 gap-x-14 mb-10 justify-between pb-3">
        <div className="col-span-5">
          <h2>Ur Website</h2>
        </div>
        <div className="col-span-2 space-y-3">
          <h3 className="font-bold text-sm">PETA SITUS</h3>
          {siteMap.map((item) => (
            <Link key={item.title} href={item.link} className="block">
              {item.title}
            </Link>
          ))}
        </div>
        <div className="col-span-2 space-y-3">
          <h3 className="font-bold text-sm">TOP UP LAINNYA</h3>
          {otherTopUp.map((item) => (
            <Link key={item.title} href={item.link} className="block">
              {item.title}
            </Link>
          ))}
        </div>
        <div className="col-span-3">
          <h3 className="font-bold text-sm mb-3">IKUTI KAMI</h3>
          <div className="flex space-x-3">
            <div className="bg-[#3E3E3E] p-2 rounded-full">
              <FaInstagram className="text-white" />
            </div>
            <div className="bg-[#3E3E3E] p-2 rounded-full">
              <FaTiktok className="text-white" />
            </div>
            <div className="bg-[#3E3E3E] p-2 rounded-full">
              <FaYoutube className="text-white" />
            </div>
          </div>
          <div className="mt-8 space-y-2">
            <h3 className="font-bold">PERTANYAAN BISNIS</h3>
            <Link href="mailto:contact@email.id" className="block">
              contact@email.id
            </Link>
          </div>
        </div>
      </div>
      <Divider className="border-white mb-3" style={{ borderWidth: "1.5px" }} />
      <div className="flex items-center justify-between ">
        <Link href="/">
          © PT BERMAIN BERSAMA INDONESIA, {new Date().getFullYear()}
        </Link>
        <Link href="/">Kebijakan Privasi</Link>
        <Link href="/">Terms of Service</Link>
        <Link href="/">Hubungi Kami</Link>
      </div>
    </section>
  );
}

import Image from "next/image";

const NotFound = ({ message }: { message: string }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/assets/images/graphics/not-found.png"
        width={200}
        height={200}
        alt="not-found"
      />
      <p className="text-[#A1A1A1]">{message}</p>
    </div>
  );
};

export default NotFound;

import { FaStar, FaRegStar } from "react-icons/fa";

const ReviewSection = () => {
  return (
    <>
      <h2 className="text-xl">Tambahkan Ulasan</h2>
      <div className="flex items-center space-x-2">
        <p>Rating:</p>
        <div className="flex items-center">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </div>
      </div>
      <textarea
        id="review"
        className="bg-[#3D3D3D] py-4 px-3.5 text-sm rounded-lg w-full min-h-24"
        placeholder="Transaksi lancar dan aman!"
      />
    </>
  );
};

export default ReviewSection;

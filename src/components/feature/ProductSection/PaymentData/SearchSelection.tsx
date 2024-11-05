import { RiSearch2Line } from "react-icons/ri";

interface SearchSelection {
  searchPlaceholder: string;
  buttonPlaceholder: string;
}

const SearchSelection = ({
  searchPlaceholder,
  buttonPlaceholder,
}: SearchSelection) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-10 relative w-full">
        <RiSearch2Line className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl" />
        <input
          type="text"
          placeholder={searchPlaceholder}
          className="bg-[#3D3D3D] py-4 pl-11 pr-3.5 rounded-l-lg w-full text-sm"
        />
      </div>
      <button className="col-span-2 rounded-r-lg bg-white px-6 py-3 text-[#3D3D3D] text-sm font-semibold">
        {buttonPlaceholder}
      </button>
    </div>
  );
};

export default SearchSelection;

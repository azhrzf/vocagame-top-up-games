import { RiSearch2Line } from "react-icons/ri";

interface SearchSelection {
  searchPlaceholder: string;
  buttonPlaceholder: string;
  searchValue?: string;
  setSearchValue?: (value: string) => void;
}

const SearchSelection = ({
  searchPlaceholder,
  buttonPlaceholder,
  searchValue,
  setSearchValue,
}: SearchSelection) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-9 relative h-full w-full">
        <RiSearch2Line className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl" />
        <input
          type="text"
          placeholder={searchPlaceholder}
          className="bg-[#3D3D3D] py-4 pl-11 pr-3.5 rounded-l-lg h-full w-full text-sm"
          value={searchValue}
          onChange={(e) => setSearchValue && setSearchValue(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="col-span-3 rounded-r-lg bg-white px-2 lg:px-6 py-3 text-[#3D3D3D] text-xs lg:text-sm font-semibold"
      >
        {buttonPlaceholder}
      </button>
    </div>
  );
};

export default SearchSelection;

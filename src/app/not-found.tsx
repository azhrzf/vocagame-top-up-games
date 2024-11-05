import ScreenContainer from "@/components/layout/ScreenContainer";
import NotFound from "@/components/layout/NotFound";

const Custom404 = () => {
  return (
    <div className="flex items-center flex-grow bg-[#1A1A1A] py-28">
      <ScreenContainer className="mx-auto flex items-center">
        <NotFound message="404: Halaman tidak ditemukan" />
      </ScreenContainer>
    </div>
  );
};

export default Custom404;

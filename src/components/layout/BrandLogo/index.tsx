import clsx from "clsx";

interface BrandLogoProps {
  color: "white" | "purple";
  size?: "sm" | "md" | "lg";
}

const BrandLogo = ({ color, size = "sm" }: BrandLogoProps) => {
  const getWidth = (size: "sm" | "md" | "lg") => {
    switch (size) {
      case "sm":
        return {
          container: "w-12",
          circle: "w-8 h-8",
        };
      case "md":
        return {
          container: "w-16",
          circle: "w-10 h-10",
        };
      case "lg":
        return {
          container: "w-20",
          circle: "w-14 h-14",
        };
      default:
        return {
          container: "w-12",
          circle: "w-8 h-8",
        };
    }
  };

  return (
    <div className={clsx("grid grid-cols-3", getWidth(size).container)}>
      <div
        className={clsx(
          "rounded-full",
          getWidth(size).circle,
          color === "white" && "bg-[#FFFFFF] opacity-10",
          color === "purple" && "bg-logo-purple"
        )}
      ></div>
      <div
        className={clsx(
          "rounded-full",
          getWidth(size).circle,
          color === "white" && "bg-[#FFFFFF] opacity-10",
          color === "purple" && "bg-logo-purple"
        )}
      ></div>
    </div>
  );
};

export default BrandLogo;

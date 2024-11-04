interface ScreenContainerProps {
  children: React.ReactNode;
  className?: string;
}

const ScreenContainer = ({ children, className = "" }: ScreenContainerProps) => {
  return (
    <div className={`px-6 lg:px-0 max-w-7xl ${className}`}>{children}</div>
  );
};

export default ScreenContainer;

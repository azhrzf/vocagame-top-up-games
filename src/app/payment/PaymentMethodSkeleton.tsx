import Skeleton from "react-loading-skeleton";

const PaymentMethodSkeleton = () => {
  return (
    <div className="space-y-5">
      <div>
        <Skeleton height={275} className=" w-full rounded-xl" />
      </div>
      <div>
        <Skeleton height={475} className=" w-full rounded-xl" />
      </div>
    </div>
  );
};

export default PaymentMethodSkeleton;

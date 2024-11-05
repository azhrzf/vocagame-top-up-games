import { UseFormRegister, FormState } from "react-hook-form";
import { Product } from "@/types/Product.types";
import { InvoiceOrder } from "@/types/Payment.types";
import UserFormBanner from "@/components/feature/ProductSection/PaymentData/UserFormBanner";
import UserForm from "@/components/feature/ProductSection/PaymentData/UserForm";
import Skeleton from "react-loading-skeleton";
import { Divider } from "antd";

interface MergeUserFormProps {
  currentProduct: Product | null;
  register: UseFormRegister<InvoiceOrder>;
  formState: FormState<InvoiceOrder>;
}

const MergeUserForm = ({ currentProduct, register, formState }: MergeUserFormProps) => {
  if (!currentProduct) {
    return (
      <div>
        <Skeleton height={500} className="w-full rounded-xl" />
      </div>
    );
  }

  return (
    <>
      <UserFormBanner />
      <Divider className="hidden lg:block border border-[#3E3E3E]" />
      <UserForm register={register} formState={formState} />
    </>
  );
};

export default MergeUserForm;

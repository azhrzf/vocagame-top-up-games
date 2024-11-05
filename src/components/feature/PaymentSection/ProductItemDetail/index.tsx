import { Invoice } from "@/types/Payment.types";
import ItemHeader from "./ItemHeader";
import ItemMetadata from "./ItemMetadata";
import ItemDetail from "./ItemDetail";
import ItemFooter from "./ItemFooter";
import { Divider } from "antd";

const ProductItemDetail = ({ ...invoice }: Invoice) => {
  const { id, product, paymentMethod, createdAt } = invoice;

  const { price, priceDiscount } = product.item;
  const validPrice = priceDiscount > 0 ? priceDiscount : price;
  const totalPayment = validPrice + paymentMethod.serviceFee;

  return (
    <div className="flex flex-col justify-between space-y-5 bg-[#282828] rounded-xl overflow-hidden">
      <div className="lg:bg-[#3E3E3E] pt-4 lg:py-4 px-6">
        <ItemHeader
          id={id}
          createdAt={createdAt}
          paymentMethodName={paymentMethod.name}
        />
      </div>
      <Divider className="block lg:hidden border border-[#3E3E3E] mb-3" />
      <div className="px-6">
        <ItemMetadata
          productName={product.name}
          productImage={product.image}
          productPublisher={product.publisher}
        />
      </div>
      <Divider className="border border-[#3E3E3E] mb-3" />
      <div className="px-6">
        <ItemDetail invoice={invoice} />
      </div>
      <div className="py-5 px-6 bg-white">
        <ItemFooter totalPayment={totalPayment} />
      </div>
    </div>
  );
};

export default ProductItemDetail;

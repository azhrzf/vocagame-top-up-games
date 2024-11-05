"use client";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { useInvoicesStore } from "@/stores/useInvoicesStore";
import PaymentMethodSkeleton from "../../PaymentMethodSkeleton";

const PaymentPendingPage = () => {
  const { id: invoiceId } = useParams<{ id: string }>();
  const invoices = useInvoicesStore((state) => state.invoices);
  const currentInvoice = invoices.find((invoice) => invoice.id === invoiceId);

  if (!currentInvoice) {
    notFound();
  }

  return (
    <div className="transition ease-in-out duration-500">
      {currentInvoice ? (
        <div className="bg-[#202020] flex flex-col items-center py-5 px-5 rounded-xl space-y-3">
          <h2 className="uppercase font-semibold text-xl">Pembayaran Sukses</h2>
          <p className="text-[#A1A1A1] text-xs">Terimakasih sudah membeli</p>
          <Link
            href={`/invoice/${invoiceId}`}
            className="bg-[#282828] rounded-3xl py-2 px-4 text-sm"
          >
            Lihat Invoice
          </Link>
        </div>
      ) : (
        <PaymentMethodSkeleton />
      )}
    </div>
  );
};

export default PaymentPendingPage;

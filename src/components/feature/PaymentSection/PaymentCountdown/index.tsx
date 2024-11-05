"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

interface PaymentCountdownProps {
  onRendered?: () => void;
  invoiceId: string;
}

const PaymentCountdown = ({ onRendered, invoiceId }: PaymentCountdownProps) => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      redirect(`/payment/success/${invoiceId}`);
    }
  }, [seconds, invoiceId]);

  useEffect(() => {
    if (onRendered) {
      onRendered();
    }
  }, [onRendered]);

  const formatTime = (time: number) => String(time).padStart(2, "0");

  return (
    <div className="bg-[#202020] flex flex-col items-center py-5 px-5 rounded-xl">
      <h2 className="uppercase font-semibold text-xl mb-6">
        Menunggu Pembayaran
      </h2>
      <p className="text-[#A1A1A1] text-xs">
        Selesaikan pembayarn sebelum waktu habis
      </p>
      <div className="flex items-center space-between space-x-3 my-5">
        <div className="flex flex-col items-center justify-center border border-[#3E3E3E] rounded-2xl py-6 px-5 space-y-2">
          <p className="text-4xl font-semibold">
            {formatTime(Math.floor(seconds / 3600))}
          </p>
          <p className="text-xs">Jam</p>
        </div>
        <div className="flex flex-col items-center justify-center border border-[#3E3E3E] rounded-2xl py-6 px-5 space-y-2">
          <p className="text-4xl font-semibold">
            {formatTime(Math.floor((seconds % 3600) / 60))}
          </p>
          <p className="text-xs">Menit</p>
        </div>
        <div className="flex flex-col items-center justify-center border border-[#3E3E3E] rounded-2xl py-6 px-5 space-y-2">
          <p className="text-4xl font-semibold">{formatTime(seconds % 60)}</p>
          <p className="text-xs">Detik</p>
        </div>
      </div>
      <p className="text-[#A1A1A1] text-xs">Agar Pesanan Kamu Tidak Expired</p>
    </div>
  );
};

export default dynamic(() => Promise.resolve(PaymentCountdown), { ssr: false });

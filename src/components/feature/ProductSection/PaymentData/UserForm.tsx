import { UseFormRegister, FormState } from "react-hook-form";
import { InvoiceOrder } from "@/types/Payment.types";

interface UserFormProps {
  register: UseFormRegister<InvoiceOrder>;
  formState: FormState<InvoiceOrder>;
}

const UserForm = ({ register, formState }: UserFormProps) => {
  const { errors } = formState;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start space-x-3">
        <div className="space-y-2 w-full">
          <label htmlFor="userId" className="block text-sm">
            User ID*
          </label>
          <input
            {...register("userId", { required: "Isi User ID Dulu!" })}
            type="text"
            className="bg-[#3D3D3D] py-4 px-3.5 text-sm rounded-lg w-full"
            placeholder="Masukkan User ID"
          />
          <p className="text-red-500 text-sm">{errors.userId?.message}</p>
        </div>
        <div className="space-y-2 w-full">
          <label htmlFor="zoneId" className="block text-sm">
            Zone ID*
          </label>
          <input
            {...register("zoneId", { required: "Isi Zone ID Dulu!" })}
            type="text"
            id="zoneId"
            className="bg-[#3D3D3D] py-4 px-3.5 text-sm rounded-lg w-full"
            placeholder="Masukkan Zone ID"
          />
          <p className="text-red-500 text-sm">{errors.zoneId?.message}</p>
        </div>
      </div>
      <div className="space-y-2 w-full">
        <label htmlFor="userId" className="block text-sm">
          Nomor Whatsapp
        </label>
        <input
          {...register("userPhoneNumber", {
            required: "Isi No Whatsap Dulu",
            minLength: {
              value: 10,
              message: "Nomor WA harus minimal 10 karakter",
            },
            pattern: {
              value: /^08\d{8,11}$/,
              message: "Format nomor WA tidak valid (contoh: 08123456789)",
            },
          })}
          type="tel"
          id="userPhoneNumber"
          className="bg-[#3D3D3D] py-4 px-3.5 text-sm rounded-lg w-full"
          placeholder="Ketik nomor WA (081*********21)"
        />
        <p className="text-red-500 text-sm">
          {errors.userPhoneNumber?.message}
        </p>
      </div>
      <p className="text-[#949494] text-xs lg:text-sm">
        Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri
        atas pada menu utama game. User ID akan terlihat dibagian bawah Nama
        Karakter Game Anda. Silakan masukkan User ID dan Server ID / Zone ID
        Anda untuk menyelesaikan transaksi. User ID berada diluar tanda kurung
        dan Server ID / Zone ID didalam tanda kurung. Contoh : 12345678(1234).
      </p>
    </div>
  );
};

export default UserForm;

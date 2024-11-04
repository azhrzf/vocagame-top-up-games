const UserForm = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center space-x-3">
        <div className="space-y-2 w-full">
          <label htmlFor="userId" className="block text-sm">
            User ID*
          </label>
          <input
            type="text"
            id="userId"
            className="bg-[#3D3D3D] py-4 px-3.5 text-sm rounded-lg w-full"
            placeholder="Masukkan User ID"
          />
        </div>
        <div className="space-y-2 w-full">
          <label htmlFor="zoneId" className="block text-sm">
            Zone ID*
          </label>
          <input
            type="text"
            id="zoneId"
            className="bg-[#3D3D3D] py-4 px-3.5 text-sm rounded-lg w-full"
            placeholder="Masukkan Zone ID"
          />
        </div>
      </div>
      <div className="space-y-2 w-full">
        <label htmlFor="userId" className="block text-sm">
          Nomor Whatsapp
        </label>
        <input
          type="text"
          id="userId"
          className="bg-[#3D3D3D] py-4 px-3.5 text-sm rounded-lg w-full"
          placeholder="Ketik nomor WA (081*********21)"
        />
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

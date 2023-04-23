import React from "react";
import { Input, Button } from "@chakra-ui/react";
import { BiHomeAlt } from "react-icons/bi";
import { useHistory, Link } from "react-router-dom";

function Daftar() {
  const history = useHistory();

  return (
    <div className="w-full bg-primary">
      <div className="w-full flex flex-row p-5 bg-primary z-40 items-center sticky top-0 ">
        <button
          className="bg-primary2 rounded-full p-1 text-2xl  text-primary"
          onClick={() => history.push("/")}
        >
          <BiHomeAlt></BiHomeAlt>
        </button>
        <h1 className="font-bold text-primary2  w-full text-center">
          PENDAFTARAN CALON ANAK DIDIK PAUD/TK/RA
        </h1>
      </div>
      <div className="w-full px-5 py-20 flex justify-center items-center">
        <form action="" className="max-w-3xl container flex flex-col space-y-4">
          <h1 className="text-white font-light">LENGKAPI DATA DIBAWAH INI</h1>
          <p className="text-white font-bold">A. KETERANGAN ANAK DIDIK</p>
          <h1 className="text-white font-bold">1. NAMA LENGKAP</h1>
          <Input bgColor={"#D9D9D9"}></Input>
          <h1 className="text-white font-bold">2. NAMA PANGGILAN</h1>
          <Input bgColor={"#D9D9D9"}></Input>
          <div className="w-full flex flex-row space-x-3">
            <div>
              <h1 className="text-white font-bold">3. JENIS KELAMIN</h1>
              <Input bgColor={"#D9D9D9"}></Input>
            </div>
            <div>
              <h1 className="text-white font-bold">4.TANGGAL LAHIR</h1>
              <Input type="datetime-local" bgColor={"#D9D9D9"}></Input>
            </div>
          </div>
          <div className="w-full flex flex-row space-x-3">
            <div>
              <h1 className="text-white font-bold">5. AGAMA</h1>
              <Input bgColor={"#D9D9D9"}></Input>
            </div>
            <div>
              <h1 className="text-white font-bold">6.KEWARGANEGARAAN</h1>
              <Input bgColor={"#D9D9D9"}></Input>
            </div>
          </div>

          <div className="w-full flex flex-row space-x-3">
            <div className="w-24">
              <h1 className="text-white font-bold">7. ANAK KE</h1>
              <Input bgColor={"#D9D9D9"}></Input>
            </div>
            <div>
              <h1 className="text-white font-bold">
                8. JUMLAH SAUDARA KANDUNG
              </h1>
              <Input bgColor={"#D9D9D9"}></Input>
            </div>
          </div>
          <h1 className="text-white font-bold">9. BAHASA SEHARI-HARI</h1>
          <Input bgColor={"#D9D9D9"}></Input>

          <h1 className="text-white font-bold">10.BERAT/TINGGI BADAN</h1>
          <div className="w-full flex flex-row space-x-4">
            <Input bgColor={"#D9D9D9"}></Input>
            <Input bgColor={"#D9D9D9"}></Input>
          </div>

          <h1 className="text-white font-bold">11.GOLONGAN DARAH</h1>
          <Input bgColor={"#D9D9D9"}></Input>
          <h1 className="text-white font-bold">
            12. PENYAKIT YANG PERNAH DIDERITA
          </h1>
          <Input bgColor={"#D9D9D9"}></Input>
          <h1 className="text-white font-bold">
            13. PENYAKIT YANG PERNAH DIDERITA
          </h1>
          <Input bgColor={"#D9D9D9"}></Input>
          <h1 className="text-white font-bold">14. NOMOR TELEPON/HP</h1>
          <Input bgColor={"#D9D9D9"}></Input>
          <h1 className="text-white font-bold">
            15. JARAK TEMPAT TINGGAL KE SEKOLAH
          </h1>
          <Input bgColor={"#D9D9D9"}></Input>
          <h1 className="text-white font-bold">B. ORANGTUA/WALI</h1>
          <h1 className="text-white font-bold">16. NAMA AYAH KANDUNG</h1>
          <Input bgColor={"#D9D9D9"}></Input>
          <h1 className="text-white font-bold">17. NAMA IBU KANDUNG</h1>
          <Input bgColor={"#D9D9D9"}></Input>
          <h1 className="text-white font-bold">
            18. PENDIDIKAN TERTINGGI AYAH KANDUNG
          </h1>
          <Input bgColor={"#D9D9D9"}></Input>
          <h1 className="text-white font-bold">
            19. PENDIDIKAN TERTINGGI IBU KANDUNG
          </h1>
          <Input bgColor={"#D9D9D9"}></Input>
          <h1 className="text-white font-bold">20. PEKERJAAN AYAH KANDUNG</h1>
          <Input bgColor={"#D9D9D9"}></Input>
          <h1 className="text-white font-bold">21. PEKERJAAN IBU KANDUNG</h1>
          <Input bgColor={"#D9D9D9"}></Input>

          <h1 className="text-white font-light">
            APABILA MEMILIKI WALI ANAK HARAP DIISI
          </h1>
          <h1 className="text-white font-bold">22. NAMA WALI</h1>
          <Input bgColor={"#D9D9D9"}></Input>
          <h1 className="text-white font-bold">23. PENDIDIKAN TERTINGGI</h1>
          <Input bgColor={"#D9D9D9"}></Input>
          <h1 className="text-white font-bold">24. HUBUNGAN KELUARGA</h1>
          <Input bgColor={"#D9D9D9"}></Input>
          <h1 className="text-white font-bold">25. PEKERJAAN</h1>
          <Input bgColor={"#D9D9D9"}></Input>
          <h1 className="text-white font-bold">C. ASAL MULA ANAK</h1>
          <h1 className="text-white font-bold">
            26. MASUK PAUD/TK/RA INI SEBAGAI
          </h1>
          <Input bgColor={"#D9D9D9"}></Input>
          <div>
            <h1 className="text-white font-light">PINDAHAN DARI</h1>
            <div>
              <h1 className="text-white font-bold">NAMA PAUD/TK/RA</h1>
              <Input bgColor={"#D9D9D9"}></Input>
              <h1 className="text-white font-bold">HARI/TANGGAL</h1>
              <Input type="datetime-local" bgColor={"#D9D9D9"}></Input>
            </div>
          </div>
          <Link to="/daftar/upload-dokumen/33">
            <Button bgColor={"#A5FF4C"} rounded={"full"}>
              KUMPULKAN FORMULIR
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Daftar;

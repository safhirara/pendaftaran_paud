import React from "react";
import {
  Input,
  Button,
  Stack,
  Select,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  FormLabel,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { BiHomeAlt } from "react-icons/bi";
import { useHistory, Link } from "react-router-dom";
import LogoPaud from "../assets/logo-paud.png";
import { useState, useEffect } from "react";

function Daftar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const dataLocal = JSON.parse(localStorage.getItem("data_form"));
    if (dataLocal) {
      onOpen(true);
      setFormData((prevState) => ({
        ...prevState,
        ...dataLocal,
      }));
    }
  }, []);

  const clearData = () => {
    localStorage.removeItem("data_form");
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("data_form", JSON.stringify(formData));
    history.push("/daftar/upload-dokumen");
  };

  const handleChange = (attr, num) => {
    !num
      ? setFormData((prevState) => ({
          ...prevState,
          [attr.target.name]: attr.target.value,
        }))
      : setFormData((prevState) => ({
          ...prevState,
          [attr.target.name]: parseInt(attr.target.value),
        }));
  };

  return (
    <div className="w-full bg-primary">
      <div className="sticky top-0 z-40 flex flex-row items-center w-full p-5 bg-primary ">
        <button
          className="absolute p-1 text-2xl rounded-full bg-primary2 text-primary"
          onClick={() => history.push("/")}
        >
          <BiHomeAlt></BiHomeAlt>
        </button>
        <h1 className="w-full font-bold text-center text-primary2">
          PENDAFTARAN CALON ANAK DIDIK PAUD/TK/RA
        </h1>
      </div>
      <div className="flex items-center justify-center w-full">
        <h1 className="w-full font-bold text-center text-primary2">
          KB MUGI RAYAHU, Desa Serayularangan, Kecamatan Mrebet, Purbalingga
        </h1>
      </div>
      <div className="flex items-center justify-center w-full">
        <img src={LogoPaud} className="w-32" alt="logo paud" />
      </div>

      <div className="flex items-center justify-center w-full px-5 py-12">
        <form
          action=""
          className="container flex flex-col max-w-3xl space-y-4"
          onSubmit={handleSubmit}
        >
          <h1 className="font-light text-white">LENGKAPI DATA DIBAWAH INI</h1>
          <p className="font-bold text-white">A. KETERANGAN ANAK DIDIK</p>
          <h1 className="font-bold text-white">1. NAMA LENGKAP</h1>
          <Input
            required
            bgColor={"#D9D9D9"}
            placeholder="Masukkan Nama Lengkap"
            value={formData.nama_lengkap}
            name="nama_lengkap"
            onChange={(e) => handleChange(e, false)}
          ></Input>
          <FormLabel className="font-bold text-white">
            2. NAMA PANGGILAN
          </FormLabel>
          <Input
            required
            bgColor={"#D9D9D9"}
            placeholder="Masukkan Nama Panggilan"
            value={formData.nama_panggilan}
            name="nama_panggilan"
            onChange={(e) => handleChange(e, false)}
          ></Input>
          <div className="flex flex-row w-full space-x-3">
            <div>
              <FormLabel className="font-bold text-white">
                3. JENIS KELAMIN
              </FormLabel>
              <Select
                bgColor={"#D9D9D9"}
                required
                variant="outline"
                placeholder="Pilih Jenis Kelamin"
                value={formData.jenis_kelamin}
                name="jenis_kelamin"
                onChange={(e) => handleChange(e, false)}
              >
                <option value="laki-laki">LAKI LAKI</option>
                <option value="perempuan">PEREMPUAN</option>
              </Select>
            </div>
            <div>
              <FormLabel className="font-bold text-white">
                4.TANGGAL LAHIR
              </FormLabel>
              <Input
                type="date"
                required
                bgColor={"#D9D9D9"}
                value={formData.tanggal_lahir}
                name="tanggal_lahir"
                onChange={(e) => handleChange(e, false)}
              ></Input>
            </div>
          </div>
          <div className="flex flex-row w-full space-x-3">
            <div>
              <FormLabel className="font-bold text-white">5. AGAMA</FormLabel>
              <Select
                bgColor={"#D9D9D9"}
                required
                variant="outline"
                placeholder="Pilih Agama"
                value={formData.agama}
                name="agama"
                onChange={(e) => handleChange(e, false)}
              >
                <option value="1">ISLAM</option>
                <option value="2">KRISTEN</option>
                <option value="3">KHATOLIK</option>
                <option value="4">HINDU</option>
                <option value="5">BUDHA</option>
                <option value="6">KONGHUCU</option>
              </Select>
            </div>
            <div>
              <FormLabel className="font-bold text-white">
                6.KEWARGANEGARAAN
              </FormLabel>
              <Select
                bgColor={"#D9D9D9"}
                required
                variant="outline"
                placeholder="Pilih Kewarganegaraan"
                value={formData.kewarganegaraan}
                name="kewarganegaraan"
                onChange={(e) => handleChange(e, false)}
              >
                <option value="WNI">WNI</option>
                <option value="WNA">WNA</option>
              </Select>
            </div>
          </div>

          <div className="flex flex-row w-full space-x-3">
            <div className="w-24">
              <FormLabel className="font-bold text-white">7. ANAK KE</FormLabel>
              <Input
                type="number"
                required
                bgColor={"#D9D9D9"}
                value={formData.anak_ke}
                name="anak_ke"
                onChange={(e) => handleChange(e, false)}
              ></Input>
            </div>
            <div>
              <FormLabel className="font-bold text-white">
                8. JUMLAH SAUDARA KANDUNG
              </FormLabel>
              <Input
                type="number"
                required
                bgColor={"#D9D9D9"}
                value={formData.jumlah_saudara}
                name="jumlah_saudara"
                onChange={(e) => handleChange(e, false)}
              ></Input>
            </div>
          </div>
          <FormLabel className="font-bold text-white">
            9. BAHASA SEHARI-HARI
          </FormLabel>
          <Input
            bgColor={"#D9D9D9"}
            required
            value={formData.bahasa_sehari_hari}
            name="bahasa_sehari_hari"
            onChange={(e) => handleChange(e, false)}
          ></Input>

          <FormLabel className="font-bold text-white">
            10.BERAT/TINGGI BADAN
          </FormLabel>
          <div className="flex flex-row w-full space-x-4">
            <InputGroup>
              <Input
                required
                type="number"
                bgColor={"#D9D9D9"}
                value={formData.bb}
                name="bb"
                onChange={(e) => handleChange(e, true)}
              ></Input>
              <InputRightAddon children="KG"></InputRightAddon>
            </InputGroup>
            <InputGroup>
              <Input
                type="number"
                required
                bgColor={"#D9D9D9"}
                value={formData.tb}
                name="tb"
                onChange={(e) => handleChange(e, false)}
              ></Input>
              <InputRightAddon children="CM"></InputRightAddon>
            </InputGroup>
          </div>

          <FormLabel className="font-bold text-white">
            11.GOLONGAN DARAH
          </FormLabel>
          <Select
            bgColor={"#D9D9D9"}
            required
            variant="outline"
            placeholder="Pilih Golongan Darah"
            value={formData.gol_darah}
            name="gol_darah"
            onChange={(e) => handleChange(e, false)}
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
            <option value="O">O</option>
          </Select>
          <FormLabel className="font-bold text-white">
            12. PENYAKIT YANG PERNAH DIDERITA
          </FormLabel>
          <Input
            bgColor={"#D9D9D9"}
            value={formData.riwayat_penyakit}
            name="riwayat_penyakit"
            onChange={(e) => handleChange(e, false)}
          ></Input>
          <FormLabel className="font-bold text-white">
            13. ALAMAT TEMPAT TINGGAL
          </FormLabel>
          <Input
            bgColor={"#D9D9D9"}
            required
            value={formData.alamat}
            name="alamat"
            onChange={(e) => handleChange(e, false)}
          ></Input>
          <FormLabel className="font-bold text-white">
            14. NOMOR TELEPON/HP
          </FormLabel>
          <InputGroup>
            <InputLeftAddon children="+62"></InputLeftAddon>
            <Input
              bgColor={"#D9D9D9"}
              required
              type="number"
              value={formData.no_telp}
              name="no_telp"
              onChange={(e) => handleChange(e, true)}
            ></Input>
          </InputGroup>
          <FormLabel className="font-bold text-white">
            15. JARAK TEMPAT TINGGAL KE SEKOLAH
          </FormLabel>
          <Input
            bgColor={"#D9D9D9"}
            required
            value={formData.jarak_tempat_tinggal}
            name="jarak_tempat_tinggal"
            onChange={(e) => handleChange(e, false)}
          ></Input>
          <FormLabel className="font-bold text-white">
            B. ORANGTUA/WALI
          </FormLabel>
          <FormLabel className="font-bold text-white">
            16. NAMA AYAH KANDUNG
          </FormLabel>
          <Input
            bgColor={"#D9D9D9"}
            value={formData.nama_ayah}
            name="nama_ayah"
            onChange={(e) => handleChange(e, false)}
          ></Input>
          <FormLabel className="font-bold text-white">
            17. NAMA IBU KANDUNG
          </FormLabel>
          <Input
            bgColor={"#D9D9D9"}
            value={formData.nama_ibu}
            name="nama_ibu"
            onChange={(e) => handleChange(e, false)}
          ></Input>
          <FormLabel className="font-bold text-white">
            18. PENDIDIKAN TERTINGGI AYAH KANDUNG
          </FormLabel>
          <Select
            bgColor={"#D9D9D9"}
            variant="outline"
            placeholder="Pilih Pendidikan"
            value={formData.pendidikan_tertinggi_ayah}
            name="pendidikan_tertinggi_ayah"
            onChange={(e) => handleChange(e, false)}
          >
            <option value="SARJANA">SARJANA</option>
            <option value="D3">D3</option>
            <option value="SMA/SMK/MA">SMA/SMK/MA</option>
            <option value="SMP">SMP</option>
            <option value="SD">SD</option>
            <option value="TIDAK SEKOLAH">TIDAK SEKOLAH</option>
          </Select>
          <FormLabel className="font-bold text-white">
            19. PENDIDIKAN TERTINGGI IBU KANDUNG
          </FormLabel>
          <Select
            bgColor={"#D9D9D9"}
            variant="outline"
            placeholder="Pilih Pendidikan"
            value={formData.pendidikan_tertinggi_ibu}
            name="pendidikan_tertinggi_ibu"
            onChange={(e) => handleChange(e, false)}
          >
            <option value="SARJANA">SARJANA</option>
            <option value="D3">D3</option>
            <option value="SMA/SMK/MA">SMA/SMK/MA</option>
            <option value="SMP">SMP</option>
            <option value="SD">SD</option>
            <option value="TIDAK SEKOLAH">TIDAK SEKOLAH</option>
          </Select>
          <FormLabel className="font-bold text-white">
            20. PEKERJAAN AYAH KANDUNG
          </FormLabel>
          <Input
            bgColor={"#D9D9D9"}
            value={formData.pekerjaan_ayah}
            name="pekerjaan_ayah"
            onChange={(e) => handleChange(e, false)}
          ></Input>
          <FormLabel className="font-bold text-white">
            21. PEKERJAAN IBU KANDUNG
          </FormLabel>
          <Input
            bgColor={"#D9D9D9"}
            value={formData.pekerjaan_ibu}
            name="pekerjaan_ibu"
            onChange={(e) => handleChange(e, false)}
          ></Input>

          <h1 className="font-light text-white">
            APABILA MEMILIKI WALI ANAK HARAP DIISI
          </h1>
          <FormLabel className="font-bold text-white">22. NAMA WALI</FormLabel>
          <Input
            bgColor={"#D9D9D9"}
            value={formData.nama_wali}
            name="nama_wali"
            onChange={(e) => handleChange(e, false)}
          ></Input>
          <FormLabel className="font-bold text-white">
            23. PENDIDIKAN TERTINGGI
          </FormLabel>
          <Input
            bgColor={"#D9D9D9"}
            value={formData.pendidikan_tertinggi_wali}
            name="pendidikan_tertinggi_wali"
            onChange={(e) => handleChange(e, false)}
          ></Input>
          <FormLabel className="font-bold text-white">
            24. HUBUNGAN KELUARGA
          </FormLabel>
          <Input
            bgColor={"#D9D9D9"}
            value={formData.pekerjaan_wali}
            name="pekerjaan_wali"
            onChange={(e) => handleChange(e, false)}
          ></Input>
          <FormLabel className="font-bold text-white">25. PEKERJAAN</FormLabel>
          <Input
            bgColor={"#D9D9D9"}
            value={formData.hubungan_keluarga_wali}
            name="hubungan_keluarga_wali"
            onChange={(e) => handleChange(e, false)}
          ></Input>
          <h1 className="font-bold text-white">C. ASAL MULA ANAK</h1>
          <FormLabel className="font-bold text-white">
            26. MASUK PAUD/TK/RA INI SEBAGAI
          </FormLabel>

          <Select
            bgColor={"#D9D9D9"}
            variant="outline"
            placeholder="Pilih Status"
            required
            value={formData.status_murid}
            name="status_murid"
            onChange={(e) => handleChange(e, false)}
          >
            <option value="BARU">BARU</option>
            <option value="PINDAHAN">PINDAHAN</option>
          </Select>
          <div
            className={`${
              formData.status_murid == "pindahan" ? "block" : "hidden"
            }`}
          >
            <h1 className="font-light text-white">PINDAHAN DARI</h1>
            <div>
              <FormLabel className="font-bold text-white">
                NAMA PAUD/TK/RA
              </FormLabel>
              <Input
                bgColor={"#D9D9D9"}
                value={formData.nama_sekolah_sebelumnya}
                name="nama_sekolah_sebelumnya"
                onChange={(e) => handleChange(e, false)}
              ></Input>
              <FormLabel className="font-bold text-white">
                HARI/TANGGAL
              </FormLabel>
              <Input
                type="date"
                bgColor={"#D9D9D9"}
                onChange={(e) => handleChange(e, false)}
              ></Input>
            </div>
          </div>

          <Button bgColor={"#A5FF4C"} rounded={"full"} type="submit">
            KUMPULKAN FORMULIR
          </Button>
        </form>
      </div>
      <Modal isOpen={isOpen} isCentered onClose={onClose} size={"sm"}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="py-5">
              <h1 className="text-xl font-bold text-center text-primary">
                Anda telah mengisi beberapa field sebelumnya, apakah Anda ingin
                melanjutkan mengisi form?
              </h1>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={clearData}>
              Reset Data
            </Button>
            <Button bgColor={"#A5FF4C"} onClick={onClose}>
              Lanjutkan Mengisi
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Daftar;
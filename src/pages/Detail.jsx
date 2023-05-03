import { useState, useEffect } from "react";
import {
  Input,
  Button,
  Select,
  InputLeftAddon,
  InputRightAddon,
  InputGroup,
} from "@chakra-ui/react";
import { BiHomeAlt } from "react-icons/bi";
import { useHistory, Link, useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";

function Detail() {
  const history = useHistory();
  const [data, setData] = useState();
  const [imageUrls, setImageUrls] = useState([]);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    async function loadImages() {
      const { data: images, error } = await supabase.storage
        .from("data_murid")
        .list("akta_kelahiran");

      if (error) {
        console.log(error);
      } else {
        setImageUrls(
          images.map((image) =>
            supabase.storage.from("data_murid").getPublicUrl(image.path)
          )
        );
      }
    }

    loadImages();
  }, []);

  async function getList() {
    let { data: pendaftar, error } = await supabase
      .from("pendaftar")
      .select()
      .eq("id", params.id);
    setData(pendaftar);
  }

  useEffect(() => {
    getList();
  }, []);

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
        <img src={imageUrls} alt="this is image" />
      </div>
      <div className="w-full px-5 py-20 flex justify-center items-center">
        <form action="" className="max-w-3xl container flex flex-col space-y-4">
          {data &&
            data.map((e) => (
              <>
                <h1 className="text-white font-light">
                  LENGKAPI DATA DIBAWAH INI
                </h1>
                <p className="text-white font-bold">A. KETERANGAN ANAK DIDIK</p>
                <h1 className="text-white font-bold">1. NAMA LENGKAP</h1>
                <Input
                  disabled
                  bgColor={"#D9D9D9"}
                  value={e.nama_lengkap}
                ></Input>
                <h1 className="text-white font-bold">2. NAMA PANGGILAN</h1>
                <Input
                  disabled
                  bgColor={"#D9D9D9"}
                  value={e.nama_panggilan}
                ></Input>
                <div className="w-full flex flex-row space-x-3">
                  <div>
                    <h1 className="text-white font-bold">3. JENIS KELAMIN</h1>
                    <Select
                      disabled
                      bgColor={"#D9D9D9"}
                      value={e.jenis_kelamin}
                    >
                      <option value="1">Laki Laki</option>
                      <option value="2">Perempuan</option>
                    </Select>
                  </div>
                  <div>
                    <h1 className="text-white font-bold">4.TANGGAL LAHIR</h1>
                    <Input
                      type="datetime-local"
                      disabled
                      bgColor={"#D9D9D9"}
                      value={e.tanggal_lahir}
                    ></Input>
                  </div>
                </div>
                <div className="w-full flex flex-row space-x-3">
                  <div>
                    <h1 className="text-white font-bold">5. AGAMA</h1>
                    <Select disabled bgColor={"#D9D9D9"} value={e.agama}>
                      <option value="1">Islam</option>
                    </Select>
                  </div>
                  <div>
                    <h1 className="text-white font-bold">6.KEWARGANEGARAAN</h1>
                    <Input
                      disabled
                      bgColor={"#D9D9D9"}
                      value={e?.kewarganegaraan || null}
                    ></Input>
                  </div>
                </div>

                <div className="w-full flex flex-row space-x-3">
                  <div className="w-24">
                    <h1 className="text-white font-bold">7. ANAK KE</h1>
                    <Input
                      disabled
                      value={e.anak_ke}
                      bgColor={"#D9D9D9"}
                    ></Input>
                  </div>
                  <div>
                    <h1 className="text-white font-bold">
                      8. JUMLAH SAUDARA KANDUNG
                    </h1>
                    <Input
                      disabled
                      bgColor={"#D9D9D9"}
                      value={e?.jumlah_saudara}
                    ></Input>
                  </div>
                </div>
                <h1 className="text-white font-bold">9. BAHASA SEHARI-HARI</h1>
                <Input
                  disabled
                  bgColor={"#D9D9D9"}
                  value={e?.bahasa_sehari_hari || null}
                ></Input>

                <h1 className="text-white font-bold">10.BERAT/TINGGI BADAN</h1>
                <div className="w-full flex flex-row space-x-4">
                  <InputGroup>
                    <Input
                      required
                      type="number"
                      bgColor={"#D9D9D9"}
                      value={e?.bb}
                      disabled
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
                      value={e?.tb}
                      disabled
                      name="tb"
                      onChange={(e) => handleChange(e, false)}
                    ></Input>
                    <InputRightAddon children="CM"></InputRightAddon>
                  </InputGroup>
                </div>

                <h1 className="text-white font-bold">11.GOLONGAN DARAH</h1>
                <Input
                  disabled
                  bgColor={"#D9D9D9"}
                  value={e?.gol_darah}
                ></Input>
                <h1 className="text-white font-bold">
                  12. PENYAKIT YANG PERNAH DIDERITA
                </h1>
                <Input
                  disabled
                  bgColor={"#D9D9D9"}
                  value={e?.riwayat_penyakit}
                ></Input>
                <h1 className="text-white font-bold">
                  13. ALAMAT TEMPAT TINGGAL
                </h1>
                <Input disabled bgColor={"#D9D9D9"} value={e.alamat}></Input>
                <h1 className="text-white font-bold">14. NOMOR TELEPON/HP</h1>
                <InputGroup>
                  <InputLeftAddon children="+62"></InputLeftAddon>
                  <Input
                    bgColor={"#D9D9D9"}
                    required
                    disabled
                    value={e.no_telp}
                    name="no_telp"
                    onChange={(e) => handleChange(e, true)}
                  ></Input>
                </InputGroup>
                <h1 className="text-white font-bold">
                  15. JARAK TEMPAT TINGGAL KE SEKOLAH
                </h1>
                <Input
                  disabled
                  bgColor={"#D9D9D9"}
                  value={e.jarak_tempat_tinggal}
                ></Input>
                <h1 className="text-white font-bold">B. ORANGTUA/WALI</h1>
                <h1 className="text-white font-bold">16. NAMA AYAH KANDUNG</h1>
                <Input disabled bgColor={"#D9D9D9"} value={e.nama_ayah}></Input>
                <h1 className="text-white font-bold">17. NAMA IBU KANDUNG</h1>
                <Input disabled bgColor={"#D9D9D9"} value={e.nama_ibu}></Input>
                <h1 className="text-white font-bold">
                  18. PENDIDIKAN TERTINGGI AYAH KANDUNG
                </h1>
                <Input
                  disabled
                  bgColor={"#D9D9D9"}
                  value={e.pendidikan_tertinggi_ayah}
                ></Input>
                <h1 className="text-white font-bold">
                  19. PENDIDIKAN TERTINGGI IBU KANDUNG
                </h1>
                <Input
                  disabled
                  bgColor={"#D9D9D9"}
                  value={e.pendidikan_tertinggi_ibu}
                ></Input>
                <h1 className="text-white font-bold">
                  20. PEKERJAAN AYAH KANDUNG
                </h1>
                <Input
                  disabled
                  bgColor={"#D9D9D9"}
                  value={e.pekerjaan_ayah}
                ></Input>
                <h1 className="text-white font-bold">
                  21. PEKERJAAN IBU KANDUNG
                </h1>
                <Input
                  disabled
                  bgColor={"#D9D9D9"}
                  value={e.pekerjaan_ibu}
                ></Input>

                <h1 className="text-white font-light">
                  APABILA MEMILIKI WALI ANAK HARAP DIISI
                </h1>
                <h1 className="text-white font-bold">22. NAMA WALI</h1>
                <Input disabled bgColor={"#D9D9D9"} value={e.nama_wali}></Input>
                <h1 className="text-white font-bold">
                  23. PENDIDIKAN TERTINGGI
                </h1>
                <Input
                  disabled
                  bgColor={"#D9D9D9"}
                  value={e.pendidikan_tertinggi_wali}
                ></Input>
                <h1 className="text-white font-bold">24. HUBUNGAN KELUARGA</h1>
                <Input
                  disabled
                  bgColor={"#D9D9D9"}
                  value={e.hubungan_keluarga_wali}
                ></Input>
                <h1 className="text-white font-bold">25. PEKERJAAN</h1>
                <Input
                  disabled
                  bgColor={"#D9D9D9"}
                  value={e.pekerjaan_wali}
                ></Input>
                <h1 className="text-white font-bold">C. ASAL MULA ANAK</h1>
                <h1 className="text-white font-bold">
                  26. MASUK PAUD/TK/RA INI SEBAGAI
                </h1>
                <Input
                  disabled
                  bgColor={"#D9D9D9"}
                  value={e.status_murid || null}
                ></Input>

                <div
                  className={`${e.status_murid == "baru" ? "hidden" : "block"}`}
                >
                  <h1 className="text-white font-light">PINDAHAN DARI</h1>
                  <div>
                    <h1 className="text-white font-bold">NAMA PAUD/TK/RA</h1>
                    <Input
                      disabled
                      bgColor={"#D9D9D9"}
                      value={e.nama_sekolah || null}
                    ></Input>
                    <h1 className="text-white font-bold">HARI/TANGGAL</h1>
                    <Input
                      type="datetime-local"
                      disabled
                      bgColor={"#D9D9D9"}
                    ></Input>
                  </div>
                </div>
                <Link to="/admin/list">
                  <Button width={"full"} bgColor={"#A5FF4C"} rounded={"full"}>
                    KEMBALI
                  </Button>
                </Link>
              </>
            ))}
        </form>
      </div>
    </div>
  );
}

export default Detail;

import React from "react";
import { Input, Button } from "@chakra-ui/react";
import { BiHomeAlt } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { HiOutlineCloudUpload } from "react-icons/hi";
import { BsFileEarmarkArrowUp } from "react-icons/bs";
import Lanang from "../assets/GambarLanang.png";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import { supabase } from "../supabaseClient";
import { v4 as uuidv4 } from "uuid";

function UploadDokumen() {
  console.log(uuidv4());
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState();
  const finalRef = React.useRef(null);
  const [fileUrl1, setFileUrl1] = useState("");
  const [files1, setFiles1] = useState(null);
  const [files2, setFiles2] = useState(null);
  const [fileName1, setFileName1] = useState("");
  const [fileUrl2, setFileUrl2] = useState("");
  const [fileName2, setFileName2] = useState("");
  const history = useHistory();

  const handleFileUpload1 = (event) => {
    const file = event.target.files[0];
    setFiles1(file);
    setFileName1(file.name);
    setFileUrl1(URL.createObjectURL(file));
    // lakukan sesuatu dengan file yang di-upload
  };
  const handleFileUpload2 = (event) => {
    const file = event.target.files[0];
    setFileName2(file.name);
    setFileUrl2(URL.createObjectURL(file));
    // lakukan sesuatu dengan file yang di-upload
  };

  useEffect(() => {
    if (!localStorage.getItem("data_form")) {
      history.push("/");
    }
  }, []);

  const handleFileClear1 = () => {
    setFileName("");
    setFileUrl1("");
  };
  const handleFileClear2 = () => {
    setFileName("");
    setFileUrl1("");
  };

  console.log("ini files", files1);

  async function handleFileUpload() {
    const dataForm = JSON.parse(localStorage.getItem("data_form"));
    if (files1) {
      const { data, error } = await supabase.storage
        .from("berkas_pendaftaran")
        .upload(dataForm.nama_lengkap + "/" + "Akta Kelahiran", files1);
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    }
    if (files2) {
      const { data, error } = await supabase.storage
        .from("berkas_pendaftaran")
        .upload(dataForm.nama_lengkap + "/" + "Kartu Keluarga", files2);
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    }
  }

  const handleAddData = async (e) => {
    e.preventDefault();
    const dataForm = JSON.parse(localStorage.getItem("data_form"));
    console.log("ini data Form", dataForm);
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("pendaftar")
        .insert([dataForm]);
      if (error) throw error;
      handleFileUpload();
      onOpen();
      localStorage.removeItem("data_form");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-primary">
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
      <div className="w-full flex justify-center items-center">
        <div className="max-w-3xl container px-5 py-20 flex flex-col space-y-10 justify-center items-center">
          <h1 className="text-green-400 font-bold text-center">
            FORMULIR BERHASIL DIKUMPULKAN!
          </h1>
          <form action="" onSubmit={handleAddData}>
            <div className="w-full flex flex-col space-y-10">
              <h1 className="text-white font-light">
                SILAHKAN UNGGAH DOKUMEN DIBAWAH INI
              </h1>
              <label className="flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg tracking-wide border border-gray-200 cursor-pointer hover:bg-gray-100">
                {fileUrl1 ? (
                  <>
                    <img
                      src={fileUrl1}
                      alt={fileName1}
                      className="h-40 w-auto mb-4"
                    />
                    <button
                      type="button"
                      className=" right-0 p-2  text-gray-400 font-bold text-sm hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                      onClick={handleFileClear1}
                    >
                      Hapus Dokumen
                    </button>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col items-center justify-center">
                      <BsFileEarmarkArrowUp className="h-12 w-12 text-gray-500" />

                      <p className="mt-2 text-base font-medium text-gray-500">
                        AKTA KELAHIRAN
                      </p>
                    </div>
                  </>
                )}
                <input
                  required
                  name="akta"
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload1}
                />
              </label>
              <label className="flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg tracking-wide border border-gray-200 cursor-pointer hover:bg-gray-100">
                {fileUrl2 ? (
                  <>
                    <img
                      src={fileUrl2}
                      alt={fileName2}
                      className="h-40 w-auto mb-4"
                    />
                    <button
                      type="button"
                      className=" right-0 p-2  text-gray-400 font-bold text-sm hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                      onClick={handleFileClear2}
                    >
                      Hapus Dokumen
                    </button>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col items-center justify-center">
                      <BsFileEarmarkArrowUp className="h-12 w-12 text-gray-500" />

                      <p className="mt-2 text-base font-medium text-gray-500">
                        KARTU KELUARGA
                      </p>
                    </div>
                  </>
                )}
                <input
                  required
                  type="file"
                  name="kk"
                  className="hidden"
                  onChange={handleFileUpload2}
                />
              </label>

              <Link to="/daftar">
                <Button bgColor={"#FFE353"} width={"full"} onClick={onOpen}>
                  Kembali
                </Button>
              </Link>

              <Button bgColor={"#A5FF4C"} type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
        <>
          <Modal
            finalFocusRef={finalRef}
            isOpen={isOpen}
            isCentered
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent width={"sm"}>
              <ModalBody bgColor={"#FCE776"} rounded={"lg"}>
                <div className=" p-5 my-3 rounded-lg overflow-hidden bg-primary">
                  <h1 className="text-5xl font-bold text-primary2">SELAMAT!</h1>
                  <h1 className="text-3xl font-bold text-primary2">
                    ANDA TELAH BERHASIL MENDAFTAR
                  </h1>
                  <img
                    src={Lanang}
                    className="relative scale-125 top-16 right-20 left-32"
                    alt=""
                  />
                  <Link to="/">
                    <Button
                      onClick={onClose}
                      bgColor={"#FCE776"}
                      color={"#40305D"}
                    >
                      KEMBALI
                    </Button>
                  </Link>
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      </div>
    </div>
  );
}

export default UploadDokumen;

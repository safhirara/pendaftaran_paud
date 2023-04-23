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

function UploadDokumen() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [fileUrl, setFileUrl] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
    setFileUrl(URL.createObjectURL(file));
    // lakukan sesuatu dengan file yang di-upload
  };

  const handleFileClear = () => {
    setFileName("");
    setFileUrl("");
  };
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

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
          <div className="w-full flex flex-col space-y-10">
            <h1 className="text-white font-light">
              SILAHKAN UNGGAH DOKUMEN DIBAWAH INI
            </h1>
            <label className="flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg tracking-wide border border-gray-200 cursor-pointer hover:bg-gray-100">
              {fileUrl ? (
                <>
                  <img
                    src={fileUrl}
                    alt={fileName}
                    className="h-40 w-auto mb-4"
                  />
                  <button
                    type="button"
                    className=" right-0 p-2  text-gray-400 font-bold text-sm hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                    onClick={handleFileClear}
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
                type="file"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
            <label className="flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg tracking-wide border border-gray-200 cursor-pointer hover:bg-gray-100">
              {fileUrl ? (
                <>
                  <img
                    src={fileUrl}
                    alt={fileName}
                    className="h-40 w-auto mb-4"
                  />
                  <button
                    type="button"
                    className=" right-0 p-2  text-gray-400 font-bold text-sm hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                    onClick={handleFileClear}
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
                type="file"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
            <Button bgColor={"#A5FF4C"} onClick={onOpen}>
              Submit
            </Button>
          </div>
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

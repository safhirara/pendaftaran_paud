import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { Input, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import Lanang from "../assets/GambarLanang.png";
import Wadon from "../assets/GambarWadon.png";
import Wave from "../assets/wave.png";
import LogoPaud from "../assets/logo-paud.png";
import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

function Admin() {
  const [id, setId] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setId(session.user.id);
    });
  }, []);

  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }

  const history = useHistory();
  return (
    <div className="bg-gradient-to-b from-primary2  h-screen flex justify-center items-center">
      <div className="  w-full max-w-2xl z-20 flex flex-col justify-between h-screen to-white ">
        <div className="w-full flex flex-row p-5 items-center sticky top-0 ">
          <button
            className="bg-primary rounded-full p-1 text-2xl  text-primary2"
            onClick={() => history.push("/")}
          >
            <BiHomeAlt></BiHomeAlt>
          </button>
          <h1 className="font-bold text-primary  w-full text-center">{id}</h1>
          <button
            className=" rounded-full p-1 text-2xl  text-primary"
            onClick={onOpen}
          >
            <GiHamburgerMenu></GiHamburgerMenu>
          </button>
        </div>
        <div className="w-full flex space-y-3 px-10 py-20  justify-center  flex-col">
          <div className="w-full flex justify-center flex-col">
            <img src={LogoPaud} className="w-20" alt="" />
            <h1 className="text-3xl font-bold text-primary">Selamat Datang!</h1>
            <h1 className="text-xl font-bold text-primary">
              dilayanan pengelolaan KB Mugi Rahayu
            </h1>
          </div>
        </div>
        <div className="w-full bg-primary p-5 rounded-t-xl h-full flex flex-col justify-between">
          <h1 className="text-white font-medium">
            Apa yang ingin anda kunjungi :
          </h1>
          <div className="w-full flex  flex-col space-y-8  justify-center items-center">
            <Button
              width={"full"}
              color={"#2C2152"}
              bgColor={"#FEE771"}
              size={"lg"}
            >
              <Link to="/admin/list">List pendaftaran Calon Siswa</Link>
            </Button>
            <Button
              width={"full"}
              color={"#2C2152"}
              bgColor={"#FEE771"}
              size={"lg"}
            >
              <Link to="admin/cetak">Cetak Laporan Pendaftaran</Link>
            </Button>
          </div>
          <Button
            width={"min"}
            color={"#2C2152"}
            bgColor={"#FEE771"}
            onClick={() => history.push("/")}
          >
            <BiArrowBack />
          </Button>
        </div>
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>KBM MUGI RAHAYU</DrawerHeader>

          <DrawerBody>
            <div className="space-y-5">
              <Button width={"full"}>Pengaturan</Button>
              <Button width={"full"} onClick={signOut}>
                Logout
              </Button>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Admin;

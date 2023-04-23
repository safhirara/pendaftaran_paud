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
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
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

function List() {
  const [id, setId] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [list, setList] = useState([]);
  async function getList() {
    let { data: pendaftar, error } = await supabase
      .from("pendaftar")
      .select("*");
    setList(pendaftar);
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setId(session.user.id);
    });
    getList();
  }, []);

  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }

  console.log("ini datanya", list);

  const history = useHistory();
  return (
    <div className="bg-gradient-to-b from-primary2  h-screen flex justify-center items-center">
      <div className="  w-full max-w-2xl z-20 flex flex-col justify-between h-screen to-white space-y-10 ">
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

        <div className="w-full bg-primary p-5 rounded-t-3xl h-4/5 flex flex-col justify-between">
          <div className="relative bg-primary2 rounded-lg p-4 bottom-10">
            <h1 className="text-center text-xl font-bold text-primary ">
              List Pendaftaran Calon Siswa
            </h1>
          </div>

          <div className="flex flex-col space-y-3 px-5 h-full  overflow-y-scroll rounded-lg">
            {list.map((e) => (
              <div className="w-full flex flex-col  bg-white rounded-lg p-3 space-y-4">
                <div className="w-full flex flex-row justify-between items-center">
                  <h1 className="text-primary font-semibold">{e.id}</h1>
                  <Link to="/admin/list/detail/33">
                    <button className="p-1 bg-green-400 rounded-full text-white ">
                      <span className="w-full flex flex-row font-bold justify-center items-center gap-3 px-3">
                        Detail
                        <AiOutlineEye />
                      </span>
                    </button>
                  </Link>
                </div>
                <div>
                  <div className="text-primary font-semibold capitalize">
                    <p>{e.nama_lengkap}</p>
                    <p>{e.status_murid}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="py-1">
            <Button
              width={"min"}
              color={"#2C2152"}
              bgColor={"#FEE771"}
              onClick={() => history.push("/admin")}
            >
              <BiArrowBack />
            </Button>
          </div>
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
              <Button width={"full"} onClick={() => signOut()}>
                Logout
              </Button>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default List;

import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { Input, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import Lanang from "../assets/GambarLanang.png";
import Wadon from "../assets/GambarWadon.png";
import { supabase } from "../supabaseClient";
import { useState, useEffect } from "react";

function Beranda() {
  const history = useHistory();
  const [session, setSession] = useState();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  }, []);
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-primary2">
      <div className="z-20 flex flex-col w-full h-screen max-w-2xl p-5 to-white">
        <div className="sticky top-0 flex flex-row items-center w-full ">
          <button
            className="absolute p-1 text-2xl rounded-full bg-primary text-primary2"
            onClick={() => history.push("/")}
          >
            <BiHomeAlt></BiHomeAlt>
          </button>
          <h1 className="w-full text-2xl font-bold text-center text-primary">
            {" "}
            PAUD/TK/RA
          </h1>
        </div>
        <div className="flex items-center justify-center w-full mt-4 mb-28">
          <h1 className="text-m font-bold text-primary">KB Mugi Rahayu, Serayularangan, Mrebet, Purbalingga</h1>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col justify-center w-full px-10 space-y-3">
            <h1 className="text-3xl font-bold text-primary">
              <span className="text-6xl">KB</span>
              MUGI
            </h1>
            <h1 className="text-3xl font-bold text-primary">RAHAYU</h1>
            <div className="flex flex-row justify-between w-full px-5">
              <img src={Wadon} alt="" />
              <img src={Lanang} alt="" />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-xs font-bold text-primary">Wali Murid</h1>
          <Button
            bgColor={"#FFE353"}
            rounded={"full"}
            width={"full"}
            size={"lg"}
            onClick={() => history.push("/daftar")}
          >
            DAFTAR PAUD/TK/RA
          </Button>
          <h1 className="text-xs font-bold text-primary">User Admin</h1>
          <Button
            bgColor={"#73D8EF"}
            rounded={"full"}
            width={"full"}
            size={"lg"}
            onClick={() => history.push("/login")}
          >
            {session ? "ADMIN" : "LOGIN"}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Beranda;
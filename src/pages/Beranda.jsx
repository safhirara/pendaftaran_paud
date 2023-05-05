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
    <div className="bg-gradient-to-b from-primary2 h-screen flex justify-center items-center">
      <div className="  w-full max-w-2xl z-20 flex flex-col justify-between h-screen to-white p-5">
        <div className="w-full flex flex-row items-center sticky top-0 ">
          <button
            className="bg-primary rounded-full p-1 text-2xl  text-primary2"
            onClick={() => history.push("/")}
          >
            <BiHomeAlt></BiHomeAlt>
          </button>
          <h1 className="font-bold text-primary text-2xl w-full text-center">
            {" "}
            PAUD/TK/RA
          </h1>
        </div>
        <div className="w-full flex space-y-3 px-10  justify-center  flex-col">
          <h1 className="text-3xl font-bold text-primary">
            <span className="text-6xl">KB</span>
            MUGI
          </h1>
          <h1 className="text-3xl font-bold text-primary">RAHAYU</h1>
          <div className="w-full flex px-5 flex-row justify-between">
            <img src={Wadon} alt="" />
            <img src={Lanang} alt="" />
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-primary font-bold text-xs">Wali Murid</h1>
          <Button
            bgColor={"#FFE353"}
            rounded={"full"}
            width={"full"}
            size={"lg"}
            onClick={() => history.push("/daftar")}
          >
            DAFTAR PAUD/TK/RA
          </Button>
          <h1 className="text-primary font-bold text-xs">User Admin</h1>
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
  );
}

export default Beranda;

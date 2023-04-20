import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { Input, Button, useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../supabaseClient";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      toast({
        title: `Sukses`,
        status: success,
        isClosable: true,
      });
      if (error) throw error;
      setShow(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(email);
  return (
    <div className="bg-gradient-to-b from-primary2 h-screen flex justify-center items-center">
      <div className="  w-full max-w-2xl flex flex-col justify-between h-screen to-white p-5">
        <div className="w-full flex flex-row items-center sticky top-0 py-3">
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
        <div className="w-full flex space-y-3 justify-center  flex-col">
          <h1 className="text-6xl font-bold text-primary">Login</h1>
          <p className="font-semibold text-sm text-primary">User Admin</p>
          <form action="" onSubmit={handleLogin} className="space-y-4 py-3">
            <Input
              bgColor={"rgba(44, 33, 82, 0.8)"}
              color={"white"}
              type="email"
              size={"lg"}
              placeholder="EMAIL"
              rounded={"xl"}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></Input>
            <Input
              bgColor={"rgba(44, 33, 82, 0.8)"}
              color={"white"}
              size={"lg"}
              fontWeight={"bold"}
              type="password"
              placeholder="PASSWORD"
              rounded={"xl"}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></Input>
            <div className="w-full py-7">
              <Button
                color={"white"}
                width={"full"}
                size={"lg"}
                bgColor={"#2C2152"}
                type="submit"
                isLoading={loading}
              >
                Login
              </Button>
            </div>
          </form>
        </div>
        <Button width={"min"} bgColor={"#2C2152"} color={"white"}>
          Kembali
        </Button>
      </div>
    </div>
  );
}

export default Login;

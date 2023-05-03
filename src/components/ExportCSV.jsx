import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import { Button } from "@chakra-ui/react";

const ExportCSV = () => {
  const fileName = "users-detail";
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const headers = [
    { label: "Id", key: "id" },
    { label: "Nama Lengkap", key: "nama_lengkap" },
    { label: "Nama Panggilan", key: "nama_panggilan" },
    { label: "Nomor Telepon", key: "no_telp" },
  ];

  useEffect(() => {
    getList;
  }, []);

  async function getList() {
    let { data: pendaftar, error } = await supabase
      .from("pendaftar")
      .select("*");
    setList(pendaftar);
  }

  return (
    <div className="container">
      <Button>
        <CSVLink
          headers={headers}
          data={list}
          filename={fileName}
          style={{ textDecoration: "none", color: "#fff" }}
        >
          {loading ? "Loading csv..." : "Export Data"}
        </CSVLink>
      </Button>
    </div>
  );
};

export default ExportCSV;

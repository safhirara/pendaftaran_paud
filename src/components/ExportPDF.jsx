import React from "react";
import jsPDF from "jspdf";
import { Button } from "@chakra-ui/react";

function PDFForm({ formData, id }) {
  const data = formData;

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Form Pendaftaran PAUD", 20, 20);

    doc.setLineWidth(0.5);
    doc.line(20, 25, 190, 25);
    doc.setFontSize(12);
    doc.text("Data Pribadi", 20, 35);
    doc.text(`Nama Lengkap : ${data.nama_lengkap}`, 20, 45);
    doc.text(`Nama Panggilan : ${data.nama_panggilan}`, 20, 50);
    doc.text(
      `Jenis Kelamin : ${data.jenis_kelamin ? data.jenis_kelamin : "-"}`,
      20,
      55
    );
    doc.text(`Tempat Lahir : ${data.tempat_lahir}`, 20, 60);
    doc.text(`Tanggal Lahir : ${data.tanggal_lahir}`, 20, 65);
    doc.text(`Alamat : ${data.alamat}`, 20, 70);
    doc.text(`Jarak Tempat Tinggal : ${data.jarak_tempat_tinggal}`, 20, 75);
    doc.text(`Bahasa Sehari-hari : ${data.bahasa_sehari_hari}`, 20, 80);
    doc.text(`Agama : ${data.agama ? data.agama : "-"}`, 20, 85);
    doc.text(`Golongan Darah : ${data.gol_darah}`, 20, 90);
    doc.text(`Kewarganegaraan : ${data.kewarganegaraan}`, 20, 95);
    doc.text(
      `Riwayat Penyakit : ${
        data.riwayat_penyakit ? data.riwayat_penyakit : "-"
      }`,
      20,
      100
    );

    //   Data orang tua/wali
    doc.setFontSize(12);
    doc.text("Data Orang Tua/Wali", 20, 110);
    doc.text(`Nama Ayah : ${data.nama_ayah ? data.nama_ayah : "-"}`, 20, 120);
    doc.text(`Nama Ibu : ${data.nama_ibu ? data.nama_ibu : "-"}`, 20, 125);
    doc.text(
      `Pendidikan Tertinggi Ayah : ${
        data.pendidikan_tertinggi_ayah ? data.pendidikan_tertinggi_ayah : "-"
      }`,
      20,
      130
    );
    doc.text(
      `Pendidikan Tertinggi Ibu : ${
        data.pendidikan_tertinggi_ibu ? data.pendidikan_tertinggi_ibu : "-"
      }`,
      20,
      135
    );
    doc.text(
      `Pekerjaan Ayah : ${data.pekerjaan_ayah ? data.pekerjaan_ayah : "-"}`,
      20,
      140
    );
    doc.text(
      `Pekerjaan Ibu : ${data.pekerjaan_ibu ? data.pekerjaan_ibu : "-"}`,
      20,
      145
    );
    doc.text(`Nama Wali : ${data.nama_wali ? data.nama_wali : "-"}`, 20, 150);
    doc.text(
      `Pendidikan Tertinggi Wali : ${
        data.pendidikan_tertinggi_wali ? data.pendidikan_tertinggi_wali : "-"
      }`,
      20,
      155
    );
    doc.text(
      `Pekerjaan Wali : ${data.pekerjaan_wali ? data.pekerjaan_wali : "-"}`,
      20,
      160
    );
    doc.text(
      `Hubungan Keluarga Wali : ${
        data.hubungan_keluarga_wali ? data.hubungan_keluarga_wali : "-"
      }`,
      20,
      165
    );

    // Data sekolah
    doc.setFontSize(12);
    doc.text("Data Sekolah", 20, 175);
    doc.text(
      `Nama Sekolah Sebelumnya : ${
        data.nama_sekolah_sebelumnya ? data.nama_sekolah_sebelumnya : "-"
      }`,
      20,
      185
    );
    doc.text(`Status Murid : ${data.status_murid}`, 20, 190);
    doc.text(`Tanggal Pindah : ${data.tanggal_pindah}`, 20, 195);

    // Data kesehatan
    doc.setFontSize(12);
    doc.text("Data Kesehatan", 20, 205);
    doc.text(`Tinggi Badan : ${data.tb}`, 20, 215);
    doc.text(`Berat Badan : ${data.bb}`, 20, 220);
    doc.text(`Jumlah Saudara : ${data.jumlah_saudara}`, 20, 225);

    doc.addPage();

    doc.addImage(
      `https://jayyytncpiittftzhpcv.supabase.co/storage/v1/object/public/berkas_pendaftaran/${id}/Akta%20Kelahiran`,
      "JPEG",
      20,
      20,
      100,
      100
    );
    doc.addImage(
      `https://jayyytncpiittftzhpcv.supabase.co/storage/v1/object/public/berkas_pendaftaran/${id}/Kartu%20Keluarga`,
      "JPEG",
      20,
      120,
      100,
      100
    );

    // Tanggal cetak
    doc.setFontSize(10);
    doc.text(`Tanggal Cetak: ${new Date().toLocaleDateString()}`, 170, 285);

    // Membuat nama file PDF
    const fileName = `PAUD_${data.nama_lengkap}.pdf`;

    // Meng-generate file PDF
    doc.save(fileName);
  };

  return (
    <>
      <Button onClick={generatePDF}>Download PDF</Button>
    </>
  );
}

export default PDFForm;

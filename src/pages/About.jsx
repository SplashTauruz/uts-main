import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div style={{ marginTop: "150px", marginBottom: "50px" }}> 
      <Container className="text-center">
        
        {/* ELEMEN GAMBAR BULAT MENGGUNAKAN URL LANGSUNG */}
        <img
          // GANTI URL_GAMBAR_ANDA_DI_SINI dengan link gambar yang sebenarnya
          src="public/icon/12.jpg" 
          alt="Tentang Kami"
          // STYLING CSS INLINE UNTUK MEMBUAT BULAT
          style={{
            width: "300px", // Ukuran lebar
            height: "300px", // Ukuran tinggi (Harus sama dengan lebar)
            borderRadius: "50%", // Kunci untuk bentuk bulat
            objectFit: "cover", // Memastikan gambar mengisi area tanpa distorsi
            marginBottom: "30px", // Jarak ke teks di bawahnya
            border: "5px solid #001936", // Opsional: Tambahkan border
          }}
        />

        <h1 style={{ 
          fontFamily: 'butler', 
          fontSize: '2rem', 
          fontWeight: 'bold' }}>
          Tentang Kami
        </h1>

        <p className="text-muted mt-3" 
        style={{
                fontFamily: 'butler',  
                maxWidth: "600px", 
                margin: "0 auto 20px",
                fontSize: "20px",
                 letterSpacing: "1px"
                }}>
          <p1>Es Teler Daeng Sultan adalah sebuah UMKM kuliner yang mengkhususkan diri pada Es Teler,
             telah beroperasi sejak akhir Agustus tahun lalu dengan komitmen menyajikan rasa otentik yang tak terlupakan. 
             Nama kami mencerminkan identitas yang kuat: "Daeng" adalah julukan kehormatan khas Makassar yang mewakili sang pemilik, 
             sementara "Sultan" diambil dari nama putra pemilik, menjadikannya warisan rasa yang sarat nilai kekeluargaan. </p1>
        </p>
        <Link to="/location">
          <Button
            variant="success"
            style={{
              marginTop: "20px",
              backgroundColor: "#001936",
              border: "none",
              color: "#f0f8ff",
              fontFamily: "ogg",
              fontSize: "14px",
              letterSpacing: "2px",
            }}
          >
            Lihat Lokasi
          </Button>
        </Link>
      </Container>
    </div>
  );
}
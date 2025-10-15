import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function Location() {
  return (
    <Container style={{ marginTop: "120px", maxWidth: "850px" }}>
      <h1 className="text-center mb-4">Our Locations</h1>


      <Card className="shadow-sm border-0 mb-5">
        <Card.Img
          variant="top"
          src="/public/about/toko.jpg"
          style={{
            height: "600px",
            objectFit: "cover",
            borderRadius: "10px 10px 0 0",
          }}
        />
        <Card.Body>
          <Card.Title className="ogg"
          style={{
            fontSize:"25px",
            letterSpacing:"3px",
          }}><b>Es Teler Ice Cream Daeng Sultan</b> </Card.Title>
          <Card.Text style={{ fontFamily: "ogg", fontSize: "20px", letterSpacing: "px", marginTop: "30px", textAlign: "30"}}>
            📍 Lapak umkm wosi, Manokwari Papua Barat 
            <br />
            ☕ Buka: 17.00 – 22.00 WIT
            <br />
            📞 0823-9334-9346
            <br />
                Rasakan Kesegarannya Bikin Harimu Segar
            <br />
            {/*  Tambahkan link maps */}
            <a
              href="https://maps.app.goo.gl/ZY9diMRWjBc7qzgA8"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#007bff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
               Lihat di Google Maps 
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

export default function EsTeler() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) =>
        setProducts(
          data.filter(
            (p) => p.category.nama.toLowerCase().includes("es teler")
          )
        )
      );
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      <Container>
        <h1 className="text-center mb-4">Es Teler</h1>
        <p className="text-center text-muted mb-5"
        style={{
          fontSize: "19px"
        }}
        >
        Rasakan Kesegarannya Bikin Harimu Segar</p>
        <Row className="g-4 justify-content-center">
          {products.map((p) => (
            <Col key={p.id} xs={10} sm={6} md={4} lg={3}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Img
                  variant="top"
                  src={`/public/teler/${p.gambar}`}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "5px px 0 0",
                  }}
                />
                <Card.Body>
                 <Card.Title
                      style={{
                        fontFamily: "Oswald, sans-serif",
                        letterSpacing: "2px",
                        fontSize: "25px",
                        color: "#001936"
                      }}
                    >
                      {p.nama}
                    </Card.Title>

                  <Card.Text 
                    style={{ 
                      fontSize: "18px", 
                      fontFamily: "Oswald, sans-serif", 
                      marginTop: "8px",
                      marginBottom: "8px",
                       letterSpacing: "2px",
                      }}>
                      Rp {p.harga.toLocaleString("id-ID")}
                  </Card.Text>

                  <Button
                    variant="success"
                    className="w-100 mt-auto"
                    style={{
                      backgroundColor: "#1c92dc",
                      border: "none",
                      color: "#f0f8ff",
                      fontFamily: "Oswald, sans-serif",
                      fontSize: "13px",
                      letterSpacing: "2px",
                      borderRadius: "6px",
                    }}
                  >
                    Tambah Keranjang
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

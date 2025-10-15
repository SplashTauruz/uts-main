import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

export default function EsCemil() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) =>
        setProducts(
          data.filter(
            (p) => p.category.nama.toLowerCase().includes("es cemil")
          )
        )
      );
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      <Container>
        <h1 className="text-center mb-4">Es Cemil</h1>
        <p className="text-center text-muted mb-5"
        style={{
          fontSize: "19px"
        }}
        >
          Rasakan Kesegarannya Bikin Harimu Segar
        </p>

        {/* Grid Card */}
        <Row className="g-4 justify-content-center">
          {products.map((p) => (
            <Col
              key={p.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card
                className="shadow-sm border-0 h-100 d-flex flex-column"
                style={{
                  width: "300px", // ✅ lebar seragam
                  borderRadius: "10px",
                  overflow: "hidden",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <Card.Img
                  variant="top"
                  src={`/cemil/${p.gambar}`} // ✅ tanpa /public
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    borderRadius: "5px 5px 0 0",
                  }}
                />

                 <Card.Body className="d-flex flex-column justify-content-between text-center">
                  <div>
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
                    </div>

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

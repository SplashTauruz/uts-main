import { useEffect, useState } from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import NavbarComponent from './component/navbarcompont.jsx';
import Produk from './pages/Produk.jsx';
import EsTeler from './pages/EsTeler.jsx';
import StickyMilk from './pages/StickyMilk.jsx';
import EsCemil from './pages/EsCemil.jsx';
import AlpukatKocok from './pages/AlpukatKocok.jsx';
import About from './pages/About.jsx';
import Location from './pages/Location.jsx';
import Image from 'react-bootstrap/Image';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <>
      <Image
        src="/about/apalah.png"
        fluid
        alt="Banner"
        style={{
          marginTop: "120px",
          width: "100%",
          maxHeight: "600px",
          objectFit: "cover",
          borderRadius: "15px",
        }}
      />
      <Container className="my-5">
        <Row className="g-5 justify-content-center">
          {products.map((p) => (
            <Col key={p.id} xs={10} sm={6} md={4} lg={3}>
              <Card className="shadow-sm border-0 h-100 fixed-card">
                <Card.Img
                  variant="top"
                  src={`images/${p.gambar}`}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px 10px 0 0",
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
    </>
    
  );
}

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/about" element={<About />} />
        <Route path="/esteler" element={<EsTeler />} />
        <Route path="/stickymilk" element={<StickyMilk />} />
        <Route path="/escemil" element={<EsCemil />} />
        <Route path="/alpukatkocok" element={<AlpukatKocok />} />
        <Route path="/location" element={<Location />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
    
  );
}


export default App;

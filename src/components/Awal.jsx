import { Col, Container, Row, Button } from 'react-bootstrap';

const Awal = () => {
    return (
        <div className="awal">
          <Container className="text-white text-center d-flex justify-content-center align-items-center">
            <Row>
              <Col>
                <div className="judul">LIAT SEMUA</div>
                <div className="judul">SEMUA FILM DISINI</div>
                <div className="awalbutton mt-4 text-center">
                    <Button onClick={Klik()} variant="dark center">Lihat semua film disini</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div> 
    )
}

function Klik() {
  console.log("Kamu menuju list film")
}

export default Awal
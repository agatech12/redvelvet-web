import { Card, Container, Row, Col, Image } from "react-bootstrap"
import duneImage from "../assets/gambar/images.jfif"
import infiniteImage from "../assets/gambar/irene-red-velvet_43.jpeg"
import jokerImage from "../assets/gambar/24987-wendy-red-velvet-soompi.jpg"
import everythingImage from "../assets/gambar/1621494336-20210521-joy.jpg"
import lightyearImage from "../assets/gambar/624435cd98c74-seulgi-red-velvet_1265_711.jpg"

const Trending = () => {
    return (
        <div className="bgini">
        <Container>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={duneImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Yeri</Card.Title>
                  <Card.Text className="text-left">
                  Nama Panggung: Yeri (예리)
                  Nama Lahir: Kim Ye Rim (김예림)
                  Nama Inggris: Katy
                  Tanggal Lahir: 5 Maret 1999
                  Zodiak: Pisces
                  Tinggi: 160 cm (5’3″) / 160 cm (5’3″)
                  Berat: 49 kg (108 lbs)
                  Golongan Darah: O
                  </Card.Text>
                  <Card.Text className="text-left">
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={everythingImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    JOY
                  </Card.Title>
                  <Card.Text className="text-left">
                  Nama Panggung: Joy (조이)
                  Nama Lahir: Park Soo Young (박수영)
                  Tanggal Lahir: 3 September 1996
                  Zodiak: Virgo
                  Tinggi: 168 cm (5’6″) (Official) / 167 cm (5’6″)
                  Berat: 54 kg (119 lbs)
                  Golongan Darah: A
                  </Card.Text>
                  <Card.Text className="text-left">
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={infiniteImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Irene</Card.Title>
                  <Card.Text className="text-left">
                  Nama Panggung: Irene (아이린)
                  Nama Lahir: Bae Ju Hyun (배주현)
                  Tanggal Lahir: 29 Maret 1991
                  Zodiak: Aries
                  Tinggi: 160 cm (5’3″) / 158 cm (5’2″)
                  Berat : 44 kg (97 lbs)
                  Golongan Darah: A
                  </Card.Text>
                  <Card.Text className="text-left">
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={jokerImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Wendy</Card.Title>
                  <Card.Text className="text-left">
                  Nama Panggung: Wendy (웬디)
                  Nama Inggris: Wendy Son (웬디손)
                  Nama Korea: Son Seung Wan (손승완)
                  Tanggal Lahir: 21 Februari 1994
                  Zodiak: Pisces
                  Tinggi: 160 cm (5’3″) / 155 cm (5’1″)
                  Berat: 47 kg (104 lbs)
                  Golongan Darah: O
                  </Card.Text>
                  <Card.Text className="text-left">
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={lightyearImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Seulgi</Card.Title>
                  <Card.Text className="text-left">
                  Nama Panggung: Seulgi (슬기)
                  Nama Lahir: Kang Seul Gi (강슬기)
                  Tanggal Lahir: 10 Februari 1994
                  Zodiak: Aquarius
                  Tinggi: 164 cm (5’5″) / 162 cm (5 ft 3¾ in) 
                  Berat: 44 kg (97 lbs)
                  Golongan Darah: A
                  </Card.Text>
                  <Card.Text className="text-left">
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        </Container>
        </div>
    )
}

export default Trending
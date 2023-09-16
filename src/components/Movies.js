import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Image1 from "../images/Movies/avengers.jpg";
import Image2 from "../images/Movies/blackpanther.jpg";
import Image3 from "../images/Movies/ironman 1.jpeg";
import Image4 from "../images/Movies/ironman 2.jpg";
import Image5 from "../images/Movies/thor 2.jpg";
import Image6 from "../images/Movies/jai bhiim.jpg";
import Image7 from "../images/Movies/gotg.jpg";
import Image8 from "../images/Movies/spiderman.jpg";
import Image9 from "../images/Movies/smile.jpg";
import Image10 from "../images/Movies/thor.jpg";
import { Link } from "react-router-dom";
import React from "react";
function Movies() {
  return (
    <>
      <Carousel
        interval={null}
        style={{
          width: "1200px",
          marginTop: "50px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Carousel.Item>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={Image1} />
              <Card.Body>
                <Card.Title>Avengers</Card.Title>
                <Card.Text></Card.Text>
                <Link to="/bookingavengers">
                  {" "}
                  <Button style={{ cursor: "pointer" }} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image2} />
              <Card.Body>
                <Card.Title>Black Panther</Card.Title>
                <Card.Text></Card.Text>{" "}
                <Link to="/bookingblackpanther">
                  {" "}
                  <Button style={{ cursor: "pointer" }} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image10} />
              <Card.Body>
                <Card.Title>Thor</Card.Title>
                <Card.Text></Card.Text>
                <Link to="/bookingthor">
                  {" "}
                  <Button style={{ cursor: "pointer" }} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image3} />
              <Card.Body>
                <Card.Title>Ironman</Card.Title>
                <Card.Text></Card.Text>
                <Link to="/bookingironman">
                  {" "}
                  <Button style={{ cursor: "pointer" }} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image4} />
              <Card.Body>
                <Card.Title>Ironman 2</Card.Title>
                <Card.Text></Card.Text>
                <Button style={{ cursor: "pointer" }} variant="danger">
                  {" "}
                  Book
                </Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={Image5} />
              <Card.Body>
                <Card.Title>Thor 2</Card.Title>
                <Card.Text></Card.Text>
                <Link to="/bookingthor2">
                  {" "}
                  <Button style={{ cursor: "pointer" }} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image9} />
              <Card.Body>
                <Card.Title>Smile</Card.Title>
                <Card.Text></Card.Text>
                <Link to="/bookingsmile">
                  {" "}
                  <Button style={{ cursor: "pointer" }} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image6} />
              <Card.Body>
                <Card.Title>Jai bhim</Card.Title>
                <Card.Text></Card.Text>
                <Link to="/bookingjaibhim">
                  {" "}
                  <Button style={{ cursor: "pointer" }} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image7} />
              <Card.Body>
                <Card.Title>Gotg</Card.Title>
                <Card.Text></Card.Text>
                <Link to="/bookinggotg">
                  {" "}
                  <Button style={{ cursor: "pointer" }} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image8} />
              <Card.Body>
                <Card.Title>Spiderman</Card.Title>
                <Card.Text>This is a wider card with supporting</Card.Text>
                <Link to="/bookingspiderman">
                  {" "}
                  <Button style={{ cursor: "pointer" }} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Movies;
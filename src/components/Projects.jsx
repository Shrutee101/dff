import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Slider3 } from "./Slider3";
import { Articles } from "./Articles";
import { Slider4 } from "./Slider4";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Projects = () => {
  return (
    <>
      <div>
        <Carousel responsive={responsive}>
          <div>
            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "19rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../pro1.jpeg"
                    style={{ height: "10rem", borderRadius: "10px" }}
                  />
                  <Card.Body style={{ paddingLeft: "0px" }}>
                    <Card.Title>
                      <h5>
                        <b>Majestique Rhythm County</b>
                      </h5>
                      <h6>1,2,3 BHK Apartment in Handewadi, Pune</h6>
                      <h5>
                        <b>Rs.40-70 Lac</b>
                      </h5>
                    </Card.Title>

                    {/* <Button variant="primary">Buy Now</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </div>
          <div>
            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "19rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../pro2.jpg"
                    style={{ height: "10rem", borderRadius: "10px" }}
                  />
                  <Card.Body style={{ paddingLeft: "0px" }}>
                    <Card.Title>
                      <h5>
                        <b>VTP Euphoria</b>
                      </h5>
                      <h6>1,2,3 BHK Apartment in Kharadi, Pune</h6>
                      <h5>
                        <b>Rs.36-1.38 Crore</b>
                      </h5>
                    </Card.Title>

                    {/* <Button variant="primary">Buy Now</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </div>
          <div>
            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "19rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../pro3.png"
                    style={{ height: "10rem", borderRadius: "10px" }}
                  />
                  <Card.Body style={{ paddingLeft: "0px" }}>
                    <Card.Title>
                      <h5>
                        <b>Pride World City</b>
                      </h5>
                      <h6>1,2,3 BHK Apartment in Lohegaon, Pune</h6>
                      <h5>
                        <b>Rs.40-1.86 Crore</b>
                      </h5>
                    </Card.Title>

                    {/* <Button variant="primary">Buy Now</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </div>
          <div>
            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "19rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../pro4.jpg"
                    style={{ height: "10rem", borderRadius: "10px" }}
                  />

                  <Card.Body style={{ paddingLeft: "0px" }}>
                    <Card.Title>
                      <h5>
                        <b>Majestique Rhythm County</b>
                      </h5>
                      <h6>1,2,3 BHK Apartment in Handewadi, Pune</h6>
                      <h5>
                        <b>Rs.40-70 Lac</b>
                      </h5>
                    </Card.Title>

                    {/* <Button variant="primary">Buy Now</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </div>

          <div>
            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "19rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../pro5.jpeg"
                    style={{ height: "10rem", borderRadius: "10px" }}
                  />

                  <Card.Body style={{ paddingLeft: "0px" }}>
                    <Card.Title>
                      <h5>
                        <b>Majestique Rhythm County</b>
                      </h5>
                      <h6>1,2,3 BHK Apartment in Handewadi, Pune</h6>
                      <h5>
                        <b>Rs.40-70 Lac</b>
                      </h5>
                    </Card.Title>

                    {/* <Button variant="primary">Buy Now</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </div>

          <div>
            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "19rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../pro6.jpg"
                    style={{ height: "10rem", borderRadius: "10px" }}
                  />

                  <Card.Body style={{ paddingLeft: "0px" }}>
                    <Card.Title>
                      <h5>
                        <b>Majestique Rhythm County</b>
                      </h5>
                      <h6>1,2,3 BHK Apartment in Handewadi, Pune</h6>
                      <h5>
                        <b>Rs.40-70 Lac</b>
                      </h5>
                    </Card.Title>

                    {/* <Button variant="primary">Buy Now</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </div>

          <div>
            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "19rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../pro7.jpg"
                    style={{ height: "10rem", borderRadius: "10px" }}
                  />

                  <Card.Body style={{ paddingLeft: "0px" }}>
                    <Card.Title>
                      <h5>
                        <b>Majestique Rhythm County</b>
                      </h5>
                      <h6>1,2,3 BHK Apartment in Handewadi, Pune</h6>
                      <h5>
                        <b>Rs.40-70 Lac</b>
                      </h5>
                    </Card.Title>

                    {/* <Button variant="primary">Buy Now</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </div>
          <div>
            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "19rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../pro8.jpg"
                    style={{ height: "10rem", borderRadius: "10px" }}
                  />

                  <Card.Body style={{ paddingLeft: "0px" }}>
                    <Card.Title>
                      <h5>
                        <b>Majestique Rhythm County</b>
                      </h5>
                      <h6>1,2,3 BHK Apartment in Handewadi, Pune</h6>
                      <h5>
                        <b>Rs.40-70 Lac</b>
                      </h5>
                    </Card.Title>

                    {/* <Button variant="primary">Buy Now</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </div>
        </Carousel>

        <div>
          <Row>
            <div className="mt-4"></div>
            <h3>
              <b>Curated PG collections</b>
            </h3>
            <h5>in Pune</h5>
            <div className="mt-3"></div>
            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "25rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../pgboy.png"
                    style={{ height: "15rem", borderRadius: "10px" }}
                  />
                </Card>
              </div>
            </Col>

            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "25rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../pggirl.png"
                    style={{ height: "15rem", borderRadius: "10px" }}
                  />
                </Card>
              </div>
            </Col>

            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "25rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../pgstudent.png"
                    style={{ height: "15rem", borderRadius: "10px" }}
                  />
                </Card>
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <Row>
            <div className="mt-5"></div>
            <h3>
              <b>Homes with AC, food and more</b>
            </h3>
            <h5>Choose your prefered amenities and services</h5>
            <div className="mt-4"></div>
            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "18rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../wifi.webp"
                    style={{ height: "10rem", borderRadius: "5px" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h6>
                        <b>Wifi</b>
                      </h6>
                    </Card.Title>

                    {/* <Button variant="primary">Buy Now</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "18rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../foodservice.webp"
                    style={{ height: "10rem", borderRadius: "5px" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h6>
                        <b>Food Service</b>
                      </h6>
                    </Card.Title>

                    {/* <Button variant="primary">Buy Now</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "18rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../acroom.webp"
                    style={{ height: "10rem", borderRadius: "5px" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h6>
                        <b>AC Room</b>
                      </h6>
                    </Card.Title>

                    {/* <Button variant="primary">Buy Now</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "18rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../laundry.webp"
                    style={{ height: "10rem", borderRadius: "5px" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h6>
                        <b>Laundry Service</b>
                      </h6>
                    </Card.Title>

                    {/* <Button variant="primary">Buy Now</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <Row>
            <div className="mt-3"></div>
            <h3>
              <b>Apartments, Villas and more</b>
            </h3>
            <h5>in Pune</h5>
            <div className="mt-4"></div>
            
            <Slider3 />
          </Row>
        </div>
        <div>
          <Row>
            <div className="mt-5"></div>
            <h3>
              <b>Fully Furnished</b>
            </h3>
            <h5>Ready to Move beautiful homes for you</h5>
            <div className="mt-4"></div>
            <Slider4/>
          </Row>
        </div>

        <div>
          <Row>
            <div className="mt-5"></div>
            <h3>
              <b>Homes by furnishing</b>
            </h3>
            <h5>Choose your preferred furnishing</h5>
            <div className="mt-3"></div>
            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "25rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../furnished.webp"
                    style={{ height: "13rem", borderRadius: "10px" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h5>
                        <b>Furnished</b>
                      </h5>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "25rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../semifurnished.webp"
                    style={{ height: "13rem", borderRadius: "10px" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h5>
                        <b>Semifurnished</b>
                      </h5>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col xs={{ order: "last" }}>
              <div class="col-sm">
                <Card style={{ width: "25rem", border: "none" }}>
                  <Card.Img
                    variant="top"
                    src="../unfurnished.webp"
                    style={{ height: "13rem", borderRadius: "10px" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h5>
                        <b>Unfurnished</b>
                      </h5>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <Row>
            <div className="mt-3"></div>
            <h3>
              <b>Commercial Investment Ideas</b>
            </h3>
            <h5>Residential investors also consider commercial projects</h5>
            <div className="mt-4"></div>
            <Carousel responsive={responsive}>
              <div>
                <Col xs={{ order: "last" }}>
                  <div class="col-sm">
                    <Card style={{ width: "19rem", border: "none" }}>
                      <Card.Img
                        variant="top"
                        src="../c1.jpg"
                        style={{ height: "10rem", borderRadius: "10px" }}
                      />
                      <Card.Body>
                        <Card.Title>
                          <h6>Locality Insight</h6>
                        </Card.Title>

                        {/* <Button variant="primary">Buy Now</Button> */}
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </div>
              <div>
                <Col xs={{ order: "last" }}>
                  <div class="col-sm">
                    <Card style={{ width: "19rem", border: "none" }}>
                      <Card.Img
                        variant="top"
                        src="../c2.png"
                        style={{ height: "10rem", borderRadius: "10px" }}
                      />
                      <Card.Body>
                        <Card.Title>
                          <h6>Locality Insight</h6>
                        </Card.Title>

                        {/* <Button variant="primary">Buy Now</Button> */}
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </div>
              <div>
                <Col xs={{ order: "last" }}>
                  <div class="col-sm">
                    <Card style={{ width: "19rem", border: "none" }}>
                      <Card.Img
                        variant="top"
                        src="../c3.png"
                        style={{ height: "10rem", borderRadius: "10px" }}
                      />
                      <Card.Body>
                        <Card.Title>
                          <h6>Locality Insight</h6>
                        </Card.Title>

                        {/* <Button variant="primary">Buy Now</Button> */}
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </div>
              <div>
                <Col xs={{ order: "last" }}>
                  <div class="col-sm">
                    <Card style={{ width: "19rem", border: "none" }}>
                      <Card.Img
                        variant="top"
                        src="../c4.jpg"
                        style={{ height: "10rem", borderRadius: "10px" }}
                      />

                      <Card.Body>
                        <Card.Title>
                          <h6>Locality Insight</h6>
                        </Card.Title>

                        {/* <Button variant="primary">Buy Now</Button> */}
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </div>

              <div>
                <Col xs={{ order: "last" }}>
                  <div class="col-sm">
                    <Card style={{ width: "19rem", border: "none" }}>
                      <Card.Img
                        variant="top"
                        src="../c5.jpeg"
                        style={{ height: "10rem", borderRadius: "10px" }}
                      />

                      <Card.Body>
                        <Card.Title>
                          <h6>Locality Insight</h6>
                        </Card.Title>

                        {/* <Button variant="primary">Buy Now</Button> */}
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </div>

              <div>
                <Col xs={{ order: "last" }}>
                  <div class="col-sm">
                    <Card style={{ width: "19rem", border: "none" }}>
                      <Card.Img
                        variant="top"
                        src="../c6.jpeg"
                        style={{ height: "10rem", borderRadius: "10px" }}
                      />

                      <Card.Body>
                        <Card.Title>
                          <h6>Locality Insight</h6>
                        </Card.Title>

                        {/* <Button variant="primary">Buy Now</Button> */}
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </div>

              <div>
                <Col xs={{ order: "last" }}>
                  <div class="col-sm">
                    <Card style={{ width: "19rem", border: "none" }}>
                      <Card.Img
                        variant="top"
                        src="../c7.jpg"
                        style={{ height: "10rem", borderRadius: "10px" }}
                      />

                      <Card.Body>
                        <Card.Title>
                          <h6>Locality Insight</h6>
                        </Card.Title>

                        {/* <Button variant="primary">Buy Now</Button> */}
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </div>
              <div>
                <Col xs={{ order: "last" }}>
                  <div class="col-sm">
                    <Card style={{ width: "19rem", border: "none" }}>
                      <Card.Img
                        variant="top"
                        src="../c8.jpg"
                        style={{ height: "10rem", borderRadius: "10px" }}
                      />

                      <Card.Body>
                        <Card.Title>
                          <h6>Locality Insight</h6>
                        </Card.Title>

                        {/* <Button variant="primary">Buy Now</Button> */}
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </div>
            </Carousel>
          </Row>
        </div>

        

        <div>
          <Row>
            <div className="mt-4"></div>
            <h4>
              <b>Top articles on home buying</b>
            </h4>

            <div className="mt-3"></div>
            <Articles />
          </Row>
        </div>

        {/* <div className="mt-5">
          <div>
            <img
              src="budgetbanner.png"
              style={{
                width: "1100px",
                height: "500px",
                marginLeft: "70px",
                borderRadius: "10px",
              }}
            />
          </div>
        </div> */}

        <div className="mt-5">
          <div>
            <img
              src="registerbanner.png"
              style={{
                width: "1100px",
                height: "400px",
                marginLeft: "70px",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
        {/* <div className="mt-5">
          <div>
            <img
              src="bluebanner.png"
              style={{
                width: "1100px",
                height: "150px",
                marginLeft: "70px",
                borderRadius: "10px",
              }}
            />
          </div>
        </div> */}

        <div className="mt-5">
          <div>
            <img
              src="explore.png"
              style={{
                width: "1100px",
                height: "400px",
                marginLeft: "70px",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>

        <div>
          <div style={{ marginLeft: "70px" }}>
            <Row>
              <div className="mt-4"></div>
              <h5>TOP CITIES</h5>
              <h2>
                <b>Explore Real Estate in Popular Indian Cities</b>
              </h2>

              <div className="mt-3"></div>
              <Container>
                <Row className="mt-3">
                  <Col>
                    <div class="col-sm">
                      <Card
                        style={{
                          width: "15rem",
                          height: "102px",
                          border: "none",
                        }}
                      >
                        <Row>
                          <Col>
                            <Card.Img
                              variant="top"
                              src="../pune.jpg"
                              style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "6px",
                                borderRadius: "10px",
                              }}
                            />
                          </Col>
                          <Col>
                            <Card.Body style={{ paddingLeft: "0px" }}>
                              <Card.Title>
                                <h5>
                                  <b>Pune</b>
                                </h5>
                              </Card.Title>
                              <Card.Text>33k+ Properties</Card.Text>
                            </Card.Body>
                          </Col>
                        </Row>
                      </Card>
                    </div>
                  </Col>

                  <Col>
                    <div class="col-sm">
                      <Card
                        style={{
                          width: "15rem",
                          height: "100px",
                          border: "none",
                        }}
                      >
                        <Row>
                          <Col>
                            <Card.Img
                              variant="top"
                              src="../delhi.jpg"
                              style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "10px",
                              }}
                            />
                          </Col>
                          <Col>
                            <Card.Body style={{ paddingLeft: "0px" }}>
                              <Card.Title>
                                <h5>
                                  <b>Delhi</b>
                                </h5>
                              </Card.Title>
                              <Card.Text>40k+ Properties</Card.Text>
                            </Card.Body>
                          </Col>
                        </Row>
                      </Card>
                    </div>
                  </Col>

                  <Col>
                    <div class="col-sm">
                      <Card
                        style={{
                          width: "15rem",
                          height: "100px",
                          border: "none",
                        }}
                      >
                        <Row>
                          <Col>
                            <Card.Img
                              variant="top"
                              src="../chennai.jpg"
                              style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "10px",
                              }}
                            />
                          </Col>
                          <Col>
                            <Card.Body style={{ paddingLeft: "0px" }}>
                              <Card.Title>
                                <h5>
                                  <b>Chennai</b>
                                </h5>
                              </Card.Title>
                              <Card.Text>20k+ Properties</Card.Text>
                            </Card.Body>
                          </Col>
                        </Row>
                      </Card>
                    </div>
                  </Col>

                  <Col>
                    <div class="col-sm">
                      <Card
                        style={{
                          width: "15rem",
                          height: "100px",
                          border: "none",
                        }}
                      >
                        <Row>
                          <Col>
                            <Card.Img
                              variant="top"
                              src="../banglore.jpg"
                              style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "10px",
                              }}
                            />
                          </Col>
                          <Col>
                            <Card.Body style={{ paddingLeft: "0px" }}>
                              <Card.Title>
                                <h5>
                                  <b>Banglore</b>
                                </h5>
                              </Card.Title>
                              <Card.Text>20k+ Properties</Card.Text>
                            </Card.Body>
                          </Col>
                        </Row>
                      </Card>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Row>

            <Row>
              <Container>
                <Row className="mt-3">
                  <Col>
                    <div class="col-sm">
                      <Card
                        style={{
                          width: "15rem",
                          height: "100px",
                          border: "none",
                        }}
                      >
                        <Row>
                          <Col>
                            <Card.Img
                              variant="top"
                              src="../kolkata.jpg"
                              style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "10px",
                              }}
                            />
                          </Col>
                          <Col>
                            <Card.Body style={{ paddingLeft: "0px" }}>
                              <Card.Title>
                                <h5>
                                  <b>Kolkata</b>
                                </h5>
                              </Card.Title>
                              <Card.Text>15k+ Properties</Card.Text>
                            </Card.Body>
                          </Col>
                        </Row>
                      </Card>
                    </div>
                  </Col>

                  <Col>
                    <div class="col-sm">
                      <Card
                        style={{
                          width: "15rem",
                          height: "100px",
                          border: "none",
                        }}
                      >
                        <Row>
                          <Col>
                            <Card.Img
                              variant="top"
                              src="../hyderabad.jpg"
                              style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "10px",
                              }}
                            />
                          </Col>
                          <Col>
                            <Card.Body style={{ paddingLeft: "0px" }}>
                              <Card.Title>
                                <h5>
                                  <b>Hyderabad</b>
                                </h5>
                              </Card.Title>
                              <Card.Text>10k+ Properties</Card.Text>
                            </Card.Body>
                          </Col>
                        </Row>
                      </Card>
                    </div>
                  </Col>

                  <Col>
                    <div class="col-sm">
                      <Card
                        style={{
                          width: "15rem",
                          height: "100px",
                          border: "none",
                        }}
                      >
                        <Row>
                          <Col>
                            <Card.Img
                              variant="top"
                              src="../mumbai.jpg"
                              style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "10px",
                              }}
                            />
                          </Col>
                          <Col>
                            <Card.Body style={{ paddingLeft: "0px" }}>
                              <Card.Title>
                                <h5>
                                  <b>Mumbai</b>
                                </h5>
                              </Card.Title>
                              <Card.Text>40k+ Properties</Card.Text>
                            </Card.Body>
                          </Col>
                        </Row>
                      </Card>
                    </div>
                  </Col>

                  <Col>
                    <div class="col-sm">
                      <Card
                        style={{
                          width: "15rem",
                          height: "100px",
                          border: "none",
                        }}
                      >
                        <Row>
                          <Col>
                            <Card.Img
                              variant="top"
                              src="../ahmedabad.jpg"
                              style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "10px",
                              }}
                            />
                          </Col>
                          <Col className="mx-auto">
                            <Card.Body style={{ paddingLeft: "0px" }}>
                              <Card.Title>
                                <h5>
                                  <b>Ahmedabad</b>
                                </h5>
                              </Card.Title>
                              <Card.Text>26k+ Properties</Card.Text>
                            </Card.Body>
                          </Col>
                        </Row>
                      </Card>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Row>
          </div>
        </div>
        <div className="mt-5"></div>
      </div>
    </>
  );
};

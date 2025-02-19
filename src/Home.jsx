import React, { useEffect, useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    axios.get("data.json").then((res) => {
      setProject(res.data.projects);
      console.log(res.data.projects);
    });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Message sent successfully");

    emailjs
      .sendForm(
        "service_moekbkk",
        "template_xispqjh",
        form.current,
        "Sz63to6jZQlLgFTrT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <>
      {/* Start banner */}
      <section className="bannar">
        <Container>
          <Row>
            <Col
              md={7}
              sm={12}
              className="bannartext"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
            >
              <p>
                WEB DESIGN <span>//</span> WEBFLOW DEVELOPMENT <span>//</span>{" "}
                SEO
              </p>
              <h1>Mohamad Sobeh Portfolio .</h1>
              <h5>
                We build marketing websites that help you sell on autopilot.
              </h5>
              <HashLink to="/#contact">
                <button>Let's talk</button>
              </HashLink>
            </Col>
            <Col
              md={5}
              sm={12}
              className="bannarimgs"
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <img
                src="images/623503637e979197919c6c03_Topology-1 (1).svg"
                alt=""
                className="waves"
              />
              <img
                src="images/623a183aa76fb537cbc5dc0e_Group 8-p-500.png"
                alt=""
                className="laptop"
              />
              <div className="imgbox gimg">
                <img
                  src="images/62324067d42bfc263ee547ff_image 4 (Traced).svg"
                  alt=""
                />
              </div>
              <div className="imgbox uimg">
                <img
                  src="images/6232406724bd9b36622aed48_image 3 (Traced).svg"
                  alt=""
                />
              </div>
              <div className="imgbox wimg">
                <img
                  src="images/623240674411e07510215b6f_image 2 (Traced).svg"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* End banner */}
      {/* Start second section */}
      <section className="homesec2">
        <Container>
          <Row>
            <Col
              md={6}
              sm={12}
              className="secimgs"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="200"
            >
              <img
                src="images/623506fac432155edb494f48_Topology-2 (1).svg"
                alt=""
                className="waves"
              />
              <img
                src="images/6297dd8a74746c61110b1aaa_undraw_team_collaboration_re_ow29 1 (2).svg"
                alt=""
                className="people"
              />
            </Col>
            <Col
              md={6}
              sm={12}
              className="sec2text"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <button>the dream</button>
              <p
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-2xl sm:text-6xl lg:text-2xl font-bold"
              >
                Imagine having your sales team on the job 24/7, interacting with
                an endless stream of ready-to-buy visitors.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* End second section  */}

      {/* Start third section */}
      <section className="homesec3" id="latest">
        <div
          className="sectext"
          data-aos="fade-up"
          data-aos-duration="2000" 
          data-aos-delay="400" 
          data-aos-easing="ease-out-cubic" 
        >
          <h3>Latest builds.</h3>
          <Link to="/Projects">View Projects</Link>
        </div>

        {/* تحسين تأثير Swiper */}
        <Swiper
          slidesPerView={2} 
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          data-aos="fade-up" 
          data-aos-duration="2000" 
          data-aos-delay="500" 
          data-aos-easing="ease-in-out" 
        >
          {projects.slice(1, 6).map((project) => (
            <SwiperSlide key={project.id}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.photo} alt={project.name || "Project"} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* End third section */}

      {/* Start fourth section */}
      <section className="homesec4" id="process">
        <h3
          className="flex flex-col items-start sm:flex-row gap-4"
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="600"
        >
          How it's done.
        </h3>
        <img
          src="images/623506fac432155edb494f48_Topology-2%20(1).svg"
          alt=""
          className="waves"
        />

        {/* First Step */}
        <div
          className="divLeft"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          <img
            src="images/6232406724bd9b36622aed48_image 3 (Traced).svg"
            alt=""
          />
          <div>
            <h5>UI/Ux Design</h5>
            <p>Where concepts turn into a strategic user-experience.</p>
          </div>
        </div>

        {/* Second Step */}
        <div
          className="divRight"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="600"
        >
          <img
            src="images/623240674411e07510215b6f_image 2 (Traced).svg"
            alt=""
          />
          <div>
            <h5>Webflow Development</h5>
            <p>Where design turns into code.</p>
          </div>
        </div>

        {/* Third Step */}
        <div
          className="divLeft"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="700"
        >
          <img
            src="images/6296648937731de4e98d9a5a_zapier-seeklogo.com 2.svg"
            alt=""
          />
          <div>
            <h5>System Automation</h5>
            <p>Where busywork gets delegated.</p>
          </div>
        </div>

        {/* Fourth Step */}
        <div
          className="divRight"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="900"
        >
          <img
            src="images/62324067d42bfc263ee547ff_image 4 (Traced).svg"
            alt=""
          />
          <div>
            <h5>SEO</h5>
            <p>Where customers come flooding in.</p>
          </div>
        </div>
      </section>
      {/* End fourth section */}

      {/* Start fifth section */}
      <section
        
        data-aos-delay="500" 
        data-aos-duration="2000" 
        className="homesec5"
        id="service"
      >
        {/* تحسين تأثير العنوان */}
        <h2
          data-aos="fade-up"
          data-aos-duration="2000" 
          data-aos-delay="400" 
        >
          Why Webflow.
        </h2>

        <img data-aos="zoom-in"
          src="images/6179978654e4d77bdbc81721/623506fac432155edb494f48_Topology-2%20(1).svg"
          alt=""
        />

        <Container>
          <Row>
            <Col
              md={4}
              sm={12}
              className="divRight"
              data-aos="fade-up"
              data-aos-duration="2000" 
              data-aos-delay="300" 
            >
              <div>
                <h5>REASON 1</h5>
                <h3>Next-Level Storytelling</h3>
                <img data-aos="zoom-in"
                  src="images/62966934fc028e3715017571_undraw_mobile_development_re_wwsn 1.svg"
                  alt=""
                />
                <p>
                  Unleash the best visuals and experiences that modern web
                  design has to offer. Webflow turns your wildest of ideas into
                  strategic customer-experiences.
                </p>
              </div>
            </Col>

            <Col
              md={4}
              sm={12}
              data-aos="fade-up"
              data-aos-duration="2000" 
              data-aos-delay="500" 
            >
              <div className="divRight">
                <h5>REASON 2</h5>
                <h3>Unbelievable Performance</h3>
                <img data-aos="zoom-in"
                  src="images/62966cbb57bfa16e79fe8406_undraw_data_re_80ws 1 (1).svg"
                  alt=""
                />
                <p>
                  Hosted on an ultra-fast global CDN, Webflow goes full steam
                  ahead with load speed, uptime, asset optimization, and SEO.
                  All without ever needing to install a patch or upload a server
                  configuration.
                </p>
              </div>
            </Col>

            <Col
              md={4}
              sm={12}
              data-aos="fade-up"
              data-aos-duration="2000" 
              data-aos-delay="700" 
            >
              <div className="divRight">
                <h5>REASON 3</h5>
                <h3>Developer-Free Tweaks</h3>
                <img data-aos="zoom-in"
                  src="images/62966cd0f71f4f702ab6febd_undraw_asset_selection_re_k5fj 1.svg"
                  alt=""
                />
                <p>
                  Webflow’s ‘Editor Mode’ allows any team member to update
                  content as they please without wreaking havoc or paying people
                  like us to fix it.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* End fifth section */}

      {/* start sixth section */}
      <section className="homesec6" id="contact">
        <Container>
          <h3
            className="wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.5s"
          >
            Contact Us
          </h3>
          <Row className="align-items-center">
            <Col
              md={6}
              sm={12}
              className="wow slideInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.3"
            >
              <div>
                <p>
                  <span>Email:</span> mohammadsobh1999@gmail.com
                </p>
                <p>
                  <span>Phone:</span> 0959827527
                </p>
                <p>
                  <span>Address:</span>rukn aldiyn
                </p>
              </div>
            </Col>
            <Col
              md={6}
              sm={12}
              className="wow bounceInRight"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="d-flex">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      data-aos-delay="400"
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      data-aos-delay="400"
                    />
                  </div>
                  <div className="d-flex">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      data-aos-delay="600"
                    />
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      data-aos-delay="800"
                    />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay="1000"
                  ></textarea>
                  <button
                    type="submit"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay="1200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end sixth section */}

      {/* start footer */}
      <Footer />
      {/* end footer */}
    </>
  );
};

export default Home;

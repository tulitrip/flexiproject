import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
Welcome to HealthBooker, your go-to platform for seamless access to healthcare services. At HealthBooker, we're committed to revolutionizing the way you manage your health journey.

Our platform is designed with your needs in mind, offering user-friendly features for easy registration, doctor search, appointment booking, and profile management. With a focus on transparency, security, and quality care, HealthBooker ensures that you have the tools and resources you need to take control of your health.

Join us today and discover the convenience of HealthBooker. Let's embark on a journey towards better health together.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

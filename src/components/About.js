import imageAbout from "../images/aboutgamedrive.jpg";
import Title from "./Title";

const About = () => {
  return (
    <div>
      <section className="section" id="about">
        <Title title="about" subTitle="us" />

        <div className="section-center about-center">
          <div className="about-img">
            <img src={imageAbout} className="about-photo" alt="awesome beach" />
          </div>
          <article className="about-info">
            <h3>Adventure begins</h3>
            <p>
              At Greeny, we are passionate about offering tours that blend
              adventure with a deep commitment to environmental care. Our
              primary goal is to provide you with unforgettable travel
              experiences while promoting sustainable practices. With Greeny,
              you can embark on exhilarating journeys to breathtaking
              destinations, all while minimizing your ecological impact.
            </p>
            <p>
              What sets us apart is our team of knowledgeable guides who are not
              just experts in showcasing the wonders of each location, but also
              passionate advocates for environmental conservation. They will not
              only lead you on incredible adventures but also educate you on the
              importance of protecting the natural environment.
            </p>
            
            <a href="#about" className="btn">
              read more
            </a>
          </article>
        </div>
      </section>
    </div>
  );
};
export default About;

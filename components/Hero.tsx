import Image from "next/image";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero">
      <div className="hero-banner">
        <Image
          alt="brand logo"
          fill={true}
          className="hero-photo"
          fetchPriority="high"
          src="/images/image-02.jpg"
        />
        <div className="wrap hero-intro">
          <p className="hero-location">Family dentist in Houston, TX</p>
          <h1 className="big" id="hero-title">
            Dental care for every smile
          </h1>
          <p className="lead">
            From routine check-ups to braces and smile makeovers, our Houston
            team helps children and adults find care that fits their needs.
            General dentistry and orthodontics are available under one roof.
          </p>
          <div className="ctas">
            <a className="pill" href="#visit">
              Book an appointment
            </a>
            <a className="pill team-call" href="tel:+18329414010">
              Call our team
            </a>
          </div>
        </div>
      </div>
      <nav aria-label="Explore treatments" className="hero-treatments">
        <a href="#general">General dentistry</a>
        <a href="#orthodontics">Orthodontics</a>
        <a href="#cosmetic">Cosmetic dentistry</a>
        <a href="#implants">Dental implants</a>
      </nav>
    </section>
  );
}

import Image from "next/image";

export default function Services() {
  return (
    <section className="shelf" id="services">
      <div className="wrap">
        <p className="services-label">Services</p>
        <h2 className="big">Explore our dental services</h2>
        <p className="lead">
          From a child&rsquo;s first check-up to a smile makeover, find care for
          every member of the family.
        </p>
        <p className="services-jump">
          <a className="pill" href="#treatment-cards">
            See treatment options
          </a>
        </p>
      </div>

      <section
        aria-labelledby="featured-title"
        className="wrap featured-treatments"
      >
        <h2 id="featured-title">Featured treatments</h2>

        <div className="featured-grid">
          <article className="featured-treatment">
            <Image
              src="/images/image-04.webp"
              alt=""
              width={480}
              height={480}
              loading="lazy"
            />

            <div className="featured-copy">
              <p className="featured-label">Endodontics</p>
              <h3>Root canal therapy</h3>
              <p>
                Saves an infected or damaged tooth by treating the inside of it,
                so you can keep your natural tooth. Talk with our team about an
                evaluation.
              </p>

              <a
                aria-label="Request a consultation for root canal therapy"
                className="featured-link"
                href="#visit"
              >
                Request a consultation
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M4 12h15m-6-6 6 6-6 6" />
                </svg>
              </a>
            </div>
          </article>

          <article className="featured-treatment">
            <Image
              src="/images/image-05.webp"
              alt=""
              width={480}
              height={480}
              loading="lazy"
            />

            <div className="featured-copy">
              <p className="featured-label">Removable prosthodontics</p>
              <h3>Dentures</h3>
              <p>
                Removable full or partial dentures replace missing teeth and
                restore your smile. Talk with our team about which type suits
                you.
              </p>

              <a
                aria-label="Request a consultation for dentures"
                className="featured-link"
                href="#visit"
              >
                Request a consultation
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M4 12h15m-6-6 6 6-6 6" />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </section>

      <div className="rows" id="rows">
        <div className="row">
          <div className="tile">
            <div className="cover c-navy">
              <small>Prevent</small>
              <b>Check-ups &amp; Cleanings</b>
              <Image
                className="service-photo"
                src="/images/image-06.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Check-ups &amp; Cleanings</p>
            <p className="s">Every six months</p>
          </div>

          <div className="tile">
            <div className="cover c-orange">
              <small>Straighten</small>
              <b>Invisalign</b>
              <Image
                className="service-photo"
                src="/images/image-07.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Invisalign</p>
            <p className="s">With our orthodontist</p>
          </div>

          <div className="tile">
            <div className="cover c-sky">
              <small>Kids</small>
              <b>Children&rsquo;s Dentistry</b>
              <Image
                className="service-photo"
                src="/images/image-08.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Children&rsquo;s Dentistry</p>
            <p className="s">From the first tooth</p>
          </div>

          <div className="tile">
            <div className="cover c-cream">
              <small>Brighten</small>
              <b>Teeth Whitening</b>
              <Image
                className="service-photo"
                src="/images/image-09.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Teeth Whitening</p>
            <p className="s">Cosmetic</p>
          </div>

          <div className="tile">
            <div className="cover c-white">
              <small>Replace</small>
              <b>Dental Implants</b>
              <Image
                className="service-photo"
                src="/images/image-10.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Dental Implants</p>
            <p className="s">With Dr. O</p>
          </div>

          <div className="tile">
            <div className="cover c-ink">
              <small>Straighten</small>
              <b>Braces</b>
              <Image
                className="service-photo"
                src="/images/image-11.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Traditional Braces</p>
            <p className="s">With our orthodontist</p>
          </div>

          <div className="tile">
            <div className="cover c-navy">
              <small>Protect</small>
              <b>Sealants</b>
              <Image
                className="service-photo"
                src="/images/image-12.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Dental Sealants</p>
            <p className="s">Kids &amp; teens</p>
          </div>

          <div className="tile">
            <div className="cover c-orange">
              <small>Enhance</small>
              <b>Veneers</b>
              <Image
                className="service-photo"
                src="/images/image-13.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Veneers</p>
            <p className="s">Cosmetic</p>
          </div>

          <div className="tile">
            <div className="cover c-sky">
              <small>Relax</small>
              <b>Sedation</b>
              <Image
                className="service-photo"
                src="/images/image-14.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Nitrous &amp; Oral Sedation</p>
            <p className="s">For nervous patients</p>
          </div>

          <div className="tile">
            <div className="cover c-navy">
              <small>Prevent</small>
              <b>Check-ups &amp; Cleanings</b>
              <Image
                className="service-photo"
                src="/images/image-15.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Check-ups &amp; Cleanings</p>
            <p className="s">Every six months</p>
          </div>

          <div className="tile">
            <div className="cover c-orange">
              <small>Straighten</small>
              <b>Invisalign</b>
              <Image
                className="service-photo"
                src="/images/image-16.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Invisalign</p>
            <p className="s">With our orthodontist</p>
          </div>

          <div className="tile">
            <div className="cover c-sky">
              <small>Kids</small>
              <b>Children&rsquo;s Dentistry</b>
              <Image
                className="service-photo"
                src="/images/image-17.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Children&rsquo;s Dentistry</p>
            <p className="s">From the first tooth</p>
          </div>

          <div className="tile">
            <div className="cover c-cream">
              <small>Brighten</small>
              <b>Teeth Whitening</b>
              <Image
                className="service-photo"
                src="/images/image-18.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Teeth Whitening</p>
            <p className="s">Cosmetic</p>
          </div>

          <div className="tile">
            <div className="cover c-white">
              <small>Replace</small>
              <b>Dental Implants</b>
              <Image
                className="service-photo"
                src="/images/image-19.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Dental Implants</p>
            <p className="s">With Dr. O</p>
          </div>

          <div className="tile">
            <div className="cover c-ink">
              <small>Straighten</small>
              <b>Braces</b>
              <Image
                className="service-photo"
                src="/images/image-20.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Traditional Braces</p>
            <p className="s">With our orthodontist</p>
          </div>

          <div className="tile">
            <div className="cover c-navy">
              <small>Protect</small>
              <b>Sealants</b>
              <Image
                className="service-photo"
                src="/images/image-21.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Dental Sealants</p>
            <p className="s">Kids &amp; teens</p>
          </div>

          <div className="tile">
            <div className="cover c-orange">
              <small>Enhance</small>
              <b>Veneers</b>
              <Image
                className="service-photo"
                src="/images/image-22.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Veneers</p>
            <p className="s">Cosmetic</p>
          </div>

          <div className="tile">
            <div className="cover c-sky">
              <small>Relax</small>
              <b>Sedation</b>
              <Image
                className="service-photo"
                src="/images/image-23.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Nitrous &amp; Oral Sedation</p>
            <p className="s">For nervous patients</p>
          </div>
        </div>

        <div className="row rev">
          <div className="tile">
            <div className="cover c-sky">
              <small>Repair</small>
              <b>Tooth-Colored Fillings</b>
              <Image
                className="service-photo"
                src="/images/image-24.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Fillings</p>
            <p className="s">Restorative</p>
          </div>

          <div className="tile">
            <div className="cover c-navy">
              <small>Save</small>
              <b>Root Canal Therapy</b>
              <Image
                className="service-photo"
                src="/images/image-25.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Root Canal Therapy</p>
            <p className="s">Restorative</p>
          </div>

          <div className="tile">
            <div className="cover c-cream">
              <small>Restore</small>
              <b>Crowns &amp; Bridges</b>
              <Image
                className="service-photo"
                src="/images/image-26.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Crowns &amp; Bridges</p>
            <p className="s">Restorative</p>
          </div>

          <div className="tile">
            <div className="cover c-orange">
              <small>Urgent</small>
              <b>Emergency Visits</b>
              <Image
                className="service-photo"
                src="/images/image-27.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Dental Emergencies</p>
            <p className="s">Call us first</p>
          </div>

          <div className="tile">
            <div className="cover c-white">
              <small>Screen</small>
              <b>Oral Cancer Screening</b>
              <Image
                className="service-photo"
                src="/images/image-28.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Oral Cancer Screening</p>
            <p className="s">At every check-up</p>
          </div>

          <div className="tile">
            <div className="cover c-ink">
              <small>Surgery</small>
              <b>Extractions</b>
              <Image
                className="service-photo"
                src="/images/image-29.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Extractions</p>
            <p className="s">Simple &amp; surgical</p>
          </div>

          <div className="tile">
            <div className="cover c-sky">
              <small>Replace</small>
              <b>Dentures</b>
              <Image
                className="service-photo"
                src="/images/image-30.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Removable Dentures</p>
            <p className="s">Restorative</p>
          </div>

          <div className="tile">
            <div className="cover c-cream">
              <small>Strengthen</small>
              <b>Fluoride</b>
              <Image
                className="service-photo"
                src="/images/image-31.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Fluoride Treatment</p>
            <p className="s">Prevent</p>
          </div>

          <div className="tile">
            <div className="cover c-navy">
              <small>Gums</small>
              <b>Gum Contouring</b>
              <Image
                className="service-photo"
                src="/images/image-32.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Gum Treatment</p>
            <p className="s">Oral surgery</p>
          </div>

          <div className="tile">
            <div className="cover c-sky">
              <small>Repair</small>
              <b>Tooth-Colored Fillings</b>
              <Image
                className="service-photo"
                src="/images/image-33.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Fillings</p>
            <p className="s">Restorative</p>
          </div>

          <div className="tile">
            <div className="cover c-navy">
              <small>Save</small>
              <b>Root Canal Therapy</b>
              <Image
                className="service-photo"
                src="/images/image-34.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Root Canal Therapy</p>
            <p className="s">Restorative</p>
          </div>

          <div className="tile">
            <div className="cover c-cream">
              <small>Restore</small>
              <b>Crowns &amp; Bridges</b>
              <Image
                className="service-photo"
                src="/images/image-35.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Crowns &amp; Bridges</p>
            <p className="s">Restorative</p>
          </div>

          <div className="tile">
            <div className="cover c-orange">
              <small>Urgent</small>
              <b>Emergency Visits</b>
              <Image
                className="service-photo"
                src="/images/image-36.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Dental Emergencies</p>
            <p className="s">Call us first</p>
          </div>

          <div className="tile">
            <div className="cover c-white">
              <small>Screen</small>
              <b>Oral Cancer Screening</b>
              <Image
                className="service-photo"
                src="/images/image-37.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Oral Cancer Screening</p>
            <p className="s">At every check-up</p>
          </div>

          <div className="tile">
            <div className="cover c-ink">
              <small>Surgery</small>
              <b>Extractions</b>
              <Image
                className="service-photo"
                src="/images/image-38.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Extractions</p>
            <p className="s">Simple &amp; surgical</p>
          </div>

          <div className="tile">
            <div className="cover c-sky">
              <small>Replace</small>
              <b>Dentures</b>
              <Image
                className="service-photo"
                src="/images/image-39.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Removable Dentures</p>
            <p className="s">Restorative</p>
          </div>

          <div className="tile">
            <div className="cover c-cream">
              <small>Strengthen</small>
              <b>Fluoride</b>
              <Image
                className="service-photo"
                src="/images/image-40.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Fluoride Treatment</p>
            <p className="s">Prevent</p>
          </div>

          <div className="tile">
            <div className="cover c-navy">
              <small>Gums</small>
              <b>Gum Contouring</b>
              <Image
                className="service-photo"
                src="/images/image-41.webp"
                alt=""
                width={292}
                height={292}
              />
            </div>
            <p className="t">Gum Treatment</p>
            <p className="s">Oral surgery</p>
          </div>
        </div>
      </div>

      <div className="wrap ctrl">
        <button aria-label="Pause animation" aria-pressed="false" id="pause">
          <svg fill="currentColor" viewBox="0 0 12 12">
            <rect height="9" rx="1" width="2.6" x="2" y="1.5" />
            <rect height="9" rx="1" width="2.6" x="7.4" y="1.5" />
          </svg>
        </button>
      </div>

      <div className="wrap service-index" id="treatment-cards">
        <article>
          <a className="service-summary treatment-card" href="#general">
            <h3>General dentistry</h3>
            <p>
              Check-ups, cleanings, children&rsquo;s dentistry, fillings and
              emergency visits.
            </p>
            <span>Learn more</span>
          </a>
        </article>

        <article>
          <a className="service-summary treatment-card" href="#orthodontics">
            <h3>Orthodontics</h3>
            <p>Invisalign and traditional braces.</p>
            <span>Learn more</span>
          </a>
        </article>

        <article>
          <a className="service-summary treatment-card" href="#cosmetic">
            <h3>Cosmetic dentistry</h3>
            <p>Teeth whitening, veneers and gum contouring.</p>
            <span>Learn more</span>
          </a>
        </article>

        <article>
          <a className="service-summary treatment-card" href="#implants">
            <h3>Dental implants</h3>
            <p>Ask about an implant consultation</p>
            <span>Learn more</span>
          </a>
        </article>
      </div>

      <div className="wrap treatment-details">
        <article
          aria-labelledby="general-title"
          className="treatment-panel"
          id="general"
        >
          <h3 id="general-title">General dentistry</h3>
          <h4>Check-ups and cleanings</h4>
          <p>
            A regular exam checks your teeth and gums for early signs of
            problems, and a professional cleaning removes plaque and tartar that
            brushing misses. Book a routine visit and bring any questions.
          </p>
          <h4>Children&rsquo;s dentistry</h4>
          <p>
            We see children from their first tooth, with gentle check-ups,
            cleanings, sealants and fluoride to help prevent cavities. Ask our
            team about booking a first visit.
          </p>
          <h4>Fillings and urgent visits</h4>
          <p>
            Tooth-colored fillings repair cavities and small chips while
            blending in with your natural teeth. If you have tooth pain or a
            broken tooth, call the office for an urgent appointment.
          </p>
          <h4>Root canal therapy (endodontics)</h4>
          <p>
            Root canal treatment removes infected or inflamed tissue from inside
            a tooth, so the tooth can be saved instead of removed. Ask about an
            evaluation and what the appointment involves.
          </p>
          <h4>Dentures (removable prosthodontics)</h4>
          <p>
            Removable dentures replace missing teeth. A full denture replaces a
            whole arch, and a partial denture fills gaps between your remaining
            teeth. Talk to us about which type suits you.
          </p>
          <a className="pill" href="#visit">
            Request an appointment
          </a>{" "}
          <a className="more" href="#treatment-cards">
            Back to treatments
          </a>
        </article>

        <article
          aria-labelledby="orthodontics-title"
          className="treatment-panel"
          id="orthodontics"
        >
          <h3 id="orthodontics-title">Orthodontics</h3>
          <h4>Invisalign</h4>
          <p>
            Invisalign straightens teeth with a series of clear, removable
            aligners that you switch every few weeks. Ask whether it&rsquo;s an
            option for you.
          </p>
          <h4>Traditional braces</h4>
          <p>
            Traditional braces are fixed to the teeth and adjusted at regular
            visits to move teeth into place. Ask what to expect during
            treatment.
          </p>
          <a className="pill" href="#visit">
            Request an appointment
          </a>{" "}
          <a className="more" href="#treatment-cards">
            Back to treatments
          </a>
        </article>

        <article
          aria-labelledby="cosmetic-title"
          className="treatment-panel"
          id="cosmetic"
        >
          <h3 id="cosmetic-title">Cosmetic dentistry</h3>
          <h4>Teeth whitening</h4>
          <p>
            Professional whitening lightens stains and discoloration for a
            brighter smile. Ask which whitening option suits you.
          </p>
          <h4>Veneers</h4>
          <p>
            Veneers are thin shells bonded to the front of your teeth to improve
            their shape, color or size. Talk to us about whether veneers are
            right for you.
          </p>
          <h4>Gum contouring</h4>
          <p>
            Gum contouring reshapes an uneven gumline or reduces a
            &ldquo;gummy&rdquo; smile. Ask whether it could help you get the
            look you want.
          </p>
          <a className="pill" href="#visit">
            Request an appointment
          </a>{" "}
          <a className="more" href="#treatment-cards">
            Back to treatments
          </a>
        </article>

        <article
          aria-labelledby="implants-title"
          className="treatment-panel"
          id="implants"
        >
          <h3 id="implants-title">Dental implants</h3>
          <h4>Implant consultation</h4>
          <p>
            A dental implant replaces a missing tooth with a post placed in the
            jaw that supports a natural-looking crown. Meet with Dr. O to talk
            about replacing missing teeth, what the assessment involves and
            which options may suit you.
          </p>
          <a className="pill" href="#visit">
            Request an appointment
          </a>{" "}
          <a className="more" href="#treatment-cards">
            Back to treatments
          </a>
        </article>
      </div>
    </section>
  );
}

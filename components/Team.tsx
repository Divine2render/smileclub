import Image from "next/image";

export default function Team() {
  return (
    <section className="band" id="care">
      <div className="wrap">
        <h2 className="big">Meet the Team</h2>

        <div className="team-profiles">
          <p className="team-intro">Get to know the people behind your care.</p>

          <article className="team-profile">
            <div>
              <h3>Dr. Philip Onyirimba, DDS</h3>
              <p className="team-role">General Dentist</p>

              <p>
                Dr. O knows that a dental visit can feel intimidating. He takes
                time to help patients feel at ease, explain their options and
                answer their questions so they can make informed decisions about
                their care. His recent work has focused on dental implants.
              </p>
            </div>

            <Image
              width={300}
              height={300}
              src="/images/image-42.jpg"
              alt="Dr. Philip Onyirimba"
            />
          </article>

          <article className="team-profile">
            <div>
              <h3>Meet our orthodontist</h3>
              <p className="team-role">Orthodontist</p>
              <p>
                Our orthodontist leads Invisalign and braces treatment for
                children, teens and adults. Her name, photo and full bio will be
                added here soon.
              </p>
            </div>

            <div aria-hidden="true" className="team-placeholder">
              Photo coming soon
            </div>
          </article>

          <a className="pill team-call" href="tel:+18329414010">
            Call our team
          </a>
        </div>

        <div className="cards">
          <article className="card">
            <p className="copy">
              <strong>Straighter teeth, your way.</strong> Choose clear
              Invisalign aligners or traditional braces, with treatment led by
              our orthodontist.
              <br />
              <a className="more" href="#visit">
                Book a consultation
              </a>
            </p>

            <div className="vis">
              <Image
                width={300}
                height={300}
                src="/images/image-43.jpg"
                alt="Treatment room"
              />
            </div>
          </article>

          <article className="card">
            <p className="copy">
              <strong>Calm, from the moment you arrive.</strong> A quiet waiting
              room, TVs in our treatment rooms, and nitrous oxide or oral
              sedation for anyone who feels nervous.
            </p>

            <div className="vis">
              <Image
                width={300}
                height={300}
                src="/images/image-44.jpg"
                alt="Waiting room"
              />
            </div>
          </article>

          <article className="card" id="payment">
            <p className="copy">
              <strong>Smile Club Membership.</strong> Our in-house plan for
              patients without dental insurance, with routine care for one
              simple fee. Call the office for pricing and what&rsquo;s included.
              <br />
              <a className="more" href="tel:+18329414010">
                Call (832) 941-4010
              </a>
            </p>

            <div className="vis">
              <Image
                width={300}
                height={300}
                src="/images/image-45.jpg"
                alt="Front desk at The Smile Club Dentistry and Orthodontics"
              />
            </div>
          </article>

          <article className="card">
            <p className="copy">
              <strong>Pay your way.</strong> We accept most major dental
              insurance, and you can spread larger treatment costs with
              CareCredit or Sunbit.
            </p>

            <div className="plan provider-plan">
              <div>
                <h3>Dental insurance</h3>
                <ul className="provider-logos">
                  <li>
                    <Image
                      width={300}
                      height={300}
                      src="/images/image-46.png"
                      alt="Delta Dental"
                    />
                  </li>
                  <li>
                    <Image
                      width={300}
                      height={300}
                      src="/images/image-47.png"
                      alt="Aetna"
                    />
                  </li>
                  <li>
                    <Image
                      width={300}
                      height={300}
                      src="/images/image-48.png"
                      alt="Cigna"
                    />
                  </li>
                  <li>
                    <Image
                      width={300}
                      height={300}
                      src="/images/image-49.png"
                      alt="MetLife"
                    />
                  </li>
                  <li>
                    <Image
                      width={300}
                      height={300}
                      src="/images/image-50.png"
                      alt="Guardian"
                    />
                  </li>
                  <li>
                    <Image
                      width={300}
                      height={300}
                      src="/images/image-51.png"
                      alt="Humana"
                    />
                  </li>
                </ul>
              </div>

              <div>
                <h3>Financing</h3>
                <ul className="provider-logos">
                  <li>
                    <Image
                      width={300}
                      height={300}
                      src="/images/image-52.png"
                      alt="CareCredit"
                    />
                  </li>
                  <li>
                    <Image
                      width={300}
                      height={300}
                      src="/images/image-53.png"
                      alt="Sunbit"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

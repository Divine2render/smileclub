import Image from "next/image";

export default function Office() {
  return (
    <section className="office" id="office">
      <div className="wrap">
        <h2 className="big">
          Step inside our
          <br />
          new office.
        </h2>

        <p className="lead">
          We&rsquo;ve moved into a brighter, larger space with more room for
          you.
        </p>
      </div>

      <div className="scroller">
        <figure>
          <Image
            width={420}
            height={315}
            src="/images/images-office-4.jpeg"
            alt="Waiting area"
          />
          <figcaption>
            <strong>Waiting room.</strong> Settle in before your visit.
          </figcaption>
        </figure>

        <figure>
          <Image
            width={420}
            height={315}
            src="/images/images-office-2.jpeg"
            alt="Check-in window"
          />
          <figcaption>
            <strong>Check-in.</strong> A friendly welcome at the front desk.
          </figcaption>
        </figure>

        <figure>
          <Image
            width={420}
            height={315}
            src="/images/images-office-5.jpeg"
            alt="Treatment room"
          />
          <figcaption>
            <strong>Treatment rooms.</strong> Modern chairs, with a TV to watch.
          </figcaption>
        </figure>

        <figure>
          <Image
            width={420}
            height={315}
            src="/images/images-office-3.jpeg"
            alt="Clinic hallway"
          />
          <figcaption>
            <strong>Clinic.</strong> Clean, bright and spacious.
          </figcaption>
        </figure>

        <figure>
          <Image
            width={420}
            height={315}
            src="/images/image-58.png"
            alt="Front of the dental office"
          />
          <figcaption>
            <strong>Easy to find.</strong> Parking is available outside. The
            entrance is on the side of the building.
          </figcaption>
        </figure>

        <figure>
          <Image
            width={420}
            height={315}
            src="/images/images-office-7.jpeg"
            alt="Front of the dental office"
          />
          <figcaption>
            <strong>Outside View.</strong> A view of what the clinic looks like
            from outside.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

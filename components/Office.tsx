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
            src="/images/image-54.jpg"
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
            src="/images/image-55.jpg"
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
            src="/images/image-56.jpg"
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
            src="/images/image-57.jpg"
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
            src="/images/image-58.jpg"
            alt="Front of the dental office"
          />
          <figcaption>
            <strong>Easy to find.</strong> Parking is available outside. The
            entrance is on the side of the building.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

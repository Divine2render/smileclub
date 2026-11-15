import Image from "next/image";

export default function PracticeIntro() {
  return (
    <section aria-labelledby="practice-title" className="wrap practice-intro">
      <Image
        src="/images/image-03.webp"
        alt="Glass storefront of The Smile Club Dentistry and Orthodontics"
        width={300}
        height={300}
        loading="lazy"
      />

      <div>
        <h2 id="practice-title">Your Houston dental team</h2>

        <p>
          At The Smile Club Dentistry and Orthodontics, your family can come to
          one practice for routine check-ups, general dental treatment and
          orthodontic care. Whether you&rsquo;re arranging your child&rsquo;s
          first visit or exploring braces for yourself, we&rsquo;ll talk through
          your options and help you plan your next visit.
        </p>

        <a className="more" href="#care">
          Meet the team
        </a>
      </div>
    </section>
  );
}

import { IoMdStar } from "react-icons/io";

export function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating flex" aria-label={`Rated ${rating} out of 5`}>
      {[...Array(fullStars)].map((_, index) => (
        <IoMdStar key={index} className="star full" />
      ))}
      {halfStar && <IoMdStar className="star half" />}
      {[...Array(emptyStars)].map((_, index) => (
        <IoMdStar key={index} className="star empty" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      className="band rev"
      id="reviews"
      style={{ background: "var(--bg)" }}
    >
      <div className="wrap">
        <div className="score">4.8</div>

        <div
          className="stars flex justify-center items-center"
          aria-label="Rated 4.8 out of 5"
        >
          <StarRating rating={5} />
        </div>

        <p>Loved by 350+ Houston patients on Google.</p>

        <div className="review-grid">
          <figure>
            <div className="review-stars" aria-label="5 out of 5 stars">
              <StarRating rating={5} />
            </div>
            <blockquote>
              &ldquo;The staff members are very welcoming and create a relaxing
              environment for all.&rdquo;
            </blockquote>
            <figcaption>Linda O.</figcaption>
          </figure>

          <figure>
            <div className="review-stars" aria-label="5 out of 5 stars">
              <StarRating rating={5} />
            </div>
            <blockquote>
              &ldquo;The entire staff is friendly and welcoming.&rdquo;
            </blockquote>
            <figcaption>Amber</figcaption>
          </figure>

          <figure>
            <div className="review-stars" aria-label="5 out of 5 stars">
              <StarRating rating={5} />
            </div>
            <blockquote>
              &ldquo;Everything went great. All employees are very efficient and
              helpful.&rdquo;
            </blockquote>
            <figcaption>Jane H.</figcaption>
          </figure>

          <figure>
            <div className="review-stars" aria-label="5 out of 5 stars">
              <StarRating rating={5} />
            </div>
            <blockquote>
              &ldquo;Very friendly and organized front staff. The office was
              very clean and kid friendly.&rdquo;
            </blockquote>
            <figcaption>Jocelyn C.</figcaption>
          </figure>
        </div>

        <a
          className="more"
          href="https://www.google.com/maps/search/?api=1&query=The+Smile+Club+Dentistry+and+Orthodontics+Houston"
          rel="noopener"
          target="_blank"
        >
          Read our reviews
        </a>
      </div>
    </section>
  );
}

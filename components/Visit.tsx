import OnceHubWidget from "./OnceHubWidget";

export default function Visit() {
  return (
    <section className="band visit" id="visit">
      <div className="wrap">
        <h2 className="big">Come say hello.</h2>

        <div className="cards">
          <article className="card info">
            <div>
              <h3>Address</h3>
              <p>
                11210 Steeplecrest Dr
                <br />
                Ste 130
                <br />
                Houston, TX 77065
              </p>
              <a
                className="more"
                href="https://www.google.com/maps/search/?api=1&amp;query=11210+Steeplecrest+Dr%2C+Ste+130%2C+Houston%2C+TX+77065"
                rel="noopener"
                style={{ display: "inline-block", marginTop: "6px" }}
                target="_blank"
              >
                Get directions
              </a>
            </div>

            <div>
              <h3>Phone</h3>
              <p>(832) 941-4010</p>
            </div>

            <div>
              <h3>Hours</h3>
              <table className="hours">
                <tbody>
                  <tr>
                    <td>Monday &ndash; Friday</td>
                    <td>8:30 AM &ndash; 4:30 PM</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>9:00 AM &ndash; 1:30 PM</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <div className="card oncehub-card">
            <h3>Request an appointment.</h3>
            <p className="fnote">
              Choose a time using our appointment scheduler. For questions, call
              (832) 941-4010.
            </p>
            <OnceHubWidget />
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import "./not-found.css";

function DisconnectIllustration() {
  return (
    <svg
      className="not-found__illustration"
      viewBox="0 0 760 600"
      role="img"
      aria-labelledby="disconnect-title"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="disconnect-title">An unplugged power cable</title>

      <path
        className="disconnect-cable disconnect-cable--plug"
        d="M222 316C225 380 185 395 190 450S235 540 205 660"
      />
      <path
        className="disconnect-cable disconnect-cable--socket"
        d="M518 205C570 215 600 240 650 225S730 175 800 185"
      />

      <g className="disconnect-socket-group">
        <g transform="translate(455 225) rotate(-22)">
          <rect
            className="disconnect-socket__body"
            x="0"
            y="-66"
            width="70"
            height="132"
          />
          <ellipse className="disconnect-socket__body" cx="70" cy="0" rx="32" ry="66" />
          <ellipse className="disconnect-socket__body" cx="0" cy="0" rx="34" ry="66" />
          <ellipse className="disconnect-socket__rim" cx="-1" cy="0" rx="28" ry="57" />
          <ellipse className="disconnect-socket__face" cx="3" cy="0" rx="25" ry="53" />
          <ellipse className="disconnect-socket__opening" cx="6" cy="0" rx="13" ry="25" />
        </g>
      </g>

      <g className="disconnect-plug-group">
        <g transform="translate(250 265) rotate(-22)">
          <rect
            className="disconnect-plug__body"
            x="-48"
            y="-62"
            width="48"
            height="124"
          />
          <ellipse className="disconnect-plug__body" cx="-48" cy="0" rx="30" ry="62" />
          <ellipse className="disconnect-plug__rim" cx="0" cy="0" rx="30" ry="62" />
          <rect className="disconnect-plug__prong" x="2" y="-36" width="66" height="17" rx="8.5" />
          <rect className="disconnect-plug__prong" x="2" y="19" width="66" height="17" rx="8.5" />
        </g>
      </g>

      <g className="disconnect-rays">
        <line x1="316.1" y1="207.2" x2="295.5" y2="199.7" />
        <line x1="328.2" y1="188.2" x2="307" y2="167" />
        <line x1="347.2" y1="176.1" x2="339.7" y2="155.5" />
        <line x1="369.5" y1="173.2" x2="372.7" y2="137.3" />
        <line x1="391" y1="180" x2="406" y2="154" />
        <line x1="407.6" y1="195.2" x2="432.2" y2="178" />
        <line x1="431" y1="265" x2="450.3" y2="270.2" />
        <line x1="419.4" y1="287.3" x2="434.8" y2="300.1" />
        <line x1="399.5" y1="302.6" x2="408" y2="320.7" />
        <line x1="375" y1="308" x2="375" y2="328" />
        <line x1="350.5" y1="302.6" x2="338.7" y2="327.9" />
        <line x1="330.6" y1="287.3" x2="304.5" y2="309.1" />
        <line x1="205.4" y1="231.7" x2="183.4" y2="229.8" />
        <line x1="205.4" y1="248.3" x2="183.4" y2="250.2" />
        <line x1="210.7" y1="272.5" x2="190.1" y2="280" />
      </g>
    </svg>
  );
}

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__inner wrap">
        <div className="not-found__copy">
          <p className="not-found__code">404.</p>
          <h1 className="not-found__title">
            Page <span>not found.</span>
          </h1>
          <p className="not-found__message">
            Looks like this page has lost its connection. Let&apos;s get you
            back to where you need to be.
          </p>
          <Link className="pill not-found__home" href="/">
            Go back home
          </Link>
        </div>

        <div className="not-found__art">
          <DisconnectIllustration />
        </div>
      </div>
    </main>
  );
}

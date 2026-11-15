import Script from "next/script";

export default function OnceHubWidget() {
  return (
    <>
      <Script
        src="https://cdn.oncehub.com/cal/embed.js"
        strategy="afterInteractive"
      />
      <div
        data-oh-booking-calendar-id="BKC-9K5E3EG95Y"
        style={{ minWidth: "min(320px, 100%)", height: 700, width: "100%" }}
        role="region"
        aria-label="Book an appointment with The Smile Club"
      />
    </>
  );
}

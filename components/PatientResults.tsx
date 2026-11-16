"use client";

import ReactCompareImage from "react-compare-image";

type PatientResult = {
  service: string;
  treatment: string;
  beforeImage?: string;
  afterImage?: string;
};

const patientResults: PatientResult[] = [
  {
    service: "Orthodontics",
    treatment: "Braces and clear aligners",
    beforeImage: "/images/Orthodontics-before.webp",
    afterImage: "/images/Orthodontics-after.jpg",
  },
  {
    service: "Cosmetic dentistry",
    treatment: "Whitening and veneers",
    beforeImage: "/images/Cosmetic-dentistry-before.webp",
    afterImage: "/images/Cosmetic-dentistry-after.webp",
  },
  {
    service: "Restorative dentistry",
    treatment: "Dental implants and crowns",
    beforeImage: "/images/Restorative-dentistry-before.webp",
    afterImage: "/images/Restorative-dentistry-after.webp",
  },
];

export default function PatientResults() {
  return (
    <section
      aria-labelledby="results-title"
      className="band patient-results"
      id="results"
    >
      <div className="wrap">
        <p className="services-label">Patient stories</p>
        <h2 className="big" id="results-title">
          Smile transformations
        </h2>
        <p className="lead patient-results__intro">
          Explore examples of orthodontic, cosmetic, and restorative care from
          our team.
        </p>

        <div className="patient-results__grid">
          {patientResults.map((result) => (
            <article className="patient-result card" key={result.service}>
              <div className="patient-result__media">
                {result.beforeImage && result.afterImage ? (
                  <ReactCompareImage
                    leftImage={result.beforeImage}
                    rightImage={result.afterImage}
                    leftImageAlt={`${result.service} treatment before`}
                    rightImageAlt={`${result.service} treatment after`}
                    leftImageCss={{ width: "100%", height: "260px", objectFit: "cover" }}
                    leftImageLabel="Before"
                    rightImageLabel="After"
                    rightImageCss={{ width: "100%", height: "260px", objectFit: "cover" }}
                    sliderLineWidth={2}
                    sliderLineColor="#ffffff"
                    handleSize={36}
                  />
                ) : (
                  <div className="patient-result__placeholder">
                    <span className="patient-result__placeholder-icon" aria-hidden="true">
                      ↔
                    </span>
                    <span>Before and after photos</span>
                    <small>Approved case photos will appear here.</small>
                  </div>
                )}
              </div>
              <div className="patient-result__copy">
                <p className="blog-label">{result.service}</p>
                <h3>{result.treatment}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

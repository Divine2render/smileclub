import type { Thing } from "schema-dts";

type JsonLdProps<T extends Thing> = {
  data: T;
};

export default function JsonLd<T extends Thing>({ data }: JsonLdProps<T>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

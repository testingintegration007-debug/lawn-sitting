import { createFileRoute } from "@tanstack/react-router";
import LawnSittingLanding from "../components/LawnSittingLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "TurfLab Lawn Sitting — Expert Lawn Care & Monitoring",
      },
      {
        name: "description",
        content:
          "TurfLab connects homeowners with dedicated, insured lawn sitters. Precision mowing, smart irrigation, and photo reports on your schedule.",
      },
      { property: "og:title", content: "TurfLab Lawn Sitting — Expert Lawn Care & Monitoring" },
      {
        property: "og:description",
        content:
          "Dedicated lawn sitters for precision mowing, smart irrigation, and photo reports. Book a walkthrough today.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://staging.vibe.filesafe.space/1789021417416017000/assets/ba895109-94ab-4a43-9ede-f4908d16309a.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content:
          "https://staging.vibe.filesafe.space/1789021417416017000/assets/ba895109-94ab-4a43-9ede-f4908d16309a.jpg",
      },
    ],
  }),
  component: LawnSittingLanding,
});

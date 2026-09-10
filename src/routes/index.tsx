import { createFileRoute } from "@tanstack/react-router";
import LawnSittingLanding from "../components/LawnSittingLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "GreenGuard Lawn Sitting — Trusted Care for Your Lawn",
      },
      {
        name: "description",
        content:
          "GreenGuard connects homeowners with vetted, insured lawn sitters. Book mowing, watering, and full lawn care on your schedule with a satisfaction guarantee.",
      },
      { property: "og:title", content: "GreenGuard Lawn Sitting — Trusted Care for Your Lawn" },
      {
        property: "og:description",
        content:
          "Vetted, insured lawn sitters for mowing, watering, and full lawn care. Book in minutes with a satisfaction guarantee.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://staging.vibe.filesafe.space/1789021417416017000/assets/9362c83f-c5b0-45f3-805a-96b08735f6d0.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content:
          "https://staging.vibe.filesafe.space/1789021417416017000/assets/9362c83f-c5b0-45f3-805a-96b08735f6d0.png",
      },
    ],
  }),
  component: LawnSittingLanding,
});

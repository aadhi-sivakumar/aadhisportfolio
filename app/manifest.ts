import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aadhi Sivakumar Portfolio",
    short_name: "Aadhi Portfolio",
    description: "Personal portfolio of Aadhi Sivakumar, a Software Engineer and Machine Learning Researcher",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#06b6d4",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}

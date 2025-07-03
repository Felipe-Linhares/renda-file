import { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = 86400; // Revalida a cada 24 horas

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://www.rendafiledeluxo.com.br/sitemap.xml",
  };
}

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportAppError } from "../lib/error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportAppError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      { title: "Social Flex — Creative Marketing Agency | Digital Studio & Video Production" },
      {
        name: "description",
        content: "Social Flex is a premier digital studio & creative agency. We combine strategy, cinematic video production, personal branding, short-form reels, and digital marketing to build brands that dominate.",
      },
      {
        name: "keywords",
        content: "Social Flex, creative agency, digital marketing agency, branding studio, video production agency, personal branding, short form reels, video editing, social media management, content creation agency",
      },
      { name: "author", content: "Social Flex Studio" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "theme-color", content: "#050505" },

      // Open Graph / Facebook
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Social Flex" },
      { property: "og:url", content: "https://www.socialflex.in" },
      { property: "og:title", content: "Social Flex — Creative Marketing Agency & Digital Studio" },
      {
        property: "og:description",
        content: "High-impact brand strategy, cinematic video production, short-form reels, personal branding, and digital growth marketing.",
      },
      { property: "og:image", content: "https://www.socialflex.in/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Social Flex — Creative Marketing Agency & Digital Studio" },
      { property: "og:locale", content: "en_US" },

      // Twitter Cards
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@SocialFlex" },
      { name: "twitter:title", content: "Social Flex — Creative Marketing Agency & Digital Studio" },
      {
        name: "twitter:description",
        content: "We combine strategy, cinematic video production, personal branding, and digital marketing to build brands people remember.",
      },
      { name: "twitter:image", content: "https://www.socialflex.in/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://www.socialflex.in" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Barlow+Condensed:wght@500;600;700&family=Outfit:wght@500;600;700&family=Manrope:wght@400;500;600;700;800&family=Caveat:wght@600&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Social Flex",
          alternateName: "Social Flex Studio",
          url: "https://www.socialflex.in",
          logo: "https://www.socialflex.in/favicon.png",
          image: "https://www.socialflex.in/favicon.png",
          description:
            "Social Flex is a premier digital studio and creative marketing agency specializing in brand strategy, cinematic video production, personal branding, short-form reels, and high-performance digital marketing.",
          email: "mail2socialflex@gmail.com",
          telephone: "+918015502024",
          sameAs: [
            "https://www.instagram.com/socialflex.in",
            "https://www.facebook.com/share/1CFB93LRsq/",
            "https://wa.me/917092280024",
          ],
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
          },
          serviceType: [
            "Digital Marketing Agency",
            "Brand Strategy & Positioning",
            "Video Production & Editing",
            "Short-Form Reels Production",
            "Personal Branding for Leaders & Founders",
            "Creative Design & Campaign Management",
          ],
          knowsAbout: [
            "Social Media Marketing",
            "Personal Branding",
            "Brand Strategy",
            "Cinematic Video Production",
            "Short-Form Reels",
            "Digital Growth Strategy",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}

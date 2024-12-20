import "./globals.css"

import Script from "next/script"
import { Suspense } from "react"
import { Toaster } from "sonner"
import { FlagValues } from "components/flag-values"
import { ThirdParties } from "components/third-parties"
import { env } from "env.mjs"
import { Metadata } from "next"
import { GithubBadge } from "components/github-badge"
import { CartView } from "components/cart/cart-view"
import type { NavItem } from "components/navigation-bar/types"
import { NavigationBar } from "components/navigation-bar/navigation-bar"
import { mobileInlineScript } from "components/navigation-bar/mobile-inline-script"
import { Footer } from "components/footer"
import { Modals } from "components/modals/modals"
import DraftToolbar from "components/draft-toolbar"

export const revalidate = 86400

const navigationItems: NavItem[] = [
  {
    text: "Fashion",
    href: "/category/fashion",
    submenu: {
      variant: "text-grid",
      items: [
        {
          text: "Women",
          href: "/category/fashion",
          items: [
            { text: "Shirts & Blouses", href: "/category/fashion" },
            { text: "Blazers & Vests", href: "/category/fashion" },
            { text: "Cardigans & Sweaters", href: "/category/fashion" },
            { text: "Dresses", href: "/category/fashion" },
            { text: "Skirts", href: "/category/fashion" },
          ],
        },
        {
          text: "Men",
          href: "/category/fashion",
          items: [
            { text: "T-shirts & Tanks", href: "/category/fashion" },
            { text: "Hoodies & Sweatshirts", href: "/category/fashion" },
            { text: "Blazers & Suits", href: "/category/fashion" },
            { text: "Shorts", href: "/category/fashion" },
            { text: "Outerwear", href: "/category/fashion" },
          ],
        },
        {
          text: "Kids",
          href: "/category/fashion",
          items: [
            { text: "Clothing", href: "/category/fashion" },
            { text: "Activewear", href: "/category/fashion" },
            { text: "Accessories", href: "/category/fashion" },
            { text: "Footwear", href: "/category/fashion" },
          ],
        },
      ],
    },
  },
  {
    text: "Electronics",
    href: "/category/electronics",
    submenu: {
      variant: "text-grid",
      items: [
        {
          text: "Audio Devices",
          href: "/category/electronics",
          items: [
            { text: "Headphones", href: "/category/electronics" },
            { text: "Speakers", href: "/category/electronics" },
          ],
        },
        {
          text: "Cameras",
          href: "/category/electronics",
          items: [
            { text: "Digital Cameras", href: "/category/electronics" },
            { text: "Action Cameras", href: "/category/electronics" },
          ],
        }
      ],
    },
  },
  {
    text: "Beauty",
    href: "/category/beauty",
    submenu: {
      variant: "text-grid",
      items: [
        {
          text: "Skin Care",
          href: "/category/beauty",
          items: [
            { text: "Cleansers", href: "/category/beauty" },
            { text: "Moisturizers", href: "/category/beauty" },
            { text: "Treatments & Serums", href: "/category/beauty" },
          ],
        },
        {
          text: "Makeup",
          href: "/category/beauty",
          items: [
            { text: "Face Makeup", href: "/category/beauty" },
            { text: "Eye Makeup", href: "/category/beauty" },
            { text: "Lip Makeup", href: "/category/beauty" },
          ],
        },
        {
          text: "Haircare",
          href: "/category/beauty",
          items: [
            { text: "Shampoos & Conditioners", href: "/category/beauty" },
            { text: "Styling Products", href: "/category/beauty" },
          ],
        },

        {
          text: "Fragrances",
          href: "/category/beauty",
          items: [
            { text: "Perfumes", href: "/category/beauty" },
            { text: "Body Sprays", href: "/category/beauty" },
          ],
        },
      ],
    },
  },
  {
    text: "Furniture",
    href: "/category/furniture",
    submenu: {
      variant: "text-grid",
      items: [
        {
          text: "Living Room",
          href: "/category/furniture",
          items: [
            { text: "Sofas & Sectionals", href: "/category/furniture" },
            { text: "Coffee Tables", href: "/category/furniture" },
            { text: "TV Stands", href: "/category/furniture" },
          ],
        },

        {
          text: "Bedroom",
          href: "/category/furniture",
          items: [
            { text: "Beds", href: "/category/furniture" },
            { text: "Dressers", href: "/category/furniture" },
            { text: "Nightstands", href: "/category/furniture" },
          ],
        },

        {
          text: "Office",
          href: "/category/furniture",
          items: [
            { text: "Desks", href: "/category/furniture" },
            { text: "Office Chairs", href: "/category/furniture" },
            { text: "Storage Solutions", href: "/category/furniture" },
          ],
        },
      ],
    },
  },
]

export const metadata: Metadata = {
  title: "Next.js Enterprise Commerce | Blazity",
  description: "AI-FIRST NEXT.JS STOREFRONT FOR COMPOSABLE COMMERCE",
  metadataBase: new URL(env.LIVE_URL!),
  openGraph: {
    title: "Next.js Enterprise Commerce | Blazity",
    description: "AI-FIRST NEXT.JS STOREFRONT FOR COMPOSABLE COMMERCE",
    images: ["/opengraph-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Enterprise Commerce | Blazity",
    description: "AI-FIRST NEXT.JS STOREFRONT FOR COMPOSABLE COMMERCE",
    creator: "@blazity",
    images: ["/opengraph-image.jpg"],
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
  generator: "Next.js",
  applicationName: "Next.js",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script id="mobileMegaMenuLogic" strategy="lazyOnload">{`${mobileInlineScript}`}</Script>

        <NavigationBar items={navigationItems} />

        {children}

        <Footer />
        <Modals />

        <CartView />

        <Toaster position="bottom-left" />

        <DraftToolbar />

        <Suspense>
          <FlagValues />
        </Suspense>

        <ThirdParties />

        <GithubBadge />
      </body>
    </html>
  )
}

import type { Hit } from "algoliasearch"
import type { Review } from "lib/reviews/types"
import type { PlatformCollection } from "lib/shopify/types"
import type { CommerceProduct } from "types"

export function getDemoProducts(): {
  hits: Hit<CommerceProduct>[]
  totalPages: number
  facetDistribution: Record<string, unknown>
  totalHits: number
  independentFacetDistribution: Record<string, unknown>
} {
  const allProducts = require("public/demo-data.json")
  return {
    hits: allProducts.hits as Hit<CommerceProduct>[],
    totalPages: 1,
    facetDistribution: {},
    totalHits: allProducts.hits.length,
    independentFacetDistribution: {},
  }
}

export function getDemoSingleProduct(handle: string) {
  return getDemoProducts()?.hits?.find((p) => p.handle === handle) || null
}

export function getDemoCategories() {
  const allCategories = require("public/demo-categories-data.json")

  return {
    hits: allCategories as Hit<PlatformCollection>[],
    totalPages: 1,
    facetDistribution: {},
    totalHits: allCategories.length,
    independentFacetDistribution: {},
  }
}

export function getDemoSingleCategory(handle: string) {
  return getDemoCategories().hits.find((c: { handle: string }) => c.handle === handle) || null
}

export function getDemoProductReviews() {
  return require("public/demo-product-reviews-data.json") as { reviews: Review[]; total: number }
}

export function isDemoMode(): boolean {
  return (
    isDemoValue(process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) ||
    isDemoValue(process.env.NEXT_PUBLIC_SHOPIFY_ADMIN_ACCESS_TOKEN) ||
    isDemoValue(process.env.NEXT_PUBLIC_SHOPIFY_APP_API_SECRET_KEY) ||
    isDemoValue(process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN) ||
    isDemoValue(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID) ||
    isDemoValue(process.env.NEXT_PUBLIC_ALGOLIA_WRITE_API_KEY) ||
    isDemoValue(process.env.NEXT_PUBLIC_ALGOLIA_PRODUCTS_INDEX) ||
    isDemoValue(process.env.NEXT_PUBLIC_ALGOLIA_CATEGORIES_INDEX) ||
    !process.env.NEXT_PUBLIC_LIVE_URL ||
    process.env.NEXT_PUBLIC_IS_DEMO_MODE === "true"
  )
}

function isDemoValue(value: string | undefined) {
  return !value || value === "demo"
}

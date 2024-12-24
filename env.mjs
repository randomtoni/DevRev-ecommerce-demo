import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  skipValidation:
    process.env.NODE_ENV !== "production" ||
    process.env.SKIP_ENV_VALIDATION === "true",
  server: {
    SHOPIFY_STOREFRONT_ACCESS_TOKEN: z.string(),
    SHOPIFY_STORE_DOMAIN: z.string(),
    SHOPIFY_ADMIN_ACCESS_TOKEN: z.string().optional(),
    SHOPIFY_APP_API_SECRET_KEY: z.string().optional(),
    SHOPIFY_HIERARCHICAL_NAV_HANDLE: z.string().optional(),
    ALGOLIA_PRODUCTS_INDEX: z.string(),
    ALGOLIA_CATEGORIES_INDEX: z.string(),
    ALGOLIA_REVIEWS_INDEX: z.string().optional(),
    ALGOLIA_APP_ID: z.string().optional(),
    ALGOLIA_WRITE_API_KEY: z.string().optional(),
    REPLICATE_API_KEY: z.string().optional(),
    OPENAI_API_KEY: z.string().optional(),
    LIVE_URL: z.string().optional(),
    GTM_ID: z.string().optional().default(),
    IS_GTM_ENABLED: z.enum(["true", "false"]).optional(),
    IS_SPEED_INSIGHTS_ENABLED: z.enum(["true", "false"]).optional(),
    IS_VERCEL_ANALYTICS_ENABLED: z.enum(["true", "false"]).optional(),
    IS_DEMO_MODE: z.enum(["true", "false"]).optional(),
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    JUDGE_BASE_URL: z.string().optional(),
    JUDGE_API_TOKEN: z.string().optional(),
    CRON_SECRET: z.string().optional(),
  },
  client: {},
  runtimeEnv: {
    IS_DEMO_MODE: process.env.NEXT_PUBLIC_NEXT_PUBLIC_IS_DEMO_MODE,
    SHOPIFY_STOREFRONT_ACCESS_TOKEN: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    SHOPIFY_ADMIN_ACCESS_TOKEN: process.env.NEXT_PUBLIC_SHOPIFY_ADMIN_ACCESS_TOKEN,
    SHOPIFY_APP_API_SECRET_KEY: process.env.NEXT_PUBLIC_SHOPIFY_APP_API_SECRET_KEY,
    SHOPIFY_STORE_DOMAIN: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
    SHOPIFY_HIERARCHICAL_NAV_HANDLE: process.env.NEXT_PUBLIC_SHOPIFY_HIERARCHICAL_NAV_HANDLE,
    ALGOLIA_PRODUCTS_INDEX: process.env.NEXT_PUBLIC_ALGOLIA_PRODUCTS_INDEX,
    ALGOLIA_CATEGORIES_INDEX: process.env.NEXT_PUBLIC_ALGOLIA_CATEGORIES_INDEX,
    ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    ALGOLIA_WRITE_API_KEY: process.env.NEXT_PUBLIC_ALGOLIA_WRITE_API_KEY,
    OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    ALGOLIA_REVIEWS_INDEX: process.env.NEXT_PUBLIC_ALGOLIA_REVIEWS_INDEX,
    LIVE_URL: process.env.NEXT_PUBLIC_LIVE_URL,
    ANALYZE: process.env.NEXT_PUBLIC_ANALYZE,
    IS_GTM_ENABLED: process.env.NEXT_PUBLIC_IS_GTM_ENABLED,
    IS_VERCEL_ANALYTICS_ENABLED: process.env.NEXT_PUBLIC_IS_VERCEL_ANALYTICS_ENABLED,
    IS_SPEED_INSIGHTS_ENABLED: process.env.NEXT_PUBLIC_IS_SPEED_INSIGHTS_ENABLED,
    GTM_ID: process.env.NEXT_PUBLIC_NEXT_PUBLIC_GTM_ID,
    REPLICATE_API_KEY: process.env.NEXT_PUBLIC_REPLICATE_API_KEY,
    JUDGE_BASE_URL: process.env.NEXT_PUBLIC_JUDGE_BASE_URL,
    JUDGE_API_TOKEN: process.env.NEXT_PUBLIC_JUDGE_API_TOKEN,
    CRON_SECRET: process.env.NEXT_PUBLIC_CRON_SECRET,
  },
});

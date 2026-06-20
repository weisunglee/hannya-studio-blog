import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import config from "@/config";

export const BLOG_PATH = "src/content/posts";

dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

const LOCAL_DATETIME_FORMATS = [
  "YYYY-MM-DDTHH:mm:ss.SSS[Z]",
  "YYYY-MM-DDTHH:mm:ss[Z]",
  "YYYY-MM-DDTHH:mm:ss.SSS",
  "YYYY-MM-DDTHH:mm:ss",
  "YYYY-MM-DD HH:mm:ss",
  "YYYY-MM-DD HH:mm",
];

function parseSiteLocalDate(value: unknown) {
  if (value instanceof Date) {
    const localDateTime = [
      value.getUTCFullYear(),
      String(value.getUTCMonth() + 1).padStart(2, "0"),
      String(value.getUTCDate()).padStart(2, "0"),
    ].join("-");
    const localTime = [
      String(value.getUTCHours()).padStart(2, "0"),
      String(value.getUTCMinutes()).padStart(2, "0"),
      String(value.getUTCSeconds()).padStart(2, "0"),
    ].join(":");

    return dayjs.tz(
      `${localDateTime}T${localTime}.${String(value.getUTCMilliseconds()).padStart(3, "0")}`,
      "YYYY-MM-DDTHH:mm:ss.SSS",
      config.site.timezone
    ).toDate();
  }

  if (typeof value === "string") {
    const parsedDate = LOCAL_DATETIME_FORMATS.map(format =>
      dayjs.tz(value, format, config.site.timezone)
    ).find(date => date.isValid());

    if (parsedDate) {
      return parsedDate.toDate();
    }
  }

  return value;
}

const siteLocalDate = z.preprocess(parseSiteLocalDate, z.date());

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(config.site.author),
      pubDatetime: siteLocalDate,
      modDatetime: siteLocalDate.optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
  }),
});

export const collections = { posts, pages };

import { config, fields, collection, singleton } from "@keystatic/core";
import { createKeystaticImageFilename } from "./src/utils/keystaticImageFilename.js";

// Keystatic runs in local mode: the admin UI (npm run dev → /keystatic) reads
// and writes the same Markdown files Astro renders. Production build excludes
// Keystatic entirely (see astro.config.ts), so the deployed site stays static.
export default config({
  storage: { kind: "local" },
  ui: {
    brand: { name: "only26k's blog" },
  },
  collections: {
    posts: collection({
      label: "文章",
      path: "src/content/posts/*",
      // The filename (slug) becomes the post URL — matches AstroPaper, which
      // derives the route from the file id, not a frontmatter slug.
      slugField: "title",
      // Single .md file per post: metadata in YAML frontmatter, body below.
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({
          name: { label: "標題" },
          slug: {
            label: "網址 slug",
            description: "文章網址的最後一段(英數與連字號)。",
          },
        }),
        pubDatetime: fields.datetime({
          label: "發佈時間",
          defaultValue: { kind: "now" },
        }),
        modDatetime: fields.datetime({
          label: "更新時間(選填)",
        }),
        author: fields.text({
          label: "作者",
          defaultValue: "only26k",
        }),
        description: fields.text({
          label: "摘要",
          description: "用於 SEO 與社群分享。",
          multiline: true,
        }),
        tags: fields.array(fields.text({ label: "標籤" }), {
          label: "標籤",
          itemLabel: props => props.value || "標籤",
        }),
        featured: fields.checkbox({
          label: "精選(顯示在首頁精選區)",
          defaultValue: false,
        }),
        draft: fields.checkbox({
          label: "草稿(不公開)",
          defaultValue: false,
        }),
        content: fields.markdoc({
          label: "內文",
          extension: "md",
          options: {
            image: {
              directory: "public/images/posts",
              publicPath: "/images/posts",
              transformFilename: createKeystaticImageFilename,
            },
          },
        }),
      },
    }),
  },
  singletons: {
    home: singleton({
      label: "首頁",
      path: "src/content/pages/home",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.text({ label: "標題" }),
        description: fields.text({
          label: "描述",
          multiline: true,
        }),
        content: fields.markdoc({
          label: "首頁文字",
          extension: "md",
        }),
      },
    }),
    footer: singleton({
      label: "Footer",
      path: "src/content/pages/footer",
      format: { contentField: "content" },
      schema: {
        title: fields.text({
          label: "內部標題",
          defaultValue: "Footer",
        }),
        copyrightLabel: fields.text({
          label: "Copyright 前綴",
          defaultValue: "Copyright",
        }),
        rightsText: fields.text({
          label: "右側文字",
          defaultValue: "All rights reserved.",
        }),
        content: fields.markdoc({
          label: "備註",
          extension: "md",
        }),
      },
    }),
    about: singleton({
      label: "關於頁",
      path: "src/content/pages/about",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.text({ label: "標題" }),
        description: fields.text({
          label: "描述",
          multiline: true,
        }),
        ogImage: fields.text({
          label: "OG 圖片",
        }),
        canonicalURL: fields.url({
          label: "Canonical URL",
        }),
        content: fields.markdoc({
          label: "內容",
          extension: "md",
        }),
      },
    }),
  },
});

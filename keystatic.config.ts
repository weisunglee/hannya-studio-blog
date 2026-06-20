import { config, fields, collection } from "@keystatic/core";

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
              transformFilename: filename =>
                filename
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^a-z0-9._-]/g, ""),
            },
          },
        }),
      },
    }),
  },
});

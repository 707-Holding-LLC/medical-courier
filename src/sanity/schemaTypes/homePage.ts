import {defineField, defineType} from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({name: "heroKicker", title: "Hero Kicker", type: "string"}),
    defineField({name: "heroTitle", title: "Hero Title", type: "string"}),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 4,
    }),
    defineField({name: "overviewTitle", title: "Overview Title", type: "string"}),
    defineField({
      name: "overviewDescription",
      title: "Overview Description",
      type: "text",
      rows: 4,
    }),
    defineField({name: "seo", title: "SEO", type: "seo"}),
  ],
});
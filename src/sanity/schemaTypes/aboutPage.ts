import {defineField, defineType} from "sanity";

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({name: "leaderName", title: "Leader Name", type: "string"}),
    defineField({name: "leaderTitle", title: "Leader Title", type: "string"}),
    defineField({
      name: "leaderSummary",
      title: "Leader Summary",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "foundingStory",
      title: "Founding Story",
      type: "array",
      of: [{type: "block"}],
    }),
    defineField({name: "seo", title: "SEO", type: "seo"}),
  ],
});
import {defineArrayMember, defineField, defineType} from "sanity";

export const careersPageType = defineType({
  name: "careersPage",
  title: "Careers Page",
  type: "document",
  fields: [
    defineField({name: "heroTitle", title: "Hero Title", type: "string"}),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 4,
    }),
    defineField({name: "applyLink", title: "Apply Link", type: "url"}),
    defineField({
      name: "roles",
      title: "Roles",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({name: "title", title: "Title", type: "string"}),
            defineField({name: "type", title: "Type", type: "string"}),
            defineField({name: "location", title: "Location", type: "string"}),
            defineField({
              name: "summary",
              title: "Summary",
              type: "text",
              rows: 4,
            }),
          ],
        }),
      ],
    }),
    defineField({name: "seo", title: "SEO", type: "seo"}),
  ],
});
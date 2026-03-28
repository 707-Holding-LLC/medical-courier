import {defineArrayMember, defineField, defineType} from "sanity";

export const compliancePageType = defineType({
  name: "compliancePage",
  title: "Compliance Page",
  type: "document",
  fields: [
    defineField({name: "heroTitle", title: "Hero Title", type: "string"}),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "pillars",
      title: "Compliance Pillars",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({name: "title", title: "Title", type: "string"}),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            }),
          ],
        }),
      ],
    }),
    defineField({name: "seo", title: "SEO", type: "seo"}),
  ],
});
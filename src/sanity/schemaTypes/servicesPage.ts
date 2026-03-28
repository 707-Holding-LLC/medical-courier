import {defineArrayMember, defineField, defineType} from "sanity";

export const servicesPageType = defineType({
  name: "servicesPage",
  title: "Services Page",
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
      name: "services",
      title: "Services",
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
              rows: 4,
            }),
            defineField({
              name: "bullets",
              title: "Bullets",
              type: "array",
              of: [{type: "string"}],
            }),
          ],
        }),
      ],
    }),
    defineField({name: "seo", title: "SEO", type: "seo"}),
  ],
});
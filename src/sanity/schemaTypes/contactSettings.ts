import {defineField, defineType} from "sanity";

export const contactSettingsType = defineType({
  name: "contactSettings",
  title: "Contact Settings",
  type: "document",
  fields: [
    defineField({name: "companyName", title: "Company Name", type: "string"}),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 3,
    }),
    defineField({name: "phone", title: "Phone", type: "string"}),
    defineField({name: "email", title: "Email", type: "string"}),
    defineField({name: "tagline", title: "Tagline", type: "string"}),
  ],
});
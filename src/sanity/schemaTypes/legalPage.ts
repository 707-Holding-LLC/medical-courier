import {defineField, defineType} from "sanity";

export const legalPageType = defineType({
  name: "legalPage",
  title: "Legal Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Page Slug",
      type: "slug",
      description:
        "Use privacy-policy for Privacy Policy, and terms-of-service for Terms of Service.",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "kicker",
      title: "Small Text Above Heading",
      type: "string",
      initialValue: "Legal",
    }),

    defineField({
      name: "effectiveDate",
      title: "Effective Date",
      type: "string",
      initialValue: "March 27, 2026",
    }),

    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "string",
      initialValue: "March 27, 2026",
    }),

    defineField({
      name: "body",
      title: "Page Body",
      type: "array",
      description:
        "Manage the full legal page content here. Use headings, paragraphs, and bullet lists as needed.",
      of: [
        {
          type: "block",
          styles: [
            {title: "Normal", value: "normal"},
            {title: "Heading 2", value: "h2"},
            {title: "Heading 3", value: "h3"},
          ],
          lists: [
            {title: "Bullet", value: "bullet"},
            {title: "Numbered", value: "number"},
          ],
          marks: {
            decorators: [
              {title: "Strong", value: "strong"},
              {title: "Emphasis", value: "em"},
            ],
            annotations: [
              {
                name: "link",
                title: "Link",
                type: "object",
                fields: [
                  defineField({
                    name: "href",
                    title: "URL",
                    type: "url",
                  }),
                ],
              },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
  },
});
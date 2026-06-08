import {defineArrayMember, defineField, defineType} from "sanity";

export const insightPostType = defineType({
  name: "insightPost",
  title: "Insight Posts",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "contentPillar",
      title: "Content Pillar",
      type: "string",
      options: {
        list: [
          {title: "Service Spotlight", value: "service-spotlight"},
          {title: "Compliance Tips", value: "compliance-tips"},
          {title: "Industry Insight", value: "industry-insight"},
          {title: "Behind-the-Scenes", value: "behind-the-scenes"},
          {title: "Client-Focused Value", value: "client-focused-value"},
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 4,
      description:
        "Short summary shown on the public insights listing page and metadata.",
      validation: (Rule) => Rule.required().max(260),
    }),

    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {hotspot: true},
    }),

    defineField({
      name: "featuredImageAlt",
      title: "Featured Image Alt Text",
      type: "string",
      description: "Describe the image for accessibility and SEO.",
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            {title: "Normal", value: "normal"},
            {title: "Heading 2", value: "h2"},
            {title: "Heading 3", value: "h3"},
            {title: "Quote", value: "blockquote"},
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
        }),
        defineArrayMember({
          type: "image",
          options: {hotspot: true},
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "707 MEDeliver",
    }),

    defineField({
      name: "publishAt",
      title: "Publish At",
      type: "datetime",
      description:
        "Scheduled or intended publish date. This is metadata unless using Sanity Scheduled Drafts or Make.com automation.",
    }),

    defineField({
      name: "status",
      title: "Publishing Status",
      type: "string",
      initialValue: "draft",
      options: {
        list: [
          {title: "Draft", value: "draft"},
          {title: "In Review", value: "in-review"},
          {title: "Approved", value: "approved"},
          {title: "Scheduled", value: "scheduled"},
          {title: "Published", value: "published"},
          {title: "Archived", value: "archived"},
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "approvalStatus",
      title: "Approval Status",
      type: "string",
      initialValue: "not-submitted",
      options: {
        list: [
          {title: "Not Submitted", value: "not-submitted"},
          {title: "Pending Approval", value: "pending-approval"},
          {title: "Approved", value: "approved"},
          {title: "Needs Revision", value: "needs-revision"},
        ],
        layout: "dropdown",
      },
    }),

    defineField({
      name: "complianceStatus",
      title: "Compliance Status",
      type: "string",
      initialValue: "not-checked",
      options: {
        list: [
          {title: "Not Checked", value: "not-checked"},
          {title: "Passed", value: "passed"},
          {title: "Flagged", value: "flagged"},
          {title: "Needs Human Review", value: "needs-human-review"},
        ],
        layout: "dropdown",
      },
    }),

    defineField({
      name: "complianceNotes",
      title: "Compliance Notes",
      type: "text",
      rows: 5,
      description:
        "Notes from compliance review. Avoid patient data, dispatch details, unsupported HIPAA claims, or chain-of-custody specifics.",
    }),

    defineField({
      name: "sourceTranscriptLink",
      title: "Source Transcript Link",
      type: "url",
      description: "Google Docs transcript link from the content engine.",
    }),

    defineField({
      name: "sourceFileLink",
      title: "Source File Link",
      type: "url",
      description: "Original audio/video source file link, if available.",
    }),

    defineField({
      name: "seoKeyword",
      title: "SEO Keyword",
      type: "string",
    }),

    defineField({
      name: "linkedInRepurposeNotes",
      title: "LinkedIn Repurpose Notes",
      type: "text",
      rows: 5,
      description:
        "Notes for turning this insight into a LinkedIn article, post, or short-form content.",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "contentPillar",
      media: "featuredImage",
    },
  },
});
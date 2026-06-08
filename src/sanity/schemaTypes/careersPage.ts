import {defineField, defineType} from "sanity";

export const careersPageType = defineType({
  name: "careersPage",
  title: "Careers Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Name",
      type: "string",
      initialValue: "Careers Page",
      validation: (Rule) => Rule.required(),
      readOnly: true,
    }),

    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({
          name: "kicker",
          title: "Small Text Above Main Heading",
          type: "string",
          initialValue: "Career Opportunities",
        }),
        defineField({
          name: "titleLine1",
          title: "Heading Line 1",
          type: "string",
          initialValue: "Join a Team Built on",
        }),
        defineField({
          name: "titleLine2",
          title: "Green Heading Line",
          type: "string",
          initialValue: "Reliability & Care",
        }),
        defineField({
          name: "description",
          title: "Hero Description",
          type: "text",
          rows: 4,
          initialValue:
            "We're building a professional medical courier operation focused on secure handling, dependable service, and healthcare logistics excellence across Chicago and Illinois.",
        }),
        defineField({
          name: "primaryButtonText",
          title: "First Button Text",
          type: "string",
          initialValue: "Apply Now →",
        }),
        defineField({
          name: "primaryButtonHref",
          title: "First Button Link",
          type: "string",
          initialValue: "#apply",
        }),
        defineField({
          name: "secondaryButtonText",
          title: "Second Button Text",
          type: "string",
          initialValue: "Contact Us",
        }),
        defineField({
          name: "secondaryButtonHref",
          title: "Second Button Link",
          type: "string",
          initialValue: "/contact",
        }),
      ],
    }),

    defineField({
      name: "benefits",
      title: "Benefit Cards",
      type: "array",
      initialValue: [
        {
          title: "Healthcare Impact",
          description:
            "Support the movement of critical healthcare materials and help keep providers, labs, and patients connected.",
        },
        {
          title: "Professional Standards",
          description:
            "Work within a structured, compliance-conscious environment built on reliability, accountability, and trust.",
        },
        {
          title: "Operational Discipline",
          description:
            "Join a team that values punctuality, secure handling procedures, and strong service execution.",
        },
      ],
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Benefit Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Benefit Description",
              type: "text",
              rows: 3,
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
          },
        },
      ],
    }),

    defineField({
      name: "openRolesSection",
      title: "Open Roles Section",
      type: "object",
      fields: [
        defineField({
          name: "kicker",
          title: "Small Section Label",
          type: "string",
          initialValue: "Open Roles",
        }),
        defineField({
          name: "title",
          title: "Section Heading",
          type: "string",
          initialValue: "Current Opportunities",
        }),
        defineField({
          name: "description",
          title: "Section Description",
          type: "text",
          rows: 3,
          initialValue:
            "Explore roles designed for dependable professionals who value timeliness, care, and structured logistics operations.",
        }),
        defineField({
          name: "roles",
          title: "Roles",
          type: "array",
          initialValue: [
            {
              title: "Medical Courier Driver",
              type: "Contract / Part-Time / Full-Time",
              location: "Chicago, Illinois",
              summary:
                "Transport medical specimens, documents, and healthcare-related items with professionalism, care, and timeliness.",
              responsibilities: [
                "Complete scheduled pickups and deliveries accurately and on time",
                "Maintain chain-of-custody awareness during transport and handoff",
                "Represent the company professionally at healthcare facilities",
                "Follow routing, communication, and delivery confirmation procedures",
              ],
              requirements: [
                "Valid driver's license",
                "Clean and reliable driving history",
                "Professional communication and appearance",
                "Punctuality and strong attention to detail",
              ],
            },
            {
              title: "On-Call Courier",
              type: "Flexible / As Needed",
              location: "Chicago Metropolitan Area",
              summary:
                "Support urgent and short-notice healthcare delivery needs with rapid response and dependable execution.",
              responsibilities: [
                "Respond to urgent dispatch assignments",
                "Handle time-sensitive deliveries with care and urgency",
                "Maintain communication with dispatch and clients as needed",
                "Follow delivery documentation and routing procedures",
              ],
              requirements: [
                "Flexible availability",
                "Reliable transportation",
                "Strong time management",
                "Comfort with fast-paced logistics support",
              ],
            },
            {
              title: "Logistics Coordinator",
              type: "Operations / Administrative",
              location: "Chicago, Illinois",
              summary:
                "Support scheduling, dispatch coordination, delivery visibility, and operational communication across service routes.",
              responsibilities: [
                "Coordinate pickup and delivery schedules",
                "Communicate with drivers and client contacts",
                "Monitor delivery progress and service updates",
                "Maintain organized operational records",
              ],
              requirements: [
                "Strong organizational skills",
                "Clear communication",
                "Ability to manage multiple priorities",
                "Experience in logistics or operations is a plus",
              ],
            },
          ],
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Role Title",
                  type: "string",
                }),
                defineField({
                  name: "type",
                  title: "Role Type",
                  type: "string",
                }),
                defineField({
                  name: "location",
                  title: "Location",
                  type: "string",
                }),
                defineField({
                  name: "summary",
                  title: "Role Summary",
                  type: "text",
                  rows: 3,
                }),
                defineField({
                  name: "responsibilities",
                  title: "Responsibilities",
                  type: "array",
                  of: [{type: "string"}],
                }),
                defineField({
                  name: "requirements",
                  title: "Requirements",
                  type: "array",
                  of: [{type: "string"}],
                }),
                defineField({
                  name: "buttonText",
                  title: "Button Text",
                  type: "string",
                  initialValue: "Apply Now",
                }),
                defineField({
                  name: "buttonHref",
                  title: "Button Link",
                  type: "string",
                  initialValue: "#apply",
                }),
              ],
              preview: {
                select: {
                  title: "title",
                  subtitle: "type",
                },
              },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "qualificationsSection",
      title: "Qualifications Section",
      type: "object",
      fields: [
        defineField({
          name: "kicker",
          title: "Small Section Label",
          type: "string",
          initialValue: "What We Look For",
        }),
        defineField({
          name: "title",
          title: "Section Heading",
          type: "string",
          initialValue: "Candidate Qualifications",
        }),
        defineField({
          name: "description",
          title: "Section Description",
          type: "text",
          rows: 3,
          initialValue:
            "We value dependable people who can represent the company well, follow procedures carefully, and support time-sensitive medical logistics operations.",
        }),
        defineField({
          name: "items",
          title: "Qualification List",
          type: "array",
          of: [{type: "string"}],
          initialValue: [
            "Valid driver's license and dependable transportation where applicable",
            "Professional attitude and customer-facing communication skills",
            "Strong punctuality and ability to follow structured procedures",
            "Comfort working around healthcare, lab, or time-sensitive delivery environments",
            "Respect for confidentiality, secure handling, and operational discipline",
          ],
        }),
      ],
    }),

    defineField({
      name: "applicationSection",
      title: "Application Form Intro",
      type: "object",
      fields: [
        defineField({
          name: "kicker",
          title: "Small Section Label",
          type: "string",
          initialValue: "Apply Now",
        }),
        defineField({
          name: "title",
          title: "Section Heading",
          type: "string",
          initialValue: "Submit Your Application",
        }),
        defineField({
          name: "description",
          title: "Section Description",
          type: "text",
          rows: 3,
          initialValue:
            "Complete the form below. Qualified candidates will be contacted within 5–7 business days. All information is kept confidential and used solely for employment screening purposes.",
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
  },
});
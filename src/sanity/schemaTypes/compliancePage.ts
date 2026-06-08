import {defineField, defineType} from "sanity";

export const compliancePageType = defineType({
  name: "compliancePage",
  title: "Compliance Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Name",
      type: "string",
      initialValue: "Compliance Page",
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
          initialValue: "Reliability & Compliance",
        }),
        defineField({
          name: "titleLine1",
          title: "Heading Line 1",
          type: "string",
          initialValue: "Trusted Handling.",
        }),
        defineField({
          name: "titleLine2",
          title: "Heading Line 2",
          type: "string",
          initialValue: "Secure Operations.",
        }),
        defineField({
          name: "titleLine3",
          title: "Green Heading Line",
          type: "string",
          initialValue: "Reliable Delivery.",
        }),
        defineField({
          name: "description",
          title: "Hero Description",
          type: "text",
          rows: 4,
          initialValue:
            "707 MEDeliver prioritizes privacy awareness, secure specimen handling, professional courier operations, and reliable delivery processes designed for healthcare logistics.",
        }),
        defineField({
          name: "primaryButtonText",
          title: "First Button Text",
          type: "string",
          initialValue: "Request Service",
        }),
        defineField({
          name: "primaryButtonHref",
          title: "First Button Link",
          type: "string",
          initialValue: "/contact",
        }),
        defineField({
          name: "secondaryButtonText",
          title: "Second Button Text",
          type: "string",
          initialValue: "View Services",
        }),
        defineField({
          name: "secondaryButtonHref",
          title: "Second Button Link",
          type: "string",
          initialValue: "/services",
        }),
        defineField({
          name: "image",
          title: "Hero Image",
          type: "image",
          options: {hotspot: true},
          fields: [
            defineField({
              name: "alt",
              title: "Image Description",
              type: "string",
              initialValue: "Medical courier compliance visual",
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "pillarsSection",
      title: "Compliance Pillars Section",
      type: "object",
      fields: [
        defineField({
          name: "kicker",
          title: "Small Section Label",
          type: "string",
          initialValue: "Core Standards",
        }),
        defineField({
          name: "title",
          title: "Section Heading",
          type: "string",
          initialValue: "How We Approach Compliance",
        }),
        defineField({
          name: "description",
          title: "Section Description",
          type: "text",
          rows: 3,
          initialValue:
            "Built around secure handling, structured delivery discipline, and professional healthcare logistics practices.",
        }),
        defineField({
          name: "items",
          title: "Compliance Pillars",
          type: "array",
          initialValue: [
            {
              title: "HIPAA Awareness",
              description:
                "Our team operates with privacy awareness, confidentiality discipline, and healthcare-focused handling standards.",
              icon: "shield",
            },
            {
              title: "Secure Specimen Handling Procedures",
              description:
                "Specimens and sensitive materials are handled with care, structure, and documented operational discipline.",
              icon: "specimen",
            },
            {
              title: "Chain-of-Custody Protocols",
              description:
                "Every handoff is treated with accountability, traceability, and secure delivery process standards.",
              icon: "chain",
            },
            {
              title: "Professional Drivers",
              description:
                "Couriers represent the brand professionally, operate with care, and follow established logistics procedures.",
              icon: "driver",
            },
            {
              title: "Reliable Scheduling & Delivery Tracking",
              description:
                "Reliable coordination and delivery visibility support timely fulfillment and trusted healthcare operations.",
              icon: "tracking",
            },
          ],
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "icon",
                  title: "Icon Type",
                  type: "string",
                  description:
                    "Use one of: shield, specimen, chain, driver, tracking.",
                  options: {
                    list: [
                      {title: "Shield", value: "shield"},
                      {title: "Specimen", value: "specimen"},
                      {title: "Chain", value: "chain"},
                      {title: "Driver", value: "driver"},
                      {title: "Tracking", value: "tracking"},
                    ],
                  },
                }),
                defineField({
                  name: "title",
                  title: "Pillar Title",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Pillar Description",
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
      ],
    }),

    defineField({
      name: "trainingSection",
      title: "Training & Standards Section",
      type: "object",
      fields: [
        defineField({
          name: "kicker",
          title: "Small Section Label",
          type: "string",
          initialValue: "Training & Standards",
        }),
        defineField({
          name: "title",
          title: "Section Heading",
          type: "string",
          initialValue: "Compliance Backed by Process",
        }),
        defineField({
          name: "description",
          title: "Section Description",
          type: "text",
          rows: 5,
          initialValue:
            "Reliability in medical courier operations depends on more than speed. It requires secure handling standards, privacy awareness, disciplined handoff procedures, and consistent professional conduct across every route.",
        }),
        defineField({
          name: "points",
          title: "Checklist Points",
          type: "array",
          of: [{type: "string"}],
          initialValue: [
            "Privacy-aware courier operations",
            "Secure specimen handling procedures",
            "Chain-of-custody discipline",
            "Professional driver presentation",
            "Reliable scheduling and delivery coordination",
          ],
        }),
        defineField({
          name: "cards",
          title: "Training Cards",
          type: "array",
          initialValue: [
            {
              title: "HIPAA Awareness Training",
              description:
                "Annual awareness and privacy-focused courier training that supports secure healthcare logistics operations.",
            },
            {
              title: "Secure Handling Standards",
              description:
                "Operational discipline for specimen integrity, careful transport, and secure handling practices.",
            },
            {
              title: "Chain-of-Custody Workflow",
              description:
                "Structured handoff and documentation processes that support accountability throughout delivery.",
            },
            {
              title: "Professional Operations",
              description:
                "Driver professionalism, process consistency, and dependable service execution across every route.",
            },
          ],
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Card Title",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Card Description",
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
      ],
    }),

    defineField({
      name: "secureOperations",
      title: "Secure Operations Section",
      type: "object",
      fields: [
        defineField({
          name: "kicker",
          title: "Small Section Label",
          type: "string",
          initialValue: "Secure Operations",
        }),
        defineField({
          name: "title",
          title: "Section Heading",
          type: "string",
          initialValue: "Why Compliance Matters",
        }),
        defineField({
          name: "paragraphs",
          title: "Section Paragraphs",
          type: "array",
          of: [{type: "text", rows: 4}],
          initialValue: [
            "In healthcare logistics, reliability is tied directly to trust. Secure handling, disciplined delivery processes, and professional execution help protect sensitive materials and support stronger partnerships with clinics, labs, pharmacies, and healthcare providers.",
            "Our compliance-centered operating mindset supports better specimen integrity, clearer handoff accountability, more dependable scheduling, and a stronger standard of service across every route.",
          ],
        }),
        defineField({
          name: "quote",
          title: "Quote",
          type: "text",
          rows: 3,
          initialValue:
            "Compliance is not just about checking boxes. It is about building confidence in every pickup, every handoff, and every delivery.",
        }),
        defineField({
          name: "stats",
          title: "Trust Stats",
          type: "array",
          initialValue: [
            {value: "HIPAA", label: "Awareness Focus"},
            {value: "Secure", label: "Handling Standards"},
            {value: "Tracked", label: "Delivery Visibility"},
            {value: "Reliable", label: "Operational Discipline"},
          ],
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "value",
                  title: "Stat Value",
                  type: "string",
                }),
                defineField({
                  name: "label",
                  title: "Stat Label",
                  type: "string",
                }),
              ],
              preview: {
                select: {
                  title: "value",
                  subtitle: "label",
                },
              },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "cta",
      title: "Final Call-To-Action Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "CTA Heading",
          type: "string",
          initialValue: "Work with a Compliance-Conscious Logistics Partner",
        }),
        defineField({
          name: "description",
          title: "CTA Description",
          type: "text",
          rows: 3,
          initialValue:
            "Need a courier partner that values secure handling, professional delivery standards, and reliable healthcare logistics operations?",
        }),
        defineField({
          name: "primaryButtonText",
          title: "First Button Text",
          type: "string",
          initialValue: "Request Service",
        }),
        defineField({
          name: "primaryButtonHref",
          title: "First Button Link",
          type: "string",
          initialValue: "/contact",
        }),
        defineField({
          name: "secondaryButtonText",
          title: "Second Button Text",
          type: "string",
          initialValue: "Explore Services",
        }),
        defineField({
          name: "secondaryButtonHref",
          title: "Second Button Link",
          type: "string",
          initialValue: "/services",
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
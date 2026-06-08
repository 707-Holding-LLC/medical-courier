import {defineField, defineType} from "sanity";

export const whoWeServePageType = defineType({
  name: "whoWeServePage",
  title: "Who We Serve Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Name",
      type: "string",
      initialValue: "Who We Serve Page",
      validation: (Rule) => Rule.required(),
      readOnly: true,
    }),

    defineField({
      name: "hero",
      title: "Hero Banner",
      type: "object",
      fields: [
        defineField({
          name: "image",
          title: "Hero Background Image",
          type: "image",
          options: {hotspot: true},
          fields: [
            defineField({
              name: "alt",
              title: "Image Description",
              type: "string",
              initialValue:
                "Healthcare corridor representing medical logistics excellence",
            }),
          ],
        }),
        defineField({
          name: "titleLine1",
          title: "Heading Line 1",
          type: "string",
          initialValue: "Precision Logistics for",
        }),
        defineField({
          name: "titleLine2",
          title: "Heading Line 2",
          type: "string",
          initialValue: "Healthcare Excellence",
        }),
        defineField({
          name: "description",
          title: "Hero Description",
          type: "text",
          rows: 3,
          initialValue:
            "Ensuring the integrity of every specimen and the reliability of every delivery across the healthcare spectrum.",
        }),
      ],
    }),

    defineField({
      name: "industriesSection",
      title: "Industries Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Section Heading",
          type: "string",
          initialValue: "Industries We Serve",
        }),
        defineField({
          name: "description",
          title: "Section Description",
          type: "text",
          rows: 3,
          initialValue:
            "Specialized medical transport solutions tailored to specific institutional needs.",
        }),
        defineField({
          name: "items",
          title: "Industry Cards",
          type: "array",
          initialValue: [
            {
              title: "Hospitals",
              description:
                "Comprehensive medical logistics covering multi-campus systems with 24/7 on-demand and scheduled routing.",
              icon: "hospital",
            },
            {
              title: "Laboratories",
              description:
                "Secure, temperature-controlled specimen transport ensuring sample viability and rapid turnaround times.",
              icon: "lab",
            },
            {
              title: "Clinics",
              description:
                "Efficient daily clinical pickups that integrate seamlessly with your office workflow and patient care schedules.",
              icon: "clinic",
            },
            {
              title: "Urgent Care",
              description:
                "Rapid response courier services for critical results and STAT orders when every minute counts.",
              icon: "urgent",
            },
            {
              title: "Pharmacies",
              description:
                "Confidential and safe prescription handling with strict adherence to regulatory safety protocols.",
              icon: "pharmacy",
            },
            {
              title: "Medical Research",
              description:
                "Specialized handling for clinical trials, sensitive biomaterials, and high-value research assets.",
              icon: "research",
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
                    "Use one of: hospital, lab, clinic, urgent, pharmacy, research.",
                  options: {
                    list: [
                      {title: "Hospital", value: "hospital"},
                      {title: "Laboratory", value: "lab"},
                      {title: "Clinic", value: "clinic"},
                      {title: "Urgent Care", value: "urgent"},
                      {title: "Pharmacy", value: "pharmacy"},
                      {title: "Research", value: "research"},
                    ],
                  },
                }),
                defineField({
                  name: "title",
                  title: "Industry Title",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Industry Description",
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
      name: "reliability",
      title: "Reliability & Compliance Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Section Heading",
          type: "string",
          initialValue: "Reliability & Compliance",
        }),
        defineField({
          name: "description",
          title: "Section Description",
          type: "text",
          rows: 4,
          initialValue:
            "Our foundation is built on trust and regulatory excellence. We don't just move items; we manage critical healthcare data and assets with military-grade precision.",
        }),
        defineField({
          name: "points",
          title: "Reliability Points",
          type: "array",
          initialValue: [
            {
              title: "HIPAA Awareness & Training",
              description:
                "Every driver is certified and trained in patient privacy and data security protocols.",
            },
            {
              title: "Full Chain-of-Custody",
              description:
                "Real-time digital tracking and signature verification for every single handoff.",
            },
            {
              title: "Professional Uniformed Drivers",
              description:
                "Vetted professionals who represent your brand with dignity and competence.",
            },
            {
              title: "Optimized Reliable Scheduling",
              description:
                "99.9% on-time performance using advanced route optimization software.",
            },
          ],
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Point Title",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Point Description",
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
          name: "metrics",
          title: "Metric Cards",
          type: "array",
          initialValue: [
            {value: "100%", label: "HIPAA Compliant"},
            {value: "24/7", label: "Operation"},
            {value: "<15m", label: "STAT Response"},
            {value: "99.9%", label: "On-Time Rate"},
          ],
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "value",
                  title: "Metric Value",
                  type: "string",
                }),
                defineField({
                  name: "label",
                  title: "Metric Label",
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
      name: "communityImpact",
      title: "Community Impact Section",
      type: "object",
      fields: [
        defineField({
          name: "image",
          title: "Community Image",
          type: "image",
          options: {hotspot: true},
          fields: [
            defineField({
              name: "alt",
              title: "Image Description",
              type: "string",
              initialValue:
                "Healthcare professionals representing community impact",
            }),
          ],
        }),
        defineField({
          name: "title",
          title: "Section Heading",
          type: "string",
          initialValue: "Community Impact",
        }),
        defineField({
          name: "description",
          title: "Section Description",
          type: "text",
          rows: 5,
          initialValue:
            "At 707 MEDeliver, we view ourselves as an extension of the healthcare community. Every delivery we make directly impacts patient outcomes. By providing reliable logistics, we help doctors diagnose faster, allow researchers to innovate, and ensure patients receive their medications without delay.",
        }),
        defineField({
          name: "quote",
          title: "Quote",
          type: "text",
          rows: 3,
          initialValue:
            "Our mission is to strengthen the backbone of community health by removing the friction from medical transport. When logistics work, lives are saved.",
        }),
        defineField({
          name: "quoteAttribution",
          title: "Quote Attribution",
          type: "string",
          initialValue: "— Operations Director, 707 MEDeliver",
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
          initialValue: "Partner with the Healthcare Logistics Experts",
        }),
        defineField({
          name: "description",
          title: "CTA Description",
          type: "text",
          rows: 3,
          initialValue:
            "Ready to streamline your medical transport operations? Contact us today for a custom logistics assessment.",
        }),
        defineField({
          name: "primaryButtonText",
          title: "First Button Text",
          type: "string",
          initialValue: "Request a Consultation",
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
          initialValue: "View Service Areas",
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
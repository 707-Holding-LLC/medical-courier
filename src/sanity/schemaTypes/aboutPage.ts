import {defineField, defineType} from "sanity";

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Name",
      type: "string",
      initialValue: "About Page",
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
          initialValue: "Chicago, Illinois",
        }),
        defineField({
          name: "titleBeforeHighlight",
          title: "Main Heading Before Green Text",
          type: "string",
          initialValue: "Chicago's Trusted Medical Courier &",
        }),
        defineField({
          name: "titleHighlight",
          title: "Green Heading Text",
          type: "string",
          initialValue: "Healthcare Logistics",
        }),
        defineField({
          name: "titleAfterHighlight",
          title: "Main Heading After Green Text",
          type: "string",
          initialValue: "Partner.",
        }),
        defineField({
          name: "descriptionLine1",
          title: "Description Line 1",
          type: "string",
          initialValue: "Reliable. HIPAA-Compliant. Time-Sensitive.",
        }),
        defineField({
          name: "descriptionLine2",
          title: "Description Line 2",
          type: "string",
          initialValue: "Built by a leader who knows what's at stake.",
        }),
        defineField({
          name: "primaryButtonText",
          title: "First Button Text",
          type: "string",
          initialValue: "Work With Us →",
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
          initialValue: "Learn More ↓",
        }),
        defineField({
          name: "secondaryButtonHref",
          title: "Second Button Link",
          type: "string",
          initialValue: "#our-story",
        }),
      ],
    }),

    defineField({
      name: "problemSolution",
      title: "Problem / Solution Section",
      type: "object",
      fields: [
        defineField({
          name: "statementBeforeHighlight",
          title: "Opening Statement Before Green Text",
          type: "string",
          initialValue: "In healthcare, late isn't just inconvenient.",
        }),
        defineField({
          name: "statementHighlight",
          title: "Green Statement Text",
          type: "string",
          initialValue: "It's consequential.",
        }),
        defineField({
          name: "points",
          title: "Problem Points",
          type: "array",
          of: [{type: "string"}],
          initialValue: [
            "A delayed specimen can compromise a diagnosis.",
            "A missed pharmacy delivery can interrupt patient care.",
            "A logistics failure can cost a health system far more than time.",
          ],
        }),
        defineField({
          name: "description",
          title: "Section Description",
          type: "text",
          rows: 5,
          initialValue:
            "707 MEDeliver was built to eliminate that risk - with HIPAA-compliant, precision-driven courier services designed specifically for Chicago's healthcare community. We don't repurpose general freight infrastructure. We build dedicated healthcare logistics, from the ground up.",
        }),
      ],
    }),

    defineField({
      name: "differentiatorsSection",
      title: "Differentiators Section",
      type: "object",
      fields: [
        defineField({
          name: "kicker",
          title: "Small Section Label",
          type: "string",
          initialValue: "Our Differentiators",
        }),
        defineField({
          name: "title",
          title: "Section Heading",
          type: "string",
          initialValue: "Why Healthcare Providers Choose 707 MEDeliver",
        }),
        defineField({
          name: "items",
          title: "Differentiator Cards",
          type: "array",
          initialValue: [
            {
              title: "HIPAA-Compliant, Every Delivery",
              description:
                "Every pickup, transit, and drop-off follows a documented chain-of-custody protocol. Our drivers are HIPAA-trained and our systems are built for healthcare compliance - not retrofitted from general delivery.",
              icon: "shield",
            },
            {
              title: "Same-Day & Stat Delivery Capability",
              description:
                "Time-critical deliveries require a partner who treats urgency as a standard, not an exception. We offer same-day and stat transport options for specimens, medications, and medical documents across Chicagoland.",
              icon: "clock",
            },
            {
              title: "Temperature-Sensitive Transport",
              description:
                "Biological specimens, specialty medications, and sensitive lab materials require controlled handling. Our transport protocols are designed to preserve specimen integrity from pickup to delivery.",
              icon: "temp",
            },
            {
              title: "Federal-Grade Operational Standards",
              description:
                "Founded by a former HHS senior leader with 18+ years of federal program management experience, 707 MEDeliver applies institutional-grade compliance, structure, and accountability to every client engagement.",
              icon: "gear",
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
                    "Use one of: shield, clock, temp, gear. Leave as-is unless needed.",
                  options: {
                    list: [
                      {title: "Shield", value: "shield"},
                      {title: "Clock", value: "clock"},
                      {title: "Temperature", value: "temp"},
                      {title: "Gear", value: "gear"},
                    ],
                  },
                }),
                defineField({
                  name: "title",
                  title: "Card Title",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Card Description",
                  type: "text",
                  rows: 4,
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
      name: "foundingStory",
      title: "Founding Story Section",
      type: "object",
      fields: [
        defineField({
          name: "kicker",
          title: "Small Section Label",
          type: "string",
          initialValue: "Our Story",
        }),
        defineField({
          name: "title",
          title: "Section Heading",
          type: "string",
          initialValue: "Why We Built This",
        }),
        defineField({
          name: "paragraphs",
          title: "Story Paragraphs",
          type: "array",
          of: [{type: "text", rows: 4}],
          initialValue: [
            "After 18 years leading federal health programs at the U.S. Department of Health & Human Services, Nnenna Animashaun had an inside view of how healthcare systems work - and where they break down.",
            "One of the most persistent failure points: logistics. Specimens delayed. Medications mishandled. Couriers with no healthcare training operating inside clinical environments. The infrastructure holding patient care together was quietly unreliable.",
            "707 MEDeliver was built to change that. Not by adapting an existing freight model - but by building a healthcare logistics company from the ground up, with compliance, precision, and patient outcomes at the center of every decision.",
          ],
        }),
        defineField({
          name: "quote",
          title: "Quote",
          type: "text",
          rows: 3,
          initialValue:
            "This is what it looks like when operational discipline meets purpose.",
        }),
        defineField({
          name: "quoteAttribution",
          title: "Quote Attribution",
          type: "string",
          initialValue: "— Nnenna Animashaun, Founder & CEO",
        }),
      ],
    }),

    defineField({
      name: "leadership",
      title: "Leadership Bio Section",
      type: "object",
      fields: [
        defineField({
          name: "headshot",
          title: "Leader Headshot",
          type: "image",
          options: {hotspot: true},
          fields: [
            defineField({
              name: "alt",
              title: "Image Description",
              type: "string",
              initialValue:
                "Nnenna Animashaun, Founder and CEO of 707 MEDeliver, LLC, Chicago healthcare logistics",
            }),
          ],
        }),
        defineField({
          name: "kicker",
          title: "Small Section Label",
          type: "string",
          initialValue: "Meet the Founder",
        }),
        defineField({
          name: "name",
          title: "Leader Name",
          type: "string",
          initialValue: "Nnenna Animashaun",
        }),
        defineField({
          name: "role",
          title: "Leader Role",
          type: "string",
          initialValue:
            "Founder & Chief Executive Officer, 707 MEDeliver, LLC",
        }),
        defineField({
          name: "bioParagraphs",
          title: "Bio Paragraphs",
          type: "array",
          of: [{type: "text", rows: 4}],
          initialValue: [
            "Nnenna Animashaun is a strategic leader, healthcare program expert, and entrepreneur with over 18 years of experience in federal government leadership at the U.S. Department of Health & Human Services - overseeing multimillion-dollar initiatives focused on healthcare access, compliance, and community impact.",
            "She founded 707 MEDeliver, to bring that same standard of operational discipline and accountability to healthcare logistics in Chicago - building a medical courier and logistics platform that treats every delivery as a critical link in the patient care chain.",
            "Nnenna is also the Founder of Divinely Seeded, LLC, a holistic wellness coaching practice, and serves as Vice Chair of the Taes Grace Foundation. Her multidisciplinary background - spanning healthcare, logistics, wellness, and community leadership - uniquely positions her to build companies that are both operationally excellent and deeply human-centered.",
          ],
        }),
      ],
    }),

    defineField({
      name: "stats",
      title: "Stats Strip",
      type: "array",
      initialValue: [
        {value: "18+", label: "Years Experience"},
        {value: "100%", label: "Compliance Rating"},
        {value: "24/7", label: "Secure Monitoring"},
        {value: "Zero", label: "Mission Failures"},
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

    defineField({
      name: "valuesSection",
      title: "Values Section",
      type: "object",
      fields: [
        defineField({
          name: "kicker",
          title: "Small Section Label",
          type: "string",
          initialValue: "Our Character",
        }),
        defineField({
          name: "title",
          title: "Section Heading",
          type: "string",
          initialValue: "What We Stand For",
        }),
        defineField({
          name: "items",
          title: "Value Cards",
          type: "array",
          initialValue: [
            {
              title: "Precision & Performance",
              description:
                "We deliver results with accuracy and timeliness. In healthcare logistics, the details are never small - they are the job.",
            },
            {
              title: "Integrity & Compliance",
              description:
                "We uphold the highest standards across every engagement - HIPAA compliance, chain of custody, and ethical business practices are non-negotiable.",
            },
            {
              title: "Strategic Growth",
              description:
                "We build systems designed to scale. Every process and partnership is structured for long-term sustainability, not short-term convenience.",
            },
            {
              title: "Service Excellence",
              description:
                "Our clients depend on us for critical operations. We take that responsibility seriously and show up at the highest level - every time, without exception.",
            },
          ],
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Value Title",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Value Description",
                  type: "text",
                  rows: 4,
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
      name: "cta",
      title: "Final Call-To-Action Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "CTA Heading",
          type: "string",
          initialValue:
            "Ready to Work With a Logistics Partner You Can Trust?",
        }),
        defineField({
          name: "description",
          title: "CTA Description",
          type: "text",
          rows: 3,
          initialValue:
            "Let's talk about how 707 MEDeliver can support your healthcare operations in Chicago.",
        }),
        defineField({
          name: "buttonText",
          title: "Button Text",
          type: "string",
          initialValue: "Contact Us Today →",
        }),
        defineField({
          name: "buttonHref",
          title: "Button Link",
          type: "string",
          initialValue: "/contact",
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
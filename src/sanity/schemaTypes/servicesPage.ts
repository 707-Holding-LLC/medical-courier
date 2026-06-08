import {defineField, defineType} from "sanity";

export const servicesPageType = defineType({
  name: "servicesPage",
  title: "Services Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Name",
      type: "string",
      initialValue: "Services Page",
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
          initialValue: "HIPAA Compliant Logistics",
        }),
        defineField({
          name: "titleBeforeHighlight",
          title: "Main Heading Before Green Text",
          type: "string",
          initialValue: "Precision Healthcare",
        }),
        defineField({
          name: "titleHighlight",
          title: "Green Heading Text",
          type: "string",
          initialValue: "Logistics",
        }),
        defineField({
          name: "titleAfterBreak",
          title: "Final Heading Line",
          type: "string",
          initialValue: "Solutions",
        }),
        defineField({
          name: "description",
          title: "Hero Description",
          type: "text",
          rows: 4,
          initialValue:
            "Reliable, secure, and professional medical transport specialized for the unique demands of the healthcare industry across Chicago and statewide Illinois.",
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
              initialValue: "Precision healthcare logistics visual",
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "servicesSection",
      title: "Services Cards Section",
      type: "object",
      fields: [
        defineField({
          name: "items",
          title: "Service Cards",
          type: "array",
          initialValue: [
            {
              title: "Medical Courier Services",
              description:
                "Specialized secure transport of sensitive specimens, blood work, and confidential medical documents. We prioritize chain-of-custody protocols for every delivery.",
              bullets: [
                "Real-time tracking and proof of delivery",
                "Biohazard trained professionals",
                "Confidential document handling",
              ],
              icon: "microscope",
              visual: "courier",
            },
            {
              title: "Laboratory Specimen Transport",
              description:
                "Optimized routes for scheduled pickups from clinics to labs and regional hospitals. Temperature-controlled environments for climate-sensitive materials.",
              bullets: [
                "Validated temperature control systems",
                "Scheduled route optimization",
                "Statewide laboratory network support",
              ],
              icon: "flask",
              visual: "vehicle",
            },
            {
              title: "Pharmacy & Medical Supply",
              description:
                "Timely delivery of critical medications and essential medical equipment directly to healthcare facilities and home-based patients.",
              bullets: [
                "Same-day prescription delivery",
                "Medical equipment handling",
                "Stat and urgent delivery options",
              ],
              icon: "clipboard",
              visual: "supply",
            },
            {
              title: "Healthcare Logistics Support",
              description:
                "Comprehensive support for healthcare provider operations, managing complex supply chains and administrative distribution needs.",
              bullets: [
                "Integrated inventory management",
                "Multi-facility distribution strategy",
                "24/7 dedicated support desk",
              ],
              icon: "document",
              visual: "support",
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
                    "Use one of: microscope, flask, clipboard, document.",
                  options: {
                    list: [
                      {title: "Microscope", value: "microscope"},
                      {title: "Flask", value: "flask"},
                      {title: "Clipboard", value: "clipboard"},
                      {title: "Document", value: "document"},
                    ],
                  },
                }),
                defineField({
                  name: "title",
                  title: "Service Title",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Service Description",
                  type: "text",
                  rows: 4,
                }),
                defineField({
                  name: "bullets",
                  title: "Service Bullet Points",
                  type: "array",
                  of: [{type: "string"}],
                }),
                defineField({
                  name: "visual",
                  title: "Fallback Image Type",
                  type: "string",
                  description:
                    "Used only if no custom image is uploaded. Use one of: courier, vehicle, supply, support.",
                  options: {
                    list: [
                      {title: "Courier", value: "courier"},
                      {title: "Vehicle", value: "vehicle"},
                      {title: "Supply", value: "supply"},
                      {title: "Support", value: "support"},
                    ],
                  },
                }),
                defineField({
                  name: "image",
                  title: "Service Image",
                  type: "image",
                  options: {hotspot: true},
                  fields: [
                    defineField({
                      name: "alt",
                      title: "Image Description",
                      type: "string",
                    }),
                  ],
                }),
              ],
              preview: {
                select: {
                  title: "title",
                  subtitle: "description",
                  media: "image",
                },
              },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "coverage",
      title: "Service Coverage Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Section Heading",
          type: "string",
          initialValue: "Service Coverage Areas",
        }),
        defineField({
          name: "description",
          title: "Section Description",
          type: "text",
          rows: 5,
          initialValue:
            "Based in the heart of Illinois, we offer comprehensive coverage from downtown Chicago to the furthest reaches of the state. Our fleet is equipped to handle long-distance medical transport without compromising security or temperature stability.",
        }),
        defineField({
          name: "areas",
          title: "Coverage Area Cards",
          type: "array",
          initialValue: [
            {
              title: "Chicago Metropolitan",
              description: "Full coverage of Cook County and surrounding suburbs.",
              icon: "building",
            },
            {
              title: "Statewide Illinois",
              description:
                "Expedited service to Springfield, Peoria, Rockford, and more.",
              icon: "map",
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
                  options: {
                    list: [
                      {title: "Building", value: "building"},
                      {title: "Map", value: "map"},
                    ],
                  },
                }),
                defineField({
                  name: "title",
                  title: "Area Title",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Area Description",
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
          name: "image",
          title: "Coverage Map Image",
          type: "image",
          options: {hotspot: true},
          fields: [
            defineField({
              name: "alt",
              title: "Image Description",
              type: "string",
              initialValue: "Illinois healthcare logistics coverage map",
            }),
          ],
        }),
        defineField({
          name: "statLabel",
          title: "Map Stat Label",
          type: "string",
          initialValue: "Response Time",
        }),
        defineField({
          name: "statValue",
          title: "Map Stat Value",
          type: "string",
          initialValue: "Under 60min",
        }),
        defineField({
          name: "statDescription",
          title: "Map Stat Description",
          type: "string",
          initialValue: "For Chicago metro stat orders",
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
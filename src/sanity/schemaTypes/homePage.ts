import {defineField, defineType} from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Name",
      type: "string",
      initialValue: "Home Page",
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
          initialValue: "Illinois Certified Logistics",
        }),
        defineField({
          name: "titleLine1",
          title: "Main Heading Line 1",
          type: "string",
          initialValue: "Dependable",
        }),
        defineField({
          name: "titleLine2",
          title: "Main Heading Line 2",
          type: "string",
          initialValue: "Medical",
        }),
        defineField({
          name: "titleGreen1",
          title: "Green Heading Text 1",
          type: "string",
          initialValue: "Courier &",
        }),
        defineField({
          name: "titleGreen2",
          title: "Green Heading Text 2",
          type: "string",
          initialValue: "Logistics",
        }),
        defineField({
          name: "titleSuffix",
          title: "Final Heading Text",
          type: "string",
          initialValue: "Services",
        }),
        defineField({
          name: "description",
          title: "Hero Description",
          type: "text",
          rows: 4,
          initialValue:
            "707 MEDeliver provides professional medical transport and specialized logistics solutions across Chicago and the entire state of Illinois. Trust us with your time-critical healthcare needs.",
        }),
        defineField({
          name: "primaryButtonText",
          title: "First Button Text",
          type: "string",
          initialValue: "Get a Quote →",
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
          initialValue: "Our Services",
        }),
        defineField({
          name: "secondaryButtonHref",
          title: "Second Button Link",
          type: "string",
          initialValue: "/services",
        }),
        defineField({
          name: "trustPrefix",
          title: "Trust Text Before Number",
          type: "string",
          initialValue: "Trusted by",
        }),
        defineField({
          name: "trustNumber",
          title: "Trust Number",
          type: "string",
          initialValue: "50+",
        }),
        defineField({
          name: "trustSuffix",
          title: "Trust Text After Number",
          type: "string",
          initialValue: "Healthcare Facilities in Illinois",
        }),
        defineField({
          name: "mapLabel",
          title: "Map Label",
          type: "string",
          initialValue: "ILLINOIS",
        }),
        defineField({
          name: "statLabel",
          title: "Small Stat Label",
          type: "string",
          initialValue: "On-Time Rate",
        }),
        defineField({
          name: "statValue",
          title: "Large Stat Number",
          type: "string",
          initialValue: "99.8%",
        }),
      ],
    }),

    defineField({
      name: "overview",
      title: "Company Overview Section",
      type: "object",
      fields: [
        defineField({
          name: "staffImage",
          title: "First Overview Image",
          type: "image",
          options: {hotspot: true},
          fields: [
            defineField({
              name: "alt",
              title: "Image Description",
              type: "string",
              initialValue:
                "Medical staff in a clean healthcare supply environment",
            }),
          ],
        }),
        defineField({
          name: "warehouseImage",
          title: "Second Overview Image",
          type: "image",
          options: {hotspot: true},
          fields: [
            defineField({
              name: "alt",
              title: "Image Description",
              type: "string",
              initialValue: "Modern healthcare logistics warehouse interior",
            }),
          ],
        }),
        defineField({
          name: "kicker",
          title: "Small Section Label",
          type: "string",
          initialValue: "Company Overview",
        }),
        defineField({
          name: "title",
          title: "Section Heading",
          type: "string",
          initialValue: "A Partnership Built on Trust and Precision",
        }),
        defineField({
          name: "description",
          title: "Section Description",
          type: "text",
          rows: 5,
          initialValue:
            "707 MEDeliver are committed to providing safe, timely, and compliant logistics for the healthcare industry. Our dedicated team ensures that critical medical items reach their destination with the highest level of care.",
        }),
        defineField({
          name: "features",
          title: "Feature Points",
          type: "array",
          initialValue: [
            {
              title: "HIPAA Compliant",
              description:
                "Our staff is fully trained in patient privacy and medical handling protocols.",
            },
            {
              title: "State-Wide Coverage",
              description:
                "Serving all 102 counties in Illinois with a focus on the Greater Chicago Area.",
            },
          ],
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Feature Title",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Feature Description",
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
      name: "servicesSection",
      title: "Core Transportation Services Section",
      type: "object",
      fields: [
        defineField({
          name: "kicker",
          title: "Small Section Label",
          type: "string",
          initialValue: "Our Expertise",
        }),
        defineField({
          name: "title",
          title: "Section Heading",
          type: "string",
          initialValue: "Core Transportation Services",
        }),
        defineField({
          name: "items",
          title: "Service Cards",
          type: "array",
          initialValue: [
            {
              title: "Medical Courier",
              description:
                "Swift and secure transport of medical equipment, supplies, and records with real-time tracking and professional chain-of-custody.",
              icon: "✦",
            },
            {
              title: "Lab Specimen Delivery",
              description:
                "Temperature-controlled transport for time-sensitive laboratory specimens. We maintain integrity and urgency for critical diagnostics.",
              icon: "◌",
            },
            {
              title: "Pharmacy Delivery",
              description:
                "Direct-to-patient and facility delivery of prescriptions and medications, ensuring accuracy and compassionate service.",
              icon: "▣",
            },
          ],
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "icon",
                  title: "Small Icon/Symbol",
                  type: "string",
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
      name: "audiencesSection",
      title: "Who We Serve Section",
      type: "object",
      fields: [
        defineField({
          name: "kicker",
          title: "Small Section Label",
          type: "string",
          initialValue: "Partnerships",
        }),
        defineField({
          name: "title",
          title: "Section Heading",
          type: "string",
          initialValue: "Who We Serve",
        }),
        defineField({
          name: "description",
          title: "Section Description",
          type: "text",
          rows: 4,
          initialValue:
            "We provide logistics infrastructure for the backbone of Illinois healthcare. Our clients depend on us for reliability and professional representation.",
        }),
        defineField({
          name: "items",
          title: "Audience List",
          type: "array",
          of: [{type: "string"}],
          initialValue: [
            "Hospitals & Clinics",
            "Diagnostic Labs",
            "Pharmacies",
            "Home Health Providers",
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
          initialValue: "Ready to streamline your medical logistics?",
        }),
        defineField({
          name: "description",
          title: "CTA Description",
          type: "text",
          rows: 3,
          initialValue:
            "Experience the reliability of 707 MEDeliver team today for secure, compliant and time-sensitive delivery support.",
        }),
        defineField({
          name: "buttonText",
          title: "Button Text",
          type: "string",
          initialValue: "Request a Service",
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
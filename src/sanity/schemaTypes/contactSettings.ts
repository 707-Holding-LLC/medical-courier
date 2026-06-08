import {defineField, defineType} from "sanity";

export const contactSettingsType = defineType({
  name: "contactSettings",
  title: "Contact Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Name",
      type: "string",
      initialValue: "Contact Settings",
      validation: (Rule) => Rule.required(),
      readOnly: true,
    }),

    defineField({
      name: "formSection",
      title: "Contact Form Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Form Heading",
          type: "string",
          initialValue: "Request Courier Service",
        }),
        defineField({
          name: "description",
          title: "Form Description",
          type: "text",
          rows: 3,
          initialValue:
            "Fill out the form below and our Chicago logistics team will reach out within 15 minutes.",
        }),
        defineField({
          name: "submitButtonText",
          title: "Submit Button Text",
          type: "string",
          initialValue: "Request Courier Service",
        }),
        defineField({
          name: "submittingText",
          title: "Submitting Button Text",
          type: "string",
          initialValue: "Submitting…",
        }),
      ],
    }),

    defineField({
      name: "deliveryOptions",
      title: "Delivery Type Options",
      type: "array",
      of: [{type: "string"}],
      initialValue: [
        "Standard Delivery (Next Day)",
        "Same-Day Delivery",
        "STAT / Urgent Delivery",
        "Scheduled Route Pickup",
        "Lab Specimen Transport",
        "Pharmacy / Medical Supply Delivery",
        "Medical Records / Documents",
        "Temperature-Controlled Transport",
        "Not Sure Yet",
      ],
    }),

    defineField({
      name: "successMessage",
      title: "Success Message",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Success Heading",
          type: "string",
          initialValue: "Request Received!",
        }),
        defineField({
          name: "description",
          title: "Success Description",
          type: "text",
          rows: 3,
          initialValue:
            "Thank you for reaching out. Our Chicago logistics team will contact you within 15 minutes.",
        }),
        defineField({
          name: "smallText",
          title: "Small Text",
          type: "string",
          initialValue: "Need immediate assistance?",
        }),
        defineField({
          name: "callText",
          title: "Call Link Text",
          type: "string",
          initialValue: "Call (872) 810-3236",
        }),
      ],
    }),

    defineField({
      name: "mapSection",
      title: "Map Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Map Heading",
          type: "string",
          initialValue: "Service Coverage Area",
        }),
        defineField({
          name: "statusLabel",
          title: "Status Label",
          type: "string",
          initialValue: "Active Now",
        }),
        defineField({
          name: "address",
          title: "Office Address",
          type: "text",
          rows: 3,
          initialValue: "1 E Erie St Suite 525-3498, Chicago, IL 60611",
        }),
        defineField({
          name: "mapButtonText",
          title: "Map Button Text",
          type: "string",
          initialValue: "Open in Maps ↗",
        }),
      ],
    }),

    defineField({
      name: "supportCard",
      title: "Support Card",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Support Heading",
          type: "string",
          initialValue: "Need help immediately?",
        }),
        defineField({
          name: "description",
          title: "Support Description",
          type: "text",
          rows: 3,
          initialValue:
            "Our dispatch team is standing by 24/7 to assist with urgent delivery requirements.",
        }),
        defineField({
          name: "phoneLabel",
          title: "Phone Label",
          type: "string",
          initialValue: "Support Hotline",
        }),
        defineField({
          name: "phone",
          title: "Phone Number",
          type: "string",
          initialValue: "(872) 810-3236",
        }),
        defineField({
          name: "phoneHref",
          title: "Phone Link",
          type: "string",
          initialValue: "tel:+18728103236",
        }),
        defineField({
          name: "emailLabel",
          title: "Email Label",
          type: "string",
          initialValue: "Direct Email",
        }),
        defineField({
          name: "email",
          title: "Email Address",
          type: "string",
          initialValue: "info@707holding.com",
        }),
        defineField({
          name: "emailHref",
          title: "Email Link",
          type: "string",
          initialValue: "mailto:info@707holding.com",
        }),
        defineField({
          name: "officeLabel",
          title: "Office Label",
          type: "string",
          initialValue: "Office",
        }),
        defineField({
          name: "officeLine1",
          title: "Office Address Line 1",
          type: "string",
          initialValue: "1 E Erie St Suite 525-3498",
        }),
        defineField({
          name: "officeLine2",
          title: "Office Address Line 2",
          type: "string",
          initialValue: "Chicago, IL 60611",
        }),
      ],
    }),

    defineField({
      name: "stats",
      title: "Stats Cards",
      type: "array",
      initialValue: [
        {value: "12min", label: "Avg. Response"},
        {value: "4.9/5", label: "Customer Rating"},
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

  preview: {
    select: {
      title: "title",
    },
  },
});
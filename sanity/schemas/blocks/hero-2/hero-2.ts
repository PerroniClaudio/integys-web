import { defineField, defineType } from "sanity";
import { LayoutTemplate } from "lucide-react";

export default defineType({
    name: "hero-2",
    title: "Hero Integys",
    type: "object",
    icon: LayoutTemplate,
    fields: [
        defineField({
            name: "tagLine",
            type: "string",
        }),
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "title_left",
            title: "Title Left",
            type: "string",
        }),
        defineField({
            name: "title_right",
            title: "Title Right",
            type: "string",
        }),
        defineField({
            name: "image_left",
            title: "Image Left",
            type: "image",
            fields: [
              {
                name: "alt",
                type: "string",
                title: "Alternative Text",
              },
            ],
        }),
        defineField({
            name: "image_right",
            title: "Image Right",
            type: "image",
            fields: [
              {
                name: "alt",
                type: "string",
                title: "Alternative Text",
              },
            ],
        }),
        defineField({
            name: "body",
            type: "block-content",
        }),
    ],
    preview: {
        select: {
          title: "title",
        },
        prepare({ title }) {
          return {
            title: "Hero 2",
            subtitle: title,
          };
        },
    },
})
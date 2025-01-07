// promo-card component file

import { defineField, defineType } from "sanity";
import { LetterText } from "lucide-react";

export default defineType({
    name: "promo-card",
    title: "Promo Card",
    type: "object",
    icon: LetterText,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "block-content",
        }),
        defineField({
            name: "background_image",
            title: "Background Image",
            type: "image",
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative Text",
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            return {
                title: "Promo Card",
                subtitle: title,
            };
        },
    },
});
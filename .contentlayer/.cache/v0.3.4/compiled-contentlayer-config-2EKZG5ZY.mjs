// contentlayer.config.ts
import { makeSource, defineDocumentType } from "@contentlayer/source-files";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    publishedAt: {
      type: "string",
      required: true
    },
    updatedAt: {
      type: "date",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    image: { type: "image" },
    isPublished: {
      type: "boolean",
      default: true
    },
    author: {
      type: "string",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" }
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  documentTypes: [Blog],
  contentDirPath: "content"
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-2EKZG5ZY.mjs.map

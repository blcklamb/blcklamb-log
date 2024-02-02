import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    thumbnail: {
      type: "string",
    },
    description: {
      type: "string",
      required: true,
    },
    series: {
      type: "string",
    },
    hashTags: {
      type: "list",
      of: { type: "string" },
    },
    postedAt: {
      type: "date",
      required: true,
    },
    readTime: {
      type: "number",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
});

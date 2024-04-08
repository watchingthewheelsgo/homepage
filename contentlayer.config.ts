import { makeSource, defineDocumentType } from '@contentlayer/source-files'
import readingTime from "reading-time"
import rehypeAutoLinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import GithubSlugger from 'github-slugger'

// import {  } from 'contentlayer/source-files'

const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: `**/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true
        },
        publishedAt: {
            type: 'string',
            required: true
        },
        updatedAt: {
            type: "date",
            required: true,
        },
        description: {
            type: "string",
            required: true,
        },
        image: { type: "image" },
        isPublished: {
            type: "boolean",
            default: true,
        },
        author: {
            type: "string",
            required: true,
        },
        tags: {
            type: "list",
            of: { type: "string" },
        },
    },
    computedFields: {
        url: {
          type: "string",
          resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
        },
        readingTime: {
            type: "json",
            resolve: (doc) => readingTime(doc.body.raw)
        },
        toc: {
            type: "json",
            resolve: async (doc) => {
                const regularExpr = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
                const sluger = new GithubSlugger()
                const headings = Array.from(doc.body.raw.matchAll(regularExpr)).map(({groups}) => {
                    const flag = groups?.flag;
                    const content = groups?.content
                    return {
                        level: flag?.length == 1? "one": flag?.length == 2 ? "two" : "three",
                        text: content,
                        slug: content ? sluger.slug(content) : undefined
                    }
                })
                return headings;
            }
        }
    }
})) 

const codeOptions = {
    theme: 'github-dark'
}

export default makeSource({
    documentTypes: [Blog],
    contentDirPath: 'content',
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypeAutoLinkHeadings, { behavior: "append" }], [rehypePrettyCode, codeOptions]]
    }
})

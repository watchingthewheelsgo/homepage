import { compareDesc, parseISO } from "date-fns";
import { Blog } from "@/.contentlayer/generated";

export function cx(...classNames: String[]) {
    return classNames.filter(Boolean).join(" ");
}

export function sortBlogs(blogs: Blog[]): Blog[] {
    return blogs
    .slice()
    .sort((a, b) =>
        compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    )
}
import { Blog, allBlogs } from "contentlayer/generated"
import { slug } from "github-slugger"
import BlogLayoutThree from "~/app/_components/Blog/BlogLayoutThree"
import Categories from "~/app/_components/Blog/Categories"


export default function CategoryPage({ params }: { params: { slug: string } }) {
    const allCategories = new Set<string>(["all"])
    const blogs = allBlogs.filter((blog: Blog) => {
        var result = false
        if (blog.tags != undefined) {
            for (var tag of blog.tags) {
                const slugified = slug(tag)
                if (!allCategories.has(slugified)) {
                    allCategories.add(slugified)
                }
                result = result || ('all' === params.slug || slugified === params.slug)
            }
        }
        return result
    })
    return (
        <article className="flex flex-col text-dark">
            <Categories categories={Array.from(allCategories.values()).sort()} currentSlug={params.slug}/>
            <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
                {blogs.map((blog, index) => (
                    <article key={index} className="col-span-1 row-span-1 relative">
                        <BlogLayoutThree blog={blog} />
                    </article>
                ))}
            </div>
        </article>
    )
}
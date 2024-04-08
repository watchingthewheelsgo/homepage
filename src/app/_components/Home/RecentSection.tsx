import { Blog } from 'contentlayer/generated'
import Link from 'next/link'
import React from 'react'
import BlogLayoutThree from '../Blog/BlogLayoutThree'
import { sortBlogs } from '~/utils'

export const RecentSection = ({blogs}: {blogs: Blog[]}) => {
    const sortedBlogs = sortBlogs(blogs)
  return (
    <section className='w-full px-10 mt-16 items-center justify-center'>
        <div className='w-full flex justify-between'>
            <h2 className=' inline-block font-bold capitalize text-2xl'>
                Recent Section
            </h2>
            <Link href="/categories/all" className=' mx-4 inline-block font-medium text-accent underline underline-offset-2 text-lg'>
                view all
            </Link>
        </div>
        <div className='grid grid-cols-3 grid-rows-1 gap-16 mt-16'>
            {
                [0, 1, 2].map((idx) => {
                    return (
                        <article key={idx} className=' col-span-1 row-span-1 relative'>
                            <BlogLayoutThree blog={sortedBlogs[0]!}/>
                        </article>
                    );
                })
            }
        </div>

    </section>
  )
}
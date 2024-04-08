import { Blog } from 'contentlayer/generated'
import React from 'react'
import BlogLayoutOne from '../Blog/BlogLayoutOne'
import { sortBlogs } from '~/utils'
import BlogLayoutTwo from '../Blog/BlogLayoutTwo'

export const FeaturedSection = ({blogs}: {blogs: Blog[]}) => {
  return (
    <section className='w-full capitalize px-10 mt-16 items-center justify-center'>
        <h2 className='w-full inline-block font-bold capitalize text-2xl'>
            Featured Section
        </h2>
        <div className=' grid grid-cols-2 grid-rows-2 mt-10 gap-6'>
            <article className='col-span-1 row-span-2 relative'>
                <BlogLayoutOne blog={sortBlogs(blogs)[0]!}/>
            </article>

            <article className='col-span-1 row-span-1 relative'>
                <BlogLayoutTwo blog={sortBlogs(blogs)[0]!}/>    
            </article>  

            <article className='col-span-1 row-span-1 relative'>
                <BlogLayoutTwo blog={sortBlogs(blogs)[0]!}/>   
            </article>

        </div>
    </section>
  )
}
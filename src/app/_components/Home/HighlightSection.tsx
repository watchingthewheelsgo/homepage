import React from 'react'
import { Blog } from 'contentlayer/generated'
import { sortBlogs } from '~/utils';
import Image from 'next/image';
import Link from 'next/link';
import Tag from '../tag';
import { slug } from 'github-slugger';



export const HighlightSection = ({blogs}: {blogs: Blog[]}) => {
    const sortedBlogs = sortBlogs(blogs);
    const blog = sortedBlogs[0]!;
    console.log(blog)
  return (
    <div className='w-full inline-block'>
        <article className='flex flex-col items-start justify-end mx-10 relative h-[85vh]'>
            <div className='absolute top-0 bottom-0 left-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0
            ' />

            <Image src={blog.image!.filePath.replace("../public", "")}
            placeholder='blur'
            blurDataURL={blog.image!.blurhashDataUrl}
            alt={blog.title}
            fill
            className='w-full h-full object-center object-cover rounded-3xl -z-10'
            />
            <div className='w-full lg:w-3/4  md:p-12 p-8 flex flex-col items-start justify-center text-light z-0'>
                <div className=''>
                    <Tag link={`/categories/${slug(blog.tags![0]!)}`} name={blog.tags![0]!} />
                    <Tag link={`/categories/${slug(blog.tags![1]!)}`} name={blog.tags![1]!} />
                </div>
                <Link href={blog.url} className='mt-5'>
                    <h1 className=' font-bold text-4xl capitalize'>
                        <span className=' bg-gradient-to-r from-accentDark to-accentDark bg-[length:0px_6px]
                        hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                            {blog.title}
                        </span>
                    </h1>
                </Link>
                <p className='inline-block mt-2 text-xl font-in'>
                    {blog.description}
                </p>
            </div>
        </article>
    </div>


  )
}

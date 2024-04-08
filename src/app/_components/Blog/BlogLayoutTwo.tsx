import { Blog } from 'contentlayer/generated'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { format } from 'date-fns'

const BlogLayoutTwo = ({blog}: {blog: Blog}) => {
  return (
    <div className='group grid grid-cols-12 gap-6 items-center'>
        <Link href={blog.url} className=' col-span-4 h-full rounded-xl overflow-hidden'>
            <Image src={blog.image!.filePath.replace("../public", "")}
              placeholder='blur'
              blurDataURL={blog.image!.blurhashDataUrl}
              alt={blog.title}
              width={blog.image!.width}
              height={blog.image!.height}
              className=' aspect-square w-full h-full object-center object-cover group-hover:scale-110 transition-all 
              ease duration-300'
            />
        </Link>
        <div className='col-span-8 w-full'>
            <span className=' uppercase text-accent/50 font-semibold text-sm'>{blog.tags![0]}</span>
            <Link href={blog.url} className=''>
                <h2 className=' font-bold text-xl capitalize'>
                    <span className=' bg-gradient-to-r from-accentDark to-accentDark bg-[length:0px_4px]
                    group-hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                        {blog.title}
                    </span>
                </h2>
            </Link>
            <span className=' capitalize text-dark/50 text-base font-semibold'>
                {format(new Date(blog.publishedAt), "MMMM dd, yyyyy")}
            </span>
        </div>
        
    </div>
  )
}

export default BlogLayoutTwo
import { Blog } from 'contentlayer/generated'
import React from 'react'
import Tag from '../tag'
import Image from 'next/image';
import Link from 'next/link'
import { slug } from 'github-slugger';

const BlogLayoutOne = ({blog}: {blog: Blog}) => {
  return (
    <div className='group inline-block overflow-hidden '>
      <div className='absolute top-0 bottom-0 left-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-10
            ' />
            <Image src={blog.image!.filePath.replace("../public", "")}
              placeholder='blur'
              blurDataURL={blog.image!.blurhashDataUrl}
              alt={blog.title}
              fill
              // width={blog.image!.width}
              // height={blog.image!.height}
              className='w-full h-full object-center object-cover rounded-3xl'
            />
            <div className='w-full absolute bottom-4 px-10 z-20'>
                <div className=''>
                    <Tag link={`/categories/${slug(blog.tags![0]!)}`} name={blog.tags![0]!} className={"text-xs px-2 !border"} />
                </div>
                <Link href={blog.url} className='mt-6'>
                    <h2 className=' font-bold text-xl capitalize text-light py-4'>
                        <span className=' bg-gradient-to-r from-accentDark to-accentDark bg-[length:0px_4px]
                        hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                            {blog.title}
                        </span>
                    </h2>
                </Link>
            </div>
    </div>
  )
}

export default BlogLayoutOne
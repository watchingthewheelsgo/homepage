import Link from 'next/link'
import React from 'react'
import { cx } from '~/utils'

const Tag = ({link='#', name, className}: {link: String, name: String, className?: String}) => {
  const clsName = className == undefined ? "" : className
  return (
    <Link href={`${link}`} 
        className={cx("mx-1 inline-block py-3 px-8 text-light bg-dark rounded-full capitalize font-semibold border-2 border-light border-solid hover:scale-110 transition-all ease duration-200 sm:text-base", clsName)}>
        {'# ' + name}
    </Link>
  )
}

export default Tag

// bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base")}>
// {name}
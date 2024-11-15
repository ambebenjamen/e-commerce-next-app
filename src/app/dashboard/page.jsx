'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import styles from './page.module.css'
export default function Page() {
    let router = useRouter();
    let number = 5
  return (
    <div>
      <h1 className={styles.title}>{number + 2}</h1>
      <Link href={'/'}>home page</Link>
      <button onClick={()=>router.push('/')}>go to home</button>
    </div>
  )
}

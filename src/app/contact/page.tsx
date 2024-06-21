import React from 'react'
import styles from './contact.module.css'
import Contact from '@/component/contact/contact'

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact US',
  description: 'Contact us to make your dream home.',
}

export default function page() {
  return (
    <div className={styles.main}>
      <Contact />
    </div>
  )
}

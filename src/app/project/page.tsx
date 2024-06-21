import React from 'react'
import ProjectBlog from '@/component/projects/allProject';
import styles from './project.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Project',
  description: 'Checkout Aashi Homes Projects.',
}

export default function project() {
  return (
    <div className={styles.main}>
      <ProjectBlog/>
    </div>
  )
}

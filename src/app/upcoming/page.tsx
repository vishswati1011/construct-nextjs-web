import React from 'react'
import UpcomingProjects from '@/component/upcoming/project';
import styles from '../project/project.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upcoming Project',
  description: 'Checkout Aashi Homes Upcoming Projects.',
}

export default function project() {
  return (
    <div className={styles.main}>
      <UpcomingProjects/>
    </div>
  )
}

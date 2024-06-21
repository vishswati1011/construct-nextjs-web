import React from 'react'
import styles from "./about.module.css"
export default function AboutLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    // <div className={styles.about_outer_Div}>
      <main className={styles.main}>
        {children}
      </main>
    // </div>
  )
}

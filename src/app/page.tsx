import styles from "./page.module.css";
import Home from "@/component/home/home";
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Aashi Constraction",
  description: "We make your dream true.",
};

export default function MainApp() {
  return (
    <main className={styles.main}>
      <Home />
    </main>
  );
}

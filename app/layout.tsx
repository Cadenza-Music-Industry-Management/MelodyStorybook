import '../styles/globals.css'
import { ReactNode } from "react";
import {  Inter } from 'next/font/google';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

//TODO currently next/font does not work with storybook 7
const inter = Inter({
  subsets: ['latin'],
  variable: '--inter-font'
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}

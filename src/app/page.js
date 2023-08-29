import Image from 'next/image'
import styles from './page.module.css'
import Layout from '@/components/layout/Layout'
import Banar from '@/components/banar'
import OurClient from '@/components/ourclient'
import Teammember from '@/components/Team'

export default function Home() {
  return (
    <>
    <Layout>
      <Banar />
      <OurClient />
      <Teammember />
    </Layout>
    </>
  )
}

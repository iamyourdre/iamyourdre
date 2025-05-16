import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, Github } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import _1 from '@/assets/portofolio/liqee/1.png'
import _2 from '@/assets/portofolio/liqee/2.png'
import _3 from '@/assets/portofolio/liqee/3.png'
import Divider from '@/components/Divider'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const Liqee = () => {
  const details = {
    title: 'Liqee | Layanan Sosial Media',
    description: `
Liqee adalah platform inovatif yang menyediakan layanan pembelian Likes dan Followers secara instan dan mudah. Pengguna dapat memilih layanan yang diinginkan, melakukan pembayaran melalui QRIS, dan pesanan akan langsung diproses tanpa perlu registrasi atau mengisi saldo terlebih dahulu.

## Fitur Utama

- **Tanpa Registrasi**: Pengguna tidak perlu membuat akun atau login untuk melakukan pemesanan.
- **Pembayaran Instan**: Mendukung pembayaran langsung melalui QRIS.
- **Proses Cepat & Otomatis**: Pesanan diproses secara otomatis dan instan setelah pembayaran diterima.
- **Antarmuka Sederhana**: Desain user-friendly yang memudahkan pengguna dalam memilih layanan.

## Teknologi yang Digunakan

- **Next.js**: Framework React untuk pengembangan aplikasi web modern.
- **Tailwind CSS**: Framework CSS utility-first untuk styling responsif.
- **Zustand**: State management sederhana dan efisien untuk React.
- **Axios**: HTTP client untuk komunikasi dengan backend.
- **MongoDB**: Database NoSQL untuk penyimpanan data layanan dan transaksi.
- **JWT**: JSON Web Token untuk otentikasi dan keamanan API.
    `,
    images: [_1, _2, _3],
    frontend: ['Next.js', 'Tailwind CSS', 'Zustand', 'Axios'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    link: 'https://liqee.social/',
  }
  return (
    <div className='mt-16'>
      <div className=" grid grid-cols-1 lg:grid-cols-5 box gap-6 place-content-start">
        <div className="col-span-1">
          <div className="">
            <Link className='hidden lg:flex absolute left-0 top-1/2 transform -translate-x-1/3 z-10' to={details.link}>
              <Button className='rounded-none rotate-90' size={'xl'}><Github/>GitHub</Button>
            </Link>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-3 flex flex-col gap-4">
          <div className="">
            <Carousel className='relative'>
              <CarouselContent>
                {details.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <img src={image} alt="tweetify" className="w-full" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="">
                <CarouselPrevious className='left-0 ml-2'/>
                <CarouselNext className='right-0 mr-2'/>
              </div>
            </Carousel>
          </div>
          <div className="lg:box-m box border border-muted rounded-2xl flex flex-col gap-3">
            <h1 className='font-bold h1'>
              {details.title}
            </h1>
            <div className="text-muted-foreground markdown">
              <Markdown>{details.description}</Markdown>
            </div>
            <Link to={details.link} className='flex'>
              <Button className='mt-4 flex-1' size='lg'><ArrowUpRight/> Visit Website</Button>
            </Link>
            <Divider/>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                <Badge className='border-muted rounded-full flex-none'>Frontend</Badge>
                {details.frontend.map((item, index) => (
                  <Badge key={index} variant="outline" className='border-muted text-muted-foreground rounded-full'>{item}</Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className='border-muted rounded-full'>Backend</Badge>
                {details.backend.map((item, index) => (
                  <Badge key={index} variant="outline" className='border-muted text-muted-foreground rounded-full'>{item}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
        </div>
      </div>
    </div>
  )
}
export default Liqee
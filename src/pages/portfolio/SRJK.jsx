import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import _1 from '@/assets/portofolio/srjk/1.png'
import _2 from '@/assets/portofolio/srjk/2.png'
import _3 from '@/assets/portofolio/srjk/3.png'
import Divider from '@/components/Divider'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'


const SRJK = () => {
  const details = {
    title: 'SRJK',
    description: `
# Sistem Rekomendasi Jurusan Kuliah Siswa SMA Berdasarkan Nilai Rapor dengan Algoritma Naive Bayes

Sistem ini dikembangkan sebagai bagian dari penelitian yang bertujuan untuk membantu siswa dalam memilih jurusan yang sesuai dengan kemampuan akademik mereka, sehingga meningkatkan peluang diterima di perguruan tinggi melalui jalur seleksi tanpa tes.


![Preview](https://github.com/iamyourdre/sistem-rekomendasi-jurusan-kuliah/blob/main/preview.png?raw=true)

## 🏛 Latar Belakang
Banyak siswa SMA mengalami kesulitan dalam memilih jurusan kuliah yang sesuai dengan minat dan kemampuannya, yang berdampak pada tingkat kelulusan yang rendah dalam seleksi nasional masuk perguruan tinggi (PTN). Oleh karena itu, sistem ini dirancang untuk menganalisis pola nilai rapor siswa dan memberikan rekomendasi jurusan berdasarkan data historis siswa yang telah berhasil diterima di PTN.

## 🔍 Metode
- **Naive Bayes Classifier**: Digunakan untuk mengklasifikasikan jurusan dengan probabilitas tertinggi berdasarkan pola nilai rapor siswa.
- **Euclidean Distance**: Digunakan untuk menemukan jurusan dengan pola nilai yang paling mirip dengan siswa yang telah berhasil diterima sebelumnya.
- **Leave-One-Out Cross Validation (LOOCV)**: Digunakan untuk menguji keakuratan model dengan dataset yang terbatas.
- **Precision Calculation**: Digunakan untuk mengevaluasi tingkat keberhasilan rekomendasi.

## ⚙️ Teknologi yang Digunakan
- **Backend**: Node.js dengan Express.js
- **Frontend**: React.js dengan Tailwind CSS
- **Database**: MySQL
- **Authentication**: NextAuth.js dengan JWT dan CSRF Token

## 📌 Fitur Utama
- **Pelatihan Model**: Sistem dapat melatih model Naive Bayes dengan dataset nilai rapor siswa yang telah berhasil diterima di PTN.
- **Pengujian Model**: Sistem dapat menguji keakuratan model dengan dataset yang terbatas menggunakan metode LOOCV.
- **Input Nilai Rapor**: Siswa dapat memasukkan nilai rapor mereka untuk mendapatkan rekomendasi jurusan.
- **Rekomendasi Jurusan**: Siswa dapat melihat rekomendasi jurusan berdasarkan nilai rapor mereka.


## 📖 Referensi
Penelitian ini merupakan bagian dari skripsi saya yang berjudul **"Sistem Rekomendasi Jurusan Kuliah Siswa SMA Berdasarkan Nilai Rapor dengan Algoritma Naive Bayes"**, yang dapat diakses melalui [repository Universitas Sriwijaya](https://repository.unsri.ac.id/156310/3/RAMA_55201_09021382025164_0009019002_0021128905_01_front_ref.pdf).
    `,
    highlight: ['Machine Learning', 'Data Mining', 'Web Development'],
    frontend: ['React.js', 'React Redux', 'React Router', 'Tailwind CSS', 'Axios'],
    backend: ['Node.js', 'Express.js', 'Argon2', 'Sequelize', 'MySQL', 'MathJS', 'Multer'],
    images: [_1, _2, _3],
    tags: ['Frontend', 'Backend'],
    link: 'https://github.com/iamyourdre/sistem-rekomendasi-jurusan-kuliah'
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
              <Button className='mt-4 flex-1' size='lg'><Github/> Check on GitHub</Button>
            </Link>
            <Divider/>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                {details.highlight.map((item, index) => (
                  <Badge key={index} className='border-muted rounded-full'>{item}</Badge>
                ))}
              </div>
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

export default SRJK
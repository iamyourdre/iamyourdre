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
    title: 'SRJK (Sistem Rekomendasi Jurusan Kuliah)',
    description: `
# College Major Recommendation System for High School Students Based on Report Card Grades Using the Naive Bayes Algorithm

This system was developed as part of a research project aimed at helping students choose majors that match their academic abilities, thereby increasing their chances of being accepted into universities through non-test selection pathways.

![Preview](https://github.com/iamyourdre/sistem-rekomendasi-jurusan-kuliah/blob/main/preview.png?raw=true)

## 🏛 Background
Many high school students struggle to choose a college major that suits their interests and abilities, which impacts the low graduation rates in national university entrance selection (PTN). Therefore, this system is designed to analyze students' report card grade patterns and provide major recommendations based on historical data of students who have successfully been accepted into PTN.

## 🔍 Methods
- **Naive Bayes Classifier**: Used to classify the major with the highest probability based on the student's report card grade patterns.
- **Euclidean Distance**: Used to find the major with the most similar grade pattern to students who have previously been accepted.
- **Leave-One-Out Cross Validation (LOOCV)**: Used to test the model's accuracy with a limited dataset.
- **Precision Calculation**: Used to evaluate the success rate of the recommendations.

## ⚙️ Technologies Used
- **Backend**: Node.js with Express.js
- **Frontend**: React.js with Tailwind CSS
- **Database**: MySQL
- **Authentication**: NextAuth.js with JWT and CSRF Token

## 📌 Main Features
- **Model Training**: The system can train the Naive Bayes model with a dataset of report card grades from students who have been accepted into PTN.
- **Model Testing**: The system can test the model's accuracy with a limited dataset using the LOOCV method.
- **Report Card Input**: Students can input their report card grades to get major recommendations.
- **Major Recommendations**: Students can view recommended majors based on their report card grades.

## 📖 Reference
This research is part of my thesis titled **"Sistem Rekomendasi Jurusan Kuliah Siswa SMA Berdasarkan Nilai Rapor dengan Algoritma Naive Bayes"**, which can be accessed through the [Sriwijaya University repository](https://repository.unsri.ac.id/156310/3/RAMA_55201_09021382025164_0009019002_0021128905_01_front_ref.pdf).
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
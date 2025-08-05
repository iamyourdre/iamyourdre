import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, Github } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import _1 from '@/assets/portofolio/expensetracker/1.png'
import _2 from '@/assets/portofolio/expensetracker/2.png'
import _3 from '@/assets/portofolio/expensetracker/3.png'
import _4 from '@/assets/portofolio/expensetracker/4.png'
import _5 from '@/assets/portofolio/expensetracker/5.png'
import _6 from '@/assets/portofolio/expensetracker/6.png'
import _7 from '@/assets/portofolio/expensetracker/7.png'
import _8 from '@/assets/portofolio/expensetracker/8.png'
import _9 from '@/assets/portofolio/expensetracker/9.png'
import _10 from '@/assets/portofolio/expensetracker/10.png'
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


const ExpenseTracker = () => {
  const details = {
    title: 'Expense Tracker',
    description: `
Expense Tracker is a modern web application to manage personal finances by recording, categorizing, and analyzing income and outcome transactions in an intuitive and interactive interface.

The application leverages Blazor WebAssembly for a rich client-side experience and ASP.NET Core for robust backend APIs and authentication.

## Project Features

- **User Authentication**: Secure login and registration (JWT-based).
- **Transaction Management**: Add, edit, delete, and view transactions.
- **Category Support**: Assign categories to transactions for better organization.
- **Income & Outcome Tracking**: Separate tracking for income and outcome transactions.
- **Dashboard**: Visual representation of financial data with charts and summaries.
- **Responsive UI**: Mobile-friendly design using Blazor Bootstrap.
- **Data Validation**: Client-side and server-side validation for transaction inputs.

## Technologies Used

- **Blazor WebAssembly (.NET 9)**
- **ASP.NET Core (.NET 9)**
- **Entity Framework Core (SQL Server)**
- **JWT Authentication**
- **Blazor Bootstrap**
- **FontAwesome**
- **Blazored.LocalStorage**
- **xUnit & Moq (Testing)**
- **C# 13**
- **OpenAPI/Swagger (API documentation)**
    `,
    images: [_1, _2, _3, _4, _5, _6, _7, _8, _9, _10],
    frontend: ['Blazor', 'Bootstrap', 'FontAwesome'],
    backend: ['ASP.NET Core', 'Entity Framework Core', 'JWT Authentication'],
    link: 'https://github.com/iamyourdre/ExpenseTrackerNet/',
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
export default ExpenseTracker
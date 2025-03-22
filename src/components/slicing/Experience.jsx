import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const experience = [
  {
    title: 'Media And Information',
    company: 'BEM KM Fasilkom Sriwijaya University',
    date: '2021 - 2022',
    description: [
      'PIC of Visual Design in the prestigious Technology Euphoria 2021 event.',
      'Contributed to various webinars and competitions as a publication and documentation team.'
    ],
    link: 'https://drive.google.com/drive/folders/1N8m1LI5mUrbV9Fwy_tNjoGXetKGtC2wS'
  },
  {
    title: 'Internship as Information Technology Staff',
    company: 'PT Bukit Asam Tbk',
    date: '2022',
    description: [
      'Leading a team of 3 people in developing an Asset Management Application.',
      'Successfully digitized asset recording and created efficiency of up to 90%, reducing the process time from 1 hour to 5 minutes.',
      'Completed the project with a final report score of 90 and received appreciation from the company.'
    ],
    link: 'https://drive.google.com/drive/folders/141flPjZNeW8O1hL-SsV2ObT3uguIdzEj'
  },
  {
    title: 'Fullstack Web Dev Academy',
    company: 'Ministry of Education, Culture, Research and Technology',
    date: '2022',
    description: [
      'Completed a 4-month intensive training in web development with Laravel & Bootstrap.',
      'Led a team of 5 developers to build a successful bookstore website delivered with outstanding results.'
    ],
    link: 'https://drive.google.com/drive/folders/1a-8PwecEnPz7AiCE26qxSX4rL-IuF_ht'
  },
]

const Experience = () => {
  const title = useRef(null)
  const subtitle = useRef(null)
  const experiencesTitle = useRef(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6, 
  });

  useEffect(() => {
    if (inView) {
      gsap.fromTo(title.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
      gsap.fromTo(subtitle.current, { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
    }
  }, [inView]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      gsap.to(experiencesTitle.current, { x: -scrollY * 0.2 });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='py-20 bg-foreground text-background relative overflow-hidden'>
      <h1 ref={experiencesTitle} className='font-[1000] text-[15rem] md:text-[20rem] -top-1 -left-4 md:-top-16 lg:-top-12 md:-left-5 absolute w-max z-0 pointer-events-none opacity-5'>
        EXPERIENCES.
      </h1>
      <div className="flex flex-col-reverse md:grid md:grid-cols-6 md:gap-10 ">
        <div className='hidden md:col-span-1 md:flex relative'>
        </div>
        <div className='flex flex-1 col-span-5 flex-col md:box justify-center md:justify-end gap-8 box py-16'>
          <div className="flex flex-col gap-3" ref={ref}>
            <h1 className='font-semibold h1-dre opacity-0' ref={title}>
              Experiences.
            </h1>
            <p className="h2-dre text-muted col-span-2 opacity-0" ref={subtitle}>
              My relevant experience over the years.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col box md:box-m gap-6 font-light lg:text-xl">
        {experience.map((exp, idx) => (
          <>
            <div className="border border-muted-foreground"></div>
            <div className="grid grid-cols-2 gap-3" key={idx}>
              <div className="col-span-1 flex flex-col">
                <p>{exp.title} -</p>
                <p>{exp.company}</p>
                <p>({exp.date})</p>
              </div>
              <div className="col-span-1 flex flex-col md:flex-row gap-4">
                <ul className='list-disc list-inside flex-1'>
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="text-muted">{desc}</li>
                  ))}
                </ul>
                <div className='flex justify-end items-start'>
                  <Link to={exp.link} target='_blank' className='flex gap-2'>
                    <ArrowUpRight className='text-muted' size={50}/>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default Experience
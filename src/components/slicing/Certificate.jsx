import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const certificate = [
  {
    type: 'Certificate of Completion',
    title: 'Fullstack Web Dev Academy',
    source: 'Ministry of Education, Culture, Research and Technology',
    link: 'https://drive.google.com/drive/folders/1a-8PwecEnPz7AiCE26qxSX4rL-IuF_ht',
    date: '2022'
  },
  {
    type: 'Certificate of Achievement',
    title: 'Finalis MTQMN XVII : Al-Qur\'an Computer App Design',
    source: 'Ministry of Education, Culture, Research and Technology',
    link: 'https://drive.google.com/drive/folders/1N8m1LI5mUrbV9Fwy_tNjoGXetKGtC2wS',
    date: '2023'
  },
  {
    type: 'Certificate of Completion',
    title: 'Advance React',
    source: 'Scrimba.com',
    link: 'https://v1.scrimba.com/certificate/uEPzeNfy/greact',
    date: '2024'
  },
  {
    type: 'Award',
    title: 'Outstanding Alumni in Non-Academic Fields',
    source: 'Sriwijaya University',
    link: 'https://drive.google.com/drive/folders/1VgxlaOwX-H9NdO73iNrRnlE2ngfiLzUs',
    date: '2024'
  },
]

const Certificate = () => {
  const title = useRef(null)
  const subtitle = useRef(null)
  const certificatesTitle = useRef(null)
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
      gsap.to(certificatesTitle.current, { x: -scrollY * 0.2 });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='py-20 bg-foreground text-background relative overflow-hidden'>
      <h1 ref={certificatesTitle} className='font-[1000] text-[15rem] md:text-[20rem] -top-1 left-4 md:-top-16 lg:-top-12 md:left-8 absolute w-max z-0 pointer-events-none opacity-5'>
        CERTIFICATES.
      </h1>
      <div className="flex flex-col-reverse md:grid md:grid-cols-6 md:gap-10">
        <div className='hidden md:col-span-1 md:flex relative'>
        </div>
        <div className='flex flex-1 col-span-5 flex-col md:box justify-center md:justify-end gap-8 box py-16'>
          <div className="flex flex-col gap-3" ref={ref}>
            <h1 className='font-semibold h1-dre opacity-0' ref={title}>
              Certificates.
            </h1>
            <p className="h2-dre text-muted col-span-2 opacity-0" ref={subtitle}>
              My certificates that I have achieved.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col box md:box-m gap-6 font-light text-xl">
        {certificate.map((exp, idx) => (
          <>
            <div className="border border-muted-foreground"></div>
            <div className="grid grid-cols-2 gap-3" key={idx}>
              <div className="col-span-1 flex flex-col">
                <p>{exp.type} -</p>
                <p>{exp.title}</p>
              </div>
              <div className="col-span-1 flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                <p>{exp.source}</p>
                <p>({exp.date})</p>
                </div>
                <div className='flex justify-end items-start'>
                  <Link to={exp.link} target='_blank'>
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

export default Certificate
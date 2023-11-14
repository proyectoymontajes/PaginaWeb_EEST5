import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css';

import { achievement } from '../../../../data/constants';

interface ExperienceCardProps {
  icon ?: string ;
  title: string;
  date: string;
  points: string[]
  iconBg ?: string
}

const CardTimeline = ({ icon, title, date, points, iconBg }: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ backgroundColor: '#2b2b47', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #2b2b47' }}
      date={date}
      dateClassName='text-date'
      iconStyle={{ background: iconBg }}
      icon={<div className='flex justify-center items-center w-full h-full'>
        <img
          src={icon}
          alt={title}
          className='object-contain'
          style={{ borderRadius: '50%' }}
        />
      </div>}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{title}</h3>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {
          points.map((point, index) => (
            <li key={index} className='text-white-100 text-[14px] pl-1 tracking-wider'>{point}</li>
          ))
        }
      </ul>
    </VerticalTimelineElement>
  )
}

const Timeline = () => {
  return (
      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor='#2b2b47'>
          {achievement.map((experience, index) => (
            <CardTimeline key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
  )
}

export default Timeline
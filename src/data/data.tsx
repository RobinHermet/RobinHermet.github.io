import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  //OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/bg.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  //SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Hermet Robin Resume',
  description: "Here is my resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Robin HERMET.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I am a fourth year engineering student in Computer Science and Management currently looking for a 4 months internship from April
       to August 2023.   
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://www.dropbox.com/s/ef3bvi4pukz25dl/Resume_HERMET_Robin.pdf?dl=1',
      text: 'Resume',
      primary: true,
      download: true,
      Icon: DownloadIcon,
    },
    // {
    //   href: `#${SectionId.Contact}`,
    //   text: 'Contact',
    //   primary: false,
    //   download: false,
    // },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a fourth-year engineering student in Computer Science and Management at Polytech Montpellier, a school where I hold the position of co-responsible for all football-related activities. Indeed, I am a big fan of sport, both individual and collective, which allowed me to develop a team spirit but also to be determined and never give up.`,
  aboutItems: [
    {label: 'Location', text: 'Montpellier, South of France', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'French', Icon: FlagIcon},
    {label: 'Interests', text: 'Soccer, tennis, bodybuilding', Icon: SparklesIcon},
    {label: 'Study', text: 'Polytech Montpellier', Icon: AcademicCapIcon},
    //{label: 'Employment', text: 'Instant Domains, inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
// export const skills: SkillGroup[] = [
//   {
//     name: 'Spoken languages',
//     skills: [
//       {
//         name: 'English',
//         level: 10,
//       },
//       {
//         name: 'French',
//         level: 4,
//       },
//       {
//         name: 'Spanish',
//         level: 3,
//       },
//     ],
//   },
//   {
//     name: 'Frontend development',
//     skills: [
//       {
//         name: 'React',
//         level: 9,
//       },
//       {
//         name: 'Typescript',
//         level: 7,
//       },
//       {
//         name: 'GraphQL',
//         level: 6,
//       },
//     ],
//   },
//   {
//     name: 'Backend development',
//     skills: [
//       {
//         name: 'Node.js',
//         level: 8,
//       },
//       {
//         name: 'Rust',
//         level: 5,
//       },
//       {
//         name: 'Golang',
//         level: 4,
//       },
//     ],
//   },
//   {
//     name: 'Mobile development',
//     skills: [
//       {
//         name: 'React Native',
//         level: 9,
//       },
//       {
//         name: 'Flutter',
//         level: 4,
//       },
//       {
//         name: 'Swift',
//         level: 3,
//       },
//     ],
//   },
// ];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2021 - Now',
    location: 'Polytech Montpellier (South Of France)',
    title: 'Fourth year of a 5-years engineering qualification in Computer Science and Management.',
    content: <p>Themes covered: design of information systems, management of major IT projects, development of innovative technologies
    </p>,
  },
  {
    date: '2019 - 21',
    location: 'Polytech Montpellier (South Of France)',
    title: '2 years of Preparatory Classes (Engineering Science and Technology) leading to a place in one of Polytech s highly selective Engineering Schools. ',
    content: <p>Fundamental multidisciplinary scientific formation supplemented by teaching geared towards the engineering profession</p>,
  },
  {
    date: '2019',
    location: 'Theophile roussel high-school (South of France)',
    title: 'Obtaining the French high-school diploma with honors.',
    content: <p>The French high-school diploma is the diploma that validates the end of high-school education and opens access to higher education.</p>,
  },
];


export const experience: TimelineItem[] = [
  {
    date: 'July - August 2022, 2021 & 2020 ',
    location: 'Auchan Supermarket',
    title: 'Store Clerk',
    content: (
      <p>
        Summer job as a store clerk at supermarket (shelving and order preparation). Acquired skills: customer relationship, team spirit, sense of organization.
      </p>
    ),
  },
  {
    date: 'July - August 2019',
    location: 'Restaurant "Le Gabale"',
    title: 'Waiter',
    content: (
      <p>
        Summer job as a waiter in a restaurant. Acquired skills: dynamism, resilience, flexibility.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contact me',
  description: 'For any internship proposal, please contact me by email.',
  items: [
    {
      type: ContactType.Email,
      text: 'robin.hermet48@gmail.com',
      href: 'mailto:robin.hermet48@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Montpellier, South of France',
      href: 'https://goo.gl/maps/pMB5VZpsgahZqMgB9',
    },
    {
      type: ContactType.Github,
      text: 'RobinHermet',
      href: 'https://github.com/RobinHermet',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/RobinHermet'},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/robin-hermet-44025a251/'},
  //{label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];

import { v4 as uid } from "uuid";
import { IoHomeOutline } from "react-icons/io5";
import { FiMessageCircle, FiSettings } from "react-icons/fi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { AiOutlineBars } from "react-icons/ai";

export const navLinks = [
  {
    id: uid(),
    name: "home",
    href: "/",
  },
  {
    id: uid(),
    name: "about",
    href: "/about",
  },
  {
    id: uid(),
    name: "product",
    href: "/product",
  },

  {
    id: uid(),
    name: "contact",
    href: "/contact",
  },
];

export const heroSidebarLinks = [
  {
    id: uid(),
    name: "home",
    icon: <IoHomeOutline />,
    href: "#",
  },
  {
    id: uid(),
    name: "discover",
    icon: <AiOutlineBars />,
    href: "#",
  },
  {
    id: uid(),
    name: "messages",
    icon: <FiMessageCircle />,
    href: "#",
  },
  {
    id: uid(),
    name: "tasks",
    icon: <TfiHeadphoneAlt />,
    href: "#",
  },
  {
    id: uid(),
    name: "settings",
    icon: <FiSettings />,
    href: "#",
  },
];

export const FooterLinks = [
  {
    id: uid(),
    title: "Features",
    links: [
      {
        id: uid(),
        name: "Video Training",
        href: "#",
      },
      {
        id: uid(),
        name: "Employee Management",
        href: "#",
      },
      {
        id: uid(),
        name: "Training Supervision",
        href: "#",
      },
      {
        id: uid(),
        name: "Free Tier Services",
        href: "#",
      },
    ],
  },
  {
    id: uid(),
    title: "Information",
    links: [
      {
        id: uid(),
        name: "Organization",
        href: "#",
      },
      {
        id: uid(),
        name: "Employees",
        href: "#",
      },
      {
        id: uid(),
        name: "Documentation",
        href: "#",
      },
    ],
  },
  {
    id: uid(),
    title: "Company",
    links: [
      {
        id: uid(),
        name: "Careers",
        href: "#",
      },
      {
        id: uid(),
        name: "Security",
        href: "#",
      },
      {
        id: uid(),
        name: "Contact Us",
        href: "#",
      },
      {
        id: uid(),
        name: "Report an Issue",
        href: "#",
      },
    ],
  },
];

export const videoCards = [
  {
    id: "1",
    name: "Python for Beginners",
    instructor: "Mosh Hamedani",
    duration: "01:00:06",
    thumbnail:
      "https://vz-4e750104-d0a.b-cdn.net/fe1a521f-a334-476f-9775-03ba2a38a129/thumbnail_fb35178e.jpg",
    src: "https://iframe.mediadelivery.net/embed/114226/fe1a521f-a334-476f-9775-03ba2a38a129?autoplay=false&muted=false",
    summary: `"Python For Beginners" by Mosh Hamedani is a comprehensive guide to learning Python programming language. The book is structured in a way that is easy to follow and understand, even for beginners with no prior experience in programming. The author uses a practical approach to teaching Python, with lots of examples and exercises that allow readers to practice what they learn. The book covers essential Python concepts such as variables, data types, control flow, functions, and object-oriented programming. It also includes chapters on file handling, modules, and regular expressions. </br></br>

    In addition to the Course itself, comes with several helpful resources, including an online forum where readers can ask questions and interact with other learners. The book also includes links to video tutorials that supplement the content covered in the text. Overall, "Python Crash Course" is an excellent resource for anyone looking to learn Python quickly and efficiently. Whether you are a beginner or an experienced programmer looking to add Python to your skillset, this book is a must-read.`,
  },
  {
    id: "2",
    name: "MySQL Crash Course",
    instructor: "Mosh Hamedani",
    duration: "03:10:19",
    thumbnail:
      "https://vz-4e750104-d0a.b-cdn.net/b0372b4a-253b-4a7e-acda-cb8460939fee/thumbnail_30f7a2ee.jpg",
    src: "https://iframe.mediadelivery.net/embed/114226/b0372b4a-253b-4a7e-acda-cb8460939fee?autoplay=false",
  },
  {
    id: "3",
    name: "Javascript crash course",
    instructor: "Brad Traversy",
    duration: "01:40:30",
    thumbnail:
      "https://vz-4e750104-d0a.b-cdn.net/cf39cb68-2263-4bc9-ab7b-6c5b6880d59b/thumbnail_fa5e36f5.jpg",
    src: "https://iframe.mediadelivery.net/embed/114226/cf39cb68-2263-4bc9-ab7b-6c5b6880d59b?autoplay=false",
  },
  {
    id: "4",
    name: "React Router v6",
    instructor: "John Smilga",
    duration: "01:40:30",
    thumbnail:
      "https://vz-4e750104-d0a.b-cdn.net/f086752e-7d8d-4ac1-a1fb-88c867a2159f/thumbnail_81af2757.jpg",
    src: "https://iframe.mediadelivery.net/embed/114226/f086752e-7d8d-4ac1-a1fb-88c867a2159f?autoplay=false",
  },
  {
    id: "5",
    name: "ReactJs Crash Course",
    instructor: "Brad Traversy",
    duration: "01:17:14",
    thumbnail:
      "https://vz-4e750104-d0a.b-cdn.net/1a22ab74-ccf2-4428-88b4-14a32ea3cad7/thumbnail_ae700e87.jpg",
    src: "https://iframe.mediadelivery.net/embed/114226/1a22ab74-ccf2-4428-88b4-14a32ea3cad7?autoplay=false",
  },
];

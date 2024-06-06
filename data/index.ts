export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currrently working as Full Stack Developer",
    description: "What i do?",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Ecommerce Dashbaord Design (Frontend)",
    des: "Build on React with beautifull charts and Paginations",
    img: "/p-3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://dashboard-shoppy.netlify.app/",
  },
  {
    id: 2,
    title: "Snapgram - Socail Media WebApp (full stack project)",
    des: "Social media with this user-friendly platform that has a nice look and lots of features.explore posts, and enjoy a strong authentication system and quick data fetching using React Query for a smooth user experience.",
    img: "/p-1.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/appwrite.png"],
    link: "https://snapgram12.netlify.app/",
  },

  {
    id: 3,
    title: "Blogspot (full stack project)",
    des: "Multiuser Blogging plateform",
    img: "/p-2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 4,
    title: "React Portfolio (Frontend)",
    des: "React Website Design & Development www.rehansatelier.com",
    img: "/rehan.svg",
    iconLists: ["/re.svg", "/tail.svg", "/fm.svg", "twil.svg"],
    link: "https://mernblog12.netlify.app/",
  },
  {
    id: 5,
    title: "Ecommerce Website with Paypal",
    des: "Resposive frontend to integration of Clerk and Paypal",
    img: "/ecom.svg",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/redux.png",
      "/paypal.png",
      "/c.svg",
    ],
    link: "https://ecommnext.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      '" Faizan is also very professional and reliable. He was always responsive to my communication, and he met all of his deadlines. He was also very open to feedback, and he was always willing to make changes to the project until I was completely satisfied. Overall, I am extremely happy with the work that Faizan did for me. He is a truly exceptional developer, and I highly recommend him to anyone looking for a skilled and reliable frontend and backend developer. To put it in a more casual way, Faizan is the man! He knows his stuff, he\'s easy to work with, and he gets the job done. If you need a frontend or backend developer, I highly recommend him "',

    name: "Rehan Mirza",
    title: "UI/UX Designer on Upwork",
    profileImage: "/unnamed.png",
  },
  {
    quote:
      ' "Faizan is an exceptional developer. I hired him to do both frontend and backend work on a recent project, and he exceeded my expectations in every way. First off, Faizan is incredibly knowledgeable and skilled. He has a deep understanding of both frontend and backend development, and he was able to quickly and easily implement all of my requirements. He is also very creative and resourceful, and he came up with some great solutions to some of the challenges we faced." ',
    name: "Edison",
    title: "Director of AlphaStream",
    profileImage: "/profile.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },

  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Led the dev of a WebApp for a client, from initial concept to deployment",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/FaizanHaider108",
  },

  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/faizanhaiderdev/",
  },
];


import { FaDatabase, FaDesktop, FaMobileAlt, FaAndroid } from "react-icons/fa"



export const ProjectData = [
    {
        id: 1,
        title: "To Do List",
        description: "An interactive web app to help you schedule your data. Also helps you in time management.",
        imgUrl: "Screenshot(11)",
        websiteUrl: "www.google.com",
        sourceUrl: "www.google.com",
        tools: ["React", "useReducer","CSS", "HTML"]
    },
    {
        id: 2,
        title: "E-commerce Website",
        description: "A typical e-commerce website landing page template. ",
        imgUrl: "Screenshot(12)",
        websiteUrl: "www.google.com",
        sourceUrl: "www.google.com",
        tools: ["React", "React Reveal","CSS", "HTML"]
    },
    {
        id: 3,
        title: "Weather App",
        description: "A web app created for you to the weather of different cities around the world.",
        imgUrl: "Screenshot(13)",
        websiteUrl: "www.google.com",
        sourceUrl: "www.google.com",
        tools: ["React","Data Fetching", "CSS", "HTML"]
    },
    {
        id: 4,
        title: "Quiz App",
        description: "A simple web app to take test or quiz.",
        imgUrl: "Screenshot(13)",
        websiteUrl: "www.google.com",
        sourceUrl: "www.google.com",
        tools: ["React","Conditional Rendering", "CSS", "HTML"]
    }
]



export const ServiceData = [
    {
        id: 1,
        font: <FaDesktop className='img-template' />,
        title: "Web development",
        description: "We imagine, design, code and form your idea turning it real, everything is possible if you're passionate about it, and we lose track of time while doing our jobs"
    },
    {
        id: 2,
        font: <FaDatabase className='img-template' />,
        title: "Website Hosting",
        description: "Your website needs a space in the world of internet, you don't wanna put it on your desk and have to worry about that for you. "
    },
    {
        id: 3,
        font: <FaMobileAlt className='img-template' />,
        title: "Responsive Design",
        description: "Responsive web design aims to make web pages render well on a variety of devices and sceeen sizes from minimum to maximum diplay size to ensure usability and satisfaction"
    },
    {
        id: 4,
        font: <FaAndroid className='img-template' />,
        title: "Android development",
        description: "you want a unique medium by which people can use your services, developing an android app that runn natively using java is what i do for you. "
    }
]
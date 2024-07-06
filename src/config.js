import { action } from "mobx";
import { notFound } from "next/navigation";

export const config = {
    content: {
        logo: "/choroidLogo.png",
        brand: "Choroid",
        hero: {
            heroHeadLine: "Transforming Visions Into Immersive Experiences",
            heroSubHeadLine: "",
            heroImageUrl: "",
            heroActionText: "",
            highlightedHeadlineWords: ["Visions", "Experiences"],
            breakLineAfter:["Visions", "Immersive"],
        },
        notFoundURL: "/notFound.png",

        projects: {
            isHidden: false, 
            data:[
                {
                    imageUrl: "/bookifai.jpeg",
                    title: "Bookifai",
                    description: "Like reading novels? Ever wanted to connect with the characters in the book and chat with them? Bookifai allows you to just do that! You upload your favorite book and we extract the characters and create a chatbots for you to interact with them using discord!",
                    actionLink: "",
                    actionText: "View Project",
                    isHidden: false,
                    visibleHome: true
                },
                {
                    imageUrl: "/websiteProjectPlaceholder2.png",
                    title: "Sweetkick",
                    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
                    actionLink: "",
                    actionText: "View Project",
                    isHidden: false,
                    visibleHome: true
                },
                {
                    imageUrl: "/websiteProjectPlaceholder3.png",
                    title: "iPortfolio",
                    description: "iPortfolio is a modern personal CV and portfolio HTML template. It's creative, minimal and clean design. iPortfolio can be used for many purposes starting from minimal portfolios, freelancers, graphic designers, illustrators, photographers and many others to showcase their work, projects, products, clients and offer services.",
                    actionLink: "",
                    actionText: "View Project",
                    isHidden: false,
                    visibleHome: true
                },
            ]
        },
        services: [],
        solutions: {
            isHidden: false, 
            data:[
                {
                    imageUrl: "",
                    icon: "/icons/bot.svg",
                    title: "Custom Bots in XR! Powered by GPT-4 Technology",
                    description: `
                    We create AI-powered virtual assistants for XR environments.
                    Our custom bots use GPT-4 technology to provide intelligent,
                    context-aware interactions in VR and AR,
                    enhancing user experiences across various applications.`,
                    actionLink: "",
                    actionText: "More Info",
                    isHidden: false,
                    visibleHome: true
                },
                {
                    imageUrl: "",
                    icon: "/icons/virtual-tour.svg",
                    title: "Architectural Visualization & Virtual Tours",
                    description: `We transform architectural concepts into immersive experiences.
                    Our team creates detailed 3D models of apartments and scenes, bringing them
                    to life in virtual reality (VR) and augmented reality (AR).
                    This allows clients to explore and interact with spaces before they're built,
                    enhancing decision-making and providing a powerful marketing tool for
                    real estate developers and architects.`,
                    actionLink: "",
                    actionText: "More Info",
                    isHidden: false,
                    visibleHome: true
                },
                {
                    imageUrl: "",
                    icon: "/icons/MobileWeb.svg",
                    title: "Web & Mobile Apps",
                    description: "We develop custom, user-friendly web and mobile applications. Our solutions are designed to meet your specific business needs, offering seamless functionality across devices and platforms",
                    actionLink: "#",
                    actionText: "More Info",
                    isHidden: false,
                    visibleHome: true
                },
            ]
        },
        team: {
            isHidden: false,
            members: [

                {
                    imageUrl: "/team/rabeeQablawi.png",
                    title: "Rabee Qiblawi",
                    description: "Founder | Software engineer specializing in front-end development and UI/UX design.",
                    visibleHome: true
                },
                {
                    imageUrl: "/team/karloRajić.png",
                    title: "Karlo Rajić",
                    description: "Co-Founder | Creative designer with a passion for user experience and visual storytelling.",
                    visibleHome: true
                },
                {
                    imageUrl: "",
                    title: "Mohammad Shahbaz",
                    description: "Co-Founder | Software engineer specializing in front-end development and UI/UX design.",
                    visibleHome: true
                },
                {
                    imageUrl: "/team/hadiDiab.png",
                    title: "Hadi Diab",
                    description: "Software engineer specializing in front-end development and UI/UX design.",
                    visibleHome: true
                },
                {
                    imageUrl: "/team/mustafaZabet.png",
                    title: "Mustafa Zabet",
                    description: "Software engineer specializing in front-end development and UI/UX design.",
                    visibleHome: true
                },
                {
                    imageUrl: "/team/mohammadOthman.png",
                    title: "Mohmmad Othman",
                    description: "Graphic Designer",
                    visibleHome: true
                },
                {
                    imageUrl: "",
                    title: "Nizar Sadek",
                    description: "Creative designer with a passion for user experience and visual storytelling.",
                    visibleHome: true
                },
                {
                    imageUrl: "",
                    title: "Diaa AbuAllul",
                    description: "Creative designer with a passion for user experience and visual storytelling.",
                    visibleHome: true
                },
            ]
        },
    },
    screenSizes: {
        small: 768,
        medium: 1024,
        large: 1440,
    },
    github: {
        repoOwner: "rabeeqiblawi",
        repoName: "Articles",
    },
    theme: {
        colors: {
            dark: {
                primary: "#3f51b5",
                secondary: "#f50057",
                accent: "#ff4081",
                background: "#212121",
                surface: "#424242",
                error: "#b00020",
            },
            light: {
                primary: "#3f51b5",
                secondary: "#f50057",
                accent: "#ff4081",
                background: "#f5f5f5",
                surface: "#ffffff",
                error: "#b00020",
            },
        },
        fonts: {
            primary: "Roboto, sans-serif",
            secondary: "Roboto, sans-serif",
        },
    },
    socialLinks: {
        github: "",
        linkedin: "",
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        instagram: "https://instgram.com",
        tiktok: "",
        youtube: "",
    },
    contact: {
        imageUrl: "/contactUs.png",
        title: "Get in Touch",
        description: "We're here to help and answer any question you might have. We look forward to hearing from you!",
        buttonText: "Send us a message",
        isHidden: false,

        contactInfo:{
            phone: "+961 23 567 890",
            mail: "care@choroid.com",
            location: "123 Street Name, Saida, Lebanon",
        }
    },
    featureFlags: {
    },
    apiEndpoints: {
        githubBlogs: "/api/github-blogs",
    },
};

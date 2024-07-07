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
            breakLineAfter: ["Visions", "Immersive"],
        },
        notFoundURL: "/notFound.png",

        projects: {
            isHidden: false,
            data: [
                {
                    imageUrl: "/bookifai.jpeg",
                    title: "Bookifai",
                    description: "Ever wanted to connect with the characters in your favourite book and chat with them!? Bookifai allows you to just do that! You upload your favorite book and we extract the characters and create a chatbots for you to interact with them using discord!",
                    actionLink: "mailto:rabeekiblawi@gmail.com",
                    actionText: "Request a Demo",
                    isHidden: false,
                    visibleHome: true
                },
                {
                    imageUrl: "/MirageXR.jpg",
                    title: "MirageXR",
                    description: `Prototype Arduino or ESP projects faster with MirageXR. Our platform connects virtual electronics to your physical hardware, enabling quick testing and development. Using our AR/XR app and Arduino/ESP library, control virtual components with your real board—no extra parts needed.Bridge the physical and virtual worlds in your projects!`,
                    actionLink: "www.miragexr.com",
                    actionText: "Join Waitlist",
                    isHidden: false,
                    visibleHome: true
                },
                {
                    imageUrl: "/websiteProjectPlaceholder3.png",
                    title: "OpenAI Wrapper for Unity",
                    description: "Our package allows you to easily integrate OpenAI's Models into your Unity projects. We provided a simple API that allows you to interact and chain multiple models together to create complex AI behaviors in your game or simulation. Our package is designed to be easy to use and flexible to fit your needs. We also provide a set of example scenes to get you started quickly!",
                    actionLink: "",
                    actionText: "Order Now",
                    isHidden: false,
                    visibleHome: true
                },
            ]
        },
        services: [],
        solutions: {
            isHidden: false,
            data: [
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

        contactInfo: {
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

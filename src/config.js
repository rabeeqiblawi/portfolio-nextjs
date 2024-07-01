import { action } from "mobx";

export const config = {
    content: {
        logo: "/choroidLogo.png",
        brand: "Choroid",
        heroHeadLine: "Transfoming visions Into Immersive experiences",
        projects: [
            {
                imageUrl: "/websiteProjectPlaceholder1.png",
                title: "Bluehost Design Website",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
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
            }
        ],
        services: [],
        solutions: [
            {
                imageUrl: "",
                icon:"/icons/bot.svg",
                title: "Custom Discord & Telegram Bots Powered by GPT-4",
                description: "Transform your Discord and Telegram communities with our custom-built bots enhanced by GPT-4 technology. These bots are designed to elevate user engagement, provide personalized interactions, and automate repetitive tasks seamlessly.",
                actionLink: "",
                actionText: "More Info",
                isHidden: false,
                visibleHome: true
            },
            {
                imageUrl: "",
                icon:"/icons/virtual-tour.svg",
                title: "AutoCAD to VR & AR Experience",
                description: "Immerse yourself in the future of design with our AutoCAD to VR & AR experience solution. Transform your 2D and 3D designs into interactive virtual and augmented reality environments, allowing for real-time visualization, collaboration, and simulation.",
                actionLink: "",
                actionText: "More Info",
                isHidden: false,
                visibleHome: true
            },
            {
                imageUrl: "",
                icon:"/icons/virtual-tour.svg",
                title: "AutoCAD to VR & AR Experience",
                description: "Immerse yourself in the future of design with our AutoCAD to VR & AR experience solution. Transform your 2D and 3D designs into interactive virtual and augmented reality environments, allowing for real-time visualization, collaboration, and simulation. AKJDFKLAJL;DFJLA JSDFLKJAKLSDFJLAJSDF LJALSDJF;LJASLDFJLASJDFL",
                actionLink: "#",
                actionText: "More Info",
                isHidden: false,
                visibleHome: true
            },
        ],        
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
        phone: "+1 234 567 890",
        mail: "info@example.com",
        location: "123 Street Name, City, Country"
    },
    featureFlags: {
    },
    apiEndpoints: {
        githubBlogs: "/api/github-blogs",
    },
};

export const config = {
    content: {
        logo: "",
        brand: "Rabee Qiblawi",
        slogan: "",
        sloganLink: "https://choroidstudios.com",
        metaDescription: "Software Development | XR | AI | Web Development",

        hero: {
            heroHeadLine: "Transforming Visions Into Immersive Experiences",
            heroActionText: "",
            heroActionLink: "/services",
            heroSubHeadLine: "Software Development | XR | AI | Web Development",
            parallaxEffect: true,
            heroImageUrl: "/heroImage.png",
            parallaxImages: [
                'parallax-effect/0.png',
                'parallax-effect/1.png',
                'parallax-effect/2.png',
                'parallax-effect/3.png',
                'parallax-effect/4.png',
            ],
            highlightedHeadlineWords: ["Visions", "Experiences"],
            breakLineAfter: ["Visions", "Immersive"],
        },
        topPageVectors: "/topPageVectors.png",
        notFoundURL: "/notFound.png",

        links:[
            { path: '/#projects', title: 'Projects' },
            { path: '/blog', title: 'Blog' },
            // { path: '/#solutions', title: 'Solutions' },
            // { path: '/learning', title: 'Learning' },
            // { path: '/templates', title: 'Templates' },
            // { path: '/services', title: 'Services' },
            { path: '/#contact', title: 'Contact' },
        ],

        coreFeatures: {
            isHidden: true,
            mainTitle: "Core Features",
            mainTitleHighlightedWord: "Features",
            data: [
                {
                    icon: "⚡",
                    title: "Swift",
                    description: "Blazing fast load times"
                },
                {
                    icon: "📱",
                    title: "Adaptive",
                    description: "Seamless on all devices"
                },
                {
                    icon: "🎨",
                    title: "Sleek",
                    description: "Modern, eye-catching designs"
                },
                {
                    icon: "🛠️",
                    title: "Flexible",
                    description: "Easily customizable"
                }
            ]
        },
        about: {
            isHidden: true,
            mainTitle: "ABOUT US",
            mainTitleHighlightedWord: "US",
            description: "We are a team of dedicated professionals committed to delivering innovative web solutions. Our expertise spans across various technologies, ensuring we can meet diverse client needs.",
            buttonText: "CONTACT NOW",
            buttonAction: "#contact",
            aboutImageURL: "/about-us.png",
        },
        projects: {
            isHidden: false,
            mainTitle: "My Projects",
            mainTitleHighlightedWord: "Projects",
            data: [
                {
                    imageUrl: "/bookifai2.png",
                    title: "Bookifai",
                    description: "Ever wanted to connect with the characters in your favourite book and chat with them!? Bookifai allows you to just do that! You upload your favorite book and we extract the characters and create a chatbots for you to interact with them using discord!",
                    actionLink: "mailto:rabeeqiblawi@gmail.com",
                    actionText: "Request a Demo",
                    isHidden: false,
                    visibleHome: true
                },
                {
                    imageUrl: "/jtXBWs.png",
                    title: "Perished Truth",
                    description: "Perished Truth is an upcoming survival horror game looking to Revive classical horror genre with fixed camera and tank controls. The game follows 10 characters kidnapped and trapped in an abandoned facility on an abandoned island. on the way you will meet other kidnapped survivors.",
                    actionLink: "https://lixmxil.itch.io/perished-truth",
                    actionText: "checkout Demo",
                    isHidden: false,
                    visibleHome: true
                },
                {
                    imageUrl: "/MirageXR.png",
                    title: "MirageXR",
                    description: `MirageXR is my thesis work and the summary of years of tinkering and learning, this library lets studnet interface arduino with augmented reality based electronics for rapid prototyping`,
                    actionLink: "mailto:rabeeqiblawi@gmail.com",
                    actionText: "contact for more info",
                    isHidden: false,
                    visibleHome: false
                },
                {
                    imageUrl: "/unity_chatgpt.png",
                    title: "OpenAI Wrapper for Unity",
                    description: "Our Unity package allows you to easily integrate OpenAI's Models into your Unity projects. We provided a simple API that allows you to interact and chain multiple models together to create complex AI behaviors in your game or simulation. Our package is designed to be easy to use and flexible to fit your needs. We also provide a set of example scenes to get you started quickly!",
                    actionLink: "https://github.com/rabeeqiblawi/Choroid-Input-System",
                    actionText: "View On Github",
                    isHidden: false,
                    visibleHome: false
                },
                {
                    imageUrl: "/cfwm2.jpg",
                    title: "Come Fly With Me (Protoype)",
                    description: `Ever wanted to fly like a bird? Come Fly With Me is a VR experience that allows you to do just that! You can fly and explore the world from a bird's eye view!`,
                    actionLink: "https://www.youtube.com/watch?v=oted6xBF0z8",
                    actionText: "More",
                    isHidden: false,
                    visibleHome: true
                },  {
                    imageUrl: "parashift.jpg",
                    title: "Parashift @RobocomVR",
                    description: `Parashift is an arcade VR Game, I was responsible for the Game Mechanics which includes trangulating the player movment as the machine turns, and aslo was resposnisble for integaring the machine with hardware using serial communication `,
                    actionLink: "https://www.youtube.com/watch?v=kSv7wSCpyys",
                    actionText: "More",
                    isHidden: false,
                    visibleHome: true
                },
                ,  {
                    imageUrl: "ScryptechWebsite.jpg",
                    title: "Scryptech's website",
                    description: `Scryptech was the first company I worked for, and I was responsible for integrating threejs within the website`,
                    actionLink: "https://www.scryptech.com/",
                    actionText: "Check Website",
                    isHidden: false,
                    visibleHome: false
                }, {
                    imageUrl: "Tach.jpg",
                    title: "Takh Tutor Ar @Scryptech",
                    description: `Takh Tutor was an outsourcing project for a company in Germany that aided patients to use a medical kit in AR`,
                    actionLink: "https://www.scryptech.com/",
                    actionText: "More",
                    isHidden: false,
                    visibleHome: false
                },
                {
                    imageUrl: "/notFound.png",
                    title: "test (not at Home page)",
                    description: "TEST",
                    actionLink: "",
                    actionText: "View Project",
                    isHidden: true,
                    visibleHome: false
                },
            ]
        },
        services: {
            isHidden: true,
            mainTitle: "Our Services",
            mainTitleHighlightedWord: "Services",
            data: [
                {
                    title: "Digital Marketing Strategy",
                    description: "Craft tailored digital marketing strategies that align with your business goals. From SEO optimization to social media campaigns, we enhance your online presence and drive engagement.",
                    icon: "/icons/vrIcon.svg",
                    actionLink: "https://example.com/digital-marketing-services",
                    actionText: "Learn More",
                    isHidden: false,
                    visibleHome: true,
                    comingSoon: false
                },
                {
                    title: "Cloud Computing Solutions",
                    description: "Implement scalable cloud solutions tailored to your organization's needs. Whether migrating to the cloud or optimizing existing infrastructure, we ensure reliability and cost-efficiency.",
                    icon: "/icons/vrIcon.svg",
                    actionLink: "https://example.com/cloud-computing-services",
                    actionText: "Get Started",
                    isHidden: false,
                    visibleHome: true,
                    comingSoon: false
                },
                {
                    title: "Virtual Reality Development",
                    description: "Create immersive VR experiences that captivate your audience. Our team specializes in VR application development, from concept to deployment on leading platforms.",
                    icon: "/icons/vrIcon.svg",
                    actionLink: "https://example.com/vr-development-services",
                    actionText: "See Our Work",
                    isHidden: false,
                    visibleHome: true,
                    comingSoon: false
                },
                {
                    title: "WordPress Development",
                    description: "We create custom WordPress solutions that fit your business needs perfectly. From adjusting your theme to building special plugins, we work to enhance your online presence and make your site more engaging. Our goal is to help you attract and keep more visitors.",
                    icon: "/icons/wordpress-svgrepo-com.svg",
                    actionLink: "https://example.com/digital-marketing-services",
                    actionText: "Learn More",
                    isHidden: false,
                    visibleHome: true,
                    comingSoon: false
                },
                {
                    title: "Headles Wordpress Migration",
                    description: "We offer seamless migration from WordPress to a headless setup, ensuring no content is lost. We’ll transfer your existing content to a highly customizable front end built from scratch. This modern architecture boosts performance and scalability, giving you a faster, more dynamic website. Let us handle the technical details while you focus on growing your business.",
                    icon: "/icons/product-request-line-item-svgrepo-com.svg",
                    actionLink: "https://example.com/cloud-computing-services",
                    actionText: "Get Started",
                    isHidden: false,
                    visibleHome: true,
                    comingSoon: false
                },
                {
                    title: "Mobile App Development",
                    description: "We create cross-platform mobile apps for iOS and Android, delivering a consistent user experience while saving time and costs. We offer WordPress integration for easy content management or can use another CMS of your choice. Let us build a versatile app tailored to your needs.",
                    icon: "/icons/mobile-svgrepo-com.svg",
                    actionLink: "https://example.com/vr-development-services",
                    actionText: "See Our Work",
                    isHidden: false,
                    visibleHome: true,
                    comingSoon: false
                },
                {
                    title: "Custom Bot Development",
                    description: "We build custom bots for Discord, Telegram, and WhatsApp, powered by ChatGPT. These bots enhance community engagement and automate tasks, tailored to your specific needs. Integrate seamlessly with your platform and let us create a smart, responsive bot to streamline your interactions.",
                    icon: "/icons/bot.svg",
                    actionLink: "https://example.com/bot-development-services",
                    actionText: "Explore Our Bots",
                    isHidden: false,
                    visibleHome: true,
                    comingSoon: false
                },
                {
                    title: "Local AI Document Retrieval",
                    description: "We offer local AI-powered document retrieval solutions that ensure privacy and data security. Our system allows you to efficiently search and access your documents while keeping all data stored securely on your premises. Enhance your document management with a solution that prioritizes your privacy.",
                    icon: "/icons/ai-file-type-svgrepo-com.svg",
                    actionLink: "https://example.com/local-ai-document-retrieval",
                    actionText: "Learn More",
                    isHidden: false,
                    visibleHome: true,
                    comingSoon: false
                },
                {
                    title: "AR Product Visualization",
                    description: "We offer advanced AR product visualization services, including solutions for restaurants and jewelry. Enhance customer experiences by showcasing products in 3D, allowing users to interact with and visualize items before making decisions. Our AR technology brings your offerings to life, whether for dining, jewelry, or other industries.",
                    icon: "/icons/ar-svgrepo-com.svg",
                    actionLink: "https://example.com/ar-product-visualization",
                    actionText: "Discover AR Solutions",
                    isHidden: false,
                    visibleHome: true,
                    comingSoon: false
                },
                {
                    title: "Software Development Consultation",
                    description: "We offer expert consultation services for all your software development needs. Whether you’re starting a new project or enhancing an existing one, our team provides tailored advice on strategy, technology, and implementation. Let us guide you through the development process and help you achieve your software goals with confidence.",
                    icon: "/icons/woman-to-consult-svgrepo-com.svg",
                    actionLink: "https://example.com/software-development-consultation",
                    actionText: "Schedule a Consultation",
                    isHidden: false,
                    visibleHome: true,
                    comingSoon: false
                },
                {
                    title: "Yearly Maintenance Contracts",
                    description: "Our yearly maintenance contracts provide ongoing support and updates to keep your software running smoothly. Choose from our plans for essential or comprehensive support tailored to your needs.",
                    icon: "/icons/fix-ios11-iphone-svgrepo-com.svg",
                    actionLink: "https://example.com/yearly-maintenance-contracts",
                    actionText: "Explore Our Plans",
                    isHidden: false,
                    visibleHome: true,
                    comingSoon: false
                },
                {
                    title: "Coaching & Teaching Services",
                    description: "We offer expert coaching and teaching services to guide you through web, mobile, AI, and XR projects. Join our community for ongoing support and learning opportunities. Whether you're looking to enhance your skills or drive your business forward, our personalized coaching helps you achieve your goals with confidence.",
                    icon: "/icons/teach-svgrepo-com.svg",
                    actionLink: "https://example.com/coaching-teaching-services",
                    actionText: "Learn More",
                    isHidden: false,
                    visibleHome: true,
                    comingSoon: false
                }
            ]
        },  
        solutions: {
            isHidden: true,
            mainTitle: "Our Solutions",
            mainTitleHighlightedWord: "Solutions",
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
                    visibleHome: true,
                    comingSoon: true
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
                    visibleHome: true,
                    comingSoon: true
                },
                {
                    imageUrl: "",
                    icon: "/icons/MobileWeb.svg",
                    title: "Web & Mobile Apps",
                    description: "We develop custom, user-friendly web and mobile applications. Our solutions are designed to meet your specific business needs, offering seamless functionality across devices and platforms",
                    actionLink: "https://cw.choroidstudios.com",
                    actionText: "More Info",
                    isHidden: false,
                    visibleHome: true,
                    comingSoon: false
                },
            ]
        },
        team: {
            isHidden: true,
            mainTitle: "Meet the Team",
            mainTitleHighlightedWord: "Team",
            members: [
                {
                    imageUrl: "/team/diaa.jpg",
                    title: "Diyaa Abou Alloul",
                    description: "Creative designer with a passion for user experience and visual storytelling.",
                    visibleHome: true
                },
                {
                    imageUrl: "/team/hadiDiab.png",
                    title: "Hadi Diab",
                    description: "Software engineer specializing in front-end development and UI/UX design.",
                    visibleHome: true
                },
                {
                    imageUrl: "/team/karloRajić.png",
                    title: "Karlo Rajić",
                    description: "Frontend developer/Game Level Designer, Karlo has the taste for the best designs",
                    visibleHome: true
                },
                {
                    imageUrl: "/team/mohammadOthman.png",
                    title: "Mohmmad Othman",
                    description: "Graphic Designer, experienced in creating visual concepts and storytelling.",
                    visibleHome: true
                },
                {
                    imageUrl: "/team/shahbaz.jpg",
                    title: "Mohammad Shahbaz",
                    description: "Backend, Mobile, and every thing low level. Currently focusing on mobile and reverse engineering",
                    visibleHome: true
                },
                {
                    imageUrl: "/team/mustafaZabet.png",
                    title: "Mustafa Zabet",
                    description: "Software engineer specializing in front-end development and UI/UX design.",
                    visibleHome: true
                },
                {
                    imageUrl: "",
                    title: "Nizar Sadek",
                    description: "Creative Game level artist/designer experienced in creating high quality optimized game props and enviroments.",
                    visibleHome: true
                },
                {
                    imageUrl: "/team/rabeeQablawi.png",
                    title: "Rabee Qiblawi",
                    description: "Software Engineer, devoted for problem solving, with epxerience in Game Development and XR.",
                    visibleHome: true,
                    isPremium: false
                }
            ]
        },
        clients: {
            isHidden: true,
            title: "Take a look at our clients",
            subtitle: "We did a great job with these companies. You can be next in such elite!",
            buttonText: "Try our path",
            buttonAction: "",
            clientList: [
                { name: "BBC", logo: "/logos/bbc.svg" },
                { name: "The New York Times", logo: "/logos/nyt.svg" },
                { name: "The Economist", logo: "/logos/economist.svg" },
                { name: "Aston Martin", logo: "/logos/aston-martin.svg" },
                { name: "Tesco", logo: "/logos/tesco.svg" },
                { name: "Arsenal", logo: "/logos/arsenal.svg" },
                { name: "London 2012", logo: "/logos/london-2012.svg" },
                { name: "Mercedes-Benz", logo: "/logos/mercedes.svg" },
                { name: "Google", logo: "/logos/google.svg" },
                { name: "Instagram", logo: "/logos/instagram.svg" }
            ]
        },
        clientProjects: {
            isHidden: true,
            mainTitle: "Other Projects",
            mainTitleHighlightedWord: "Projects",
            data: [
                {
                    imageUrl: "/bookifai.jpeg",
                    title: "Bookifai",
                    description: "Ever wanted to connect",
                    actionLink: "mailto:choroid.studios@gmail.com",
                    isHidden: false,
                    visibleHome: true
                },
                {
                    imageUrl: "/MirageXR.jpg",
                    title: "MirageXR",
                    description: "Prototype Arduino or ESP miragexr.com",
                    actionLink: "https://github.com/rabeeqiblawi/Choroid-Input-System",
                    isHidden: false,
                    visibleHome: false
                },
                {
                    imageUrl: "/unity_chatgpt.png",
                    title: "OpenAI Wrapper for Unity",
                    description: "Our Unity package allows you to easily",
                    actionLink: "https://github.com/rabeeqiblawi/Choroid-Input-System",
                    isHidden: false,
                    visibleHome: true
                },
                {
                    imageUrl: "/cfwm2.jpg",
                    title: "Come Fly With Me (Protoype)",
                    description: "Ever wanted to fly like a bird?",
                    actionLink: "https://www.youtube.com/watch?v=oted6xBF0z8",
                    isHidden: false,
                    visibleHome: false
                },
                {
                    imageUrl: "/notFound.png",
                    title: "test (not at Home page)",
                    description: "TEST",
                    actionLink: "",
                    isHidden: true,
                    visibleHome: false
                },
            ]
        },
        testimonial: {
            isHidden: true,
            leftQuoteIconURL: "/icons/left-quote.svg",
            rightQuoteIconURL: "/icons/right-quote.svg",
            data: [
                {
                    text: "Hasan's skills in web development are outstanding. We worked together on building websites for four international NGOs, and his creativity and professionalism were impressive. He's a reliable teammate and a valuable addition to any project.",
                    author: "1Abdallah Kpbrosli",
                    authorImageURL: "/team/defaultPerson.png",
                    title: "CDMP"
                },
                {
                    text: "Hasan is a WordPress magician, a wizard of his craft. Whenever I have a WordPress project, no matter how complicated, I know I can count on him to take on and deliver what is beyond my expectations. HIGHLY recommended.",
                    author: "2Amadeus Awad",
                    authorImageURL: "/team/defaultPerson.png",
                    title: "Business Coach - Founder of alt^ people"
                },
                {
                    text: "Hasan is an exceptional developer with expertise in both back-end and front-end development. His collaborative spirit and patience make him a pleasure to work with. He's more than just a coder; he's a great team player.",
                    author: "3Aghny Jreige",
                    authorImageURL: "/team/defaultPerson.png",
                    title: "Brand Strategist - Mute Designs"
                },
                {
                    text: "Hasan is an exceptional developer with expertise in both back-end and front-end development. His collaborative spirit and patience make him a pleasure to work with. He's more than just a coder; he's a great team player.",
                    author: "4Aghny Jreige",
                    authorImageURL: "/team/defaultPerson.png",
                    title: "Brand Strategist - Mute Designs"
                },
                {
                    text: "Hasan is an exceptional developer with expertise in both back-end and front-end development. His collaborative spirit and patience make him a pleasure to work with. He's more than just a coder; he's a great team player.",
                    author: "5Aghny Jreige",
                    authorImageURL: "/team/defaultPerson.png",
                    title: "Brand Strategist - Mute Designs"
                }
            ],
        }
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
        github: "https://github.com/rabeeqiblawi",
        linkedin: "https://www.linkedin.com/in/rabee-qiblawi-21503a120/",
        twitter: "",
        facebook: "",
        instagram: "",
        tiktok: "",
        youtube: "",
    },
    contact: {
        imageUrl: "/contact-us.png",
        mainTitle: "Contact Us",
        mainTitleHighlightedWord: "Us",
        title: "Get in Touch",
        description: "I am here to help and answer any question you might have!",
        buttonText: "Message",
        isHidden: true,

        contactInfo: {
            phone: "+961  71971287",
            mail: "rabeeqiblawi@gmail.com",
            location: "Saida, LB",
            whatsappMessage: ""
        }
    },
    featureFlags: {

    },
    apiEndpoints: {
        githubBlogs: "/api/github-blogs",
    },
};
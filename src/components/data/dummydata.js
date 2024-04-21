import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"

export const navlink = [{
        url: "/",
        text: "Home",
    },
    {
        url: "/about",
        text: "Solution",
    },
    {
        url: "/blog",
        text: "Product",
    },
    {
        url: "/services",
        text: "Advantage",
    },
    {
        url: "/portfolio",
        text: "Market",
    },
    {
        url: "/testimonials",
        text: "About us",
    },

    {
        url: "/contact",
        text: "Contact",
    },
]
export const home = [{
    name: "Contactless fingerprint recognition",
    desc: "Top-tier algorithm accuracy in NIST PFT III evaluation",
}, ]

export const about = [{
    desc: "Highly accurate neural network algorithms",
    desc1: "Work with scans and photo images",
    desc2: "All types of fingerprints are supported",
    cover: "./images/hand.png"
}, ]
export const services = [{
        id: 1,
        title: "Superior accuracy",
        desc: "Neural network based technology provides extremely high recognition accuracy  for verification and identification",
    },
    {
        id: 2,
        title: "All types of fingerprints",
        desc: "Processing of photo images and standard scans (flats, rolls, latents) with one technology creating templates compatible between each other"
    },
    {
        id: 3,

        title: "Fixed size of biometric template",
        desc: "ingerprint biometric templates always have standard size - 512 byte regardless of fingerprint or image type",
    },
    {
        id: 4,

        title: "Identification with the highest confidence",
        desc: "By capturing of 4 fingers at once with our mobile SDK you can guarantee almost 100% reliable and user-friendly identification",
    },
    {
        id: 5,

        title: "DPI tolerant technology",
        desc: "Algorithm works with images or scans from 250 dpi and higher and doesn't require exact DPI values (for example, exactly 500 dpi)",
    },
]

export const portfolio = [{
        id: 1,
        cover: "../images/port/port1.png",
        title: "National ID",
        name: "National biometric system plays a key role in fraud prevention, providing of digital governmental services and national security. Fingerprint recognition is a must - have  biometric modality in such systems: it 's reliable, unique for any individuals including identical twins and changes less over time than face. Our algorithms are designed to work with millions of records in enrollment databases with high accuracy and low false accept rate even for a search with one finger. High matching speed - up to 1 billion matches per 1 s - is a crucial advantage for big scale projects. It significantly saves customers budget numbers of required matching servers is up to 100 times less than the same numbers for traditional recognition algorithms. ",
    },
    {
        id: 2,
        cover: "../images/port/port2.png",
        title: "Bank",
        name: "Banks go digital today. Now good service means that a lot of features can be provided to a client remotely, without visiting bank office. Biometric identification and verification help to prove customer's identity for online operations. Its safer and more convenient than a password, biometrics can not be forgotten or passed to someone else and it doesn't require memorizing Our technologies unlock fingerprint recognition for user's online verification and customer onboarding, because it requires only a regular phone. Mobile SDK can verify a person using 4 fingers, which are user-friendly to capture. It ensures ultimate verification and identification accuracy, which is much higher than recognition with one face.",

    },
    {
        id: 3,
        cover: "../images/port/port3.png",
        title: "Governmental services",
        name: "Biometric identification and verification expedite and secure providing of digital governmental services. Its especially convenient for elder citizens, who often have difficulties with online authorization and memorizing lot of different passwords, which stops them from using digital services Fingerprint recognition provides high accuracy of identification, especially when several fingers are used. It contains different biometric data and reliability of recognition is increasing not several times, but by orders of magnitude. Our technologies allow to acquire fingerprints by a scanner and a phone with compatible templates, as well as to use fingerprints acquired by a phone and converted to standard format (WSQ) in legacy systems.",

    },
    {
        id: 4,
        cover: "../images/port/port4.png",

        title: "Police and migration",
        name: "Our algorithms demonstrate superior accuracy of neural networks working with national scale databases of tens or hundreds of millions individuals. Specially trained algorithms of detection and segmentation allow to automatically process fingerprint cards, segmenting flat and roll fingerprints of different quality, checking right/left hands and finger positions. Mobile finger acquisition opens new possibilities for law enforcement, making fingerprint recognition possible without a scanner, but with an ordinary mobile phone. Our technologies can not just capture, but also run fingerprints against a database stored locally on a phone. It makes a check against relatively small databases (less than 10,000-100,000 fingers) fast and fully mobile - it requires only phone application instead of expensive mobile biometric terminals.",

    },


]
export const testimonials = [{
        id: 1,
        post: "About Us",
        text: "Neurodactyl is a technology start-up founded in 2023 by specialists in machine vision and deep learning technologies. We have vast experience on biometric markets and have been working with different biometric technologies starting from 2014, when neural network based facial recognition technologies have completely changed the market. Today we are focused on creating cutting edge algorithms in fingerprint recognition, striving to bring a new life and power of new mobile technologies to the market of old-school biometrics. We aim to make identification powered by biometrics convenient, easy and reliable and help to protect personal and financial data in new digital reality. Besides fingerprint recognition our R&D team also doing research in other biometrics like face, voice and iris.",



    },

]
export const blog = [{
        id: 1,
        title: "Server SDK for fingerprint recognition",
        date: "SDK",

        desc: "Detection, template extraction and matching (1:1, 1:N, M:N). Scans and photo images are supported.",
        cover: "./images/blog/b1.png",
    },
    {
        id: 2,
        title: "Server platform for fingerprint recognition",
        date: "REST API",

        desc: "Easy integration of biometric features,microservices architectur for system scaling and load balancing",
        cover: "./images/blog/b2.png",
    },
    {
        id: 3,
        title: "Fingerprints capture for mobile devices",
        date: "Mobile SDK",

        desc: "Touchless fingerprint acquisition and recognition with mobile phones (Android, iOS, web)",
        cover: "./images/blog/b3.png",
    },
]

export const contact = [{
        icon: < AddLocationAltOutlined / > ,
        text1: "2651 Main Street, Suit 124",
        text2: "Seattle, WA, 98101",
    },
    {
        icon: < PhoneIphone / > ,
        text1: "0123456789",
        text2: "0345627891",
    },
    {
        icon: < EmailOutlined / > ,
        text1: "hello@thetheme.io",
        text2: "inf0@brex-theme.io",
    },
]
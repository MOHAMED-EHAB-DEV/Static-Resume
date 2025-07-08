import {formatDate} from "@/lib/utils";

const DummyData = {
    name: "Marwan Ahmed",
    title: "Senior Product Designer",
    email: "marwan@gmail.com",
    phone: "+33 6 33 33 33 33",
    location: "Vernouillet",
    knowledge: [
        "Product Design",
        "User Interface",
        "User Experience",
        "Interaction Design",
        "Wireframing",
        "Rapid Prototyping",
        "Design Research",
    ],
    tools: [
        "Figma",
        "Sketch",
        "Protopie",
        "Framer",
        "Invision",
        "Abstract",
        "Zeplin",
        "Google Analytics",
        "Amplitude",
    ],
    otherSkills: [
        "Html",
        "CSS",
        "JQuery",
    ],
    socialLinks: [
        "https://marwantech.com",
        "https://linkedin.com/in/marwan/",
        "https://dribbble.com/marwan",
    ],
    languages: [
        {
            name: "France",
            level: "Native",
        },
        {
            name: "English",
            level: "Professional",
        }
    ],
    experience: [
        {
            id: 0,
            title: "Senior UI/UX Product Designer",
            enterpriseName: "Senior UI/UX Product Designer",
            start: formatDate(new Date("2024-09-09")),
            end: "now",
            location: "Paris",
            desc: "Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.",
        },
        {
            id: 1,
            title: "UI/UX Product Designer",
            enterpriseName: "UI/UX Product Designer",
            start: formatDate(new Date("2020-09-09")),
            end: formatDate(new Date("2024/08/08")),
            location: "Paris",
            desc: "Lead the UI design with the accountability of the design system, collaborated with product and development teams on core projects to improve product interfaces and experiences.",
        },
        {
            id: 2,
            title: "UI Designer",
            enterpriseName: "UI Designer",
            start: formatDate(new Date("2015-09-09")),
            end: formatDate(new Date("2020-08-08")),
            location: "Paris",
            desc: "Designed mobile UI applications for Orange R&D departement, BNP Paribas, La Poste, Le Cned...",
        },
        {
            id: 3,
            title: "Graphic Designer",
            enterpriseName: "Graphic Designer",
            start: formatDate(new Date("2013-09-09")),
            end: formatDate(new Date("2015-08-08")),
            location: "Paris",
            desc: "Designed print and web applications for Pau Brasil, Renault, Le théatre du Mantois, La mairie de Mantes la Ville..."
        },
    ],
    education: [
        {
            title: "Bachelor European in Graphic Design",
            school: "Graphic Design",
            start: "2009",
            end: "2010",
            location: "Bagnolet",
        },
        {
            title: "BTS Communication Visuelle option Multimédia",
            school: "BTSC",
            start: "2007",
            end: "2009",
            location: "Bagnolet",
        },
    ],
};

export {
    DummyData,
};

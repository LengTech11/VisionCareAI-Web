import VisionCareAILogoPNG from '../assets/visioncareai-logo.png'
import VisionCareAILogoJPEG from '../assets/visioncareai-logo.jpeg'
import Cam from '../assets/cambodia-flag.png'
import Eng from '../assets/english-flag.png'
import FacebookIcon from '../assets/socials/facebook.png'
import TelegramIcon from '../assets/socials/telegram.png'
import LinkedInIcon from '../assets/socials/linkedin.png'
import GetMobileAppIcon from '../assets/getmobileapp.png'

export const titles = ["VisionCare AI", "We protect your eyes"]
export const footerLogo = VisionCareAILogoPNG
export const navbarLogo = VisionCareAILogoJPEG

export const EnglishFlag = Eng
export const CambodiaFlag = Cam

export const navbarData = [
    {
        label: "Home",
        link: "/",
    },
    {
        label: "About Us",
        link: "/about"
    },
    {
        label: "News",
        link: "/news"
    },
    {
        label: "Discover",
        link: "/discover"
    },
    {
        label: "Contact",
        link: "/contact"
    },
]

export const footerData = {
    explore: ["Home", "About Us", "Scan Decase", "Contact Us"],
    discover: ["Decase", "Doctor", "Eyes Test"], 
    social: [
        { 
            label: "Facebook",
            icon: FacebookIcon,
            link: "/facebook",
        },
        { 
            label: "Telegram",
            icon: TelegramIcon,
            link: "/Telegram",
        },
        { 
            label: "Linkedin",
            icon: LinkedInIcon,
            link: "/Linkedin",
        },
    ],
    address: [
        {
            icon: "location_on",
            label: "St210, Beoung Keng Korng, Phnom Penh"
        },
        {
            icon: "phone",
            label: "+855 85752214"
        },
        {
            icon: "email",
            label: "info@visioncareai.com"
        }
    ],
    getmobileappImg: GetMobileAppIcon,
    copyright: "@2024-2025 Visioncare AI. All Right Reserved"
}
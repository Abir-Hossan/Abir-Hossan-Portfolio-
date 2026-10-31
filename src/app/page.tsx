import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Appointment from "@/components/sections/Appointment";
import Contact from "@/components/sections/Contact";
export default function HomePage() { return <><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main"><Hero/><About/><Experience/><Skills/><Projects/><Appointment/><Contact/></main><Footer/></>; }

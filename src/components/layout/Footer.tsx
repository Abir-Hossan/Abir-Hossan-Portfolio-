import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
export default function Footer(){return <footer className="site-footer"><p>© {new Date().getFullYear()} Abir Hossan. All rights reserved.</p><a href="#home">Back to top <ArrowUpRight size={14}/></a><span className="footer-note">Designed with intent · Built with code</span></footer>}

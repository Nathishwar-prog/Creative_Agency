
"use client";
import { Home, User, Briefcase, FileText, Contact, ServerIcon, Layers, Contact2, Mail } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarComp() {
    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'Services', url: '/services', icon: Layers },
        { name: 'Works', url: '/works', icon: Briefcase },
        { name: 'About', url: '/about', icon: User },
        { name: 'Contact', url: '/contact', icon: Mail }
    ]

    return <NavBar items={navItems} />
}
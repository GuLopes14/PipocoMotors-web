"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface NavBarProps {
    active: "aboutus" | "buycar" | "listings" | "";
}

const links = [
    { label: "Comprar carros", href: "/buycar" },
    { label: "Anunciar carros", href: "/listings" },
    { label: "Sobre Nós", href: "/aboutus" },
];

export default function NavBar(props: NavBarProps) {
    const { active } = props;
    const classActive = "text-blue-500 font-bold";

    return (
        <nav className="bg-blue-900 text-white py-4">
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <div className="flex-none">
                    <Link href="/">
                        <h1 className="text-2xl md:text-1xl sm:text-1l font-bold cursor-pointer">PIPOCOMOTORS</h1>
                    </Link>
                </div>
 
                {/* Links de navegação para telas grandes */}
                <ul className="hidden sm:flex flex-row gap-8">
                    {links.map((link) => (
                        <li
                            key={link.label}
                            className={`${
                                active === link.href.replace("/", "") ? classActive : ""
                            }`}
                        >
                            <Link href={link.href} className="hover:text-gray-300">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Dropdown menu para telas pequenas */}
                <div className="sm:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Menu className="w-5 h-5 cursor-pointer" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-white text-blue-900">
                            {links.map((link) => (
                                <DropdownMenuItem key={link.label}>
                                    <Link
                                        href={link.href}
                                        className={`${
                                            active === link.href.replace("/", "") ? classActive : ""
                                        } hover:gray-300`}
                                    >
                                        {link.label}
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Avatar */}
                <div className="hidden sm:block flex-none">
                    <img
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full"
                        src="http://github.com/GuLopes14.png"
                        alt="avatar"
                    />
                </div>
            </div>
        </nav>
    );
}
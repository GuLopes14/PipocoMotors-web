import Link from "next/link";

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
    const classActive = "text-white-200 border-b-2 border-blue-500";

    return (
        <nav className="bg-blue-900 text-white py-[2.5rem] px-[5rem] flex justify-between items-center">
            <Link href="/">
                <h1 className="text-2xl font-bold cursor-pointer">PIPOCOMOTORS</h1>
            </Link>
            <ul className="flex gap-10 absolute left-1/2 transform -translate-x-1/2">
                {links.map((link) => (
                    <li key={link.label} className={active === link.href.replace("/", "") ? classActive : ""}>
                        <Link href={link.href}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex items-center">
                <img className="w-15 h-15 rounded-full" src="http://github.com/GuLopes14.png" alt="avatar" />
            </div>
        </nav>
    );
}
import Link from "next/link";

interface NavBarProps {
    active: "aboutus" | "buycar" | "listings"
}

const links = [
    { label: "Comprar carros", href: "/buycar" },
    { label: "Anunciar carros", href: "/listings" },
    { label: "Sobre Nós", href: "/aboutus" },
]

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const classActive = "border-b-4 border-emerald-600"

    return (
        <nav className="bg-blue-900 text-white py-10 px-35 flex justify-between items-center">
            <h1 className="text-2xl font-bold">PIPOCOMOTORS</h1>
            <ul className="flex gap-10 absolute left-1/2 transform -translate-x-1/2">
                {links.map(link =>
                    <li key={link.label} className={active === link.label ? classActive : ""}>
                        <Link href={link.href}>
                            {link.label}
                        </Link>
                    </li>
                )}
            </ul>
            <div className="flex items-center">
                <img className="w-15 h-15 rounded-full" src="http://github.com/GuLopes14.png" alt="avatar" />
            </div>
        </nav>
    )
}
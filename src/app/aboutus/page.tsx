import NavBar from "@/components/nav-bar";

export default function AboutUsPage() {
    return (
        <>
            <NavBar active="aboutus" />

            <main className="flex justify-center items-center">
                <div className="p-11">
                    <h2 className="text-lg font-bold" >Sobre nós</h2>
                </div>
            </main>
        </>
    )
}
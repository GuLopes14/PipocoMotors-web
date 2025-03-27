import NavBar from "@/components/nav-bar";

export default function BuyCarPage() {
    return (
        <>
            <NavBar active="buycar" />

            <main className="flex justify-center items-center">
                <div className="p-11">
                    <h2 className="text-lg font-bold" > Comprar carros </h2>
                </div>
            </main>
        </>
    )
}
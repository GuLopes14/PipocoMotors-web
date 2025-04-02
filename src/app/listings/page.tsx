
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PencilIcon, TrashIcon } from "lucide-react";
import ListingsFormPage from "./forms/page";

async function getListings() {
    const response = await fetch("http://localhost:8080/listings")
    return await response.json()
    
}

export default async function ListingsPage() {
    const data: Array<Listings> = await getListings()
    return (
        <>
            <NavBar active="listings" />

            <main className="container ml-[27rem] px-[1rem] py-[2.5rem] flex">
                <div className="w-1/4 bg-white shadow-md p-4 mr-60 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Anúncios</h2>

                    {(data.length == 0) ?
                        <Alert>
                            <AlertDescription>
                                Nenhuma categoria cadastrada
                            </AlertDescription>
                        </Alert>
                        : ""
                    }

                    {data.map(car => (
                        <div
                            key={car.id}
                            className="flex justify-between items-center border-b py-2 hover:bg-gray-100"
                        >
                            <div>
                                <span className="font-medium">{car.brand} {car.model}</span>
                                <span className="text-gray-500 ml-2">{car.yearModel} - {car.plate}</span>
                            </div>
                            <button className="text-blue-500 hover:text-blue-700 cursor-pointer">
                                <PencilIcon />
                            </button>
                            <button className="text-blue-500 hover:text-blue-700 cursor-pointer">
                                <TrashIcon />
                            </button>
                        </div>
                    ))}
                </div>
                < ListingsFormPage />
            </main>
            <Footer />
        </>
    )
}
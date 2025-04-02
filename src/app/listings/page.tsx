import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PencilIcon, TrashIcon } from "lucide-react";
import ListingsFormPage from "./forms/page";

async function getListings() {
    const response = await fetch("http://localhost:8080/listings");
    return await response.json();
}

export default async function ListingsPage() {
    const data: Array<Listings> = await getListings();

    return (
        <>
            <NavBar active="listings" />

            <main className="container mx-auto mb-[12.6%] px-4 py-8">
                <div className="flex flex-col lg:flex-row justify-center sm:gap-0 lg:gap-35 max-w-6xl mx-auto">
                    <div className="w-full lg:w-1/3 bg-white shadow-md p-4 rounded-lg mb-6 lg:mb-0">
                        <h2 className="text-xl font-semibold mb-4">Anúncios</h2>

                        {data.length === 0 ? (
                            <Alert>
                                <AlertDescription>
                                    Nenhuma categoria cadastrada
                                </AlertDescription>
                            </Alert>
                        ) : (
                            data.map((car) => (
                                <div
                                    key={car.id}
                                    className="flex justify-between items-center border-b py-2 hover:bg-gray-100"
                                >
                                    <div>
                                        <span className="font-medium">{car.brand} {car.model}</span>
                                        <span className="text-gray-500 ml-2">{car.yearModel} - {car.plate}</span>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button className="text-blue-500 hover:text-blue-700 cursor-pointer">
                                            <PencilIcon />
                                        </button>
                                        <button className="text-blue-500 hover:text-blue-700 cursor-pointer">
                                            <TrashIcon />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="w-full lg:w-1/2">
                        <ListingsFormPage />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
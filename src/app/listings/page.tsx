
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PencilIcon, TrashIcon } from "lucide-react";



async function getListings() {
    const response = await fetch("http://localhost:8080/listings")
    return await response.json()
}

export default async function ListingsPage() {
    const data: Array<Listings> = await getListings()
    return (
        <>
            <NavBar active="listings" />

            <main className="container ml-auto px-4 py-10 flex">
                <div className="w-1/4 bg-white shadow-md p-4 mr-60 rounded">
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
                                <span className="font-medium">{car.brand} {car.name}</span>
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
                <div className="bg-white p-6 rounded-lg shadow-md gap-">
                    <h2 className="text-xl font-semibold mb-4">Preencha com os dados do veículo</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <label className="block text-gray-700 mb-2">Placa*</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                readOnly
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="block text-gray-700 mb-2">Coloração*</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                readOnly
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="block text-gray-700 mb-2">Modelo*</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                readOnly
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="block text-gray-700 mb-2">Quilometragem*</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                readOnly
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="block text-gray-700 mb-2">Preço*</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                readOnly
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="block text-gray-700 mb-2">Preço FIPE*</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                readOnly
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-gray-700 mb-2">Descrição detalhada*</label>
                            <textarea
                                className="w-full border border-gray-300 rounded-md p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="flex justify-end space-x-4 mt-4">
                        <button
                            type="button"
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors"
                        >
                            Salvar
                        </button>
                    </div>
                </div>


            </main>

            <Footer />
        </>
    )
}
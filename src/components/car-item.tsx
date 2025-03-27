interface CarItemProps {
    car: Listings
}

export function CarItem({ car }: CarItemProps) {
    return (
        <div className="bg-white shadow-md rounded-md p-4">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold">{car.brand} {car.name}</h2>
                    <p className="text-gray-600">{car.yearModel} - {car.color}</p>
                </div>
                <button className="text-blue-500 hover:text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                </button>
            </div>
            <p className="text-2xl font-bold mt-2">R$ {car.value}</p>
        </div>
    )
}
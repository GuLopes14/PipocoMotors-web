import { redirect } from "next/navigation"

const API_URL = "http://localhost:8080/listings"

export async function getListings() {
    const response = await fetch(API_URL)
    return await response.json()
}

export async function createListing(initialState: any, formData: FormData) {
    const data = {
        plate: formData.get("plate"),
        color: formData.get("color"),
        brand: formData.get("brand"),
        model: formData.get("model"),
        quilometers: formData.get("quilometers"),
        yearModel: formData.get("yearModel"),
        price: formData.get("price"),
        fipePrice: formData.get("fipePrice"),
        description: formData.get("description")
    }

    console.log("Dados eviados:",data)

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    const response = await fetch(API_URL, options)

    // return early
    if (!response.ok) {
        const errors = await response.json()
        return {
            values: {
                plate: formData.get("plate"),
                color: formData.get("color"),
                brand: formData.get("brand"),
                model: formData.get("model"),
                quilometers: formData.get("quilometers"),
                yearModel: formData.get("yearModel"),
                price: formData.get("price"),
                fipePrice: formData.get("fipePrice"),
                description: formData.get("description")
            },
            errors: {
                plate: errors.find(e => e.field === "plate")?.message,
                color: errors.find(e => e.field === "color")?.message,
                brand: errors.find(e => e.field === "brand")?.message,
                model: errors.find(e => e.field === "model")?.message,
                quilometers: errors.find(e => e.field === "quilometers")?.message,
                yearModel: errors.find(e => e.field === "yearModel")?.message,
                price: errors.find(e => e.field === "price")?.message,
                fipePrice: errors.find(e => e.field === "fipePrice")?.message,
                description: errors.find(e => e.field === "description")?.message
            }
        }
    }

    redirect("/listings")
}
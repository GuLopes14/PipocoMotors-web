"use client";

import { createListing } from "@/actions/listings-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Check } from "lucide-react";
import { useActionState } from "react";
import { useState } from "react";

const initialState = {
    values: {
        brand: "",
        model: "",
        plate: "",
        yearModel: "",
        color: "",
        price: "",
        fipePrice: "",
        description: "",
        quilometers: ""
    },
    errors: {
        brand: "",
        model: "",
        plate: "",
        yearModel: "",
        color: "",
        price: "",
        fipePrice: "",
        description: "",
        quilometers: ""
    }
};

export default function ListingsFormPage() {
    const [state, formAction, pending] = useActionState(createListing, initialState);
    const [formValues, setFormValues] = useState(initialState.values);


    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Preencha com os dados do veículo</h2>

            <form action={formAction} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <label className="block text-gray-700 mb-2">Placa*</label>
                        <Input
                            name="plate"
                            placeholder="ABC1234"
                            aria-invalid={!!state?.errors.plate}
                            defaultValue={formValues.plate}
                        />
                        <span className="text-sm text-destructive h-5 block">{state?.errors.plate}</span>
                    </div>
                    <div className="col-span-1">
                        <label className="block text-gray-700 mb-2">Coloração*</label>
                        <Input
                            name="color"
                            placeholder="Preto"
                            aria-invalid={!!state?.errors.color}
                            defaultValue={formValues.color}
                        />
                        <span className="text-sm text-destructive h-5 block">{state?.errors.color}</span>
                    </div>
                    <div className="col-span-1">
                        <label className="block text-gray-700 mb-2">Marca*</label>
                        <Input
                            name="brand"
                            placeholder="Toyota"
                            aria-invalid={!!state?.errors.brand}
                            defaultValue={formValues.brand}
                        />
                        <span className="text-sm text-destructive h-5 block">{state?.errors.brand}</span>
                    </div>
                    <div className="col-span-1">
                        <label className="block text-gray-700 mb-2">Modelo*</label>
                        <Input
                            name="model"
                            placeholder="Corolla XEI"
                            aria-invalid={!!state?.errors.model}
                            defaultValue={formValues.model}
                        />
                        <span className="text-sm text-destructive h-5 block">{state?.errors.model}</span>
                    </div>
                    <div className="col-span-1">
                        <label className="block text-gray-700 mb-2">Quilometragem*</label>
                        <Input
                            name="quilometers"
                            placeholder="15000"
                            aria-invalid={!!state?.errors.quilometers}
                            defaultValue={formValues.quilometers}
                        />
                        <span className="text-sm text-destructive h-5 block">{state?.errors.quilometers}</span>
                    </div>
                    <div className="col-span-1">
                        <label className="block text-gray-700 mb-2">Ano do Modelo*</label>
                        <Input
                            name="yearModel"
                            placeholder="2023"
                            aria-invalid={!!state?.errors.yearModel}
                            defaultValue={formValues.yearModel}
                        />
                        <span className="text-sm text-destructive h-5 block">{state?.errors.yearModel}</span>
                    </div>
                    <div className="col-span-1">
                        <label className="block text-gray-700 mb-2">Preço*</label>
                        <Input
                            name="price"
                            placeholder="120000.00"
                            aria-invalid={!!state?.errors.price}
                            defaultValue={formValues.price}
                        />
                        <span className="text-sm text-destructive h-5 block">{state?.errors.price}</span>
                    </div>
                    <div className="col-span-1">
                        <label className="block text-gray-700 mb-2">Preço FIPE*</label>
                        <Input
                            name="fipePrice"
                            placeholder="115000.00"
                            aria-invalid={!!state?.errors.fipePrice}
                            defaultValue={formValues.fipePrice}
                        />
                        <span className="text-sm text-destructive h-5 block">{state?.errors.fipePrice}</span>
                    </div>
                    <div className="col-span-1 sm:col-span-2">
                        <label className="block text-gray-700 mb-2">Descrição detalhada*</label>
                        <Textarea
                            name="description"
                            placeholder="Detalhes do veículo"
                            className="w-full h-24"
                            aria-invalid={!!state?.errors.description}
                            defaultValue={formValues.description}
                        />
                        <span className="text-sm text-destructive h-5 block">{state?.errors.description}</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                    <Button type="button" variant="destructive" className="cursor-pointer">
                        <ArrowLeft className="mr-2" />
                        Cancelar
                    </Button>

                    <Button className="bg-blue-900 hover:bg-blue-800 cursor-pointer">
                        <Check className="mr-2" />
                        Salvar
                    </Button>
                </div>
            </form>
        </div>
    );
}
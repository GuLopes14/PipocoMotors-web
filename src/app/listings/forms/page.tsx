"use client";

import { createListing } from "@/actions/listings-actions";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

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

    return (
        <>
                <div className="bg-white shadow-md rounded-lg p-[1.5rem]">
                    <h2 className="text-xl font-semibold mb-[1rem]">Preencha com os dados do veículo</h2>

                    <form action={formAction} className="space-y-[1rem]">
                        <div className="grid grid-cols-2 gap-[1rem]">
                            <div className="col-span-1">
                                <label className="block text-gray-700 mb-[0.5rem]">Placa*</label>
                                <Input
                                    name="plate"
                                    placeholder="ABC1234"
                                    aria-invalid={!!state?.errors.plate}
                                    defaultValue={state?.values.plate}
                                />
                                <span className="text-sm text-destructive h-[1.25rem] block">{state?.errors.plate}</span>
                            </div>
                            <div className="col-span-1">
                                <label className="block text-gray-700 mb-[0.5rem]">Coloração*</label>
                                <Input
                                    name="color"
                                    placeholder="Preto"
                                    aria-invalid={!!state?.errors.color}
                                    defaultValue={state?.values.color}
                                />
                                <span className="text-sm text-destructive h-[1.25rem] block">{state?.errors.color}</span>
                            </div>
                            <div className="col-span-1">
                                <label className="block text-gray-700 mb-[0.5rem]">Marca*</label>
                                <Input
                                    name="brand"
                                    placeholder="Toyota"
                                    aria-invalid={!!state?.errors.brand}
                                    defaultValue={state?.values.brand}
                                />
                                <span className="text-sm text-destructive h-[1.25rem] block">{state?.errors.brand}</span>
                            </div>
                            <div className="col-span-1">
                                <label className="block text-gray-700 mb-[0.5rem]">Modelo*</label>
                                <Input
                                    name="model"
                                    placeholder="Corolla XEI"
                                    aria-invalid={!!state?.errors.model}
                                    defaultValue={state?.values.model}
                                />
                                <span className="text-sm text-destructive h-[1.25rem] block">{state?.errors.model}</span>
                            </div>
                            <div className="col-span-1">
                                <label className="block text-gray-700 mb-[0.5rem]">Quilometragem*</label>
                                <Input
                                    name="quilometers"
                                    placeholder="15000"
                                    aria-invalid={!!state?.errors.quilometers}
                                    defaultValue={state?.values.quilometers}
                                />
                                <span className="text-sm text-destructive h-[1.25rem] block">{state?.errors.quilometers}</span>
                            </div>
                            <div className="col-span-1">
                                <label className="block text-gray-700 mb-[0.5rem]">Ano do Modelo*</label>
                                <Input
                                    name="yearModel"
                                    placeholder="2023"
                                    aria-invalid={!!state?.errors.yearModel}
                                    defaultValue={state?.values.yearModel}
                                />
                                <span className="text-sm text-destructive h-[1.25rem] block">{state?.errors.yearModel}</span>
                            </div>
                            <div className="col-span-1">
                                <label className="block text-gray-700 mb-[0.5rem]">Preço*</label>
                                <Input
                                    name="price"
                                    placeholder="120000.00"
                                    aria-invalid={!!state?.errors.price}
                                    defaultValue={state?.values.price}
                                />
                                <span className="text-sm text-destructive h-[1.25rem] block">{state?.errors.price}</span>
                            </div>
                            <div className="col-span-1">
                                <label className="block text-gray-700 mb-[0.5rem]">Preço FIPE*</label>
                                <Input
                                    name="fipePrice"
                                    placeholder="115000.00"
                                    aria-invalid={!!state?.errors.fipePrice}
                                    defaultValue={state?.values.fipePrice}
                                />
                                <span className="text-sm text-destructive h-[1.25rem] block">{state?.errors.fipePrice}</span>
                            </div>
                            <div className="col-span-2">
                                <label className="block text-gray-700 mb-[0.5rem]">Descrição detalhada*</label>
                                <Textarea
                                    name="description"
                                    placeholder="Detalhes do veículo"
                                    className="w-full h-[6rem]"
                                    aria-invalid={!!state?.errors.description}
                                    defaultValue={state?.values.description}
                                />
                                <span className="text-sm text-destructive h-[1.25rem] block">{state?.errors.description}</span>
                            </div>
                        </div>

                        <div className="flex justify-end space-x-[1rem] mt-[1rem]">
                            <Button variant="destructive" asChild>
                                <Link href="/listings">
                                    <ArrowLeft className="mr-[0.5rem]" />
                                    Cancelar
                                </Link>
                            </Button>

                            <Button
                                className="bg-blue-900 hover:bg-blue-800"
                            >
                                <Check className="mr-[0.5rem]" />
                                Salvar
                            </Button>
                        </div>
                    </form>
                </div>
        </>
    );
}
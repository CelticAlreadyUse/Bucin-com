import Link from "next/link";
import Imagegirl from '@/assets/img/heroeraserwomanpng.png'
import { Button } from "@nextui-org/react";
import { ReactNode } from "react";
import Image from "next/image";

type Heroprosp = {
    onOpen: () => void
}
export default function Hero(props: Heroprosp) {
    return (
        <>
            <div className="z-10">
                <Image priority src='/heroeraserwomanpng.png' className="w-full -z-[0]  object-cover right-0 absolute bottom-0 h-fit" height={1000} width={2000} alt="korean ai girl" />
            </div>
            <div className="grid z-30 py-5 mt-4 justify-center text-center ">
                <h1 className="text-2xl z-10">Bucin.com</h1>
                <p className="tracking-tight font-normal mb-2 mt-2 z-10">Buat web untuk kekasih mu Cwiw 💌</p>
                <div className="mt-3">
                    <Button onPress={props.onOpen} variant="shadow" className="p-2 shadow-pink-500 text-white px-3 rounded-lg bg-pink-300 max-w-fit text-center" href={'/'}>Mulai</Button>
                </div>
            </div>

        </>
    )
}
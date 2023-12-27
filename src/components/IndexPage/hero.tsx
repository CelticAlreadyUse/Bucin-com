import Link from "next/link";
import Image from "next/image";
import Imagegirl from '@/assets/img/heroeraserwomanpng.png'
export default function Hero(){
    return(
        <div className="grid py-5 mt-4 justify-center text-center ">
            <h1 className="text-2xl">Bucin.com</h1>
            <p className="tracking-tight font-normal mb-2 mt-2">Buat web untuk kekasih mu Cwiw 💌</p>
            <div className="mt-3">
            <Link className="p-2 px-3 rounded-lg bg-pink-300 max-w-fit text-center" href={'/'}>Mulai</Link>
            </div>
            <Image className="w-full -z-10 object-cover right-0 absolute bottom-0 h-fit" width={2000} height={1000} alt="korean ai girl" src={Imagegirl}/>
        </div>
    )
}
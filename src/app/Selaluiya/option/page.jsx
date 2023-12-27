import { Button, Input } from "@nextui-org/react"
import { Upload } from "@phosphor-icons/react"
export default function selaluiya(){
    return(
        <div className="h-svh"> 
        <h1 className="text-2xl text-white font-semibold text-center mt-8">Isi Form berikut Ya😎👊</h1>
        <Button variant="solid" className="bg-slate-800 rounded-md text-white">Apload File Gambar <Upload size={32} /></Button>
        <div className="text-white">
        <Input className="max-w-fit text-slate-800"  variant="faded" label="Masukan Nama kekasih" placeholder="cth:Angel,Intan,Bayu."/>
        </div>
        <div className="text-white">
        <Input className="max-w-fit" variant="faded" label="Masukan Pertanyaan" placeholder="Kamu mau jadi Pacarku?"/>
        </div>
        <div className="text-white">
        <Input className="max-w-fit" variant="underlined" label="Option" placeholder="Cth:Iya"/>
        </div>
        </div>
    )
}
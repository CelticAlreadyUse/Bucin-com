import { BookOpenText, Ghost, Option, Quotes, XCircle } from "@phosphor-icons/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalProps, Button, } from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";


type Heroprosp = {
    isOpen: boolean;
    onOpenChange: () => void
}


export default function OptionFeature(props: Heroprosp) {
    const [scrollBehavior, setScrollBehavior] = useState<ModalProps['scrollBehavior']>("outside");
    return (
        <div>
            <Modal className="bg-pink-300 py-4" isOpen={props.isOpen} onOpenChange={props.onOpenChange} scrollBehavior={scrollBehavior}>
                <ModalContent>
                    {(onclose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 items-center text-slate-800">Pilih Web untuk Kekasi Mu</ModalHeader>
                            <ModalBody className="grid  text-white grid-cols-2">
                                <div className="p-3 bg-slate-800 rounded-md grid place-items-center place-content-center">
                                    <h1 className="text-xl">Selalu Iya</h1>
                                    <p className="text-slate-300 font-light">pada web ini hanya opsi yang kamu inginkan yang dapat dijalankan</p>
                                    <Ghost size={32} />
                                    <Link href={`/Selaluiya/option`} className="mt-2"><Button variant="faded">Buat Sekarang</Button></Link>
                                </div>
                                <div className="p-3 bg-slate-800 rounded-md grid place-items-center place-content-center">
                                    <h1 className="text-xl">Option</h1>
                                    <p className="text-slate-300 font-light">pada web ini opsi yang kamu berikan dapat dipilih Iya atau Tidak</p>
                                    <Option size={32} />
                                    <Button variant="faded" className="mt-2">Buat Sekarang</Button>
                                </div>
                                <div className="p-3 bg-slate-800 rounded-md grid place-items-center place-content-center">
                                    <h1 className="text-xl">Puisi</h1>
                                    <p className="text-slate-300 font-light">Kirimkan Puisi terbaik mu!</p>
                                    <Quotes size={32} />
                                    <Button variant="faded" className="mt-2">Buat Sekarang</Button>
                                </div>
                                <div className="p-3 bg-slate-800 rounded-md grid place-items-center place-content-center">
                                    <h1 className="text-xl">Surat Cinta</h1>
                                    <p className="text-slate-300 font-light">Kirimkan surat kenangan ataupun kode voucher ke orang terkasihmu</p>
                                    <BookOpenText size={32} />
                                    <Button variant="faded" className="mt-2">Buat Sekarang</Button>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button variant="solid" onPress={onclose}>Close</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}
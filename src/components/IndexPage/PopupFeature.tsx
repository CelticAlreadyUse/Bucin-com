export default function OptionFeature(){
    return(
        <div className="absolute h-svh top-0 grid items-center justify-center right-0 left-0  ">
            <div className="h-4/6 grid w-[50svh]  sm:w-[65svh] justify-center bg-slate-700 rounded-md" >
                <h1 className="text-xl text-center sm:text-2xl mt-2">Pilih Hadiah untuk Cewe mu</h1>
                <div>
                <section className="flex gap-4 py-5 h-max items-start flex-wrap  justify-center grid-cols-2 ">
                <div className="w-32 h-32 border text-center">
                    <h3>Pasti Iya</h3>
                    <p className="text-sm font-light">Pilihan apapun yang kamu berikan tidak bisa dijawab tidak</p>
                 </div>
                <div className="w-32 h-32 border text-center">
                    <h3>Pilihan</h3>
                    <p className="text-sm font-light">Pilihan dapat dijawab iya atau tidak</p>
                 </div>
                <div className="w-32 h-32 border text-center">
                    <h3>Puisi</h3>
                    <p className="text-sm font-light">Kirimkan puisi terbaik mu!</p>
                 </div>
                <div className="w-32 h-32 border text-center">
                 <h3>Surat Cinta</h3>
                 <p className="text-sm font-light">Berikan hadiah dari kamu dengan romantis</p>
                 </div>


                </section>
                </div>
            </div>
        </div>
    )
}
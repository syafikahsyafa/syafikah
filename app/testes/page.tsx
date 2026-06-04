export default function testes (){
    return(

<div className="h-screen flex flex-col justify-center">

        <div className="bg-green-200 h-24 w-60 ">

            <div className="flex gap-4 p-4 flex items-center">
                <img src="gojek.png" className="w-12 h-12 rounded-full font-bold"/>
                <p className="text-black font-serif">Gojek Indonesia</p>
            </div>
        </div>

        <div className="bg-green-300 h-screen w-60">

            <div className="flex flex-col gap-4 p-5">
                <p className="text-black font-serif">Menu</p>

                <div className="flex items-center gap-2">
                <img src="burger.svg" className="w-6 h-6"/>
                <button className="font-bold text-black">Food and Drink</button>
                </div>

                <div className="flex items-center gap-2">
                <img src="car.svg" className="w-6 h-6"/>
                <button className="font-bold text-black">Mobil</button>
                </div>

                <div className="flex items-center gap-2">
                <img src="motorbike.svg" className="w-6 h-6"/>
                <button className="font-bold text-black">Sepeda motor</button>
                </div>

            </div>

            <div className="flex flex-col gap-4 p-5">
                <p className="text-black font-serif">Transaksi</p> 

                <div className="flex items-center gap-2">
                <img src="cash.svg" className="w-6 h-6"/>
                <button className="font-bold text-black">Gopay</button>
                </div>

                <div className="flex items-center gap-2">
                <img src="transfer.svg" className="w-6 h-6"/>
                <button className="font-bold text-black">Transfer</button>
                </div>

                <div className="flex items-center gap-2">
                <img src="history.svg" className="w-6 h-6"/>
                <h1 className="font-bold text-black">Riwayat Pembelian</h1>
                </div>
            </div>

            <div className="flex flex-col gap-4 p-5">
                <p className="text-black font-serif">Pengaturan</p>    
                
                <div className="flex items-center gap-2">
                <img src="settings.svg" className="w-6 h-6"/>
                <h1 className="font-bold text-black">Setting</h1>
                </div>

                <div className="flex items-center gap-2">
                <img src="user-circle.svg" className="w-6 h-6"/>
                <h1 className="font-bold text-black">Akun</h1>
                </div>

            </div>

        </div>
</div>

    );
}
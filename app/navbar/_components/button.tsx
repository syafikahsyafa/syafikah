export default function Button({icon, nama}: {icon: string, nama: string}) {
    return (

     <button className="flex gap-2 p-2 flex items-center">
                <img src={icon} className="w-6 h-6"/>
                <p className="text-black font-bold text-serif">{nama}</p>
            </button>
    )
}
export default function navbar (){
    return (

    <div className="h-screen flex flex-col justify-center">

        <div className="bg-white h-full w-60">

            <div className="flex gap-2 p-2 flex items-center">
                <img src="layout-dashboard.svg"/>
                <button className="text-black font-bold text-serif">Dashboard</button>
            </div>

            <div className="flex gap-2 p-2 flex items-center">
                <img src="message-circle.svg"/>
                <button className="text-black font-bold text-serif">Message</button>
            </div>

            <div className="flex gap-2 p-2 flex items-center">
                <img src="checks.svg"/>
                <button className="text-black font-bold text-serif">Taks</button>
            </div>

            <div className="flex gap-2 p-2 flex items-center">
                <img src="notes.svg"/>
                <button className="text-black font-bold text-serif">Notes</button>
            </div>

            <div className="flex gap-2 p-2 flex items-center">
                <img src="mail.svg"/>
                <button className="text-black font-bold text-serif">Mail</button>
            </div>

            <div className="flex gap-2 p-2 flex items-center">
                <img src="stack-2.svg"/>
                <button className="text-black font-bold text-serif">Report</button>
            </div>

            <div className="flex gap-2 p-2 flex items-center">
                <img src="git-fork.svg"/>
                <button className="text-black font-bold text-serif">Automations</button>
            </div>

            <div className="flex gap-2 p-2 flex items-center">
                <img src="git-fork.svg"/>
                <button className="text-black font-bold text-serif">Workflows</button>
            </div>

        </div>

        <div className="bg-white h-full w-60">

            <div className="flex gap-2 p-2 flex items-center">
                <img src="caret-down.svg"/>
                <button className="text-black font-bold text-serif">Favorite</button>
            </div>

            <div className="flex gap-2 p-2 flex items-center">
                <img src="square-key.svg"/>
                <button className="text-black font-bold text-serif">Key Accounts</button>
            </div>

            <div className="flex gap-2 p-2 flex items-center">
                <img src="file-analytics.svg"/>
                <button className="text-black font-bold text-serif">Strategic Initiativer</button>
            </div>

            <div className="flex gap-2 p-2 flex items-center">
                <img src="chart-line.svg"/>
                <button className="text-black font-bold text-serif">Focus Areas</button>
            </div>

            <div className="flex gap-2 p-2 flex items-center">
                <img src="flame.svg"/>
                <button className="text-black font-bold text-serif">Strraed Items</button>
            </div>

        </div>

    </div>


    );
}
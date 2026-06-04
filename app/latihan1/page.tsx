import Button from "./_components/button";

export default function UtsPage() {
    return (
        <div className=" h-screen flex flex-col items-center justify-center">
            <div className="bg-blue-950 h-screen w-72 flex flex-col">

                <div>
                    <p className="text-2xl font-bold text-white flex items-center justify-center p-12 ">CodingLab</p>
                    <div className="flex flex-col gap-5 p-1 mx-10">
                        <p className="text-white font-bold -mx-5"> Main Menu </p>
                        <Button icon="/layout-dashboard.svg" description="Dashboard" />
                        <Button icon="/list.png" description="Overview" />
                        <Button icon="/analytic.svg" description="Analytic" />
                    </div>


                    <div className="flex flex-col gap-5 p-1 mx-10">
                        <p className="text-white mt-7 font-bold -mx-5"> General </p>
                        <button className="flex items-center gap-4 text-sm w-full px-2 py-3 rounded-lg bg-white text-gray-900 font-bold">
                            <img src="/folder.svg" className="w-5 h-5" alt="Projects" />
                            <p>Projects</p>
                        </button>
                        <Button icon="/user.svg" description="Groups" />
                        <Button icon="/flag.svg" description="Reports" />
                    </div>


                    <div className="flex flex-col gap-5 p-1 mx-10">
                        <p className="text-white mt-7 font-bold -mx-5"> Account </p>
                        <Button icon="/circle-user.svg" description="Profile" />
                        <Button icon="/settings.svg" description="Settings" />
                    </div>
                </div>


            </div>
        </div>
    );
}
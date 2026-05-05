export default function task2Page() {
    return (
<div className="bg-white h-screen p-10 flex flex-wrap justify-center items-start gap-6">

    <div className="bg-blue-200 h-80 w-100 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
        <div className="flex gap-4">
            <img src="palette.svg"/>
            <p>Design</p>
        </div>
        <div>
        <h1 className="text-3xl font-bold">ADOBE PHOTOSHOP</h1>
        <div className="flex justify-between items-end">
        <p>in 3 days</p>
        <div className="flex mt-3">
            <img src="avatar1.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-2"/>
            <img src="avatar2.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-2"/>
            <img src="avatar3.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-2"/>
        <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white bg-blue-200 text-xs font-bold -ml-2">+9
        </div>
       </div>
      </div>
     </div>
    </div>

    <div className="bg-green-200 h-80 w-100 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
        <div className="flex justify-between items-center">
        <div className="flex gap-4">
            <img src="palette.svg"/>
            <p>AI</p>
            </div>
            <img src="star.svg" className="w-3 h-3"/>
        </div>
        <div>
        <h1 className="text-3xl font-bold">DALL E 2, Midjourney, Stable Diffusion</h1>
        <div className="flex justify-between items-end">
        <p>in 5 days</p>
        <div className="flex mt-3">
            <img src="avatar1.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-2"/>
            <img src="avatar2.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-2"/>
            <img src="avatar3.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-2"/>
        <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white bg-green-200 text-xs font-bold -ml-2">+3
         </div>
        </div>
       </div>
      </div>
     </div>


    <div className="bg-white h-screen p-10 flex flex-wrap justify-center items-start gap-12">

    <div className="bg-purple-200 h-60 w-60 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
        <div className="flex gap-4">
            <img src="palette.svg"/>
            <p>Desain</p>
        </div>
        <div>
        <h1 className="text-3xl font-bold">FIGMA</h1>
        <div className="flex justify-between items-end">
        <p>8 hours ago</p>
       </div>
      </div>
     </div>

    <div className="bg-orange-200 h-60 w-60 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
        <div className="flex gap-4">
            <img src="code.svg"/>
            <p>Codding</p>
        </div>
        <div>
        <h1 className="text-3xl font-bold">Phyton</h1>
        <div className="flex justify-between items-end">
        <p>2 days ago</p>
       </div>
      </div>
     </div>

    <div className="bg-red-200 h-60 w-60 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
        <div className="flex gap-4">
            <img src="palette.svg"/>
            <p>Desain</p>
        </div>
        <div>
        <h1 className="text-3xl font-bold">Sketch</h1>
        <div className="flex justify-between items-end">
        <p>4 days ago</p>
       </div>
      </div>
     </div>

    </div>
</div>
    );  
}
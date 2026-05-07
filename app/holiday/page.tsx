export default function holiday(){
    return (
<div className="bg-gray-100 h-screen p-8 flex flex-item-center justify-center text-black-950">
    <div className="bg-white h-150 w-90 felx flex-col justify-center p-8 rounded-4xl">
        <div>
            <img src="usa.jpg" className="rounded-4xl w-100 h-70"/>
            </div>
        <div>
            <h1 className="text-3xl font-bold">San Francisco</h1>

            <div className="flex justify-start">
                <p>Premium economy</p>
            </div>

        </div>
        <div className="flex">
                <img src="tag.svg"/>
                <p>from $240</p>
        </div>
        <div className="flex flex justify-between">
                <img src="plane-tilt.svg"/>
                <p>SFO</p>
        </div>
        
    </div>
</div>
    );
}
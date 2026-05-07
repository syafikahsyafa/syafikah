export default function latihanpage (){ 
    return (
         <div className="bg-gray-300 h-screen flex items-center justify-center text-black">

      {/* CARD */}
      <div className="bg-white w-96 h-96 rounded-[35px] p-6">

        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Client details</h1>
          <p className="text-2xl cursor-pointer">×</p>
        </div>

        {/* LINE */}
        <div className="border-b border-gray-500 mt-3"></div>

        {/* PROFILE */}
        <div className="flex items-center gap-4 mt-8">

          {/* AVATAR */}
          <img
            src="avatar1.jpg"
            className="w-24 h-24 rounded-full object-cover"
          />

          {/* NAME + BADGE */}
          <div>
            <h1 className="text-3xl font-bold">
              syafikah syafa istiqomah
            </h1>

            <div className="bg-red-500 text-white px-8 py-1 rounded-full text-xl font-bold w-fit mt-2">
              Wanted
            </div>
          </div>

        </div>

        {/* PROJECT BOX */}
        <div className="bg-purple-100 rounded-3xl p-5 mt-6">

          <h1 className="text-3xl font-bold mb-6">
            Projects
          </h1>

          <div className="flex justify-around text-center">

            {/* LEFT */}
            <div>
              <p className="text-2xl">Ongoing</p>
              <p className="text-2xl">2 (Rp 2.5)</p>
            </div>

            {/* RIGHT */}
            <div>
              <p className="text-2xl">Ongoing</p>
              <p className="text-2xl">2 (Rp 2.5)</p>
            </div>

          </div>
        </div>

        {/* INFO */}
        <div className="mt-10 space-y-8">

          {/* LOCATION */}
          <div className="flex justify-between">
            <p className="font-bold text-2xl">
              Location
            </p>

            <p className="text-2xl">
              United States, New York
            </p>
          </div>

          {/* WITH US */}
          <div className="flex justify-between">
            <p className="font-bold text-2xl">
              With Us
            </p>

            <p className="text-2xl">
              6 Jan 2024
            </p>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-6 mt-12">

          {/* ROUND BUTTON */}
          <div className="w-20 h-20 rounded-full border border-black flex items-center justify-center text-4xl">
            ⋮
          </div>

          {/* MESSAGE BUTTON */}
          <button className="bg-indigo-700 text-white flex-1 py-5 rounded-full text-3xl font-bold">
            Message
          </button>

        </div>

      </div>

    </div>
  );
}    









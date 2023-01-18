export default function Marcadores({backgroundColor, color}) {
  return (
    <>
  <body>
    <div className="flex justify-around">
    <div class="py-2.5 px-0 grid grid-cols-3 w-3/4" style={backgroundColor && {backgroundColor, color} }>
      <div class="w-52 h-14 bg-gradient-to-r  from-orange-500 to-red-500 shadow-md shadow-yellow-500 hover:w-44 hover:h-12 hover:from-orange-400 hover:to-red-400 hover:shadow-sm hover:shadow-yellow-400">
      </div>
      <div class="w-52 h-14 bg-gradient-to-r from-blue-400 to-cyan-300 shadow-md shadow-red-500 hover:w-44 hover:h-12">
      </div>
      <div class="w-52 h-14 bg-gradient-to-r from-green-500 to-green-300 shadow-md shadow-cyan-400 hover:w-44 hover:h-12">
      </div>
    </div>
    </div>
  </body>
  </>
  );
}
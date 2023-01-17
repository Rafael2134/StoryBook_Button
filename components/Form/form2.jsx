export default function Form({backgroundColor, color}) {
  return (
    <>
<form action="#" method="post">
  <div className='flex justify-center pt-11'>
  <div className="flex flex-col items-center justify-center w-2/4 bg-cyan-100 h-2/3" style={backgroundColor && {backgroundColor, color} }> 
  <h1 className="text-2xl text-center">Fill out this form if you have any questions or find a bug.</h1>
<br />
    <label className="block">
    <span className="text-gray-700 ">Name</span>
    <input type="text" className="block mt-1 mr-20 text-center w-lg" placeholder="Joaquim Alberto" />
  </label>
<br />
  <label className="block">
  <span className="text-gray-700">Email*</span>
  <input type="email" className="block w-64 mt-1 text-center" placeholder="Joaquim.Alberto@gmail.com" required/>
</label>
<br />
<label className="block">
  <span className="ml-24 text-gray-700">Select related options, with the reason for the contact*</span>
  <select className="block mt-1 w-lg ml-28">
    <option className="text-center">Select</option>
    <option className="text-center" required> Home Page Bug</option>
    <option className="text-center" required>Form Bug</option>
    <option required>Questions about the content on the website</option>
    <option className="text-center" required>Other</option>
  </select>
</label>
<br />
<label class="block">
  <span class="text-gray-700 ml-28">Describe the problem</span>
  <textarea class="mt-1 block w-96 h-24 ml-28" rows="3" placeholder="Describe the problem"></textarea>
</label>
<br/>
<input type="submit" value="submit" className="h-12 max-w-xs text-base text-white border-0 rounded-md cursor-pointer bg-gradient-to-r from-orange-500 to-red-500 shadow-amber-900 ml-28 hover:from-blue-400 hover:to-cyan-500 hover:rounded-lg w-28 outline-gray-500"/>
</div>
</div>
</form>

</>
  );
}
import Destinations from '../../src/data/monkeyDestinations';
import MonkeyCard from '../Card/MonkeyCard';
export default function Cards({backgroundColor, color}) {
  return (
    <div id="post" className="bg-cyan-200">
    <div id="destinations" className="max-w-md px-8 py-8 mx-auto sm:max-w-xl lg:max-w-6xl lg:px-12">
      <h2 className="text-xl font-semibold text-gray-900">Monkey destinations</h2>
      <p className="mt-2 text-gray-600">Only the good monkeys</p>
      <div className="grid gap-6 mt-6 lg:grid-cols-2 xl:grid-cols-3">
        {Destinations.map((destination) => (
          <MonkeyCard {...destination}/>
        ))}
      </div> 
    </div>
  </div>
  );
}
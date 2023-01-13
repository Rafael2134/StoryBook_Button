import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';

export default function MonkeyCard({ city, averagePrice, imageAlt, imageUrl, propertyCount }) {
  return (
    <div className="flex items-center max-w-sm overflow-hidden bg-white rounded-lg shadow-lg">
      <Image className={'w-32 h-36 flex-shrink-0' } src={imageUrl} alt={imageAlt} width={500}
      height={500}/>
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">{city}</h3>
        <p className="text-gray-600">{averagePrice}🍌 / night average</p>
        <div className="mt-4">
          <a href="#" className="text-sm font-semibold text-brand-dark hover:text-brand">
          <Link href="#" target="_self"><Button className="btn"> Explore {propertyCount} properties </Button></Link>
          </a>
        </div>
      </div>
    </div>
  );
}
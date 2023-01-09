import Link from 'next/link';
import PropTypes from 'prop-types';
import Button from '../Button';

const sizeClasses = {
  height: "h-32",
  width: "w-32",
};



export default function MonkeyCard({ destination }) {
  return (
    <div className="flex items-center overflow-hidden bg-white rounded-lg shadow-lg">
      <img className={`${sizeClasses.height} ${sizeClasses.width} flex-shrink-0`} src={destination.imageUrl} alt={destination.imageAlt} />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">{destination.city}</h3>

        <p className="text-gray-600">{destination.averagePrice}🍌 / night average</p>
        <div className="mt-4">
          <a href="#" className="text-sm font-semibold text-brand-dark hover:text-brand">
          <Link href="#" target="_self"><Button className="btn"> Explore {destination.propertyCount} properties </Button></Link>

          </a>
        </div>
      </div>
    </div>
  );
}
MonkeyCard.proptypes = {
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Button contents
   */
   children: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};
MonkeyCard.defaultProps = {
  backgroundColor: null,
  primary: false,
  onClick: undefined,
};


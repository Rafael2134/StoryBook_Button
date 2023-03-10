export default function Menu({backgroundColor, color}) {
  return (
    <div className="menu-div" style={backgroundColor && {backgroundColor, color} }>
      <nav className="menu-nav">
    <ul className="menu-ul">
      <li className="menu-li"><a href="#post">Post</a></li>
      <li className="menu-li"><a href="#destinations">Destinations</a></li>
      <li className="menu-li"><a href="#form">Form</a></li>
    </ul>
  </nav>
    </div>
  );
}
var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div className="top-bar">
          <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text">React Timer App</li>
                  <li>
                      <IndexLink to="/#" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
                  </li>
                  <li>
                      <Link to="/#" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Coundown</Link>
                  </li>

              </ul>
          </div>

          <div className="top-bar-right">
            <ul className='menu'>
              <li className='menu-text'>
                Example app by: <a href="https://github.com/komputeros" target="_blank">Komputeros Github</a>
              </li>
            </ul>
          </div>
      </div>
  );
};


module.exports = Nav;

import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import Switch from '@material-ui/core/Switch';

const NavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const toggleMode = e => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>User Data</h1>
        <Switch
          checked={state.checkedA}
          onClick={toggleMode}
          onChange={handleChange('checkedA')}
          value="checkedA"
          color="primary"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
    </nav>
  );
};

export default NavBar;

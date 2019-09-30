import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import Switch from '@material-ui/core/Switch';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: green,
  },
});

const NavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>User Data</h1>
        <ThemeProvider theme={theme}>
          <Switch
            checked={state.checkedA}
            onClick={toggleMode}
            onChange={handleChange('checkedA')}
            value="checkedA"
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </ThemeProvider>
    </nav>
  );
};

export default NavBar;

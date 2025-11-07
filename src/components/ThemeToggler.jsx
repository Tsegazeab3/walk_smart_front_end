import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
      {theme === 'light' ? <FaMoon className="text-gray-700" /> : <FaSun className="text-yellow-400" />}
    </button>
  );
};

export default ThemeToggler;

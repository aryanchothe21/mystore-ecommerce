import React, { useEffect, useState } from "react";
import axios from "axios";

const Navbar = ({ onSelectCategory }) => {
  const getInitialTheme = () => {
    return localStorage.getItem("theme") || "light-theme";
  };

  const [theme, setTheme] = useState(getInitialTheme());
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const categories = [
    "Laptop",
    "Headphone",
    "Mobile",
    "Electronics",
    "Toys",
    "Fashion",
  ];

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme =
      theme === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleChange = async (value) => {
    setInput(value);

    if (value.length >= 1) {
      setShowSearchResults(true);
      try {
        const response = await axios.get(
          `http://localhost:8080/api/products/search?name=${value}`
        );
        setSearchResults(response.data);
        setNoResults(response.data.length === 0);
      } catch (error) {
        console.error("Search error:", error);
      }
    } else {
      setShowSearchResults(false);
      setSearchResults([]);
      setNoResults(false);
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">

          {/* ✅ Only Text Brand (No Link) */}
          <span className="navbar-brand">
            MyStore
          </span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto">

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/add_product">
                  Add Product
                </a>
              </li>

              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Categories
                </span>

                <ul className="dropdown-menu">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        className="dropdown-item"
                        onClick={() => onSelectCategory(category)}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>

            </ul>

            {/* Theme Toggle */}
            <button className="theme-btn" onClick={toggleTheme}>
              {theme === "dark-theme" ? "🌙" : "☀️"}
            </button>

            {/* Search */}
            <input
              className="form-control ms-3"
              type="search"
              placeholder="Search"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />

            {showSearchResults && (
              <ul className="list-group position-absolute mt-5">
                {searchResults.length > 0 ? (
                  searchResults.map((result) => (
                    <li key={result.id} className="list-group-item">
                      <a href={`/product/${result.id}`}>
                        {result.name}
                      </a>
                    </li>
                  ))
                ) : (
                  noResults && (
                    <li className="list-group-item">
                      No Product Found
                    </li>
                  )
                )}
              </ul>
            )}

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import React from "react";

const CategoryFilter = ({ categories, onFilter }) => {
    return (
        <div className="category-filter">
           <select onChange={(e) => onFilter(e.target.value)}>
            <option value="All">All Categories</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                    {cat}
                </option>
              ))}
          </select>
        </div>
    );
};

export default CategoryFilter;
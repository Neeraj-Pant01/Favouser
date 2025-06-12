import React, { useState } from "react";
import { FiChevronDown, FiChevronUp, FiX } from "react-icons/fi";

const FilterSidebar = ({ category, setCategory, min, setMin, max, setMax }) => {
    const [openSections, setOpenSections] = useState({
        categories: true,
        price: true,
        ratings: true,
        brands: true,
        discounts: false
    });

    const [priceRange, setPriceRange] = useState([0, 2000]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedDiscounts, setSelectedDiscounts] = useState<string[]>([]);

    const toggleSection = (section: keyof typeof openSections) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const categories = ["Men", "Women", "LGBTQ+", "tshirt", "accessories"];
    const brands = ["Samsung", "Apple", "Nike", "Adidas", "Sony"];
    const ratings = [4, 3, 2, 1];
    const discounts = ["10% or more", "20% or more", "30% or more", "50% or more"];

    React.useEffect(() => {
        setPriceRange([min, max]);
    }, [min, max]);

    const handlePriceChange = (e: any, index: any) => {
        const newPriceRange = [...priceRange];
        newPriceRange[index] = parseInt(e.target.value);
        setPriceRange(newPriceRange);
        if (index === 0) setMin(newPriceRange[0]);
        if (index === 1) setMax(newPriceRange[1]);
    };

    const toggleSelection = (item: any, type: any) => {
        switch (type) {
            case 'category':
                // setSelectedCategories(prev =>
                //     prev.includes(item)
                //         ? prev.filter(cat => cat !== item)
                //         : [...prev, item]
                // );
                if (category !== item) {
                    setCategory(item)
                } else {
                    setCategory(null)
                }
                break;
            case 'brand':
                setSelectedBrands(prev =>
                    prev.includes(item)
                        ? prev.filter(brand => brand !== item)
                        : [...prev, item]
                );
                break;
            case 'rating':
                setSelectedRatings(prev =>
                    prev.includes(item)
                        ? prev.filter(rating => rating !== item)
                        : [...prev, item]
                );
                break;
            case 'discount':
                setSelectedDiscounts(prev =>
                    prev.includes(item)
                        ? prev.filter(discount => discount !== item)
                        : [...prev, item]
                );
                break;
            default:
                break;
        }
    };

    return (
        <div className="w-64 bg-white shadow-lg rounded-lg  overflow-y-scroll sticky top-4 h-fit">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-800">Filters</h2>
                {/* <button className="text-sm text-blue-600 hover:text-blue-800">Clear All</button> */}
            </div>

            {/* Selected Filters */}
            {category || selectedBrands.length > 0 || selectedRatings.length > 0 || selectedDiscounts.length > 0 ? (
                <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Selected Filters</h3>
                    <div className="flex flex-wrap gap-2">
                        {/* {selectedCategories.map((cat) => ( */}
                        <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs flex items-center">
                            {category}
                            <button onClick={() => toggleSelection(category, 'category')} className="ml-1">
                                <FiX size={12} />
                            </button>
                        </span>
                        {/* ))} */}
                        {selectedBrands.map((brand) => (
                            <span key={brand} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs flex items-center">
                                {brand}
                                <button onClick={() => toggleSelection(brand, 'brand')} className="ml-1">
                                    <FiX size={12} />
                                </button>
                            </span>
                        ))}
                        {selectedRatings.map((rating) => (
                            <span key={rating} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs flex items-center">
                                {rating}★ & Up
                                <button onClick={() => toggleSelection(rating, 'rating')} className="ml-1">
                                    <FiX size={12} />
                                </button>
                            </span>
                        ))}
                        {selectedDiscounts.map((discount) => (
                            <span key={discount} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs flex items-center">
                                {discount}
                                <button onClick={() => toggleSelection(discount, 'discount')} className="ml-1">
                                    <FiX size={12} />
                                </button>
                            </span>
                        ))}
                    </div>
                </div>
            ) : null}

            {/* Categories Filter */}
            <div className="border-b border-gray-200">
                <div
                    className="p-4 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection('categories')}
                >
                    <h3 className="font-medium text-gray-700">Categories</h3>
                    {openSections.categories ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                {openSections.categories && (
                    <div className="px-4 pb-4 space-y-2">
                        {categories.map((cat: any) => (
                            <div key={cat} className="flex items-center">
                                <input
                                    type="checkbox"
                                    id={`cat-${cat}`}
                                    checked={cat === category}
                                    onChange={() => toggleSelection(cat, 'category')}
                                    className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                                />
                                <label htmlFor={`cat-${cat}`} className="ml-2 text-sm text-gray-700">
                                    {cat}
                                </label>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Price Range Filter */}
            <div className="border-b border-gray-200">
                <div
                    className="p-4 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection('price')}
                >
                    <h3 className="font-medium text-gray-700">Price Range</h3>
                    {openSections.price ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                {openSections.price && (
                    <div className="px-4 pb-4">
                        <div className="flex justify-between mb-2">
                            <span className="text-xs text-gray-500">₹{priceRange[0].toLocaleString()}</span>
                            <span className="text-xs text-gray-500">₹{priceRange[1].toLocaleString()}</span>
                        </div>
                        <div className="flex space-x-4">
                            <input
                                type="range"
                                min="0"
                                max="2000"
                                value={priceRange[0]}
                                onChange={(e) => handlePriceChange(e, 0)}
                                className="w-full"
                            />
                            <input
                                type="range"
                                min="0"
                                max="2000"
                                value={priceRange[1]}
                                onChange={(e) => handlePriceChange(e, 1)}
                                className="w-full"
                            />
                        </div>
                        <div className="flex space-x-2 mt-4">
                            <input
                                type="number"
                                value={priceRange[0]}
                                onChange={(e) => handlePriceChange(e, 0)}
                                className="w-full p-2 border border-gray-300 rounded text-sm"
                                placeholder="Min"
                            />
                            <input
                                type="number"
                                value={priceRange[1]}
                                onChange={(e) => handlePriceChange(e, 1)}
                                className="w-full p-2 border border-gray-300 rounded text-sm"
                                placeholder="Max"
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Ratings Filter */}
            <div className="border-b border-gray-200">
                <div
                    className="p-4 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection('ratings')}
                >
                    <h3 className="font-medium text-gray-700">Customer Ratings</h3>
                    {openSections.ratings ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                {openSections.ratings && (
                    <div className="px-4 pb-4 space-y-2">
                        {ratings.map((rating) => (
                            <div key={rating} className="flex items-center">
                                <input
                                    type="checkbox"
                                    id={`rating-${rating}`}
                                    checked={selectedRatings.includes(rating)}
                                    onChange={() => toggleSelection(rating, 'rating')}
                                    className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                                />
                                <label htmlFor={`rating-${rating}`} className="ml-2 text-sm text-gray-700 flex items-center">
                                    {[...Array(rating)].map((_, i) => (
                                        <span key={i} className="text-yellow-400">★</span>
                                    ))}
                                    {rating < 5 && [...Array(5 - rating)].map((_, i) => (
                                        <span key={i} className="text-gray-300">★</span>
                                    ))}
                                    & Up
                                </label>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Brands Filter */}
            {/* <div className="border-b border-gray-200">
        <div 
          className="p-4 flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('brands')}
        >
          <h3 className="font-medium text-gray-700">Brands</h3>
          {openSections.brands ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSections.brands && (
          <div className="px-4 pb-4">
            <div className="relative mb-2">
              <input
                type="text"
                placeholder="Search brand"
                className="w-full p-2 pl-8 border border-gray-300 rounded text-sm"
              />
              <svg
                className="absolute left-2 top-2.5 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`brand-${brand}`}
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleSelection(brand, 'brand')}
                    className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor={`brand-${brand}`} className="ml-2 text-sm text-gray-700">
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div> */}

            {/* Discounts Filter */}
            <div className="border-b border-gray-200">
                <div
                    className="p-4 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection('discounts')}
                >
                    <h3 className="font-medium text-gray-700">Discounts</h3>
                    {openSections.discounts ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                {openSections.discounts && (
                    <div className="px-4 pb-4 space-y-2">
                        {discounts.map((discount) => (
                            <div key={discount} className="flex items-center">
                                <input
                                    type="checkbox"
                                    id={`discount-${discount}`}
                                    checked={selectedDiscounts.includes(discount)}
                                    onChange={() => toggleSelection(discount, 'discount')}
                                    className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                                />
                                <label htmlFor={`discount-${discount}`} className="ml-2 text-sm text-gray-700">
                                    {discount}
                                </label>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FilterSidebar;
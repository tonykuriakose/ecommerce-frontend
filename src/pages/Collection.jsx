import React, { useContext, useState, useMemo, useCallback } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { usePagination } from '../hooks/usePagination';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = useCallback((e) => {
    const value = e.target.value;
    setCategory(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  }, []);

  const toggleSubCategory = useCallback((e) => {
    const value = e.target.value;
    setSubCategory(prev => 
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  }, []);

  // Filter and sort products (same as before)
  const filteredAndSortedProducts = useMemo(() => {
    if (!products) return [];

    let filtered = products.slice();

    // Search filter
    if (showSearch && search) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category filter
    if (category.length > 0) {
      filtered = filtered.filter(item => category.includes(item.category));
    }

    // SubCategory filter
    if (subCategory.length > 0) {
      filtered = filtered.filter(item => subCategory.includes(item.subCategory));
    }

    // Apply sorting
    switch (sortType) {
      case 'low-high':
        return filtered.sort((a, b) => a.price - b.price);
      case 'high-low':
        return filtered.sort((a, b) => b.price - a.price);
      default:
        return filtered;
    }
  }, [products, search, showSearch, category, subCategory, sortType]);

  // Use the custom pagination hook
  const {
    currentItems: currentProducts,
    currentPage,
    totalPages,
    totalItems,
    startIndex,
    endIndex,
    hasNextPage,
    hasPreviousPage,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    resetPagination,
    getVisiblePages,
    itemsPerPage
  } = usePagination(filteredAndSortedProducts, 6);

  // Reset pagination when filters change
  React.useEffect(() => {
    resetPagination();
  }, [category, subCategory, search, showSearch, sortType, resetPagination]);

  // Pagination Component
  const Pagination = () => {
    if (totalPages <= 1) return null;

    return (
      <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4">
        {/* Page info */}
        <div className="text-sm text-gray-600">
          Showing {startIndex + 1}-{endIndex} of {totalItems} products
        </div>

        {/* Page navigation */}
        <div className="flex items-center gap-1">
          {/* Previous button */}
          <button
            onClick={goToPreviousPage}
            disabled={!hasPreviousPage}
            className={`px-3 py-1 rounded ${
              !hasPreviousPage 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            Previous
          </button>

          {/* Page numbers */}
          {getVisiblePages().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === 'number' && goToPage(page)}
              disabled={page === '...'}
              className={`px-3 py-1 rounded ${
                page === currentPage
                  ? 'bg-black text-white'
                  : page === '...'
                  ? 'cursor-default'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next button */}
          <button
            onClick={goToNextPage}
            disabled={!hasNextPage}
            className={`px-3 py-1 rounded ${
              !hasNextPage 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {['Men', 'Women', 'Kids'].map(cat => (
              <label key={cat} className='flex gap-2 cursor-pointer'>
                <input 
                  className='w-3' 
                  type="checkbox" 
                  value={cat} 
                  checked={category.includes(cat)}
                  onChange={toggleCategory}
                /> 
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {['Topwear', 'Bottomwear', 'Winterwear'].map(subCat => (
              <label key={subCat} className='flex gap-2 cursor-pointer'>
                <input 
                  className='w-3' 
                  type="checkbox" 
                  value={subCat} 
                  checked={subCategory.includes(subCat)}
                  onChange={toggleSubCategory}
                /> 
                {subCat}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          
          {/* Product Sort */}
          <select 
            onChange={(e) => setSortType(e.target.value)} 
            className='border-2 border-gray-300 text-sm px-2'
            value={sortType}
          >
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {currentProducts.map((item, index) => (
            <ProductItem 
              key={item._id || index}
              name={item.name} 
              id={item._id} 
              price={item.price} 
              image={item.image} 
            />
          ))}
        </div>

        {/* Show message when no products found */}
        {totalItems === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No products found matching your criteria.</p>
          </div>
        )}

        {/* Pagination Controls */}
        <Pagination />
      </div>
    </div>
  )
}

export default Collection
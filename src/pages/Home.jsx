import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSortType, setCurrentPage, setFilteredPizzas, selectCurrentPage, selectFilteredPizzas } from '../redux/slices/filterSlice';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Pagination from '../components/Pagination';
import pizzas from '../assets/img/pizzas.json';


const Home = ({ searchValue }) => {
  const dispatch = useDispatch();
  const categoryId = useSelector(state => state.filter.categoryId);
  const sortType = useSelector(state => state.filter.sortType);
  const currentPage = useSelector(selectCurrentPage);
  const filteredPizzas = useSelector(selectFilteredPizzas);

  useEffect(() => {
    const filtered = pizzas.filter(pizza => {
      if (categoryId === 0) return true;
      return pizza.category === categoryId;
    });

    const filteredBySearch = filtered.filter(pizza =>
      pizza.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    const sortedPizzas = [...filteredBySearch].sort((a, b) => {
      if (sortType === 'price') {
        return a.price - b.price;
      } else if (sortType === 'title') {
        return a.title.localeCompare(b.title);
      }
      return b.rating - a.rating;
    });

    dispatch(setFilteredPizzas(sortedPizzas));
  }, [categoryId, sortType, searchValue, dispatch]);

  const itemsPerPage = currentPage === 0 ? 4 : (currentPage === 1 ? 4 : 2);
  const currentPizzas = filteredPizzas.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handleCategoryChange = (categoryId) => {
    dispatch(setCategory(categoryId));
    dispatch(setCurrentPage(0));
  };

  const handleSortChange = (sortType) => {
    dispatch(setSortType(sortType));
    dispatch(setCurrentPage(0));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={handleCategoryChange} />
        <Sort value={sortType} onChangeSort={handleSortChange} />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {currentPizzas.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}  
      </div>
      <Pagination pageCount={Math.ceil(filteredPizzas.length / itemsPerPage)} currentPage={currentPage} setCurrentPage={(page) => dispatch(setCurrentPage(page))} />
    </div>
  );
};

export default Home;
import React, { useState, useEffect, useRef } from 'react';

const Sort = ({ value, onChangeSort }) => {
  const [open, setOpen] = useState(false);
  const sortRef = useRef();

  const list = [
    { name: 'by popularity', sortProperty: 'rating' },
    { name: 'prices', sortProperty: 'price' },
    { name: 'alphabet', sortProperty: 'title' },
  ];

  const sortName = list.find(item => item.sortProperty === value)?.name || 'by popularity';

  const onClickListItem = (sortProperty) => {
    onChangeSort(sortProperty);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label" onClick={() => setOpen(!open)}>
        <b>Sort by:</b>
        <span>{sortName}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((item, index) => (
              <li
                key={index}
                onClick={() => onClickListItem(item.sortProperty)}
                className={value === item.sortProperty ? 'active' : ''}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
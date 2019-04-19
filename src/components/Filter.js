import React from "react";

const Filter = () => {
  return (
    <div className="search-checkbox">
      <div className="box col-auto my-1">
        <select className="mr-sm-2">
          <option value="">Gender</option>
          <option value="both">both</option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        <select className="mr-sm-2">
          <option value="">Age Group</option>
          <option value="adult">adult</option>
          <option value="professional">family</option>
        </select>
        <select className="mr-sm-2">
          <option value="">Wage</option>
          <option value="high">by highest</option>
          <option value="low">by lowest</option>
        </select>
        <select className="mr-sm-2">
          <option value="">Industry</option>
          <option value="agriculture">Agriculture</option>
          <option value="manufacturing and mechanical">
            Manufacturing and Mechanical
          </option>
          <option value="domestic and personal service">
            Domestic and Personal Service
          </option>
          <option value="professional">Professional</option>
          <option value="retail and trade">Retail and Trade</option>
          <option value="transportation">Transportation</option>
        </select>
        <div className="skillbtn">
          <button className="btn btn-outline-primary">find by state</button>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Filter;

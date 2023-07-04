import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { ReactSearchAutocomplete } from "react-search-autocomplete";


function DestinationAutocomplete({loggedIn}) {

    const router = useRouter();
    const items = [
        {
          id: 0,
          name: "Afghanistan",
        },
        {
          id: 1,
          name: "Albania",
        },
        {
          id: 2,
          name: "American Samoa",
        },
        {
          id: 3,
          name: "Antigua and Barbuda",
        },
        {
          id: 4,
          name: "Armenia",
        },
      ];
    
     
    
      const handleOnSearch = (string, results) => {
        console.log(string, results);
      };
     
      const handleOnHover = (result) => {
        console.log(result);
      };
    
      const handleOnSelect = (item) => {
        router.push({
            pathname: '/apply',
            query: { country: item.name,loggedIn : loggedIn }
        }, '/apply');

      };
    
      const handleOnFocus = () => {
        console.log("Focused");
      };
    
      const handleOnClear = () => {
        console.log("Cleared");
      };
    
      const formatResult = (item) => {
        console.log(item);
        return (
          <div className="result-wrapper">
            <span className="result-span">{item.name}</span>
          </div>
        );
      };
    
      return (
        <ReactSearchAutocomplete
                items={items}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                onClear={handleOnClear}
                styling={{ zIndex: 0 }}
                formatResult={formatResult}
                className="search"
                placeholder="Search You're favorite destination"
                autoFocus
              />
      )
    
}

export default DestinationAutocomplete
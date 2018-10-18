import React from 'react';

function Filter(props) {

  function updateFilter(e) {
    props.updateFilterState(e.target.value);
  }

  return (
      <div className="col s10 m6 l4 offset-m3 offset-l4">
        <div className="row">
          <div className="input-field col s12">
            <input type="text" id="autocomplete-input" className="autocomplete"
              value={props.currentFilter}
              onChange={updateFilter}
            />
            <label htmlFor="autocomplete-input">Search news...</label>
          </div>
        </div>
      </div>
  );

}

export default Filter;

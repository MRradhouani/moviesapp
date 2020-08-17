import React from 'react'

const handleChange = (e) => {
    e.preventDefault();
    // setInput(e.target.value);
};
function Search(props) {
    return (
        <div>
            <input className="inputt"
                type="text"
                placeholder="name of mivies"
                onChange={handleChange}
                // value={Input}
            />
        </div>
    )
}

export default Search

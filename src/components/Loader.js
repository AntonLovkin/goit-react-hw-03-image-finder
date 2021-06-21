import React from 'react';
import Loader from "react-loader-spinner";

const SearchLoader = () => {
    return (
        <div className='Loader'>
            <Loader
             type="ThreeDots"
             color="#3f51b5"
             height={100}
            width={100} />
        </div>
    );
};

export default SearchLoader;
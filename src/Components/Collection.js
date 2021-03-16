import React from 'react';
import AddedLightsaber from './AddedLightsaber';

const Collection = props => {
    const mappedLightsabers = props.addedLightsabers.map((lightsaber, index) => (
        <AddedLightsaber 
            key={index}
            lightsaber={lightsaber}
            colorFn={props.colorFn}
            removeFn={props.removeFn} />
    ))

    return(
        <div className='collection-header'>
            <h1 className='collection-header-text'>Grievous' Collection
                <div className='collection-container'>
                    {mappedLightsabers}
                </div>
            </h1>
        </div>
    )
}

export default Collection

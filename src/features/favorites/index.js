import React from 'react';
import { FavoritesList } from './components';
import { Loading } from '../../components';

export default (props) => {
    return (
        <div className="d-flex flex-row flex-fill pt-4 p-2" >
        {props.loaded ? (
             <FavoritesList 
                favorites={ props.favorites }
                removeFavorites={ props.removeFavorites }
            />
        ) : (
            <Loading />
        ) }
        </div>
    )
}
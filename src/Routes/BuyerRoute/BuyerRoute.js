import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useBuyer from '../../hooks/useBuyer';

const BuyerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isBuyer, buyerLoading] = useBuyer(user?.email)
    const location = useLocation()

    if(loading || buyerLoading){
        return <div>Loading...</div>
    }

    if(user && isBuyer){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default BuyerRoute;
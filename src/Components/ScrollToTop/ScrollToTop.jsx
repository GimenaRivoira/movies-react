/* Hace el scroll para arriba solo cada ves que se renderiza una vista  */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop(){
    const location = useLocation();
    useEffect(() => {
    window.scroll(0, 0);
    }, [location.pathname]);
    return null;
}

export default ScrollToTop;
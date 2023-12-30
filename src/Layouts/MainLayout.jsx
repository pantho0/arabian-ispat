
import Navbar from '../Components/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import NavTop from '../Components/Shared/NavTop';

const MainLayout = () => {
    return (
        <div>
            <NavTop/>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
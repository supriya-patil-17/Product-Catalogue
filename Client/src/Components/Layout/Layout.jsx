import Sidebar from '../Sidebar/SideBar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
           
            <main className="flex-1 bg-gray-100 p-6">
                <Outlet />
            </main>
          
        </div>
    );
};

export default DashboardLayout;


import { Outlet } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/SideBar';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar fixed */}
              <Sidebar />

      

      {/* Main Content */}
      <div className="flex-1 overflow-x-auto">
        <main className="h-full bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
   
    </div>
  );
};

export default DashboardLayout;

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const links = [
        { name: 'Spare Parts', to: '/spare-parts' },
        { name: 'Assembly', to: '/assembly' },
        { name: 'Variables', to: '/variables' },
        { name: 'Mechanism', to: '/mechanism' },
        { name: 'Repair Kit', to: '/repair-kit' }

    ];

    return (
        <aside className="  w-60 bg-blue-900 text-white h-screen p-4">
            <h2 className="text-xl font-bold mb-6">ACCURAMECH CATALOGUE</h2>
            <nav className="space-y-2">
                {links.map(link => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                            `block px-4 py-2 rounded hover:bg-blue-700 ${isActive ? 'bg-blue-700' : ''
                            }`
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
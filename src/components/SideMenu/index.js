import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const SideMenu = () => {

    const navigate = useNavigate();

    const menuItems = [
        {
            key: '/',
            label: 'Reservations',
        },
        {
            key: 'rooms',
            label: 'Rooms',
        },
        {
            key: 'dates',
            label: 'Dates',
        },
        {
            key: 'deleteurl',
            label: 'Links',
        },
        {
            key: 'tutorials',
            label: 'Tutorials',
        },
        {
            key: 'signout',
            label: 'Sign Out',
        },
    ];

    const onMenuItemClick = async (menuItem) => {
        if (menuItem.key === 'signout') {
            await Auth.signOut();
            navigate("/");
            window.location.reload();
        } else {
            navigate(menuItem.key);
        }
    };

    return (
        <Menu items={menuItems} onClick={onMenuItemClick} />
    );
};

export default SideMenu;
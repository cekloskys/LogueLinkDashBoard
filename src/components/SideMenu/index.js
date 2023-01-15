import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {

    const navigate = useNavigate();

    const menuItems = [
        {
            key: '/',
            label: 'Reservations',
        },
        {
            key: 'addurl',
            label: 'Add URL',
        },
        {
            key: 'deleteurl',
            label: 'Delete URL',
        },
    ];

    const onMenuItemClick = (menuItem) => {
        navigate(menuItem.key);
    };

    return (
        <Menu items={menuItems} onClick={onMenuItemClick} />
    );
};

export default SideMenu;
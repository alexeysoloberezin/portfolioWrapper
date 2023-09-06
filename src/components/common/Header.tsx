import React from 'react';
import {Menu, Button, Dropdown, MenuProps} from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import logo from '../../icons/logo.svg'
import {useDispatch, useSelector} from "react-redux";
import {AuthState, setCurrentUser} from "../../store/authSlice";
import {Link, useNavigate} from "react-router-dom";
import firebase from 'firebase/compat/app';

const HeaderMenu = () => {
  const menuItems = [
    { key: 'home', label: 'Главная', link: '/' },
    { key: 'about', label: 'Обо мне', link: '/about' },
    { key: 'portfolio', label: 'Портфолио', link: '/portfolio' },
    { key: 'contact', label: 'Контакты', link: '/contact' },
    { key: 'faq', label: 'Faq', link: '/faq' },
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu onClick={onClick} mode="horizontal" className="header__nav" items={menuItems} />
  );
};

const UserMenu: React.FC<{isAdmin: boolean}> = ({ isAdmin }) => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(setCurrentUser(null));
  };

  const menu = (
    <Menu >
      <Menu.Item key="profile" icon={<UserOutlined />}>
        <Link to={'/profile'} >Профиль</Link>
      </Menu.Item>
      {isAdmin
        ? <Menu.Item key="adminPanel" icon={<UserOutlined />}>
            <Link to={'/admin/panel'} >Admin panel</Link>
          </Menu.Item>
        : null
      }

      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Выйти
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Button icon={<UserOutlined />}>
        Пользователь
      </Button>
    </Dropdown>
  );
};

interface RootState {
  auth: AuthState;
}
const Header = (props: any) => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      let user: any = result.user;
      if (user?.email) {
        dispatch(setCurrentUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        }));
        navigate("/");
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div className={props.transparent ? "header header-transparent" : 'header'}>
      <Link to={'/'} className="logo">
        <img src={logo} alt=""/>
        <div>LL</div>
      </Link>
      <HeaderMenu />
      {currentUser?.email ? <UserMenu isAdmin={currentUser?.email === 'alexeysoloberezinsolo@gmail.com'}/> : <Button onClick={signInWithGoogle}>Login</Button>}
    </div>
  );
};

export default Header;
import { FaUserAlt } from 'react-icons/fa';
import { AiFillAccountBook } from 'react-icons/ai';

export const menuItem = [
  { path: '/users', name: '사용자 목록', icon: <FaUserAlt /> },
  { path: '/accounts', name: '계좌 목록', icon: <AiFillAccountBook /> },
];

export const convertPageTitle = pathname => {
  let menuTitle = '';

  if (pathname === '/accounts') {
    menuTitle = '계좌 목록';
  } else if (pathname.match(/^\/accounts\/(\d+)$/)) {
    menuTitle = '계좌 상세화면';
  } else if (pathname === '/users') {
    menuTitle = '사용자 목록';
  } else if (pathname.match(/^\/users\/(\d+)$/)) {
    menuTitle = '사용자 상세화면';
  }
  return menuTitle;
};

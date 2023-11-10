import { TbUserPlus } from 'react-icons/tb';
import { BiBell } from 'react-icons/bi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { GiWallet } from 'react-icons/gi';
import styles from './Navbar.module.css';

import backimg from '../backimg.png';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.right}>
        <div className={styles.userIcon}><TbUserPlus/></div>
        <img src={backimg} alt="Tambola Salt" />
      </div>
      <div className={styles.left}>
        <BiBell/>
        <HiOutlineShoppingCart/>
        <GiWallet/>
      </div>
    </div>
  );
};

export default Navbar;

// components/Navbar.js

import { TbUserPlus} from 'react-icons/tb';
import {BiBell} from 'react-icons/bi';
import {HiOutlineShoppingCart} from 'react-icons/hi';
import {ImTicket} from 'react-icons/gi';
import { AiOutlineHome, AiOutlineWallet, AiOutlinePlusCircle } from 'react-icons/ai';
import styles from './ContestCard.module.css';
import { useState } from 'react';

const ContestCard = ({ contestName, prizePool, date, entry }) => {
  
  return (
    <div className={styles.contestCard}>
        <div className={styles.contestName}>
          {contestName}
          <p>Entry: {entry}</p>
        </div>
        <div className={styles.contestBody}>
          {prizePool}
          {date}
        </div>
    </div>
  );
};

export default ContestCard;
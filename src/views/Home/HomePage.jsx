import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

const HOME_WORKS = [
  {
    id: 'hw01',
    path: '/hw-01',
    title: 'Homework 01',
    isEnable: true,
  },
  {
    id: 'hw02',
    path: '/hw-02',

    title: 'Homework 02',
    isEnable: false,
  },
  {
    id: 'hw03',
    path: '/hw-03',
    title: 'Homework 03',
    isEnable: false,
  },
  {
    id: 'hw04',
    path: '/hw-04',
    title: 'Homework 04',
    isEnable: false,
  },
  {
    id: 'hw05',
    path: '/hw-05',
    title: 'Homework 05',
    isEnable: false,
  },
  {
    id: 'hw06',
    path: '/hw-06',
    title: 'Homework 06',
    isEnable: false,
  },
  {
    id: 'hw07',
    path: '/hw-07',
    title: 'Homework 07',
    isEnable: false,
  },
];

const HomePage = () => {
  return (
    <nav>
      <ul>
        {HOME_WORKS.map(({ id, path, title, isEnable }) => (
          <li key={id}>
            <Link to={path} className={isEnable ? css.enable : css.disable}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HomePage;

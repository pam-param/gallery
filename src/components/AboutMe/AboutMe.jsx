import PageHeader from '../../components/PageHeader/PageHeader';
import styles from './AboutMe.module.css';

const AboutMe = () => (
  <>
    <PageHeader>Обо мне</PageHeader>
    <div className={styles.aboutMe}>
      <div className={styles.aboutMe__item}>
        <p>Меня зовут Ирина. Я закончила Московский институт электронной техники по специальности Инженер-программист.</p>
        <p>Моя жизнь была всегда прочно связана с IT-сферой. </p>
      </div>
      <div className={styles.aboutMe__item}>
        <p>Моей основной деятельностью было тестирование десктопного ПО.</p>
        <p>Параллельно бралась за задачи по разработке.</p>
      </div>
      <div className={styles.aboutMe__item}>
      <p>В компании Элинс:</p>
      <ul className={styles.aboutMe__item__list}>
        <li>разработанный мной модуль множественной обработки накладных по штрих-коду увеличил скорость работы сотрудников склада (X++)</li>
        <li>модуль настройки прав пользователей и их групп уменьшил количество рутинных действий сотрудников технической поддержки (X++)</li>
      </ul>
      </div>
      <div className={styles.aboutMe__item}>
      <p>В компании Миландр:</p>
      <ul className={styles.aboutMe__item__list}>
        <li>создала приложение, упростившее тестирование САПР, ориентированное на события библиотеки Qt (С++)</li>
        <li>автоматизировала тестирование модуля программирования ПЛИС (Python)</li>
      </ul>
      </div>
      <div>
        Некоторое время назад увлеклась веб-разработкой, в частности фронтенд-разработкой.
      </div>
      <div className={styles.aboutMe__item}>
        <p></p>
        <p>Успешно закончила бесплатный онлайн-курс фронтенд-разработки от RSSchool, во время которого с нуля создала несколько приложений и освоила технологии:</p>
        <ul className={styles.aboutMe__item__list}>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS3 (SASS, SCSS)</li>
          <li>Webpack</li>
        </ul>
      </div>
      <div className={styles.aboutMe__item}>
        <p>По урокам IT-Kamasutr-ы создала приложение-социальную сеть, освоив:</p>
          <ul className={styles.aboutMe__item__list}>
            <li>React</li>
            <li>Redux</li>
          </ul>
      </div>
      <div className={styles.aboutMe__item}>
        <p>Естественно, не обошлось без использования Git.</p>
        <p>Мой английский - A2, достаточный для чтения документации и адекватного именования переменных.</p>
      </div>
      <div className={styles.aboutMe__item}>
        Сейчас нахожусь в поиске команды, которой будут интересны мои навыки и опыт, где я смогу приносить пользу и развиваться как специалист.
      </div>
      <div className={styles.aboutMe__item}>
        Я на github: <a href='http://github.com/pam-param'>http://github.com/pam-param</a>
      </div>
    </div>
  </>
);

export default AboutMe;

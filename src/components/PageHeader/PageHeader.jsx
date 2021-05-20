import styles from './PageHeader.module.css';

const PageHeader = (props) => (
    <h2 className={styles.pageHeader}>{props.children}</h2>
);

export default PageHeader;

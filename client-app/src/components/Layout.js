import styles from './Layout.module.css'

export default function Layout({ children, title }) {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{title}</h1>
            {children}
        </div>
    )
}

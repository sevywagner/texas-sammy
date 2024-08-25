import styles from './member.module.css';

const Member = (props) => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles.info}>
                <p className={styles.title}>{props.member.position}</p>
                <p>{props.member.name} (PC, '{props.member.year})</p>
                <p>{props.member.email}</p>
                {/* <p>{props.member.number}</p> */}
            </div>
            <div className={styles.pic}>
                <img height='150' src={props.member.image} />
            </div>
        </div>
    );
}

export default Member;
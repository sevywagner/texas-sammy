import styles from './member.module.css';

const Member = (props) => {
    const pic = require(`./../../Pictures/CouncilPhotos/${props.member.picUrl}.jpg`);

    return (
        <div className={styles['wrapper']}>
            <div className={styles.info}>
                <p className={styles.title}>{props.member.title}</p>
                <p>{props.member.name} {props.member.year}</p>
                <p>{props.member.number}</p>
            </div>
            <div className={styles.pic}>
                <img height='150' src={pic} />
            </div>
        </div>
    );
}

export default Member;
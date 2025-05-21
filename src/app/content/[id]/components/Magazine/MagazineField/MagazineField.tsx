import Image from 'next/image'

import { IcMagazineLogo } from '@/assets/svg'

import * as styles from './MagazineField.css'

interface magazineProps {
  magazine: {
    category: string,
    title: string,
    content: string,
    image: string,
  }
}

const MagazineField = ({magazine}: magazineProps) => {
  return (
    <section className={styles.magazineFieldWrapper}>
      <div className={styles.categoryWrapper}>
        <IcMagazineLogo/>
        <p className={styles.category}>#{magazine.category}</p>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.titleContentWrapper}>
          <p className={styles.title}>{magazine.title}</p>
          <p className={styles.content}>{magazine.content}</p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
          src={magazine.image}
          alt={`${magazine.category} 기사 사진`}
          width={105}
          height={61}
          />
        </div>
      </div>
    </section>
  );
};

export default MagazineField;
import * as styles from '../MovieCard.css';
import { Tag } from "@/shared/components/Tag/Tag";

export default function MovieCardTags({ tags }: { tags: string[] }) {
  return (
    <div className={styles.tags}>
      {tags[0] && <Tag text={tags[0]} color="blue" size="sm" />}
      {tags[1] && <Tag text={tags[1]} color="orange" size="sm" />}
    </div>
  );
} 
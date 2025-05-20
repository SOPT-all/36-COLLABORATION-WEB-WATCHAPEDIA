import * as styles from '../MovieCard.css';

export default function Badge({ type, badge, label }: { type: string; badge?: string; label?: any }) {
  if (!badge) return null;
  return (
    <div className={(type === "dDay" || type === "series") ? styles.dDayBadge : styles.rankBadge}>
      {badge}
    </div>
  );
} 
"use client"

import React, { createContext, useContext } from "react";
import * as styles from './MovieCard.css'
import { moviePresets, MovieCardType, MovieCardPreset } from "./MovieMock";
import { IcPlus, IcWatchaBlack,  } from "@/assets/svg";

interface MovieCardProps {
  type: MovieCardType;
}

const MovieCard = ({ type }: MovieCardProps) => {
  const data: MovieCardPreset = moviePresets[type];

  return (
    <div className={styles.cardWrap}>
      <div className={styles.posterWrap}>
        <img src={data.poster} alt={data.title} className={styles.posterImg} />
        {typeof data.label === "function" && (
          <div className={styles.watchaBadge}>
            {React.createElement(data.label, { width: 24, height: 24 })}
          </div>
        )}
        {data.badge && (
          <div className={data.type === "dDay" ? styles.dDayBadge : styles.rankBadge}>
            {data.badge}
          </div>
        )}
        {data.count !== undefined && (
          <div className={styles.actionWrap}>
            <div className={styles.addButton}><IcPlus /></div>
            <span className={styles.count}>{data.count.toLocaleString()}</span>
          </div>
        )}
      </div>
      <div className={styles.title}>{data.title}</div>
      {(typeof data.label === "string" || data.date) && (
        <div className={styles.subInfo}>
          {typeof data.label === "string" && (
            <span className={styles.label}>{data.label}</span>
          )}
          {data.date && (
            <span className={styles.date}>
              <div>
                <IcWatchaBlack/>
              </div>
              {data.date}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

// Poster
MovieCard.Poster = function Poster({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={styles.posterWrap}>
      <img src={src} alt={alt} className={styles.posterImg} />
    </div>
  );
};

// Badge
MovieCard.Badge = function Badge({ type, children }: { type: "dDay" | "rank"; children: React.ReactNode }) {
  return (
    <div className={type === "dDay" ? styles.dDayBadge : styles.rankBadge}>
      {children}
    </div>
  );
};

// 버튼
MovieCard.Action = function Action({ children }: { children: React.ReactNode }) {
  return <div className={styles.actionWrap}>{children}</div>;
};
MovieCard.AddButton = function AddButton() {
  return <button className={styles.addButton}><IcPlus width= {13} height= {13} /></button>;
};
MovieCard.Count = function Count({ children }: { children: React.ReactNode }) {
  return <span className={styles.count}>{children}</span>;
};

// Title
MovieCard.Title = function Title({ children }: { children: React.ReactNode }) {
  return <div className={styles.title}>{children}</div>;
};

// SubInfo (ex: W, 날짜)
MovieCard.SubInfo = function SubInfo({ children }: { children: React.ReactNode }) {
  return <div className={styles.subInfo}>{children}</div>;
};
MovieCard.Label = function Label({ children }: { children: React.ReactNode }) {
  return <span className={styles.label}>{children}</span>;
};
MovieCard.Date = function Date({ children }: { children: React.ReactNode }) {
  return <span className={styles.date}>{children}</span>;
};

// Tags
MovieCard.Tags = function Tags({ children }: { children: React.ReactNode }) {
  return <div className={styles.tags}>{children}</div>;
};

export default MovieCard;

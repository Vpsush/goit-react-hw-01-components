import css from './Statistic.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>Upload stats</h2>}
      <div>
        <ul className={css.statList}>
          <li className={css.item}>
            <span className="label">.docx</span>
            <span className="percentage">4%</span>
          </li>
          <li className={css.item}>
            <span className="label">.mp3</span>
            <span className="percentage">14%</span>
          </li>
          <li className={css.item}>
            <span className="label">.pdf</span>
            <span className="percentage">41%</span>
          </li>
          <li className={css.item}>
            <span className="label">.mp4</span>
            <span className="percentage">12%</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

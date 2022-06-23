import type { MaterialList } from '@/api/recipe/types';
import style from './Note.module.scss';

interface Props {
  serving?: number;
  materialList?: MaterialList[];
  point?: string;
}

export const Note = ({ serving, materialList, point }: Props): JSX.Element => {
  return (
    <div className={style.note}>
      <section>
        <div>
          <h2 className={style.noteTitle}>
            材料
            <span className={style.serving}>（{serving}人分）</span>
          </h2>
          <dl className={style.materialList}>
            {materialList?.map((item, index) => (
              <div key={index} className={style.materialListItem}>
                <dt className={style.materialListTitle}>{item.name}</dt>
                <dd className={style.materialListAmount}>{item.quantity}</dd>
              </div>
            ))}
            {(materialList?.length ?? 0) % 2 == 0 && (
              <div className={style.materialListItem}>
                <dt></dt>
                <dd></dd>
              </div>
            )}
          </dl>
          {point && <p className={style.point}>{point}</p>}
        </div>
      </section>
    </div>
  );
};

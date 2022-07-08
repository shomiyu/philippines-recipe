import type { Step } from '@/api/recipe/types';
import style from './StepList.module.scss';

interface Props {
  step: Step[];
}

export const StepList = ({ step }: Props): JSX.Element => {
  return (
    <ol className={style.stepList}>
      {step?.map((item, index) => (
        <li key={index} className={style.stepItem}>
          <section className={style.stepInner}>
            <div className={style.stepContents}>
              <h3 className={style.stepTitle}>{item.title}</h3>
              <p>{item.text}</p>
            </div>
            <figure className={style.stepThumbnail}>
              <img
                src={item.thumbnail?.url ?? '/images/no_image.jpg'}
                alt=''
                width='246'
                height='152'
              />
            </figure>
          </section>
        </li>
      ))}
    </ol>
  );
};

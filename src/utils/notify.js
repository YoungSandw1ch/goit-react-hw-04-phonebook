import { Report } from 'notiflix/build/notiflix-report-aio';

export const report = () => {
  Report.info(
    'Попередження',
    'Намагаєшся контакт добавити ти, присутній у книзі контактів вже.',
    'Okay'
  );
};

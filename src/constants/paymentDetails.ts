import { IPaymentDetails } from '@/types/paymentDetails.types';

const paymentDetails: IPaymentDetails = {
  iban: {
    title: 'IBAN',
    value: 'UA47305299 00000 26005036230143',
  },
  edrpou: {
    title: 'ЄДРПОУ',
    value: '45554783',
  },
  recipient: {
    title: 'Отримувач',
    value: 'ГО «АЗОВ СУПРОВІД»',
  },
  purpose: {
    title: 'Призначення платежу',
    value: 'Добровільна пожертва на Статутну діяльність',
  },
};

export default paymentDetails;

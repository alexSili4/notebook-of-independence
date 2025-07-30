export interface IPaymentDetailsItem {
  title: string;
  value: string;
}

export interface IPaymentDetails {
  iban: IPaymentDetailsItem;
  edrpou: IPaymentDetailsItem;
  recipient: IPaymentDetailsItem;
  purpose: IPaymentDetailsItem;
}

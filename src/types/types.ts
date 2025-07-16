import { MouseEvent } from 'react';
import type { PageFlip } from 'page-flip';

// events
export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

// other

export interface IPageFlip {
  pageFlip: () => PageFlip;
}

export type PageFlipOrNull = IPageFlip | null;

import { MouseEvent, RefObject } from 'react';
import type { PageFlip } from 'page-flip';
import { SetBooleanFunc } from './functions.types';

// events
export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

// refs
export type RefDivObject = RefObject<HTMLDivElement>;

// other

export interface IPageFlip {
  pageFlip: () => PageFlip;
}

export type PageFlipOrNull = IPageFlip | null;

export interface IMainPageOutletContext {
  updateShowFullScreenHeroVideo: SetBooleanFunc;
}

export interface IOutletContext extends IMainPageOutletContext {}

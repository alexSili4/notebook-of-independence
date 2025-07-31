import { ChangeEvent, MouseEvent, RefObject } from 'react';
import type { PageFlip } from 'page-flip';
import { SetBooleanFunc } from './functions.types';

// events
export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

// refs
export type RefDivObject = RefObject<HTMLDivElement>;

// other
export type StringOrNull = string | null;

export type ElementOrNull = Element | null;

export interface IPageFlip {
  pageFlip: () => PageFlip;
}

export type PageFlipOrNull = IPageFlip | null;

export interface IMainPageOutletContext {
  updateShowFullScreenHeroVideo: SetBooleanFunc;
}

export interface IOutletContext extends IMainPageOutletContext {}

export interface IRegExp {
  allSpaces: RegExp;
}

import { ChangeEvent, MouseEvent, RefObject } from 'react';
import type { PageFlip } from 'page-flip';

// events
export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

// refs
export type RefDivObject = RefObject<HTMLDivElement>;

// other
export type Booleans = boolean[];

export type Strings = string[];

export type StringOrNull = string | null;

export type NumberOrNull = number | null;

export type ElementOrNull = Element | null;

export interface IPageFlip {
  pageFlip: () => PageFlip;
}

export type PageFlipOrNull = IPageFlip | null;

export interface IRegExp {
  allSpaces: RegExp;
}

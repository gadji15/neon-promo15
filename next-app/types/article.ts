import type { Post } from "./post";

export interface Article extends Post {
  content: JSX.Element;
}
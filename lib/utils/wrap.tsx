import type { ReactNode } from "react";
import { getChildrenByTypeDeep } from "react-nanny";

interface WrapProps {
  if: boolean;
  children?: ReactNode;
}

export const Wrap = ({ if: condition, children }: WrapProps) => {
  if (condition) {
    return <>{children}</>;
  }

  const wrapContentChildren = getChildrenByTypeDeep(children, Wrap.Content);
  if (wrapContentChildren.length === 0) {
    throw new Error("Wrap.Content is required");
  }
  if (wrapContentChildren.length > 1) {
    throw new Error("You can't have more than one Wrap.Content");
  }

  // eslint-disable-next-line prefer-destructuring
  const actualWrapContent = wrapContentChildren[0];
  return <>{actualWrapContent}</>;
};

Wrap.Content = ({ children }: { children?: ReactNode }) => <>{children}</>;

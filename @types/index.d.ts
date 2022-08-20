type Nullable<T> = T | null;

type NonNullableObj<T> = {
  [K in keyof T]-?: T[K];
};

type DataMap<T> = {
  data: T;
};

interface IParentComponentProps {
  className?: string;
  children: ReactChild;
}

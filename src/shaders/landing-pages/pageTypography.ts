export type PageTypographyProps = {
  typographyType?: string;
  [key: string]: any;
};

export function splitTypographyProps<T extends PageTypographyProps>(props: T): [string | undefined, Omit<T, keyof PageTypographyProps>] {
  const { typographyType, ...rest } = props;
  return [typographyType, rest];
}

export function usePageTypography(recipe: any, type: any) {
  return {};
}

export interface Hero {
  name: string;
  role: string;
  ctaButtons: {
    primary: {
      label: string;
      href: string;
    };
    secondary: {
      label: string;
      href: string;
    };
  };
}


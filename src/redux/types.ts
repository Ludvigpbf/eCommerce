type MenuState = {
  isMenuOpen: boolean;
};
type PageState = {
  activePage: string;
};
type LangState = {
  activeLang: string;
};

export type RootState = {
  menu: MenuState;
  pages: PageState;
  lang: LangState;
};

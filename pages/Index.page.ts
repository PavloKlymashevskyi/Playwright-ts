import { Page } from '@playwright/test';
import { MainContainer } from '../components/MainContainer';
import { Filters } from '../components/filters/Filters';
import { Search } from '../components/filters/Search';
import { SliderPriceRange } from '../components/filters/SliderPriceRange';
import { Sort } from '../components/filters/Sort';

export class IndexPage {
  readonly page: Page;
  readonly mainContainer: MainContainer;
  readonly search: Search;
  readonly filters: Filters
  readonly sliderPriceRange: SliderPriceRange;
  readonly sort: Sort;


  constructor(page: Page) {
    this.page = page;
    this.mainContainer = new MainContainer(page);
    this.search = new Search(page);
    this.filters = new Filters(page);
    this.sliderPriceRange = new SliderPriceRange(page);
    this.sort = new Sort(page);
  }

  async goto() {
    await this.page.goto("/");
  }
  async waitForSelector(selector: string) {
    return this.page.waitForSelector(selector);
  }
}
import { Injectable } from "@angular/core";
import { Tab } from "./tab.model";
import { BehaviorSubject } from "rxjs";
import { HomeComponent } from "./components/home/home.component";
import { DynamicComponentService } from "./dynamic-component.service";

@Injectable()
export class TabService {
  public tabs: Tab[] = [
    new Tab(HomeComponent, "Home", { parent: "HomeComponent" }),
  ];

  constructor(private dynamicComponentService: DynamicComponentService) {

  }

  public tabSub = new BehaviorSubject<Tab[]>(this.tabs);

  public removeTab(index: number) {
    this.tabs.splice(index, 1);
    if (this.tabs.length > 0) {
      this.tabs[this.tabs.length - 1].active = true;
    }
    this.tabSub.next(this.tabs);
  }

  public addTab(tab: Tab) {
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].active === true) {
        this.tabs[i].active = false;
      }
    }
    tab.id = this.tabs.length + 1;
    tab.active = true;
    this.tabs.push(tab);
    this.tabSub.next(this.tabs);
  }

  // public addTab(tab: Tab) {
  //   let component = this.dynamicComponentService.getDynamicComponentType('***************');
  //   var prexistingTabIndex = null;
  //   var activeTabIndex = null;

  //   for (let i = 0; i < this.tabs.length; i++) {
  //     if (this.tabs[i].active === true) {
  //       activeTabIndex = i;
  //     }

  //     if (this.tabs[i].title === tab.title) {
  //       prexistingTabIndex = i
  //     }
  //   }

  //   if (activeTabIndex != null) {
  //     this.tabs[activeTabIndex].active = false;
  //   }

  //   // if already open, make it active; else, create it
  //   if (prexistingTabIndex == null) {
  //     tab.id = this.tabs.length + 1;
  //     tab.title = tab.title;
  //     tab.active = true;
  //     this.tabs.push(tab);
  //   }
  //   else {
  //     this.tabs[prexistingTabIndex].active = true;
  //   }
  // }
}

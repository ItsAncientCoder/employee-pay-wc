import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/tab.model';
import { TabService } from 'src/app/tab.service';
import { Comp1Component } from '../comp1.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  tabs = new Array<Tab>();
  selectedTab: number;

  constructor(private tabService: TabService) { }

  ngOnInit() {
    this.tabService.tabSub.subscribe(tabs => {
      this.tabs = tabs;
      this.selectedTab = tabs.findIndex(tab => tab.active);
    });
  }

  tabChanged(event) {
    console.log("tab changed");
  }

  addNewTab() {
    this.tabService.addTab(
      new Tab(Comp1Component, "Comp1 View", { parent: "AppComponent " + (Math.floor(Math.random() * 6) + 1) }));
  }

  removeTab(index: number): void {
    this.tabService.removeTab(index);
  }

}

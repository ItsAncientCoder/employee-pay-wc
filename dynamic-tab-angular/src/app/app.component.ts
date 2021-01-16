import { Component, OnInit } from "@angular/core";
import { TabService } from "./tab.service";
import { Tab } from "./tab.model";
import { Comp1Component } from "./components/comp1.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  }
}

import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../../../core/models/category";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"],
})
export class CategoryComponent implements OnInit {
  show!: boolean;

  constructor() {}

  ngOnInit(): void {}
}

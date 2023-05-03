import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";
import { Product } from "../../../core/models/product";
import { CategoryService } from "../../../core/services/category.service";
import { ProductService } from "../../../core/services/product.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    return this.productService.getProduct().subscribe((response: any) => {
      if (response) {
        this.products = response.products;
      }
    });
  }
}

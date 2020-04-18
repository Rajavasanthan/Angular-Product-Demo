import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from "../product.service";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productDetails:any={};
  constructor(private activateRoute:ActivatedRoute,private productService:ProductService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((routeData) => {
      this.productService.getProductByProductId(routeData.id).subscribe((productData) => {
        this.productDetails = productData;
      })
    })
  }

}

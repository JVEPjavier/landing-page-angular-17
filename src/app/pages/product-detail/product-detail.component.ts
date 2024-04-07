import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProducto } from '../../models/product.mode';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  
  loading: boolean = true;

  public product?: IProducto;

  private _route = inject(ActivatedRoute)

  private _apiService = inject(ApiService)


  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getProductById(params['id']).subscribe((data : IProducto) =>{
        this.loading= false
        this.product = data
      })
    })
  }


}

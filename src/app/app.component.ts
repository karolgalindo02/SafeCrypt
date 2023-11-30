import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SafeCrypt';
  description = 'SafeCrypt descripcion';
  constructor(
    private http: HttpClient,
    ) {}

  ngOnInit (): void{
    this.http.get("",{responseType: 'text'}).subscribe((resp:any) =>{
      this.description = resp;

    }
    )

    this.http.get("").subscribe((resp:any) =>{
      this.description = resp;
    }
    ),
    (error:any) =>{
      console.log(error)
    }
  
  }

}
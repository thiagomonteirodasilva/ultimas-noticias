import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Utilizando a NewsAPI para exibir notícias (obtenha a chave em newsapi.org)
export class AppComponent {
  title = 'ultimas-noticias';
  chaveAPI = 'sua_chave';
  assunto: string = '';
  arrNoticias: any;
  fontes: any;

  constructor(public http: HttpClient){
    
  }

  //Carrega as notícias
  noticias(){
    return this.http.get<any>('http://newsapi.org/v2/everything?q=' + this.assunto + '&language=pt&apiKey=' + this.chaveAPI).subscribe((data) => {
      if(data){
        this.arrNoticias = data['articles'];
        console.log(this.arrNoticias);
      }
    }, err => {
      window.alert('Erro ao buscar noticias!');
    });
  }

  //Abre a notícia ao clicar
  abreNoticia(noticia: string){
    window.open(noticia, '_blank');
  }
}

// Core components
import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


import {PostsApiList} from '../models/postsapi-list.model';//import de Model
@Injectable()
export class PostsApiService {

  private baseUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

    public getPosts(): Promise<any> {    // methode public qui implemente le service http
    const url = `${this.baseUrl}`;       //  requette http

    return this.http.get(url)             // recuperer le contenue d une requette http
      .toPromise()                        // declaration d'une promesse ( apres avoir envoyer la requette je dois etre promis que je reçois une reponse )
      .then(response => response.json() as PostsApiList)                // reponse correcte recuprée  parser en objet json et caster en tant que  PostsApiList (model)
      .catch(error => console.log('Une erreur est survenue ' + error)) // reponse corrompue .. allerte a la console en tant qu' erreur
  }

}

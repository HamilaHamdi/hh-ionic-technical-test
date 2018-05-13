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

    public getPosts(): Promise<any> {
    const url = `${this.baseUrl}`;       //  affectation de l adresse de la requette http a la constante url

    return this.http.get(url)             // recuperer la reponse d une requette http
      .toPromise()                        // conversion de la reponse de la requette en  Promise (apres avoir envoyer la requette je dois etre promis que je reçois une reponse )
      .then(response => response.json() as PostsApiList)                // reponse correcte recuprée  parser en objet json et caster en tant que  PostsApiList (model)
      .catch(error => console.log('Une erreur est survenue ' + error)) // reponse corrompue .. allerte a la console en tant qu' erreur
  }

  public getPostById(PostId): Promise<any> {

    const url = this.baseUrl +'/' + PostId; //  l'ajout de l id de l'article a la requette http de base et les affecter  ensemble a la constante url

    return this.http.get(url)             // recuperer la reponse d une requette http
      .toPromise()                        // conversion de la reponse de la requette en  Promise (apres avoir envoyer la requette je dois etre promis que je reçois une reponse )
      .then( response => response.json() as PostsApiList)
      // .then(response =>console.log('reponse obtenue',response))                 // reponse correcte recuprée  parser en objet json et caster en tant que  PostsApiList (model)
      .catch(error => console.log('Une erreur est survenue ' + error)) // reponse corrompue .. allerte a la console en tant qu' erreur
  }


}

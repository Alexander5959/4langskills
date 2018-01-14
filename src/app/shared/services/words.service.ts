import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class WordsService {

    constructor(private http: HttpClient) { }

    getTranslations(word: string) {
        return this.http.get(`http://localhost/getTranslate.php?word=${word}`);
    }

}

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class WordsService {

    constructor(private http: HttpClient) { }

    getTranslations(word: string) {
        return this.http.get(`http://localhost/getTranslate.php?word=${word}`);
    }

    getUserSetsById(id: number) {
        return this.http.get(`http://localhost/sets.php?id=${id}`);
    }

    getWordsFromSet(id: number, setName: string) {
        return this.http.get(`http://localhost/allWordsFromSet.php?id=${id}&set=${setName}`);
    }

    setNewWordSet(id: number, setName: string) {
        return this.http.get(`http://localhost/creatingNewSet.php?id=${id}&set=${setName}`);
    }

    deleteUserSet(id: number, setName: string) {
        return this.http.get(`http://localhost/deleteUserSet.php?id=${id}&set=${setName}`);
    }

}

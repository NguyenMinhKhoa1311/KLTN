import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private httpClient: HttpClient) {}

  getAll(){
    return this.httpClient.get<Skill[]>(`${URL}/skill/getAll`);
    
  }
}

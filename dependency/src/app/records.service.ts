import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  info1: string[]=["Adam Taylor", 'E234','at@abc.net']
  info2: string[]=["Sam Taylor", 'E235','st@abc.net']
  info3: string[]=["Lia Taylor", 'E236','lt@abc.net']


getinfo1(): string[]{
  return this.info1
}

getinfo2(): string[]{
  return this.info2
}
getinfo3(): string[]{
  return this.info3
}

  constructor() { }
}

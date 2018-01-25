import { Injectable } from '@angular/core';

@Injectable()
export class ServerNameService {

  constructor() {
   }

  getServerName(): string {
    return 'http://localhost:8080/';
    // return 'http://ec2-18-216-8-223.us-east-2.compute.amazonaws.com/';
  }
}

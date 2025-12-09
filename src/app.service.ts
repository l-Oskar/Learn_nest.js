import { Injectable } from '@nestjs/common';
import os from 'os';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getOs(): string {
    return os.platform();
  }
}

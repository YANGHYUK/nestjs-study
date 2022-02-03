import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  home() {
    return `<div style="color:red;">hi</div>`;
  }
}

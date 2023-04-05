import { Controller, Post, Get } from '@nestjs/common';

@Controller('create')
export class CreateController {
    // Add with JSON Body
    @Post('add')
    postCreateAdd(){
        return 'Creates a new data in database with JSON Body';
    }
}

import { Controller, Get } from '@nestjs/common';
// C[R]UD Operation
// HTTP Method : GET

@Controller('read')
export class ReadController {
    @Get('')
    getRead(){
        return 'Returns all data in database';
    }

    @Get(':id')
    getReadById(){
        return 'Returns data with id = ${id}';
    }
}

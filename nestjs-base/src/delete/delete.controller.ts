import { Controller, Delete } from '@nestjs/common';

@Controller('delete')
export class DeleteController {
    @Delete('all')
    Delete(){
        return 'Deletes all data in database';
    }

    @Delete(':id')
    DeleteById(){
        return 'Deletes data with id = ${id}';
    }
}

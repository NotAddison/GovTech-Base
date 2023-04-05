import { Controller, Put } from '@nestjs/common';

@Controller('update')
export class UpdateController {
    // Update with id
    @Put(':id')
    putUpdateById(){
        return 'Update data with id = ${id}';
    }
}

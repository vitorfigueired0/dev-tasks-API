import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';
import { TaskType } from '@prisma/client';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
 
}

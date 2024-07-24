import { ApiProperty } from "@nestjs/swagger";
import { TaskType } from "@prisma/client";

export class CreateTaskDto {
  @ApiProperty({
    description: `The task name should specify what it is about.`,
    example: 'Meeting',
    required: true,
    type: 'string'
  })
  name: string;

  @ApiProperty({
    description: `The description serves to provide more details about the task.`,
    example: 'Meeting with development team',
    required: false,
    type: 'string'
  })
  description?: string;

  @ApiProperty({
    enum: ['ALL_DAY', 'DATETIME', 'WITHOUT_DATE'],
    description: `The type of task: ALL_DAY for tasks with a specific day but no time, DATETIME for tasks with both day and time, 
    and WITHOUT_DATE for tasks without a specific date for completion.`,
    example: 'ALL_DAY',
    required: true,
    type: 'enum'
  })
  type: TaskType

  @ApiProperty({
    description: `The day for completion is only required for ALL_DAY and DATETIME types.`,
    example: '2024-07-24',
    required: false,
    type: 'date'
  })
  day?: Date;
  
  @ApiProperty({
    description: `The time is only required for the DATETIME type.`,
    example: '09:00:00',
    required: false,
    type: 'date'
  })
  hour?: Date

}

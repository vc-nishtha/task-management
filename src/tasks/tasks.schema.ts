import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TASK_STATUS, TaskStatus } from './tasks.dto';

@Schema()
export class Tasks extends Document {
  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({ type: String, enum: TASK_STATUS })
  status: TaskStatus;
}

export const TaskSchema = SchemaFactory.createForClass(Tasks);

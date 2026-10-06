import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { CreateTaskDto, UpdateTaskDto } from './tasks.dto';

const SEED_TASKS: Task[] = [
  { id: 1, title: 'Set up CI pipeline', description: '', status: TaskStatus.Done, ownerId: 2 },
  { id: 2, title: 'Write API docs', description: 'OpenAPI + examples', status: TaskStatus.InProgress, ownerId: 2 },
  { id: 3, title: 'Design onboarding flow', description: '', status: TaskStatus.Todo, ownerId: 3 },
  { id: 4, title: 'Fix login bug', description: 'Safari only', status: TaskStatus.Todo, ownerId: 3 },
];

@Injectable()
export class TasksService {
  private tasks: Task[] = SEED_TASKS.map((t) => ({ ...t }));
  private nextId = this.tasks.length + 1;

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number): Task {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) throw new NotFoundException(`Task ${id} not found`);
    return task;
  }

  create(dto: CreateTaskDto): Task {
    const task: Task = {
      id: this.nextId++,
      title: dto.title,
      description: dto.description ?? '',
      status: dto.status ?? TaskStatus.Todo,
      ownerId: dto.ownerId,
    };
    this.tasks.push(task);
    return task;
  }

  update(id: number, dto: UpdateTaskDto): Task {
    const task = this.findOne(id);
    Object.assign(task, dto);
    return task;
  }

  remove(id: number): void {
    this.findOne(id);
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}

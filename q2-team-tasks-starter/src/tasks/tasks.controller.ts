import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './tasks.dto';
import { TasksService } from './tasks.service';
import { Roles } from '../auth/roles.decorator';
import { Role, User } from '../users/user.entity';
import { CurrentUser } from '../auth/current-user.decorator';

// TODO (Task 3 & 4): apply the access rules from README.md to every route.
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.findOne(id);
  }

  @Roles(Role.Admin, Role.Member)
  @Post()
  create(@Body() dto: CreateTaskDto, @CurrentUser('id') ownerId: number) {
    return this.tasksService.create(dto, ownerId);
  }

  @Roles(Role.Admin, Role.Member)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateTaskDto,
    @CurrentUser() user: User,
  ) {
    return this.tasksService.update(id, dto, user);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', ParseIntPipe) id: number) {
    this.tasksService.remove(id);
  }
}

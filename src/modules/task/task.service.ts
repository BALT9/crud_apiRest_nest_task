import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository <Task>
  ){}

  async create(createTaskDto: CreateTaskDto) {
    const task = await this.taskRepository.save(createTaskDto);
    return task;
  }

  findAll() {
    return this.taskRepository.find();
  }

  async findOne(id: number) {
    const task = await this.taskRepository.findOneBy({id})
    if(!task) throw new NotFoundException(`La tarea  con id ${id} no existe en la base de datos`)
    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.findOne(id);
    Object.assign(task, updateTaskDto)
    return this.taskRepository.save(task);
  }

  async remove(id: number) {
    const result = await this.taskRepository.delete(id);
    if(result.affected === 0){
      throw new NotFoundException(`La Task con ID ${id} no se encuentra de la BD`)
    }
  }
}

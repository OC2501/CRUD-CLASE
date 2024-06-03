import { Request, Response } from "express";
import { TeacherService } from "../services/teacher.service";
import { CreateTeacherDto } from "../../domain/dtos/teacher/create-teacher.dto";
import { UpdateTeacherDto } from "../../domain/dtos/teacher/update-teacher.dto";
import { Validators } from "../../config/validator";
import { PaginationDto } from "../../domain/dtos/teacher/paginationdto";



export class TeacherController {
    constructor(private readonly teacherService: TeacherService) {}
    create = (req: Request, res: Response) => {
      const [error, createTeacher] = CreateTeacherDto.create(req.body);
      if (error) return res.status(400).json({ error });
      this.teacherService.create(createTeacher!)
      .then(Teacher => res.json(Teacher))
      .catch(error => res.status(500).json(error));
    };
  
    update = (req:Request, res:Response) => {
      const id = req.params.id
      if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
      const [error, updateTeacherDto] = UpdateTeacherDto.update(req.body)
      if(error) return res.status(400).json({error})
      this.teacherService.update(updateTeacherDto!, id!)
      .then(Teacher => res.json(Teacher))
      .catch(error => res.status(500).json(error))
  }
  
    delete = (req:Request, res:Response) => {
    const id = req.params.id
    if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
    this.teacherService.delete(id!)
    .then(Teacher => res.json(Teacher))
    .catch(error => res.status(500).json(error))
  }
  
  
    findAll = (req: Request, res: Response) => {
      const [error, paginationDto]=  PaginationDto.paginate(req.query);
      if(error) return res.status(400).json({error})
      this.teacherService.findAll(paginationDto!)
      .then(Teacher=> res.json(Teacher))
      .catch(error=> res.status(500).json)
    };
  
    findOne = (req: Request, res: Response) => {
    const id = req.params.id
    if(!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
      this.teacherService.findOne(id!)
      .then(Teacher => res.json(Teacher))
      .catch(error => res.status(500).json(error))  
    };
  }
  
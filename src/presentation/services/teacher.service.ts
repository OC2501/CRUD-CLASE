import { TeacherEntity } from "../../domain/entities/teacher.entity";
import { TeacherMaper } from "../../domain/mapers/teacher.mapers";
import { TeacherModel } from "../../database/mongodb/models/teacher.model";
import { CreateTeacherDto } from "../../domain/dtos/teacher/create-teacher.dto";
import { UpdateTeacherDto } from "../../domain/dtos/teacher/update-teacher.dto";
import { PaginationDto } from "../../domain/dtos/teacher/paginationdto";


interface FindAllTeachers{
    offset:number, 
    limit:number, 
    page:number, 
    total:number, 
    teachers:TeacherEntity[],
  }
  
  export class TeacherService {
    async create(createTeacherDto: CreateTeacherDto): Promise<TeacherEntity> {
      const {name}= createTeacherDto;
      try {
        const exist = await TeacherModel.findOne({ name });
        if (exist) throw Error("error");
        const Teacher = await TeacherModel.create(createTeacherDto);
        if (!Teacher) throw Error("error");
        await Teacher.save();
        return TeacherMaper.fromEntity(Teacher);
      } catch (error) {
          throw error;
      }
  }
  
  async update(updateTeacherDto:UpdateTeacherDto, id:string):Promise<TeacherEntity>{
    try {
        const teacher = await TeacherModel.findByIdAndUpdate({
            id: updateTeacherDto,
            data:{...updateTeacherDto}
        });
        if(!teacher) throw Error('Error')
        await teacher.save();
        return TeacherMaper.fromEntity(teacher);
  
    } catch (error) {
        throw error; 
    }
  }
  
   
  async delete(id:string):Promise<TeacherEntity>{
    try {
        const Teacher = await TeacherModel.findOneAndDelete({id});
        if(!Teacher) throw Error('Error')
        return TeacherMaper.fromEntity(Teacher);
  
    } catch (error) {
        throw error; 
    }
  }
  async findOne(id:string):Promise<TeacherEntity>{
    try {
        const Teacher = await TeacherModel.findOne({id});
        if(!Teacher) throw Error('Error')
        return TeacherMaper.fromEntity(Teacher);
  
    } catch (error) {
        throw error; 
    }
  }
    async findAll(paginationDto:PaginationDto):Promise<FindAllTeachers> {
      const { offset, limit } = paginationDto
      try{
  
        const teachers = await TeacherModel.find({})
        .skip(offset)
        .limit(limit)
        const total = await TeacherModel.find({}).countDocuments();
  
          
        const mappedteachers = teachers.map(TeacherMaper.fromEntity);
        
        return {
          offset,
          limit,
          page: offset / limit + 1,
          total,
          teachers: mappedteachers
        };
  
      }catch(error){
        throw error;
      }
      }
    }
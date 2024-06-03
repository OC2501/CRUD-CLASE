import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
    {
        id:{
            type: String,
            required: [true, 'id is required'],
        },
        name:{
            type: String,
            required: [true, 'name is required'],
        },
        email:{
            type: String,
            required: [true, 'email is required'],
        },
        gender:{
            type: String,
            required: [true, 'gender is required'],
        },

        address:{
            type: String,
            required: [true, 'address is required'],
        },

        profession:{
            type: String,
            required: [true, 'profession is required'],

        }

    });

export const TeacherModel = mongoose.model('Teacher', teacherSchema);

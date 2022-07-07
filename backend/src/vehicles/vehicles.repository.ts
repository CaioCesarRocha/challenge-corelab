import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Vehicle, VehicleDocument} from './entities/vehicle.entity';
import { UpdateVehicleDto}from './dto/update-vehicle.dto';

@Injectable()
export class VehicleRepository {
    constructor(
        @InjectModel(Vehicle.name) //usado para fazer a injeção de dependencias
        private vehicleModel: Model<VehicleDocument> // no caso esta injetando o UserDocument vindo do entitiy
    ) {}

    async create(vehicle: Vehicle): Promise<Vehicle>{
        const newVehicle = new this.vehicleModel(vehicle);
        return await newVehicle.save();
    }

    async findAll(){
        return this.vehicleModel.find()
    }

    async findOne(id: string){
        return this.vehicleModel.find().where('_id', id)
    }

    async findSearch(word: string){
        return this.vehicleModel.find().where('brand', word)
    } 
    
    async update(id: string, updateVehicle: UpdateVehicleDto): Promise<Vehicle>{
        console.log(id, updateVehicle)
        return this.vehicleModel.findByIdAndUpdate(
            { _id: id, },
            { $set: updateVehicle, },
            { new: true, },
        )
        .exec()
    }

    async remove(id: string){
        return this.vehicleModel.deleteOne({_id: id}).exec();
    }
   
}
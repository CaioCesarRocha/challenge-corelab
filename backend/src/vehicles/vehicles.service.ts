import { Injectable } from '@nestjs/common';

import { VehicleRepository } from './vehicles.repository';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';


@Injectable()
export class VehiclesService {
  constructor(private vehicleRepository: VehicleRepository) {}

  async create(vehicle: CreateVehicleDto) {
    const createVehicle = await this.vehicleRepository.create(vehicle);
    return createVehicle;
  }

  async findAll() {
    const allVehicles = await this.vehicleRepository.findAll();
    return allVehicles;
  }

  async findOne(id: string) {
    /*const findOne = await this.vehicleRepository.findOne(id);
    return findOne;*/
  }

  async findSearch(word: string){
    const vehicleSearched = await this.vehicleRepository.findSearch(word);
    return vehicleSearched;
  }

  async update(id: string, updateVehicle: UpdateVehicleDto) {
    const updatedVehicle = await this.vehicleRepository.update(id, updateVehicle)
    return updatedVehicle;
  }

  async remove(id: string) {
    const removedVehicle = await this.vehicleRepository.remove(id);
    return removedVehicle;
  }
}

import { Injectable } from '@nestjs/common';

import { VehicleRepository } from './vehicles.repository';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';


@Injectable()
export class VehiclesService {
  constructor(private vehicleRepository: VehicleRepository) {}

  async create(vehicle: CreateVehicleDto) {
    const newVehicle = {
      name: vehicle.name.toUpperCase(),
      brand: vehicle.brand.toUpperCase(),
      year: vehicle.year as number,
      color: vehicle.color,
      price: vehicle.price.toUpperCase(),
      isFavorite: false,
      plate: vehicle.plate.toUpperCase(),
      description: vehicle.description
    }
    const createVehicle = await this.vehicleRepository.create(newVehicle);
    return createVehicle;
  }

  async findAll() {
    const allVehicles = await this.vehicleRepository.findAll();
    return allVehicles;
  }

  async findOne(id: string) {
    const vehicle = await this.vehicleRepository.findOne(id);
    return vehicle;
  }

 

  async update(id: string, updateVehicle: UpdateVehicleDto) {
    const newUpdateVehicle = {
      name: updateVehicle.name.toUpperCase(),
      brand: updateVehicle.brand.toUpperCase(),
      year: updateVehicle.year as number,
      color: updateVehicle.color,
      isFavorite: updateVehicle.isFavorite,
      price: updateVehicle.price.toUpperCase(),
      plate: updateVehicle.plate.toUpperCase(),
      description: updateVehicle.description
    }
    const updatedVehicle = await this.vehicleRepository.update(id, newUpdateVehicle)
    return updatedVehicle;
  }

  async remove(id: string) {
    const removedVehicle = await this.vehicleRepository.remove(id);
    if(removedVehicle.deletedCount === 1){
      return true
    }
    return false
  }
}

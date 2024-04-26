import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpStatus } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './pets.dto/create-pet.dto';
import { UpdatePetDto } from './pets.dto/update-pet.dto';
import { FilterQuery } from 'mongoose';
import { Client } from 'src/clients/schema/client.schema';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Pets')
@ApiBearerAuth()
@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) { }

  @ApiBody({ type: CreatePetDto, description: "pets infos" })
  @ApiOperation({ description: "register a pet in the database" })
  @ApiResponse({ status: HttpStatus.CREATED, description: "successfully registered the pet in the database" })
  @Post()
  create(@Body() createPetDto: CreatePetDto) {
    return this.petsService.create(createPetDto);
  }

  @ApiOperation({ description: "Fetch all the pets in the database, you can use queries to fetch all pets using characters that maybe be contained in a certain key (you cannot use the id of the pet)" })
  @ApiResponse({ status: HttpStatus.OK, description: "returns data" })
  @ApiQuery({ name: 'name', type: String, required: false, description: 'Filter pets by name' })
  @ApiQuery({ name: 'age', type: Number, required: false, description: 'Filter pets by age' })
  @Get()
  findAll(@Query() query: FilterQuery<Client>) {
    return this.petsService.findAll(query);
  }

  @ApiOperation({ description: "Fetch a specific pet from the database using its id" })
  @ApiParam({ name: 'id', type: Number, description: 'Pet ID', required: true })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petsService.findOne(id);
  }

  @ApiOperation({ description: "Updates a specific pet from the database using its id" })
  @ApiParam({ name: 'id', type: Number, description: 'Pet ID', required: true })
  @ApiBody({ type: UpdatePetDto })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petsService.update(id, updatePetDto);
  }

  @ApiOperation({ description: "Deletes a specific pet from the database using its id" })
  @ApiParam({ name: 'id', type: Number, description: 'Pet ID', required: true })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petsService.remove(id);
  }
}

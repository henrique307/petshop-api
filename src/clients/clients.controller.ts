import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpStatus } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './client.dto/create-client.dto';
import { UpdateClientDto } from './client.dto/update-client.dto';
import { Client } from './schema/client.schema';
import { FilterQuery } from 'mongoose';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Clients')
@ApiBearerAuth()
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) { }

  @ApiBody({ type: CreateClientDto, description: "client infos" })
  @ApiOperation({ description: "register a client in the database" })
  @ApiResponse({ status: HttpStatus.CREATED, description: "successfully registered the client in the database" })
  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @ApiOperation({ description: "Fetch all the clients in the database, you can use queries to fetch all users using characters that maybe be contained in a certain key (you cannot use the id of the user)" })
  @ApiResponse({ status: HttpStatus.OK, description: "returns data" })
  @ApiQuery({ name: 'name', type: String, required: false, description: 'Filter users by name' })
  @ApiQuery({ name: 'email', type: String, required: false, description: 'Filter users by email' })
  @ApiQuery({ name: 'phone', type: String, required: false, description: 'Filter users by phone' })
  @Get()
  findAll(@Query() queryParams: FilterQuery<Client>) {
    return this.clientsService.findAll(queryParams);
  }

  @ApiOperation({ description: "Fetch a specific user from the database using its id" })
  @ApiParam({ name: 'id', type: Number, description: 'User ID', required: true })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(id);
  }

  @ApiOperation({ description: "Updates a specific user from the database using its id" })
  @ApiParam({ name: 'id', type: Number, description: 'User ID', required: true })
  @ApiBody({ type: UpdateClientDto })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(id, updateClientDto);
  }

  @ApiOperation({ description: "Deletes a specific user from the database using its id" })
  @ApiParam({ name: 'id', type: Number, description: 'User ID', required: true })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsService.remove(id);
  }
}

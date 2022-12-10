import { Injectable } from '@nestjs/common';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import { PrismaService } from '../prisma.service'
import { Despesas as DespesasModel } from '@prisma/client'

@Injectable()
export class DespesasService {

  constructor(private readonly prismaService: PrismaService) { }

  async create(createDespesaDto: CreateDespesaDto): Promise<DespesasModel> {
    const data = {...createDespesaDto, data: new Date(createDespesaDto.data)}
    return await this.prismaService.despesas.create({data})
  }

  async findAll(): Promise<DespesasModel[]> {
    return await this.prismaService.despesas.findMany()
  }

  async findOne(id: number): Promise<DespesasModel> {
    return await this.prismaService.despesas.findUnique({ where: { id: Number(id) } })
  }

  async update(id: number, updateDespesaDto: UpdateDespesaDto): Promise<DespesasModel> {
    return await this.prismaService.despesas.update({
      data: updateDespesaDto,
      where: { id: Number(id) }
    })
  }

  async remove(id: number) {
    return await this.prismaService.despesas.delete({ where: { id: Number(id) } })
  }
}

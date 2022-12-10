import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { PrismaService } from './prisma.service'
import { DespesasModule } from './despesas/despesas.module';

@Module({
  imports: [DespesasModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}

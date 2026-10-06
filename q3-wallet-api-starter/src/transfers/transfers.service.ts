import { Injectable } from '@nestjs/common';
import { WalletsService } from '../wallets/wallets.service';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { Transfer } from './transfer.entity';

@Injectable()
export class TransfersService {
  private readonly transfers: Transfer[] = [];

  constructor(private readonly walletsService: WalletsService) {}

  findAll(): Transfer[] {
    return this.transfers;
  }

  // TODO (Task 4 & 5): this naive implementation has several problems.
  // Read README.md and fix them.
  create(dto: CreateTransferDto): Transfer {
    const from = this.walletsService.findOne(dto.fromWalletId);
    from.balance -= dto.amount;

    const to = this.walletsService.findOne(dto.toWalletId);
    to.balance += dto.amount;

    const transfer: Transfer = {
      id: `T-${String(this.transfers.length + 1).padStart(4, '0')}`,
      fromWalletId: from.id,
      toWalletId: to.id,
      amount: dto.amount,
      createdAt: new Date().toISOString(),
    };
    this.transfers.push(transfer);
    return transfer;
  }
}

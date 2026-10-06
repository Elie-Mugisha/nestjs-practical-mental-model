import { Injectable, NotFoundException } from '@nestjs/common';
import { Wallet } from './wallet.entity';

// Do not change the seed values - the tests rely on them.
const SEED_WALLETS: Wallet[] = [
  { id: 'W-1001', owner: 'Aline Uwimana', currency: 'USD', balance: 250 },
  { id: 'W-1002', owner: 'Eric Nshuti', currency: 'USD', balance: 40.5 },
  { id: 'W-1003', owner: 'Grace Mukamana', currency: 'USD', balance: 1000 },
];

@Injectable()
export class WalletsService {
  private readonly wallets: Wallet[] = SEED_WALLETS.map((w) => ({ ...w }));

  findAll(): Wallet[] {
    return this.wallets;
  }

  findOne(id: string): Wallet {
    const wallet = this.wallets.find((w) => w.id === id);
    // TODO (Task 4): throw your custom WalletNotFoundException instead.
    if (!wallet) throw new NotFoundException(`Wallet ${id} not found`);
    return wallet;
  }
}

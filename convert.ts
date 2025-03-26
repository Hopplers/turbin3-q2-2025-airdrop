import { Keypair } from '@solana/web3.js';
import base58 from 'bs58';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

const PUBLIC_KEY = '76yGe1GaxLUjwCYC18dwQ2g5vPt5d4uefer52jtqhi1V';
dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || '';
const secret = base58.decode(PRIVATE_KEY);

// Check if the pk is correct
const pair = Keypair.fromSecretKey(secret);

if (pair.publicKey.toString() == PUBLIC_KEY) {
  fs.writeFileSync(
    './wallets/Turbin3-wallet.json',
    JSON.stringify(Array.from(secret))
  );
}

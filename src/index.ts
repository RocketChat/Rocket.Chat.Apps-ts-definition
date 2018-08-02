import { readFileSync } from 'fs';
import * as path from 'path';

export * from './accessors';
export * from './assets';
export * from './messages';
export * from './metadata';
export * from './rooms';
export * from './settings';
export * from './slashcommands';
export * from './subscriptions';
export * from './users';
export * from './webhooks';
export * from './App';
export * from './AppStatus';
export * from './IApp';

const info = JSON.parse(readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
export const version = info.version;

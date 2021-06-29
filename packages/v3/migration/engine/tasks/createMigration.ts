import fs from 'fs';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import path from 'path';
import { log } from '../logger';
import { createMigrationParamTask } from '.';
import { MIGRATION_FOLDER } from '../utils';

export default async (args: createMigrationParamTask, hre: HardhatRuntimeEnvironment) => {
    const templateMigrationFile = `import Contracts from 'components/Contracts';
import { Migration } from 'migration/engine/types';
    
export type State = {};
    
const migration: Migration = {
    up: async (signer, _, { deploy, execute }): Promise<State> => {
        const contracts = Contracts.connect(signer);
        return {};
    },
    healthcheck: async (signer, state: State, { deploy, execute }) => {
        return true;
    }
};
export default migration;
`;

    if (args.migrationName === '') {
        throw new Error('File name cannot be empty');
    }

    // Fetch timestamp
    const migrationId = Date.now();

    const fileName = `${migrationId}_${args.migrationName}.ts`;

    const pathToNewMigrationFile = path.join(hre.config.paths.root, MIGRATION_FOLDER, fileName);
    fs.writeFileSync(pathToNewMigrationFile, templateMigrationFile);

    log.done(`Migration file created ⚡️`);
};

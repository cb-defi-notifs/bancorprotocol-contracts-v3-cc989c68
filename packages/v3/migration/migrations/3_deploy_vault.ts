import { NextState as InitialState } from './2_deploy_network';
import { deployedContract, Migration } from 'migration/engine/types';

export type NextState = InitialState & {
    Vault: deployedContract;
};

const migration: Migration = {
    up: async (signer, contracts, initialState: InitialState, { deploy, execute, createProxy }): Promise<NextState> => {
        const proxyAdmin = await contracts.ProxyAdmin.attach(initialState.ProxyAdmin);

        const bancorVault = await createProxy(proxyAdmin, contracts.BancorVault, [], initialState.BNT.token);

        return {
            ...initialState,

            Vault: bancorVault.address
        };
    },

    healthCheck: async (signer, contracts, state: NextState, { deploy, execute }) => {
        const bancorVault = await contracts.BancorVault.attach(state.Vault);

        if (!(await bancorVault.hasRole(await bancorVault.ROLE_ADMIN(), await signer.getAddress()))) return false;

        return true;
    }
};
export default migration;

import { ProxyAdmin } from '../../components/Contracts';
import { PoolMigratorV1 } from '../../components/LegacyContractsV3';
import { expectRoleMembers, Roles } from '../../test/helpers/AccessControl';
import { describeDeployment } from '../../test/helpers/Deploy';
import { DeployedContracts } from '../../utils/Deploy';
import { expect } from 'chai';
import { getNamedAccounts } from 'hardhat';

describeDeployment(__filename, () => {
    let deployer: string;
    let proxyAdmin: ProxyAdmin;
    let poolMigrator: PoolMigratorV1;

    before(async () => {
        ({ deployer } = await getNamedAccounts());
    });

    beforeEach(async () => {
        proxyAdmin = await DeployedContracts.ProxyAdmin.deployed();
        poolMigrator = await DeployedContracts.PoolMigratorV1.deployed();
    });

    it('should deploy and configure the pool migrator contract', async () => {
        expect(await proxyAdmin.getProxyAdmin(poolMigrator.address)).to.equal(proxyAdmin.address);

        expect(await poolMigrator.version()).to.equal(1);

        await expectRoleMembers(poolMigrator, Roles.Upgradeable.ROLE_ADMIN, [deployer]);
    });
});

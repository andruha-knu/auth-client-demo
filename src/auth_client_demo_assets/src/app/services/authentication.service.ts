import {AuthClient} from '@dfinity/auth-client';
import {canisterId, createActor} from '../../../../declarations/whoami';

export class AuthenticationService {

    static readonly MAX_TIME_TO_LIVE = 3600000000000 * 24;
    static readonly DFX_NETWORK_IC = 'ic';
    static readonly II_URL = 'https://identity.ic0.app/#authorize';

    private authClient;

    private whoamiActor;

    public async init(): Promise<any> {
        this.authClient = await AuthClient.create();
    }

    public async login(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.authClient.login({
                onSuccess: () => {
                    this.getIntermetDataIdentity()
                        .then(internetIdentity => resolve(internetIdentity))
                        .catch(error => reject(error));
                },
                onError: (error) => {
                    reject(error);
                },
                identityProvider: process.env.DFX_NETWORK === AuthenticationService.DFX_NETWORK_IC
                    ? AuthenticationService.II_URL
                    : process.env.LOCAL_II_CANISTER,
                maxTimeToLive: AuthenticationService.MAX_TIME_TO_LIVE
            });
        });
    }

    public async getIntermetDataIdentity() {
        const identity = await this.authClient.getIdentity();
        this.whoamiActor = createActor(canisterId as string, {
            agentOptions: {
                identity
            }
        });

        return identity;
    }

    public async getInternetIdentity() {
        const identity = await this.whoamiActor.whoami();

        return identity.toString();
    }

    public async logout(): Promise<any> {
        return await this.authClient.logout();
    }
}

export const authenticationService: AuthenticationService = new AuthenticationService();


import Dexie, { Table } from "dexie"

export interface OPSTIDProfileData{
    id: string;
    name: string;
    lastUpdated: string; // YYYY-MM-DDTHH:mm:ssz
}

export interface OPSTIDFollowingProfileData{
    id: string;
    nam: string;
    lastUpdated: string;
    followedBy: string;
}

export interface OPSTIDProfilesConfigData{
    id: string;
    config: any;
}

export class OPSTIDProfileDataDexie extends Dexie{
    myProfiles!: Table<OPSTIDProfileData>;
    followings!: Table<OPSTIDProfileData>;
    config!: Table<OPSTIDProfilesConfigData>;

    constructor(){
        super("opstid-db:@p")
        this.version(1).stores({
            myProfiles: "id,name,lastUpdated",
            followings: "id,name,lastUpdated,followedBy",
            config: "id, config"
        })
    }
}

export const db = new OPSTIDProfileDataDexie()
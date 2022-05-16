import ConfigType from './config-type';

export default interface Config {
    name: string;
    type: ConfigType;
    items: Config[]
}
import ConfigType from './config-type';
import ControlType from './control-type';
import ContainerConfig from './container-config';
import TableConfig from './table-config';

export default interface Config {
    name?: string;
    type: ConfigType;
    items?: Config[];
    controlType: ControlType;
    containerConfig?: ContainerConfig;
    tableConfig?: TableConfig;
}
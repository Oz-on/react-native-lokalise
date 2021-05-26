import { NativeModules } from 'react-native';

type LokaliseType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Lokalise } = NativeModules;

export default Lokalise as LokaliseType;

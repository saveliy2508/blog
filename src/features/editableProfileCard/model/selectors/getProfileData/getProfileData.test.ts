import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return value', () => {
        const data = {
            first: 'Савелий',
            lastname: 'Вольский',
            age: 23,
            currency: Currency.USD,
            country: Country.RUSSIA,
            city: 'Saint-Petersburg',
            username: 'admin',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});

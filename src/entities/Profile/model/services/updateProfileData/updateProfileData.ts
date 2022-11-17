import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from 'entities/Profile';
import { Profile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
    >(
        'profile/updateProfileData',
        async (_, ThunkApi) => {
            const { extra, rejectWithValue, getState } = ThunkApi;

            const formData = getProfileForm(getState());

            try {
                const response = await extra.api.put<Profile>('/profile', formData);

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );

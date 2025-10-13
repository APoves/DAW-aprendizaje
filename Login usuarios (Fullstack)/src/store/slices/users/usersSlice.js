import { createSlice } from "@reduxjs/toolkit";


export const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: '',
    admin: false,
}
const initialErrors = {
    username: '',
    password: '',
    email: '',
}

export const usersSlice = createSlice()({
    name: 'users',
    initialState: {
        users: [],
        userSelected: initialUserForm,
        visibleForm: false,
        errors: initialErrors,
    },
    reducers: {
        addUser: (state, action) => {
            state.users = [
                ...state.userSlice,
                {
                    ...action.payload,
                }
            ];
            state.userSelected = initialUserForm;
            state.visibleForm = false;

        },
        removeUser: (state, action) => {
            state.users = state.users.filter (user => user.id !== action.payload)
        },
        updateUser: (state, action) => {
            state.users = state.users.map ( u => {
                if ( u.id === action.payload.id) {
                    return {
                        ...action.payload,
                    };
                }
                return u;
            });
            state.userSelected = initialUserForm;
            state.visibleForm = false;
        },
        loadingUsers: (state,action) => {
            state.users = action.payload
        },
        OnUserSelectedForm: (state, action) => {
            state.userSelected = action.payload;
            state.visibleForm = true;
        },
        OnOpenForm: (state, action) => {
            state.visibleForm = true;
        },
        OnCloseForm: (state, action) => {
            state.visibleForm = false;
            state.userSelected = initialUserForm;
        }
    }
});

export const {
    addUser,
    removeUser,
    updateUser,
    loadingUsers,
    OnUserSelectedForm,
    OnOpenForm,
    OnCloseForm
} = usersSlice.actions;
import { configureStore } from "@reduxjs/toolkit";
// import projectApi from "./Slice/apiProjectSlice";
import { projectApi } from "./Slice/apiProjectSlice";

export const store = configureStore({
    reducer:{
        projects:projectApi,
        [projectApi.reducerPath]:projectApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
          .concat(projectApi.middleware)
})
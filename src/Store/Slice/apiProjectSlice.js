import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectApi = createApi({
    reducerPath: 'projectApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005', // Corrected base URL format
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem('authToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({

        // getProjects: builder.query({
        //     query: () => '/project',
        //     providesTags: [{ data: 'project' }]
        // }),
        getProject: builder.query({
            query: () => '/project',
            providesTags: [{ data: 'Project' }],
          }),

          addProject: builder.mutation({
            query: (newProject) => ({
                url: '/project',
                method: 'POST',
                body: newProject,
            }),
            invalidatesTags: [{ data: 'project' }]
        }),

        updateStatus: builder.mutation({
            query: ({ id, updatedProjectDetails }) => ({
                url: `/project/${id}/status`,
                method: 'PATCH',
                body: updatedProjectDetails,
            }),
            invalidatesTags: [{ data: 'project' }]
        }),
        // updateStatus: builder.mutation({
        //     query: ({ id, updateStatus }) => ({
        //         url: '/project/${id}/status',
        //         method: 'PATCH',
        //         body: updateStatus,
        //     }),
            // invalidatesTags: [{ data: 'project' }]
        // }),

        getStatusAndCount: builder.query({
            query: () => '/project/status-count',
            providesTags: [{ data: 'Project' }],
        }),

        deptTotalVsClosed: builder.query({
            query: () => '/project/department-status-count',
            providesTags: [{ data: 'project' }],
        }),
    }),
});

export const {
    useGetProjectQuery,
    useAddProjectMutation,
    useUpdateStatusMutation, 
    useGetStatusAndCountQuery,
    useDeptTotalVsClosedQuery
} = projectApi;

// export default projectApi;

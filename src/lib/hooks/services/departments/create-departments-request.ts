import { createDepartment, CreateDepartmentDTO } from "@/controllers/departments/create-departments";
import { useMutation } from "@tanstack/react-query";

export const useCreateDepartments = () => {
    const createDepartmentMutation = useMutation({
        mutationFn: createDepartment, 
        onError: (error) => {
            console.error("Error creating department:", error);
        },
        onSuccess: (data) => {
            console.log("Department created successfully:", data);
        },
    });

    const execute = async (data: CreateDepartmentDTO) => {
        await createDepartmentMutation.mutateAsync(data);
    };

    return {
        execute,
        isLoading: createDepartmentMutation.isPending,
        isError: createDepartmentMutation.isError,
        isSuccess: createDepartmentMutation.isSuccess,
        error: createDepartmentMutation.error,
    };
};

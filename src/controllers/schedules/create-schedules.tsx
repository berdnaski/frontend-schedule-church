import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createScheduleSchema = z.object({
    name: z.string().min(1, "Nome obrigatório"),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Data inválida",
    }),
    time: z.string().refine((val) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(val), {
        message: "Invalid time format",
    }),
      departmentId: z.string().uuid(),
});

export type CreateScheduleDTO = z.infer<typeof createScheduleSchema>;
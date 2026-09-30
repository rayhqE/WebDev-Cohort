import { z } from "zod";

export const todoValidationSchema = z.object({
  id: z.string().describe("Id pf the todo"),
  title: z.string().describe("title of the todo"),
  description: z.string().optional().describe("description of the todo"),
  isCompleted: z
    .boolean()
    .default(false)
    .describe("if the todo item is completed or not"),
});

export type Todo = z.infer<typeof todoValidationSchema>;

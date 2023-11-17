import { ICrudService } from '@/backend/interfaces/crud-service-interface';
import prisma from '@/lib/prisma';
import { JobPosition } from "@prisma/client";


const CareerService: ICrudService<JobPosition> = {
    getAll: async () => {
        return await prisma.jobPosition.findMany();
    },
    getOne: async (id: number) => {
        const result = await prisma.jobPosition.findUnique({
            where: {
                id: id
            }
        });
        if (!result) {
            throw new Error(`Job position with id ${id} not found`);
        }
        return result;
    },
    create: async (item: JobPosition) => {
        console.log(`Job Position to Create:${JSON.stringify(item)}`);
        const respose = await prisma.jobPosition.create({
            data: item
        });
        return respose;
    },
    update: async (id: number, item: JobPosition) => {
        return await prisma.jobPosition.update({
            where: {
                id: id
            },
            data: item
        });
    },
    delete: async (id: number) => {
        return await prisma.jobPosition.delete({
            where: {
                id: id
            }
        });
    }

};

export default CareerService;
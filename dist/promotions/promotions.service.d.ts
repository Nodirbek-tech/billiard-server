import { PrismaService } from '../prisma/prisma.service';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
export declare class PromotionsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreatePromotionDto): Promise<{
        title: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        message: string;
        active: boolean;
    }>;
    findAll(activeOnly?: boolean): Promise<({
        _count: {
            sendLogs: number;
        };
    } & {
        title: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        message: string;
        active: boolean;
    })[]>;
    findOne(id: number): Promise<{
        _count: {
            sendLogs: number;
        };
    } & {
        title: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        message: string;
        active: boolean;
    }>;
    update(id: number, dto: UpdatePromotionDto): Promise<{
        title: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        message: string;
        active: boolean;
    }>;
    remove(id: number): Promise<{
        title: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        message: string;
        active: boolean;
    }>;
    getActiveForBot(): Promise<{
        title: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        message: string;
        active: boolean;
    }[]>;
}

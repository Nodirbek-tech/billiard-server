import { PromotionsService } from './promotions.service';
import { TelegramService } from '../telegram/telegram.service';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
export declare class PromotionsController {
    private promotions;
    private telegram;
    constructor(promotions: PromotionsService, telegram: TelegramService);
    create(dto: CreatePromotionDto): Promise<{
        title: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        message: string;
        active: boolean;
    }>;
    findAll(active?: string): Promise<({
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
    broadcast(id: number): Promise<{
        sent: number;
    }>;
}

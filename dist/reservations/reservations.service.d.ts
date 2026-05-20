import { PrismaService } from '../prisma/prisma.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationStatusDto } from './dto/update-reservation-status.dto';
import { ReservationStatus } from '@prisma/client';
export declare class ReservationsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateReservationDto): Promise<{
        customer: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            phone: string;
            cardNumber: string;
            telegramId: string | null;
            qrCodeValue: string | null;
            bonusBalance: number;
            telegramUsername: string | null;
        };
    } & {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.ReservationStatus;
        customerId: number | null;
        date: Date;
        phone: string;
        peopleCount: number;
        note: string | null;
    }>;
    findAll(status?: ReservationStatus): Promise<({
        customer: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            phone: string;
            cardNumber: string;
            telegramId: string | null;
            qrCodeValue: string | null;
            bonusBalance: number;
            telegramUsername: string | null;
        };
    } & {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.ReservationStatus;
        customerId: number | null;
        date: Date;
        phone: string;
        peopleCount: number;
        note: string | null;
    })[]>;
    findOne(id: number): Promise<{
        customer: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            phone: string;
            cardNumber: string;
            telegramId: string | null;
            qrCodeValue: string | null;
            bonusBalance: number;
            telegramUsername: string | null;
        };
    } & {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.ReservationStatus;
        customerId: number | null;
        date: Date;
        phone: string;
        peopleCount: number;
        note: string | null;
    }>;
    findByCustomer(customerId: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.ReservationStatus;
        customerId: number | null;
        date: Date;
        phone: string;
        peopleCount: number;
        note: string | null;
    }[]>;
    updateStatus(id: number, dto: UpdateReservationStatusDto): Promise<{
        customer: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            phone: string;
            cardNumber: string;
            telegramId: string | null;
            qrCodeValue: string | null;
            bonusBalance: number;
            telegramUsername: string | null;
        };
    } & {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.ReservationStatus;
        customerId: number | null;
        date: Date;
        phone: string;
        peopleCount: number;
        note: string | null;
    }>;
    remove(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.ReservationStatus;
        customerId: number | null;
        date: Date;
        phone: string;
        peopleCount: number;
        note: string | null;
    }>;
}

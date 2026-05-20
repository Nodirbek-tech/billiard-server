"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ReservationsService = class ReservationsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        return this.prisma.reservation.create({
            data: {
                name: dto.name,
                phone: dto.phone,
                date: new Date(dto.date),
                peopleCount: dto.peopleCount,
                note: dto.note ?? null,
                customerId: dto.customerId ?? null,
            },
            include: { customer: true },
        });
    }
    async findAll(status) {
        return this.prisma.reservation.findMany({
            where: status ? { status } : {},
            orderBy: { date: 'asc' },
            include: { customer: true },
        });
    }
    async findOne(id) {
        const r = await this.prisma.reservation.findUnique({
            where: { id },
            include: { customer: true },
        });
        if (!r)
            throw new common_1.NotFoundException('Bron topilmadi');
        return r;
    }
    async findByCustomer(customerId) {
        return this.prisma.reservation.findMany({
            where: { customerId },
            orderBy: { date: 'desc' },
            take: 10,
        });
    }
    async updateStatus(id, dto) {
        await this.findOne(id);
        return this.prisma.reservation.update({
            where: { id },
            data: { status: dto.status },
            include: { customer: true },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.reservation.delete({ where: { id } });
    }
};
exports.ReservationsService = ReservationsService;
exports.ReservationsService = ReservationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReservationsService);
//# sourceMappingURL=reservations.service.js.map
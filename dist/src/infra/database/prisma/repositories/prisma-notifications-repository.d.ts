import { Notification } from "src/application/entities/notification";
import { NotificationsRepository } from "../../../../application/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";
export declare class PrismaNotificationsRepository implements NotificationsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findManyByRecipientId(recipientId: string): Promise<Notification[]>;
    findById(notificationId: string): Promise<Notification | null>;
    countManyByRecipientId(recipientId: string): Promise<number>;
    create(notification: Notification): Promise<void>;
    save(notification: Notification): Promise<void>;
}

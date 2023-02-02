import { CancelNotification } from "src/use-cases/cancel-notification";
import { CountRecipientNotifications } from "src/use-cases/count-recipient-notifications";
import { GetRecipientNotifications } from "src/use-cases/get-recipient-notifications";
import { ReadNotification } from "src/use-cases/read-notification";
import { SendNotification } from "src/use-cases/send-notification";
import { UnreadNotification } from "src/use-cases/unread-notification";
import { CreateNotificationBody } from "../dtos/create-notification-body";
export declare class NotificationsController {
    private sendNotification;
    private cancelNotification;
    private readNotification;
    private unreadNotification;
    private countRecipientNotifications;
    private getRecipientNotifications;
    constructor(sendNotification: SendNotification, cancelNotification: CancelNotification, readNotification: ReadNotification, unreadNotification: UnreadNotification, countRecipientNotifications: CountRecipientNotifications, getRecipientNotifications: GetRecipientNotifications);
    cancel(id: string): Promise<void>;
    countFromRecipient(recipientId: string): Promise<{
        count: number;
    }>;
    getFromRecipient(recipientId: string): Promise<{
        notifications: {
            id: string;
            content: import("../../../application/entities/content").Content;
            category: string;
            recipientId: string;
        }[];
    }>;
    read(id: string): Promise<void>;
    unread(id: string): Promise<void>;
    create(body: CreateNotificationBody): Promise<{
        notification: {
            id: string;
            content: import("../../../application/entities/content").Content;
            category: string;
            recipientId: string;
        };
    }>;
}

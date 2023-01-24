import { SendNotification } from 'src/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
export declare class NotificationsController {
    private sendNotification;
    constructor(sendNotification: SendNotification);
    create(body: CreateNotificationBody): Promise<{
        notification: {
            id: string;
            content: import("../../../application/entities/content").Content;
            category: string;
            recipientId: string;
        };
    }>;
}

import { Notification } from '@application/entities/notification';
export declare class NotificationViewModel {
    static toHTTP(notification: Notification): {
        id: string;
        content: import("../../../application/entities/content").Content;
        category: string;
        recipientId: string;
    };
}

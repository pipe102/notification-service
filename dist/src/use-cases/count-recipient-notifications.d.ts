import { NotificationsRepository } from '../application/repositories/notifications-repository';
interface CountRecipientNotificationsRequest {
    recipientId: string;
}
interface CountRecipientNotificationsResponse {
    count: number;
}
export declare class CountRecipientNotifications {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(request: CountRecipientNotificationsRequest): Promise<CountRecipientNotificationsResponse>;
}
export {};

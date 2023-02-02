import { Module } from "@nestjs/common";
import { CancelNotification } from "src/use-cases/cancel-notification";
import { CountRecipientNotifications } from "src/use-cases/count-recipient-notifications";
import { GetRecipientNotifications } from "src/use-cases/get-recipient-notifications";
import { ReadNotification } from "src/use-cases/read-notification";
import { SendNotification } from "src/use-cases/send-notification";
import { UnreadNotification } from "src/use-cases/unread-notification";
import { DatabaseModule } from "./database/database.module";
import { NotificationsController } from "./http/controllers/notifications.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}

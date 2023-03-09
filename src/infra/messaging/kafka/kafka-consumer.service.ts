import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: "notifications",
        brokers: ["bright-baboon-6279-eu1-kafka.upstash.io:9092"],
        sasl: {
          mechanism: "scram-sha-256",
          username: `${process.env.KAFKA_USERNAME}`,
          password: `${process.env.KAFKA_PASSWORD}`,
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
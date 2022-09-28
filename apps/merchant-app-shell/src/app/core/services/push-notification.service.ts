import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { DummyService } from './dummy.service';

@Injectable({
  providedIn: 'root',
})
export class PushNotificationService {
  readonly VAPID_PUBLIC_KEY =
    'BNUBx0ebWIm4UqvZ2_lMHwQnXVnzFy1nTDy98ROo6BVjhUWsxrXzvNM7D7kQqb-086NkYV2U5XZMvRtIgqdPvWg';

  subscription!: PushSubscription;

  constructor(private swPush: SwPush, private dummyService: DummyService) {}

  subscribeToNotifications() {
    this.swPush
      .requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY,
      })
      .then((sub) => {
        this.subscription = sub;
        console.log('Notification Subscription: ', sub);
        this.dummyService.addPushSubscriber(sub).subscribe({
          next: () => console.log('Sent push subscription object to server.'),
          error: (err) =>
            console.log(
              'Could not send subscription object to server, reason: ',
              err
            ),
        });
      })
      .catch((err) =>
        console.error('Could not subscribe to notifications', err)
      );
  }
}

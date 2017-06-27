// Type definitions for rx-lite-testing 4.0
// Project: https://github.com/Reactive-Extensions/RxJS
// Definitions by: Igor Oleinikov <https://github.com/Igorbek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../rx-lite-virtualtime/index.d.ts" />

declare namespace Rx {
    export interface TestScheduler extends VirtualTimeScheduler<number, number> {
        createColdObservable<T>(...records: Recorded[]): Observable<T>;
        createHotObservable<T>(...records: Recorded[]): Observable<T>;
        createObserver<T>(): MockObserver<T>;

        startWithTiming<T>(create: () => Observable<T>, createdAt: number, subscribedAt: number, disposedAt: number): MockObserver<T>;
        startWithDispose<T>(create: () => Observable<T>, disposedAt: number): MockObserver<T>;
        startWithCreate<T>(create: () => Observable<T>): MockObserver<T>;
    }

    export var TestScheduler: {
        new (): TestScheduler;
    };

    export class Recorded {
        constructor(time: number, value: any, equalityComparer?: (x: any, y: any) => boolean);
        equals(other: Recorded): boolean;
        toString(): string;
        time: number;
        value: any;
    }

    export var ReactiveTest: {
        created: number;
        subscribed: number;
        disposed: number;

        onNext(ticks: number, value: any): Recorded;
        onError(ticks: number, exception: any): Recorded;
        onCompleted(ticks: number): Recorded;

        subscribe(subscribeAt: number, unsubscribeAt?: number): Subscription;
    };

    export class Subscription {
        constructor(subscribeAt: number, unsubscribeAt?: number);
        equals(other: Subscription): boolean;
    }

    export interface MockObserver<T> extends Observer<T> {
        messages: Recorded[];
    }

    interface MockObserverStatic extends ObserverStatic {
        new <T>(scheduler: IScheduler): MockObserver<T>;
    }

    export var MockObserver: MockObserverStatic;
}

declare module "rx-lite-testing" {
    export = Rx;
}
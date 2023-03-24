import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerTutorials = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tutorials, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly uri?: string | null;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTutorials = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tutorials, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly uri?: string | null;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Tutorials = LazyLoading extends LazyLoadingDisabled ? EagerTutorials : LazyTutorials

export declare const Tutorials: (new (init: ModelInit<Tutorials>) => Tutorials) & {
  copyOf(source: Tutorials, mutator: (draft: MutableModel<Tutorials>) => MutableModel<Tutorials> | void): Tutorials;
}

type EagerLinks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Links, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly uri?: string | null;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLinks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Links, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly uri?: string | null;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Links = LazyLoading extends LazyLoadingDisabled ? EagerLinks : LazyLinks

export declare const Links: (new (init: ModelInit<Links>) => Links) & {
  copyOf(source: Links, mutator: (draft: MutableModel<Links>) => MutableModel<Links> | void): Links;
}

type EagerReservations = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reservations, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly studentName?: string | null;
  readonly studentEmai?: string | null;
  readonly date?: string | null;
  readonly startTime?: string | null;
  readonly room?: string | null;
  readonly hrBlock?: number | null;
  readonly nbrParticipants?: number | null;
  readonly course?: string | null;
  readonly teacher?: string | null;
  readonly userID: string;
  readonly endTime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReservations = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reservations, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly studentName?: string | null;
  readonly studentEmai?: string | null;
  readonly date?: string | null;
  readonly startTime?: string | null;
  readonly room?: string | null;
  readonly hrBlock?: number | null;
  readonly nbrParticipants?: number | null;
  readonly course?: string | null;
  readonly teacher?: string | null;
  readonly userID: string;
  readonly endTime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Reservations = LazyLoading extends LazyLoadingDisabled ? EagerReservations : LazyReservations

export declare const Reservations: (new (init: ModelInit<Reservations>) => Reservations) & {
  copyOf(source: Reservations, mutator: (draft: MutableModel<Reservations>) => MutableModel<Reservations> | void): Reservations;
}

type EagerTimes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Times, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly time?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTimes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Times, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly time?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Times = LazyLoading extends LazyLoadingDisabled ? EagerTimes : LazyTimes

export declare const Times: (new (init: ModelInit<Times>) => Times) & {
  copyOf(source: Times, mutator: (draft: MutableModel<Times>) => MutableModel<Times> | void): Times;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly sub: string;
  readonly Reservations?: (Reservations | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly sub: string;
  readonly Reservations: AsyncCollection<Reservations>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerBlocks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blocks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly hour: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBlocks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blocks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly hour: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Blocks = LazyLoading extends LazyLoadingDisabled ? EagerBlocks : LazyBlocks

export declare const Blocks: (new (init: ModelInit<Blocks>) => Blocks) & {
  copyOf(source: Blocks, mutator: (draft: MutableModel<Blocks>) => MutableModel<Blocks> | void): Blocks;
}

type EagerRooms = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rooms, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly room: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRooms = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rooms, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly room: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Rooms = LazyLoading extends LazyLoadingDisabled ? EagerRooms : LazyRooms

export declare const Rooms: (new (init: ModelInit<Rooms>) => Rooms) & {
  copyOf(source: Rooms, mutator: (draft: MutableModel<Rooms>) => MutableModel<Rooms> | void): Rooms;
}

type EagerDates = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dates, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDates = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dates, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Dates = LazyLoading extends LazyLoadingDisabled ? EagerDates : LazyDates

export declare const Dates: (new (init: ModelInit<Dates>) => Dates) & {
  copyOf(source: Dates, mutator: (draft: MutableModel<Dates>) => MutableModel<Dates> | void): Dates;
}
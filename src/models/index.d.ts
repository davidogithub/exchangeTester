import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerFollowers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Followers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly untitledfield?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFollowers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Followers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly untitledfield?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Followers = LazyLoading extends LazyLoadingDisabled ? EagerFollowers : LazyFollowers

export declare const Followers: (new (init: ModelInit<Followers>) => Followers) & {
  copyOf(source: Followers, mutator: (draft: MutableModel<Followers>) => MutableModel<Followers> | void): Followers;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly email?: string | null;
  readonly songlist?: (string | null)[] | null;
  readonly songofday?: string | null;
  readonly followers?: (string | null)[] | null;
  readonly Followers?: (Followers | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly email?: string | null;
  readonly songlist?: (string | null)[] | null;
  readonly songofday?: string | null;
  readonly followers?: (string | null)[] | null;
  readonly Followers: AsyncCollection<Followers>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}
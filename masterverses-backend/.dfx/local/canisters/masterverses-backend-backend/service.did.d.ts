import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'addPicture' : ActorMethod<
    [
      string,
      Uint8Array | number[],
      [] | [string],
      [] | [string],
      [] | [string],
      [] | [string],
    ],
    string
  >,
  'getFeaturedEvents' : ActorMethod<
    [],
    Array<
      {
        'id' : string,
        'date' : [] | [string],
        'name' : string,
        'description' : [] | [string],
        'ipfsUrl' : [] | [string],
        'location' : [] | [string],
      }
    >
  >,
  'getFourPicsFullDetails' : ActorMethod<
    [],
    Array<
      {
        'id' : string,
        'date' : [] | [string],
        'description' : [] | [string],
        'image' : Uint8Array | number[],
        'price' : [] | [string],
        'ipfsUrl' : [] | [string],
        'location' : [] | [string],
      }
    >
  >,
  'getNearbyPlaces' : ActorMethod<
    [],
    Array<
      {
        'id' : string,
        'date' : [] | [string],
        'name' : string,
        'description' : [] | [string],
        'price' : [] | [string],
        'ipfsUrl' : [] | [string],
        'location' : [] | [string],
      }
    >
  >,
  'getSixPicsWithNames' : ActorMethod<
    [],
    Array<
      {
        'id' : string,
        'name' : string,
        'image' : Uint8Array | number[],
        'ipfsUrl' : [] | [string],
      }
    >
  >,
  'getThreePics' : ActorMethod<
    [],
    Array<{ 'id' : string, 'image' : Uint8Array | number[] }>
  >,
  'getThreePicsWithDetails' : ActorMethod<
    [],
    Array<
      {
        'id' : string,
        'date' : [] | [string],
        'description' : [] | [string],
        'image' : Uint8Array | number[],
        'price' : [] | [string],
        'ipfsUrl' : [] | [string],
        'location' : [] | [string],
      }
    >
  >,
  'getTopOrgs' : ActorMethod<
    [],
    Array<{ 'name' : string, 'ipfsUrl' : [] | [string] }>
  >,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];

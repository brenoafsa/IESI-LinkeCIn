
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model StudentRecord
 * 
 */
export type StudentRecord = $Result.DefaultSelection<Prisma.$StudentRecordPayload>
/**
 * Model TeacherRecord
 * 
 */
export type TeacherRecord = $Result.DefaultSelection<Prisma.$TeacherRecordPayload>
/**
 * Model OpportunityPost
 * 
 */
export type OpportunityPost = $Result.DefaultSelection<Prisma.$OpportunityPostPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  STUDENT: 'STUDENT',
  TEACHER: 'TEACHER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const OpportunityTypes: {
  EXTENSION: 'EXTENSION',
  COMPLEMENTARY: 'COMPLEMENTARY'
};

export type OpportunityTypes = (typeof OpportunityTypes)[keyof typeof OpportunityTypes]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type OpportunityTypes = $Enums.OpportunityTypes

export const OpportunityTypes: typeof $Enums.OpportunityTypes

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentRecord`: Exposes CRUD operations for the **StudentRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentRecords
    * const studentRecords = await prisma.studentRecord.findMany()
    * ```
    */
  get studentRecord(): Prisma.StudentRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacherRecord`: Exposes CRUD operations for the **TeacherRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeacherRecords
    * const teacherRecords = await prisma.teacherRecord.findMany()
    * ```
    */
  get teacherRecord(): Prisma.TeacherRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.opportunityPost`: Exposes CRUD operations for the **OpportunityPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OpportunityPosts
    * const opportunityPosts = await prisma.opportunityPost.findMany()
    * ```
    */
  get opportunityPost(): Prisma.OpportunityPostDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    StudentRecord: 'StudentRecord',
    TeacherRecord: 'TeacherRecord',
    OpportunityPost: 'OpportunityPost'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "studentRecord" | "teacherRecord" | "opportunityPost"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      StudentRecord: {
        payload: Prisma.$StudentRecordPayload<ExtArgs>
        fields: Prisma.StudentRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRecordPayload>
          }
          findFirst: {
            args: Prisma.StudentRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRecordPayload>
          }
          findMany: {
            args: Prisma.StudentRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRecordPayload>[]
          }
          create: {
            args: Prisma.StudentRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRecordPayload>
          }
          createMany: {
            args: Prisma.StudentRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRecordPayload>[]
          }
          delete: {
            args: Prisma.StudentRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRecordPayload>
          }
          update: {
            args: Prisma.StudentRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRecordPayload>
          }
          deleteMany: {
            args: Prisma.StudentRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRecordPayload>[]
          }
          upsert: {
            args: Prisma.StudentRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRecordPayload>
          }
          aggregate: {
            args: Prisma.StudentRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentRecord>
          }
          groupBy: {
            args: Prisma.StudentRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentRecordCountArgs<ExtArgs>
            result: $Utils.Optional<StudentRecordCountAggregateOutputType> | number
          }
        }
      }
      TeacherRecord: {
        payload: Prisma.$TeacherRecordPayload<ExtArgs>
        fields: Prisma.TeacherRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherRecordPayload>
          }
          findFirst: {
            args: Prisma.TeacherRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherRecordPayload>
          }
          findMany: {
            args: Prisma.TeacherRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherRecordPayload>[]
          }
          create: {
            args: Prisma.TeacherRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherRecordPayload>
          }
          createMany: {
            args: Prisma.TeacherRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherRecordPayload>[]
          }
          delete: {
            args: Prisma.TeacherRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherRecordPayload>
          }
          update: {
            args: Prisma.TeacherRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherRecordPayload>
          }
          deleteMany: {
            args: Prisma.TeacherRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherRecordPayload>[]
          }
          upsert: {
            args: Prisma.TeacherRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherRecordPayload>
          }
          aggregate: {
            args: Prisma.TeacherRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacherRecord>
          }
          groupBy: {
            args: Prisma.TeacherRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherRecordCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherRecordCountAggregateOutputType> | number
          }
        }
      }
      OpportunityPost: {
        payload: Prisma.$OpportunityPostPayload<ExtArgs>
        fields: Prisma.OpportunityPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpportunityPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpportunityPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPostPayload>
          }
          findFirst: {
            args: Prisma.OpportunityPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpportunityPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPostPayload>
          }
          findMany: {
            args: Prisma.OpportunityPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPostPayload>[]
          }
          create: {
            args: Prisma.OpportunityPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPostPayload>
          }
          createMany: {
            args: Prisma.OpportunityPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpportunityPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPostPayload>[]
          }
          delete: {
            args: Prisma.OpportunityPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPostPayload>
          }
          update: {
            args: Prisma.OpportunityPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPostPayload>
          }
          deleteMany: {
            args: Prisma.OpportunityPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpportunityPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OpportunityPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPostPayload>[]
          }
          upsert: {
            args: Prisma.OpportunityPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPostPayload>
          }
          aggregate: {
            args: Prisma.OpportunityPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpportunityPost>
          }
          groupBy: {
            args: Prisma.OpportunityPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpportunityPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpportunityPostCountArgs<ExtArgs>
            result: $Utils.Optional<OpportunityPostCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    studentRecord?: StudentRecordOmit
    teacherRecord?: TeacherRecordOmit
    opportunityPost?: OpportunityPostOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    publishedPosts: number
    appliedPosts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publishedPosts?: boolean | UserCountOutputTypeCountPublishedPostsArgs
    appliedPosts?: boolean | UserCountOutputTypeCountAppliedPostsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPublishedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpportunityPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppliedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpportunityPostWhereInput
  }


  /**
   * Count Type OpportunityPostCountOutputType
   */

  export type OpportunityPostCountOutputType = {
    candidates: number
  }

  export type OpportunityPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | OpportunityPostCountOutputTypeCountCandidatesArgs
  }

  // Custom InputTypes
  /**
   * OpportunityPostCountOutputType without action
   */
  export type OpportunityPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityPostCountOutputType
     */
    select?: OpportunityPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OpportunityPostCountOutputType without action
   */
  export type OpportunityPostCountOutputTypeCountCandidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    email: string
    password: string
    role: $Enums.UserRole
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    studentRecord?: boolean | User$studentRecordArgs<ExtArgs>
    teacherRecord?: boolean | User$teacherRecordArgs<ExtArgs>
    publishedPosts?: boolean | User$publishedPostsArgs<ExtArgs>
    appliedPosts?: boolean | User$appliedPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentRecord?: boolean | User$studentRecordArgs<ExtArgs>
    teacherRecord?: boolean | User$teacherRecordArgs<ExtArgs>
    publishedPosts?: boolean | User$publishedPostsArgs<ExtArgs>
    appliedPosts?: boolean | User$appliedPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      studentRecord: Prisma.$StudentRecordPayload<ExtArgs> | null
      teacherRecord: Prisma.$TeacherRecordPayload<ExtArgs> | null
      publishedPosts: Prisma.$OpportunityPostPayload<ExtArgs>[]
      appliedPosts: Prisma.$OpportunityPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      password: string
      role: $Enums.UserRole
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentRecord<T extends User$studentRecordArgs<ExtArgs> = {}>(args?: Subset<T, User$studentRecordArgs<ExtArgs>>): Prisma__StudentRecordClient<$Result.GetResult<Prisma.$StudentRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    teacherRecord<T extends User$teacherRecordArgs<ExtArgs> = {}>(args?: Subset<T, User$teacherRecordArgs<ExtArgs>>): Prisma__TeacherRecordClient<$Result.GetResult<Prisma.$TeacherRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    publishedPosts<T extends User$publishedPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$publishedPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appliedPosts<T extends User$appliedPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$appliedPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.studentRecord
   */
  export type User$studentRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRecord
     */
    omit?: StudentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRecordInclude<ExtArgs> | null
    where?: StudentRecordWhereInput
  }

  /**
   * User.teacherRecord
   */
  export type User$teacherRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRecord
     */
    select?: TeacherRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRecord
     */
    omit?: TeacherRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRecordInclude<ExtArgs> | null
    where?: TeacherRecordWhereInput
  }

  /**
   * User.publishedPosts
   */
  export type User$publishedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityPost
     */
    select?: OpportunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunityPost
     */
    omit?: OpportunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityPostInclude<ExtArgs> | null
    where?: OpportunityPostWhereInput
    orderBy?: OpportunityPostOrderByWithRelationInput | OpportunityPostOrderByWithRelationInput[]
    cursor?: OpportunityPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpportunityPostScalarFieldEnum | OpportunityPostScalarFieldEnum[]
  }

  /**
   * User.appliedPosts
   */
  export type User$appliedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityPost
     */
    select?: OpportunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunityPost
     */
    omit?: OpportunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityPostInclude<ExtArgs> | null
    where?: OpportunityPostWhereInput
    orderBy?: OpportunityPostOrderByWithRelationInput | OpportunityPostOrderByWithRelationInput[]
    cursor?: OpportunityPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpportunityPostScalarFieldEnum | OpportunityPostScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model StudentRecord
   */

  export type AggregateStudentRecord = {
    _count: StudentRecordCountAggregateOutputType | null
    _avg: StudentRecordAvgAggregateOutputType | null
    _sum: StudentRecordSumAggregateOutputType | null
    _min: StudentRecordMinAggregateOutputType | null
    _max: StudentRecordMaxAggregateOutputType | null
  }

  export type StudentRecordAvgAggregateOutputType = {
    complementaryHours: number | null
  }

  export type StudentRecordSumAggregateOutputType = {
    complementaryHours: number | null
  }

  export type StudentRecordMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    complementaryHours: number | null
    course: string | null
    entrance: string | null
  }

  export type StudentRecordMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    complementaryHours: number | null
    course: string | null
    entrance: string | null
  }

  export type StudentRecordCountAggregateOutputType = {
    id: number
    studentId: number
    complementaryHours: number
    course: number
    entrance: number
    finishedSubjects: number
    _all: number
  }


  export type StudentRecordAvgAggregateInputType = {
    complementaryHours?: true
  }

  export type StudentRecordSumAggregateInputType = {
    complementaryHours?: true
  }

  export type StudentRecordMinAggregateInputType = {
    id?: true
    studentId?: true
    complementaryHours?: true
    course?: true
    entrance?: true
  }

  export type StudentRecordMaxAggregateInputType = {
    id?: true
    studentId?: true
    complementaryHours?: true
    course?: true
    entrance?: true
  }

  export type StudentRecordCountAggregateInputType = {
    id?: true
    studentId?: true
    complementaryHours?: true
    course?: true
    entrance?: true
    finishedSubjects?: true
    _all?: true
  }

  export type StudentRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentRecord to aggregate.
     */
    where?: StudentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentRecords to fetch.
     */
    orderBy?: StudentRecordOrderByWithRelationInput | StudentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentRecords
    **/
    _count?: true | StudentRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentRecordMaxAggregateInputType
  }

  export type GetStudentRecordAggregateType<T extends StudentRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentRecord[P]>
      : GetScalarType<T[P], AggregateStudentRecord[P]>
  }




  export type StudentRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentRecordWhereInput
    orderBy?: StudentRecordOrderByWithAggregationInput | StudentRecordOrderByWithAggregationInput[]
    by: StudentRecordScalarFieldEnum[] | StudentRecordScalarFieldEnum
    having?: StudentRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentRecordCountAggregateInputType | true
    _avg?: StudentRecordAvgAggregateInputType
    _sum?: StudentRecordSumAggregateInputType
    _min?: StudentRecordMinAggregateInputType
    _max?: StudentRecordMaxAggregateInputType
  }

  export type StudentRecordGroupByOutputType = {
    id: string
    studentId: string
    complementaryHours: number
    course: string
    entrance: string
    finishedSubjects: string[]
    _count: StudentRecordCountAggregateOutputType | null
    _avg: StudentRecordAvgAggregateOutputType | null
    _sum: StudentRecordSumAggregateOutputType | null
    _min: StudentRecordMinAggregateOutputType | null
    _max: StudentRecordMaxAggregateOutputType | null
  }

  type GetStudentRecordGroupByPayload<T extends StudentRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentRecordGroupByOutputType[P]>
            : GetScalarType<T[P], StudentRecordGroupByOutputType[P]>
        }
      >
    >


  export type StudentRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    complementaryHours?: boolean
    course?: boolean
    entrance?: boolean
    finishedSubjects?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentRecord"]>

  export type StudentRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    complementaryHours?: boolean
    course?: boolean
    entrance?: boolean
    finishedSubjects?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentRecord"]>

  export type StudentRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    complementaryHours?: boolean
    course?: boolean
    entrance?: boolean
    finishedSubjects?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentRecord"]>

  export type StudentRecordSelectScalar = {
    id?: boolean
    studentId?: boolean
    complementaryHours?: boolean
    course?: boolean
    entrance?: boolean
    finishedSubjects?: boolean
  }

  export type StudentRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "complementaryHours" | "course" | "entrance" | "finishedSubjects", ExtArgs["result"]["studentRecord"]>
  export type StudentRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudentRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudentRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudentRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentRecord"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      complementaryHours: number
      course: string
      entrance: string
      finishedSubjects: string[]
    }, ExtArgs["result"]["studentRecord"]>
    composites: {}
  }

  type StudentRecordGetPayload<S extends boolean | null | undefined | StudentRecordDefaultArgs> = $Result.GetResult<Prisma.$StudentRecordPayload, S>

  type StudentRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentRecordCountAggregateInputType | true
    }

  export interface StudentRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentRecord'], meta: { name: 'StudentRecord' } }
    /**
     * Find zero or one StudentRecord that matches the filter.
     * @param {StudentRecordFindUniqueArgs} args - Arguments to find a StudentRecord
     * @example
     * // Get one StudentRecord
     * const studentRecord = await prisma.studentRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentRecordFindUniqueArgs>(args: SelectSubset<T, StudentRecordFindUniqueArgs<ExtArgs>>): Prisma__StudentRecordClient<$Result.GetResult<Prisma.$StudentRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentRecordFindUniqueOrThrowArgs} args - Arguments to find a StudentRecord
     * @example
     * // Get one StudentRecord
     * const studentRecord = await prisma.studentRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentRecordClient<$Result.GetResult<Prisma.$StudentRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentRecordFindFirstArgs} args - Arguments to find a StudentRecord
     * @example
     * // Get one StudentRecord
     * const studentRecord = await prisma.studentRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentRecordFindFirstArgs>(args?: SelectSubset<T, StudentRecordFindFirstArgs<ExtArgs>>): Prisma__StudentRecordClient<$Result.GetResult<Prisma.$StudentRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentRecordFindFirstOrThrowArgs} args - Arguments to find a StudentRecord
     * @example
     * // Get one StudentRecord
     * const studentRecord = await prisma.studentRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentRecordClient<$Result.GetResult<Prisma.$StudentRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentRecords
     * const studentRecords = await prisma.studentRecord.findMany()
     * 
     * // Get first 10 StudentRecords
     * const studentRecords = await prisma.studentRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentRecordWithIdOnly = await prisma.studentRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentRecordFindManyArgs>(args?: SelectSubset<T, StudentRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentRecord.
     * @param {StudentRecordCreateArgs} args - Arguments to create a StudentRecord.
     * @example
     * // Create one StudentRecord
     * const StudentRecord = await prisma.studentRecord.create({
     *   data: {
     *     // ... data to create a StudentRecord
     *   }
     * })
     * 
     */
    create<T extends StudentRecordCreateArgs>(args: SelectSubset<T, StudentRecordCreateArgs<ExtArgs>>): Prisma__StudentRecordClient<$Result.GetResult<Prisma.$StudentRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentRecords.
     * @param {StudentRecordCreateManyArgs} args - Arguments to create many StudentRecords.
     * @example
     * // Create many StudentRecords
     * const studentRecord = await prisma.studentRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentRecordCreateManyArgs>(args?: SelectSubset<T, StudentRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentRecords and returns the data saved in the database.
     * @param {StudentRecordCreateManyAndReturnArgs} args - Arguments to create many StudentRecords.
     * @example
     * // Create many StudentRecords
     * const studentRecord = await prisma.studentRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentRecords and only return the `id`
     * const studentRecordWithIdOnly = await prisma.studentRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentRecord.
     * @param {StudentRecordDeleteArgs} args - Arguments to delete one StudentRecord.
     * @example
     * // Delete one StudentRecord
     * const StudentRecord = await prisma.studentRecord.delete({
     *   where: {
     *     // ... filter to delete one StudentRecord
     *   }
     * })
     * 
     */
    delete<T extends StudentRecordDeleteArgs>(args: SelectSubset<T, StudentRecordDeleteArgs<ExtArgs>>): Prisma__StudentRecordClient<$Result.GetResult<Prisma.$StudentRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentRecord.
     * @param {StudentRecordUpdateArgs} args - Arguments to update one StudentRecord.
     * @example
     * // Update one StudentRecord
     * const studentRecord = await prisma.studentRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentRecordUpdateArgs>(args: SelectSubset<T, StudentRecordUpdateArgs<ExtArgs>>): Prisma__StudentRecordClient<$Result.GetResult<Prisma.$StudentRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentRecords.
     * @param {StudentRecordDeleteManyArgs} args - Arguments to filter StudentRecords to delete.
     * @example
     * // Delete a few StudentRecords
     * const { count } = await prisma.studentRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentRecordDeleteManyArgs>(args?: SelectSubset<T, StudentRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentRecords
     * const studentRecord = await prisma.studentRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentRecordUpdateManyArgs>(args: SelectSubset<T, StudentRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentRecords and returns the data updated in the database.
     * @param {StudentRecordUpdateManyAndReturnArgs} args - Arguments to update many StudentRecords.
     * @example
     * // Update many StudentRecords
     * const studentRecord = await prisma.studentRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentRecords and only return the `id`
     * const studentRecordWithIdOnly = await prisma.studentRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentRecord.
     * @param {StudentRecordUpsertArgs} args - Arguments to update or create a StudentRecord.
     * @example
     * // Update or create a StudentRecord
     * const studentRecord = await prisma.studentRecord.upsert({
     *   create: {
     *     // ... data to create a StudentRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentRecord we want to update
     *   }
     * })
     */
    upsert<T extends StudentRecordUpsertArgs>(args: SelectSubset<T, StudentRecordUpsertArgs<ExtArgs>>): Prisma__StudentRecordClient<$Result.GetResult<Prisma.$StudentRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentRecordCountArgs} args - Arguments to filter StudentRecords to count.
     * @example
     * // Count the number of StudentRecords
     * const count = await prisma.studentRecord.count({
     *   where: {
     *     // ... the filter for the StudentRecords we want to count
     *   }
     * })
    **/
    count<T extends StudentRecordCountArgs>(
      args?: Subset<T, StudentRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentRecordAggregateArgs>(args: Subset<T, StudentRecordAggregateArgs>): Prisma.PrismaPromise<GetStudentRecordAggregateType<T>>

    /**
     * Group by StudentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentRecordGroupByArgs['orderBy'] }
        : { orderBy?: StudentRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentRecord model
   */
  readonly fields: StudentRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentRecord model
   */
  interface StudentRecordFieldRefs {
    readonly id: FieldRef<"StudentRecord", 'String'>
    readonly studentId: FieldRef<"StudentRecord", 'String'>
    readonly complementaryHours: FieldRef<"StudentRecord", 'Int'>
    readonly course: FieldRef<"StudentRecord", 'String'>
    readonly entrance: FieldRef<"StudentRecord", 'String'>
    readonly finishedSubjects: FieldRef<"StudentRecord", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * StudentRecord findUnique
   */
  export type StudentRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRecord
     */
    omit?: StudentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRecordInclude<ExtArgs> | null
    /**
     * Filter, which StudentRecord to fetch.
     */
    where: StudentRecordWhereUniqueInput
  }

  /**
   * StudentRecord findUniqueOrThrow
   */
  export type StudentRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRecord
     */
    omit?: StudentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRecordInclude<ExtArgs> | null
    /**
     * Filter, which StudentRecord to fetch.
     */
    where: StudentRecordWhereUniqueInput
  }

  /**
   * StudentRecord findFirst
   */
  export type StudentRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRecord
     */
    omit?: StudentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRecordInclude<ExtArgs> | null
    /**
     * Filter, which StudentRecord to fetch.
     */
    where?: StudentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentRecords to fetch.
     */
    orderBy?: StudentRecordOrderByWithRelationInput | StudentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentRecords.
     */
    cursor?: StudentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentRecords.
     */
    distinct?: StudentRecordScalarFieldEnum | StudentRecordScalarFieldEnum[]
  }

  /**
   * StudentRecord findFirstOrThrow
   */
  export type StudentRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRecord
     */
    omit?: StudentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRecordInclude<ExtArgs> | null
    /**
     * Filter, which StudentRecord to fetch.
     */
    where?: StudentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentRecords to fetch.
     */
    orderBy?: StudentRecordOrderByWithRelationInput | StudentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentRecords.
     */
    cursor?: StudentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentRecords.
     */
    distinct?: StudentRecordScalarFieldEnum | StudentRecordScalarFieldEnum[]
  }

  /**
   * StudentRecord findMany
   */
  export type StudentRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRecord
     */
    omit?: StudentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRecordInclude<ExtArgs> | null
    /**
     * Filter, which StudentRecords to fetch.
     */
    where?: StudentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentRecords to fetch.
     */
    orderBy?: StudentRecordOrderByWithRelationInput | StudentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentRecords.
     */
    cursor?: StudentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentRecords.
     */
    skip?: number
    distinct?: StudentRecordScalarFieldEnum | StudentRecordScalarFieldEnum[]
  }

  /**
   * StudentRecord create
   */
  export type StudentRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRecord
     */
    omit?: StudentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentRecord.
     */
    data: XOR<StudentRecordCreateInput, StudentRecordUncheckedCreateInput>
  }

  /**
   * StudentRecord createMany
   */
  export type StudentRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentRecords.
     */
    data: StudentRecordCreateManyInput | StudentRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentRecord createManyAndReturn
   */
  export type StudentRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRecord
     */
    omit?: StudentRecordOmit<ExtArgs> | null
    /**
     * The data used to create many StudentRecords.
     */
    data: StudentRecordCreateManyInput | StudentRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentRecord update
   */
  export type StudentRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRecord
     */
    omit?: StudentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentRecord.
     */
    data: XOR<StudentRecordUpdateInput, StudentRecordUncheckedUpdateInput>
    /**
     * Choose, which StudentRecord to update.
     */
    where: StudentRecordWhereUniqueInput
  }

  /**
   * StudentRecord updateMany
   */
  export type StudentRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentRecords.
     */
    data: XOR<StudentRecordUpdateManyMutationInput, StudentRecordUncheckedUpdateManyInput>
    /**
     * Filter which StudentRecords to update
     */
    where?: StudentRecordWhereInput
    /**
     * Limit how many StudentRecords to update.
     */
    limit?: number
  }

  /**
   * StudentRecord updateManyAndReturn
   */
  export type StudentRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRecord
     */
    omit?: StudentRecordOmit<ExtArgs> | null
    /**
     * The data used to update StudentRecords.
     */
    data: XOR<StudentRecordUpdateManyMutationInput, StudentRecordUncheckedUpdateManyInput>
    /**
     * Filter which StudentRecords to update
     */
    where?: StudentRecordWhereInput
    /**
     * Limit how many StudentRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentRecord upsert
   */
  export type StudentRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRecord
     */
    omit?: StudentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentRecord to update in case it exists.
     */
    where: StudentRecordWhereUniqueInput
    /**
     * In case the StudentRecord found by the `where` argument doesn't exist, create a new StudentRecord with this data.
     */
    create: XOR<StudentRecordCreateInput, StudentRecordUncheckedCreateInput>
    /**
     * In case the StudentRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentRecordUpdateInput, StudentRecordUncheckedUpdateInput>
  }

  /**
   * StudentRecord delete
   */
  export type StudentRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRecord
     */
    omit?: StudentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRecordInclude<ExtArgs> | null
    /**
     * Filter which StudentRecord to delete.
     */
    where: StudentRecordWhereUniqueInput
  }

  /**
   * StudentRecord deleteMany
   */
  export type StudentRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentRecords to delete
     */
    where?: StudentRecordWhereInput
    /**
     * Limit how many StudentRecords to delete.
     */
    limit?: number
  }

  /**
   * StudentRecord without action
   */
  export type StudentRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRecord
     */
    select?: StudentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRecord
     */
    omit?: StudentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRecordInclude<ExtArgs> | null
  }


  /**
   * Model TeacherRecord
   */

  export type AggregateTeacherRecord = {
    _count: TeacherRecordCountAggregateOutputType | null
    _min: TeacherRecordMinAggregateOutputType | null
    _max: TeacherRecordMaxAggregateOutputType | null
  }

  export type TeacherRecordMinAggregateOutputType = {
    id: string | null
    teacherId: string | null
  }

  export type TeacherRecordMaxAggregateOutputType = {
    id: string | null
    teacherId: string | null
  }

  export type TeacherRecordCountAggregateOutputType = {
    id: number
    teacherId: number
    subjects: number
    _all: number
  }


  export type TeacherRecordMinAggregateInputType = {
    id?: true
    teacherId?: true
  }

  export type TeacherRecordMaxAggregateInputType = {
    id?: true
    teacherId?: true
  }

  export type TeacherRecordCountAggregateInputType = {
    id?: true
    teacherId?: true
    subjects?: true
    _all?: true
  }

  export type TeacherRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherRecord to aggregate.
     */
    where?: TeacherRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherRecords to fetch.
     */
    orderBy?: TeacherRecordOrderByWithRelationInput | TeacherRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeacherRecords
    **/
    _count?: true | TeacherRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherRecordMaxAggregateInputType
  }

  export type GetTeacherRecordAggregateType<T extends TeacherRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacherRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacherRecord[P]>
      : GetScalarType<T[P], AggregateTeacherRecord[P]>
  }




  export type TeacherRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherRecordWhereInput
    orderBy?: TeacherRecordOrderByWithAggregationInput | TeacherRecordOrderByWithAggregationInput[]
    by: TeacherRecordScalarFieldEnum[] | TeacherRecordScalarFieldEnum
    having?: TeacherRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherRecordCountAggregateInputType | true
    _min?: TeacherRecordMinAggregateInputType
    _max?: TeacherRecordMaxAggregateInputType
  }

  export type TeacherRecordGroupByOutputType = {
    id: string
    teacherId: string
    subjects: string[]
    _count: TeacherRecordCountAggregateOutputType | null
    _min: TeacherRecordMinAggregateOutputType | null
    _max: TeacherRecordMaxAggregateOutputType | null
  }

  type GetTeacherRecordGroupByPayload<T extends TeacherRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherRecordGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherRecordGroupByOutputType[P]>
        }
      >
    >


  export type TeacherRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    subjects?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherRecord"]>

  export type TeacherRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    subjects?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherRecord"]>

  export type TeacherRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    subjects?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherRecord"]>

  export type TeacherRecordSelectScalar = {
    id?: boolean
    teacherId?: boolean
    subjects?: boolean
  }

  export type TeacherRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacherId" | "subjects", ExtArgs["result"]["teacherRecord"]>
  export type TeacherRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeacherRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeacherRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TeacherRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeacherRecord"
    objects: {
      teacher: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teacherId: string
      subjects: string[]
    }, ExtArgs["result"]["teacherRecord"]>
    composites: {}
  }

  type TeacherRecordGetPayload<S extends boolean | null | undefined | TeacherRecordDefaultArgs> = $Result.GetResult<Prisma.$TeacherRecordPayload, S>

  type TeacherRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherRecordCountAggregateInputType | true
    }

  export interface TeacherRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeacherRecord'], meta: { name: 'TeacherRecord' } }
    /**
     * Find zero or one TeacherRecord that matches the filter.
     * @param {TeacherRecordFindUniqueArgs} args - Arguments to find a TeacherRecord
     * @example
     * // Get one TeacherRecord
     * const teacherRecord = await prisma.teacherRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherRecordFindUniqueArgs>(args: SelectSubset<T, TeacherRecordFindUniqueArgs<ExtArgs>>): Prisma__TeacherRecordClient<$Result.GetResult<Prisma.$TeacherRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeacherRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherRecordFindUniqueOrThrowArgs} args - Arguments to find a TeacherRecord
     * @example
     * // Get one TeacherRecord
     * const teacherRecord = await prisma.teacherRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherRecordClient<$Result.GetResult<Prisma.$TeacherRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherRecordFindFirstArgs} args - Arguments to find a TeacherRecord
     * @example
     * // Get one TeacherRecord
     * const teacherRecord = await prisma.teacherRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherRecordFindFirstArgs>(args?: SelectSubset<T, TeacherRecordFindFirstArgs<ExtArgs>>): Prisma__TeacherRecordClient<$Result.GetResult<Prisma.$TeacherRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherRecordFindFirstOrThrowArgs} args - Arguments to find a TeacherRecord
     * @example
     * // Get one TeacherRecord
     * const teacherRecord = await prisma.teacherRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherRecordClient<$Result.GetResult<Prisma.$TeacherRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeacherRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherRecords
     * const teacherRecords = await prisma.teacherRecord.findMany()
     * 
     * // Get first 10 TeacherRecords
     * const teacherRecords = await prisma.teacherRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherRecordWithIdOnly = await prisma.teacherRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherRecordFindManyArgs>(args?: SelectSubset<T, TeacherRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeacherRecord.
     * @param {TeacherRecordCreateArgs} args - Arguments to create a TeacherRecord.
     * @example
     * // Create one TeacherRecord
     * const TeacherRecord = await prisma.teacherRecord.create({
     *   data: {
     *     // ... data to create a TeacherRecord
     *   }
     * })
     * 
     */
    create<T extends TeacherRecordCreateArgs>(args: SelectSubset<T, TeacherRecordCreateArgs<ExtArgs>>): Prisma__TeacherRecordClient<$Result.GetResult<Prisma.$TeacherRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeacherRecords.
     * @param {TeacherRecordCreateManyArgs} args - Arguments to create many TeacherRecords.
     * @example
     * // Create many TeacherRecords
     * const teacherRecord = await prisma.teacherRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherRecordCreateManyArgs>(args?: SelectSubset<T, TeacherRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeacherRecords and returns the data saved in the database.
     * @param {TeacherRecordCreateManyAndReturnArgs} args - Arguments to create many TeacherRecords.
     * @example
     * // Create many TeacherRecords
     * const teacherRecord = await prisma.teacherRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeacherRecords and only return the `id`
     * const teacherRecordWithIdOnly = await prisma.teacherRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeacherRecord.
     * @param {TeacherRecordDeleteArgs} args - Arguments to delete one TeacherRecord.
     * @example
     * // Delete one TeacherRecord
     * const TeacherRecord = await prisma.teacherRecord.delete({
     *   where: {
     *     // ... filter to delete one TeacherRecord
     *   }
     * })
     * 
     */
    delete<T extends TeacherRecordDeleteArgs>(args: SelectSubset<T, TeacherRecordDeleteArgs<ExtArgs>>): Prisma__TeacherRecordClient<$Result.GetResult<Prisma.$TeacherRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeacherRecord.
     * @param {TeacherRecordUpdateArgs} args - Arguments to update one TeacherRecord.
     * @example
     * // Update one TeacherRecord
     * const teacherRecord = await prisma.teacherRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherRecordUpdateArgs>(args: SelectSubset<T, TeacherRecordUpdateArgs<ExtArgs>>): Prisma__TeacherRecordClient<$Result.GetResult<Prisma.$TeacherRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeacherRecords.
     * @param {TeacherRecordDeleteManyArgs} args - Arguments to filter TeacherRecords to delete.
     * @example
     * // Delete a few TeacherRecords
     * const { count } = await prisma.teacherRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherRecordDeleteManyArgs>(args?: SelectSubset<T, TeacherRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherRecords
     * const teacherRecord = await prisma.teacherRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherRecordUpdateManyArgs>(args: SelectSubset<T, TeacherRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherRecords and returns the data updated in the database.
     * @param {TeacherRecordUpdateManyAndReturnArgs} args - Arguments to update many TeacherRecords.
     * @example
     * // Update many TeacherRecords
     * const teacherRecord = await prisma.teacherRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeacherRecords and only return the `id`
     * const teacherRecordWithIdOnly = await prisma.teacherRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeacherRecord.
     * @param {TeacherRecordUpsertArgs} args - Arguments to update or create a TeacherRecord.
     * @example
     * // Update or create a TeacherRecord
     * const teacherRecord = await prisma.teacherRecord.upsert({
     *   create: {
     *     // ... data to create a TeacherRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherRecord we want to update
     *   }
     * })
     */
    upsert<T extends TeacherRecordUpsertArgs>(args: SelectSubset<T, TeacherRecordUpsertArgs<ExtArgs>>): Prisma__TeacherRecordClient<$Result.GetResult<Prisma.$TeacherRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeacherRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherRecordCountArgs} args - Arguments to filter TeacherRecords to count.
     * @example
     * // Count the number of TeacherRecords
     * const count = await prisma.teacherRecord.count({
     *   where: {
     *     // ... the filter for the TeacherRecords we want to count
     *   }
     * })
    **/
    count<T extends TeacherRecordCountArgs>(
      args?: Subset<T, TeacherRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeacherRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherRecordAggregateArgs>(args: Subset<T, TeacherRecordAggregateArgs>): Prisma.PrismaPromise<GetTeacherRecordAggregateType<T>>

    /**
     * Group by TeacherRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherRecordGroupByArgs['orderBy'] }
        : { orderBy?: TeacherRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeacherRecord model
   */
  readonly fields: TeacherRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeacherRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeacherRecord model
   */
  interface TeacherRecordFieldRefs {
    readonly id: FieldRef<"TeacherRecord", 'String'>
    readonly teacherId: FieldRef<"TeacherRecord", 'String'>
    readonly subjects: FieldRef<"TeacherRecord", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * TeacherRecord findUnique
   */
  export type TeacherRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRecord
     */
    select?: TeacherRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRecord
     */
    omit?: TeacherRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRecordInclude<ExtArgs> | null
    /**
     * Filter, which TeacherRecord to fetch.
     */
    where: TeacherRecordWhereUniqueInput
  }

  /**
   * TeacherRecord findUniqueOrThrow
   */
  export type TeacherRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRecord
     */
    select?: TeacherRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRecord
     */
    omit?: TeacherRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRecordInclude<ExtArgs> | null
    /**
     * Filter, which TeacherRecord to fetch.
     */
    where: TeacherRecordWhereUniqueInput
  }

  /**
   * TeacherRecord findFirst
   */
  export type TeacherRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRecord
     */
    select?: TeacherRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRecord
     */
    omit?: TeacherRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRecordInclude<ExtArgs> | null
    /**
     * Filter, which TeacherRecord to fetch.
     */
    where?: TeacherRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherRecords to fetch.
     */
    orderBy?: TeacherRecordOrderByWithRelationInput | TeacherRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherRecords.
     */
    cursor?: TeacherRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherRecords.
     */
    distinct?: TeacherRecordScalarFieldEnum | TeacherRecordScalarFieldEnum[]
  }

  /**
   * TeacherRecord findFirstOrThrow
   */
  export type TeacherRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRecord
     */
    select?: TeacherRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRecord
     */
    omit?: TeacherRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRecordInclude<ExtArgs> | null
    /**
     * Filter, which TeacherRecord to fetch.
     */
    where?: TeacherRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherRecords to fetch.
     */
    orderBy?: TeacherRecordOrderByWithRelationInput | TeacherRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherRecords.
     */
    cursor?: TeacherRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherRecords.
     */
    distinct?: TeacherRecordScalarFieldEnum | TeacherRecordScalarFieldEnum[]
  }

  /**
   * TeacherRecord findMany
   */
  export type TeacherRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRecord
     */
    select?: TeacherRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRecord
     */
    omit?: TeacherRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRecordInclude<ExtArgs> | null
    /**
     * Filter, which TeacherRecords to fetch.
     */
    where?: TeacherRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherRecords to fetch.
     */
    orderBy?: TeacherRecordOrderByWithRelationInput | TeacherRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeacherRecords.
     */
    cursor?: TeacherRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherRecords.
     */
    skip?: number
    distinct?: TeacherRecordScalarFieldEnum | TeacherRecordScalarFieldEnum[]
  }

  /**
   * TeacherRecord create
   */
  export type TeacherRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRecord
     */
    select?: TeacherRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRecord
     */
    omit?: TeacherRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a TeacherRecord.
     */
    data: XOR<TeacherRecordCreateInput, TeacherRecordUncheckedCreateInput>
  }

  /**
   * TeacherRecord createMany
   */
  export type TeacherRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherRecords.
     */
    data: TeacherRecordCreateManyInput | TeacherRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeacherRecord createManyAndReturn
   */
  export type TeacherRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRecord
     */
    select?: TeacherRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRecord
     */
    omit?: TeacherRecordOmit<ExtArgs> | null
    /**
     * The data used to create many TeacherRecords.
     */
    data: TeacherRecordCreateManyInput | TeacherRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherRecord update
   */
  export type TeacherRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRecord
     */
    select?: TeacherRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRecord
     */
    omit?: TeacherRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a TeacherRecord.
     */
    data: XOR<TeacherRecordUpdateInput, TeacherRecordUncheckedUpdateInput>
    /**
     * Choose, which TeacherRecord to update.
     */
    where: TeacherRecordWhereUniqueInput
  }

  /**
   * TeacherRecord updateMany
   */
  export type TeacherRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherRecords.
     */
    data: XOR<TeacherRecordUpdateManyMutationInput, TeacherRecordUncheckedUpdateManyInput>
    /**
     * Filter which TeacherRecords to update
     */
    where?: TeacherRecordWhereInput
    /**
     * Limit how many TeacherRecords to update.
     */
    limit?: number
  }

  /**
   * TeacherRecord updateManyAndReturn
   */
  export type TeacherRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRecord
     */
    select?: TeacherRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRecord
     */
    omit?: TeacherRecordOmit<ExtArgs> | null
    /**
     * The data used to update TeacherRecords.
     */
    data: XOR<TeacherRecordUpdateManyMutationInput, TeacherRecordUncheckedUpdateManyInput>
    /**
     * Filter which TeacherRecords to update
     */
    where?: TeacherRecordWhereInput
    /**
     * Limit how many TeacherRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherRecord upsert
   */
  export type TeacherRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRecord
     */
    select?: TeacherRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRecord
     */
    omit?: TeacherRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the TeacherRecord to update in case it exists.
     */
    where: TeacherRecordWhereUniqueInput
    /**
     * In case the TeacherRecord found by the `where` argument doesn't exist, create a new TeacherRecord with this data.
     */
    create: XOR<TeacherRecordCreateInput, TeacherRecordUncheckedCreateInput>
    /**
     * In case the TeacherRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherRecordUpdateInput, TeacherRecordUncheckedUpdateInput>
  }

  /**
   * TeacherRecord delete
   */
  export type TeacherRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRecord
     */
    select?: TeacherRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRecord
     */
    omit?: TeacherRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRecordInclude<ExtArgs> | null
    /**
     * Filter which TeacherRecord to delete.
     */
    where: TeacherRecordWhereUniqueInput
  }

  /**
   * TeacherRecord deleteMany
   */
  export type TeacherRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherRecords to delete
     */
    where?: TeacherRecordWhereInput
    /**
     * Limit how many TeacherRecords to delete.
     */
    limit?: number
  }

  /**
   * TeacherRecord without action
   */
  export type TeacherRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherRecord
     */
    select?: TeacherRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherRecord
     */
    omit?: TeacherRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherRecordInclude<ExtArgs> | null
  }


  /**
   * Model OpportunityPost
   */

  export type AggregateOpportunityPost = {
    _count: OpportunityPostCountAggregateOutputType | null
    _avg: OpportunityPostAvgAggregateOutputType | null
    _sum: OpportunityPostSumAggregateOutputType | null
    _min: OpportunityPostMinAggregateOutputType | null
    _max: OpportunityPostMaxAggregateOutputType | null
  }

  export type OpportunityPostAvgAggregateOutputType = {
    hours: number | null
  }

  export type OpportunityPostSumAggregateOutputType = {
    hours: number | null
  }

  export type OpportunityPostMinAggregateOutputType = {
    id: string | null
    tittle: string | null
    description: string | null
    type: $Enums.OpportunityTypes | null
    deadline: Date | null
    city: string | null
    state: string | null
    hours: number | null
    publisherId: string | null
  }

  export type OpportunityPostMaxAggregateOutputType = {
    id: string | null
    tittle: string | null
    description: string | null
    type: $Enums.OpportunityTypes | null
    deadline: Date | null
    city: string | null
    state: string | null
    hours: number | null
    publisherId: string | null
  }

  export type OpportunityPostCountAggregateOutputType = {
    id: number
    tittle: number
    description: number
    type: number
    deadline: number
    city: number
    state: number
    hours: number
    publisherId: number
    _all: number
  }


  export type OpportunityPostAvgAggregateInputType = {
    hours?: true
  }

  export type OpportunityPostSumAggregateInputType = {
    hours?: true
  }

  export type OpportunityPostMinAggregateInputType = {
    id?: true
    tittle?: true
    description?: true
    type?: true
    deadline?: true
    city?: true
    state?: true
    hours?: true
    publisherId?: true
  }

  export type OpportunityPostMaxAggregateInputType = {
    id?: true
    tittle?: true
    description?: true
    type?: true
    deadline?: true
    city?: true
    state?: true
    hours?: true
    publisherId?: true
  }

  export type OpportunityPostCountAggregateInputType = {
    id?: true
    tittle?: true
    description?: true
    type?: true
    deadline?: true
    city?: true
    state?: true
    hours?: true
    publisherId?: true
    _all?: true
  }

  export type OpportunityPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpportunityPost to aggregate.
     */
    where?: OpportunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpportunityPosts to fetch.
     */
    orderBy?: OpportunityPostOrderByWithRelationInput | OpportunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpportunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpportunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpportunityPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OpportunityPosts
    **/
    _count?: true | OpportunityPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpportunityPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpportunityPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpportunityPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpportunityPostMaxAggregateInputType
  }

  export type GetOpportunityPostAggregateType<T extends OpportunityPostAggregateArgs> = {
        [P in keyof T & keyof AggregateOpportunityPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpportunityPost[P]>
      : GetScalarType<T[P], AggregateOpportunityPost[P]>
  }




  export type OpportunityPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpportunityPostWhereInput
    orderBy?: OpportunityPostOrderByWithAggregationInput | OpportunityPostOrderByWithAggregationInput[]
    by: OpportunityPostScalarFieldEnum[] | OpportunityPostScalarFieldEnum
    having?: OpportunityPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpportunityPostCountAggregateInputType | true
    _avg?: OpportunityPostAvgAggregateInputType
    _sum?: OpportunityPostSumAggregateInputType
    _min?: OpportunityPostMinAggregateInputType
    _max?: OpportunityPostMaxAggregateInputType
  }

  export type OpportunityPostGroupByOutputType = {
    id: string
    tittle: string
    description: string
    type: $Enums.OpportunityTypes
    deadline: Date
    city: string
    state: string
    hours: number
    publisherId: string
    _count: OpportunityPostCountAggregateOutputType | null
    _avg: OpportunityPostAvgAggregateOutputType | null
    _sum: OpportunityPostSumAggregateOutputType | null
    _min: OpportunityPostMinAggregateOutputType | null
    _max: OpportunityPostMaxAggregateOutputType | null
  }

  type GetOpportunityPostGroupByPayload<T extends OpportunityPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpportunityPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpportunityPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpportunityPostGroupByOutputType[P]>
            : GetScalarType<T[P], OpportunityPostGroupByOutputType[P]>
        }
      >
    >


  export type OpportunityPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tittle?: boolean
    description?: boolean
    type?: boolean
    deadline?: boolean
    city?: boolean
    state?: boolean
    hours?: boolean
    publisherId?: boolean
    publisher?: boolean | UserDefaultArgs<ExtArgs>
    candidates?: boolean | OpportunityPost$candidatesArgs<ExtArgs>
    _count?: boolean | OpportunityPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opportunityPost"]>

  export type OpportunityPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tittle?: boolean
    description?: boolean
    type?: boolean
    deadline?: boolean
    city?: boolean
    state?: boolean
    hours?: boolean
    publisherId?: boolean
    publisher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opportunityPost"]>

  export type OpportunityPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tittle?: boolean
    description?: boolean
    type?: boolean
    deadline?: boolean
    city?: boolean
    state?: boolean
    hours?: boolean
    publisherId?: boolean
    publisher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opportunityPost"]>

  export type OpportunityPostSelectScalar = {
    id?: boolean
    tittle?: boolean
    description?: boolean
    type?: boolean
    deadline?: boolean
    city?: boolean
    state?: boolean
    hours?: boolean
    publisherId?: boolean
  }

  export type OpportunityPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tittle" | "description" | "type" | "deadline" | "city" | "state" | "hours" | "publisherId", ExtArgs["result"]["opportunityPost"]>
  export type OpportunityPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | UserDefaultArgs<ExtArgs>
    candidates?: boolean | OpportunityPost$candidatesArgs<ExtArgs>
    _count?: boolean | OpportunityPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OpportunityPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OpportunityPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OpportunityPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OpportunityPost"
    objects: {
      publisher: Prisma.$UserPayload<ExtArgs>
      candidates: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tittle: string
      description: string
      type: $Enums.OpportunityTypes
      deadline: Date
      city: string
      state: string
      hours: number
      publisherId: string
    }, ExtArgs["result"]["opportunityPost"]>
    composites: {}
  }

  type OpportunityPostGetPayload<S extends boolean | null | undefined | OpportunityPostDefaultArgs> = $Result.GetResult<Prisma.$OpportunityPostPayload, S>

  type OpportunityPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpportunityPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpportunityPostCountAggregateInputType | true
    }

  export interface OpportunityPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OpportunityPost'], meta: { name: 'OpportunityPost' } }
    /**
     * Find zero or one OpportunityPost that matches the filter.
     * @param {OpportunityPostFindUniqueArgs} args - Arguments to find a OpportunityPost
     * @example
     * // Get one OpportunityPost
     * const opportunityPost = await prisma.opportunityPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpportunityPostFindUniqueArgs>(args: SelectSubset<T, OpportunityPostFindUniqueArgs<ExtArgs>>): Prisma__OpportunityPostClient<$Result.GetResult<Prisma.$OpportunityPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OpportunityPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpportunityPostFindUniqueOrThrowArgs} args - Arguments to find a OpportunityPost
     * @example
     * // Get one OpportunityPost
     * const opportunityPost = await prisma.opportunityPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpportunityPostFindUniqueOrThrowArgs>(args: SelectSubset<T, OpportunityPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpportunityPostClient<$Result.GetResult<Prisma.$OpportunityPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OpportunityPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityPostFindFirstArgs} args - Arguments to find a OpportunityPost
     * @example
     * // Get one OpportunityPost
     * const opportunityPost = await prisma.opportunityPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpportunityPostFindFirstArgs>(args?: SelectSubset<T, OpportunityPostFindFirstArgs<ExtArgs>>): Prisma__OpportunityPostClient<$Result.GetResult<Prisma.$OpportunityPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OpportunityPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityPostFindFirstOrThrowArgs} args - Arguments to find a OpportunityPost
     * @example
     * // Get one OpportunityPost
     * const opportunityPost = await prisma.opportunityPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpportunityPostFindFirstOrThrowArgs>(args?: SelectSubset<T, OpportunityPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpportunityPostClient<$Result.GetResult<Prisma.$OpportunityPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OpportunityPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OpportunityPosts
     * const opportunityPosts = await prisma.opportunityPost.findMany()
     * 
     * // Get first 10 OpportunityPosts
     * const opportunityPosts = await prisma.opportunityPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const opportunityPostWithIdOnly = await prisma.opportunityPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OpportunityPostFindManyArgs>(args?: SelectSubset<T, OpportunityPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OpportunityPost.
     * @param {OpportunityPostCreateArgs} args - Arguments to create a OpportunityPost.
     * @example
     * // Create one OpportunityPost
     * const OpportunityPost = await prisma.opportunityPost.create({
     *   data: {
     *     // ... data to create a OpportunityPost
     *   }
     * })
     * 
     */
    create<T extends OpportunityPostCreateArgs>(args: SelectSubset<T, OpportunityPostCreateArgs<ExtArgs>>): Prisma__OpportunityPostClient<$Result.GetResult<Prisma.$OpportunityPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OpportunityPosts.
     * @param {OpportunityPostCreateManyArgs} args - Arguments to create many OpportunityPosts.
     * @example
     * // Create many OpportunityPosts
     * const opportunityPost = await prisma.opportunityPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpportunityPostCreateManyArgs>(args?: SelectSubset<T, OpportunityPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OpportunityPosts and returns the data saved in the database.
     * @param {OpportunityPostCreateManyAndReturnArgs} args - Arguments to create many OpportunityPosts.
     * @example
     * // Create many OpportunityPosts
     * const opportunityPost = await prisma.opportunityPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OpportunityPosts and only return the `id`
     * const opportunityPostWithIdOnly = await prisma.opportunityPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpportunityPostCreateManyAndReturnArgs>(args?: SelectSubset<T, OpportunityPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OpportunityPost.
     * @param {OpportunityPostDeleteArgs} args - Arguments to delete one OpportunityPost.
     * @example
     * // Delete one OpportunityPost
     * const OpportunityPost = await prisma.opportunityPost.delete({
     *   where: {
     *     // ... filter to delete one OpportunityPost
     *   }
     * })
     * 
     */
    delete<T extends OpportunityPostDeleteArgs>(args: SelectSubset<T, OpportunityPostDeleteArgs<ExtArgs>>): Prisma__OpportunityPostClient<$Result.GetResult<Prisma.$OpportunityPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OpportunityPost.
     * @param {OpportunityPostUpdateArgs} args - Arguments to update one OpportunityPost.
     * @example
     * // Update one OpportunityPost
     * const opportunityPost = await prisma.opportunityPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpportunityPostUpdateArgs>(args: SelectSubset<T, OpportunityPostUpdateArgs<ExtArgs>>): Prisma__OpportunityPostClient<$Result.GetResult<Prisma.$OpportunityPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OpportunityPosts.
     * @param {OpportunityPostDeleteManyArgs} args - Arguments to filter OpportunityPosts to delete.
     * @example
     * // Delete a few OpportunityPosts
     * const { count } = await prisma.opportunityPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpportunityPostDeleteManyArgs>(args?: SelectSubset<T, OpportunityPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpportunityPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OpportunityPosts
     * const opportunityPost = await prisma.opportunityPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpportunityPostUpdateManyArgs>(args: SelectSubset<T, OpportunityPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpportunityPosts and returns the data updated in the database.
     * @param {OpportunityPostUpdateManyAndReturnArgs} args - Arguments to update many OpportunityPosts.
     * @example
     * // Update many OpportunityPosts
     * const opportunityPost = await prisma.opportunityPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OpportunityPosts and only return the `id`
     * const opportunityPostWithIdOnly = await prisma.opportunityPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OpportunityPostUpdateManyAndReturnArgs>(args: SelectSubset<T, OpportunityPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OpportunityPost.
     * @param {OpportunityPostUpsertArgs} args - Arguments to update or create a OpportunityPost.
     * @example
     * // Update or create a OpportunityPost
     * const opportunityPost = await prisma.opportunityPost.upsert({
     *   create: {
     *     // ... data to create a OpportunityPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OpportunityPost we want to update
     *   }
     * })
     */
    upsert<T extends OpportunityPostUpsertArgs>(args: SelectSubset<T, OpportunityPostUpsertArgs<ExtArgs>>): Prisma__OpportunityPostClient<$Result.GetResult<Prisma.$OpportunityPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OpportunityPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityPostCountArgs} args - Arguments to filter OpportunityPosts to count.
     * @example
     * // Count the number of OpportunityPosts
     * const count = await prisma.opportunityPost.count({
     *   where: {
     *     // ... the filter for the OpportunityPosts we want to count
     *   }
     * })
    **/
    count<T extends OpportunityPostCountArgs>(
      args?: Subset<T, OpportunityPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpportunityPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OpportunityPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OpportunityPostAggregateArgs>(args: Subset<T, OpportunityPostAggregateArgs>): Prisma.PrismaPromise<GetOpportunityPostAggregateType<T>>

    /**
     * Group by OpportunityPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OpportunityPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpportunityPostGroupByArgs['orderBy'] }
        : { orderBy?: OpportunityPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OpportunityPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpportunityPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OpportunityPost model
   */
  readonly fields: OpportunityPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OpportunityPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpportunityPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publisher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidates<T extends OpportunityPost$candidatesArgs<ExtArgs> = {}>(args?: Subset<T, OpportunityPost$candidatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OpportunityPost model
   */
  interface OpportunityPostFieldRefs {
    readonly id: FieldRef<"OpportunityPost", 'String'>
    readonly tittle: FieldRef<"OpportunityPost", 'String'>
    readonly description: FieldRef<"OpportunityPost", 'String'>
    readonly type: FieldRef<"OpportunityPost", 'OpportunityTypes'>
    readonly deadline: FieldRef<"OpportunityPost", 'DateTime'>
    readonly city: FieldRef<"OpportunityPost", 'String'>
    readonly state: FieldRef<"OpportunityPost", 'String'>
    readonly hours: FieldRef<"OpportunityPost", 'Int'>
    readonly publisherId: FieldRef<"OpportunityPost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OpportunityPost findUnique
   */
  export type OpportunityPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityPost
     */
    select?: OpportunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunityPost
     */
    omit?: OpportunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityPostInclude<ExtArgs> | null
    /**
     * Filter, which OpportunityPost to fetch.
     */
    where: OpportunityPostWhereUniqueInput
  }

  /**
   * OpportunityPost findUniqueOrThrow
   */
  export type OpportunityPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityPost
     */
    select?: OpportunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunityPost
     */
    omit?: OpportunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityPostInclude<ExtArgs> | null
    /**
     * Filter, which OpportunityPost to fetch.
     */
    where: OpportunityPostWhereUniqueInput
  }

  /**
   * OpportunityPost findFirst
   */
  export type OpportunityPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityPost
     */
    select?: OpportunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunityPost
     */
    omit?: OpportunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityPostInclude<ExtArgs> | null
    /**
     * Filter, which OpportunityPost to fetch.
     */
    where?: OpportunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpportunityPosts to fetch.
     */
    orderBy?: OpportunityPostOrderByWithRelationInput | OpportunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpportunityPosts.
     */
    cursor?: OpportunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpportunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpportunityPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpportunityPosts.
     */
    distinct?: OpportunityPostScalarFieldEnum | OpportunityPostScalarFieldEnum[]
  }

  /**
   * OpportunityPost findFirstOrThrow
   */
  export type OpportunityPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityPost
     */
    select?: OpportunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunityPost
     */
    omit?: OpportunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityPostInclude<ExtArgs> | null
    /**
     * Filter, which OpportunityPost to fetch.
     */
    where?: OpportunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpportunityPosts to fetch.
     */
    orderBy?: OpportunityPostOrderByWithRelationInput | OpportunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpportunityPosts.
     */
    cursor?: OpportunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpportunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpportunityPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpportunityPosts.
     */
    distinct?: OpportunityPostScalarFieldEnum | OpportunityPostScalarFieldEnum[]
  }

  /**
   * OpportunityPost findMany
   */
  export type OpportunityPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityPost
     */
    select?: OpportunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunityPost
     */
    omit?: OpportunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityPostInclude<ExtArgs> | null
    /**
     * Filter, which OpportunityPosts to fetch.
     */
    where?: OpportunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpportunityPosts to fetch.
     */
    orderBy?: OpportunityPostOrderByWithRelationInput | OpportunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OpportunityPosts.
     */
    cursor?: OpportunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpportunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpportunityPosts.
     */
    skip?: number
    distinct?: OpportunityPostScalarFieldEnum | OpportunityPostScalarFieldEnum[]
  }

  /**
   * OpportunityPost create
   */
  export type OpportunityPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityPost
     */
    select?: OpportunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunityPost
     */
    omit?: OpportunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityPostInclude<ExtArgs> | null
    /**
     * The data needed to create a OpportunityPost.
     */
    data: XOR<OpportunityPostCreateInput, OpportunityPostUncheckedCreateInput>
  }

  /**
   * OpportunityPost createMany
   */
  export type OpportunityPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OpportunityPosts.
     */
    data: OpportunityPostCreateManyInput | OpportunityPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OpportunityPost createManyAndReturn
   */
  export type OpportunityPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityPost
     */
    select?: OpportunityPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunityPost
     */
    omit?: OpportunityPostOmit<ExtArgs> | null
    /**
     * The data used to create many OpportunityPosts.
     */
    data: OpportunityPostCreateManyInput | OpportunityPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpportunityPost update
   */
  export type OpportunityPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityPost
     */
    select?: OpportunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunityPost
     */
    omit?: OpportunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityPostInclude<ExtArgs> | null
    /**
     * The data needed to update a OpportunityPost.
     */
    data: XOR<OpportunityPostUpdateInput, OpportunityPostUncheckedUpdateInput>
    /**
     * Choose, which OpportunityPost to update.
     */
    where: OpportunityPostWhereUniqueInput
  }

  /**
   * OpportunityPost updateMany
   */
  export type OpportunityPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OpportunityPosts.
     */
    data: XOR<OpportunityPostUpdateManyMutationInput, OpportunityPostUncheckedUpdateManyInput>
    /**
     * Filter which OpportunityPosts to update
     */
    where?: OpportunityPostWhereInput
    /**
     * Limit how many OpportunityPosts to update.
     */
    limit?: number
  }

  /**
   * OpportunityPost updateManyAndReturn
   */
  export type OpportunityPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityPost
     */
    select?: OpportunityPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunityPost
     */
    omit?: OpportunityPostOmit<ExtArgs> | null
    /**
     * The data used to update OpportunityPosts.
     */
    data: XOR<OpportunityPostUpdateManyMutationInput, OpportunityPostUncheckedUpdateManyInput>
    /**
     * Filter which OpportunityPosts to update
     */
    where?: OpportunityPostWhereInput
    /**
     * Limit how many OpportunityPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpportunityPost upsert
   */
  export type OpportunityPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityPost
     */
    select?: OpportunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunityPost
     */
    omit?: OpportunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityPostInclude<ExtArgs> | null
    /**
     * The filter to search for the OpportunityPost to update in case it exists.
     */
    where: OpportunityPostWhereUniqueInput
    /**
     * In case the OpportunityPost found by the `where` argument doesn't exist, create a new OpportunityPost with this data.
     */
    create: XOR<OpportunityPostCreateInput, OpportunityPostUncheckedCreateInput>
    /**
     * In case the OpportunityPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpportunityPostUpdateInput, OpportunityPostUncheckedUpdateInput>
  }

  /**
   * OpportunityPost delete
   */
  export type OpportunityPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityPost
     */
    select?: OpportunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunityPost
     */
    omit?: OpportunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityPostInclude<ExtArgs> | null
    /**
     * Filter which OpportunityPost to delete.
     */
    where: OpportunityPostWhereUniqueInput
  }

  /**
   * OpportunityPost deleteMany
   */
  export type OpportunityPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpportunityPosts to delete
     */
    where?: OpportunityPostWhereInput
    /**
     * Limit how many OpportunityPosts to delete.
     */
    limit?: number
  }

  /**
   * OpportunityPost.candidates
   */
  export type OpportunityPost$candidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * OpportunityPost without action
   */
  export type OpportunityPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityPost
     */
    select?: OpportunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpportunityPost
     */
    omit?: OpportunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityPostInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentRecordScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    complementaryHours: 'complementaryHours',
    course: 'course',
    entrance: 'entrance',
    finishedSubjects: 'finishedSubjects'
  };

  export type StudentRecordScalarFieldEnum = (typeof StudentRecordScalarFieldEnum)[keyof typeof StudentRecordScalarFieldEnum]


  export const TeacherRecordScalarFieldEnum: {
    id: 'id',
    teacherId: 'teacherId',
    subjects: 'subjects'
  };

  export type TeacherRecordScalarFieldEnum = (typeof TeacherRecordScalarFieldEnum)[keyof typeof TeacherRecordScalarFieldEnum]


  export const OpportunityPostScalarFieldEnum: {
    id: 'id',
    tittle: 'tittle',
    description: 'description',
    type: 'type',
    deadline: 'deadline',
    city: 'city',
    state: 'state',
    hours: 'hours',
    publisherId: 'publisherId'
  };

  export type OpportunityPostScalarFieldEnum = (typeof OpportunityPostScalarFieldEnum)[keyof typeof OpportunityPostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'OpportunityTypes'
   */
  export type EnumOpportunityTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OpportunityTypes'>
    


  /**
   * Reference to a field of type 'OpportunityTypes[]'
   */
  export type ListEnumOpportunityTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OpportunityTypes[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    studentRecord?: XOR<StudentRecordNullableScalarRelationFilter, StudentRecordWhereInput> | null
    teacherRecord?: XOR<TeacherRecordNullableScalarRelationFilter, TeacherRecordWhereInput> | null
    publishedPosts?: OpportunityPostListRelationFilter
    appliedPosts?: OpportunityPostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    studentRecord?: StudentRecordOrderByWithRelationInput
    teacherRecord?: TeacherRecordOrderByWithRelationInput
    publishedPosts?: OpportunityPostOrderByRelationAggregateInput
    appliedPosts?: OpportunityPostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    studentRecord?: XOR<StudentRecordNullableScalarRelationFilter, StudentRecordWhereInput> | null
    teacherRecord?: XOR<TeacherRecordNullableScalarRelationFilter, TeacherRecordWhereInput> | null
    publishedPosts?: OpportunityPostListRelationFilter
    appliedPosts?: OpportunityPostListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
  }

  export type StudentRecordWhereInput = {
    AND?: StudentRecordWhereInput | StudentRecordWhereInput[]
    OR?: StudentRecordWhereInput[]
    NOT?: StudentRecordWhereInput | StudentRecordWhereInput[]
    id?: StringFilter<"StudentRecord"> | string
    studentId?: StringFilter<"StudentRecord"> | string
    complementaryHours?: IntFilter<"StudentRecord"> | number
    course?: StringFilter<"StudentRecord"> | string
    entrance?: StringFilter<"StudentRecord"> | string
    finishedSubjects?: StringNullableListFilter<"StudentRecord">
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StudentRecordOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    complementaryHours?: SortOrder
    course?: SortOrder
    entrance?: SortOrder
    finishedSubjects?: SortOrder
    student?: UserOrderByWithRelationInput
  }

  export type StudentRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId?: string
    AND?: StudentRecordWhereInput | StudentRecordWhereInput[]
    OR?: StudentRecordWhereInput[]
    NOT?: StudentRecordWhereInput | StudentRecordWhereInput[]
    complementaryHours?: IntFilter<"StudentRecord"> | number
    course?: StringFilter<"StudentRecord"> | string
    entrance?: StringFilter<"StudentRecord"> | string
    finishedSubjects?: StringNullableListFilter<"StudentRecord">
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "studentId">

  export type StudentRecordOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    complementaryHours?: SortOrder
    course?: SortOrder
    entrance?: SortOrder
    finishedSubjects?: SortOrder
    _count?: StudentRecordCountOrderByAggregateInput
    _avg?: StudentRecordAvgOrderByAggregateInput
    _max?: StudentRecordMaxOrderByAggregateInput
    _min?: StudentRecordMinOrderByAggregateInput
    _sum?: StudentRecordSumOrderByAggregateInput
  }

  export type StudentRecordScalarWhereWithAggregatesInput = {
    AND?: StudentRecordScalarWhereWithAggregatesInput | StudentRecordScalarWhereWithAggregatesInput[]
    OR?: StudentRecordScalarWhereWithAggregatesInput[]
    NOT?: StudentRecordScalarWhereWithAggregatesInput | StudentRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentRecord"> | string
    studentId?: StringWithAggregatesFilter<"StudentRecord"> | string
    complementaryHours?: IntWithAggregatesFilter<"StudentRecord"> | number
    course?: StringWithAggregatesFilter<"StudentRecord"> | string
    entrance?: StringWithAggregatesFilter<"StudentRecord"> | string
    finishedSubjects?: StringNullableListFilter<"StudentRecord">
  }

  export type TeacherRecordWhereInput = {
    AND?: TeacherRecordWhereInput | TeacherRecordWhereInput[]
    OR?: TeacherRecordWhereInput[]
    NOT?: TeacherRecordWhereInput | TeacherRecordWhereInput[]
    id?: StringFilter<"TeacherRecord"> | string
    teacherId?: StringFilter<"TeacherRecord"> | string
    subjects?: StringNullableListFilter<"TeacherRecord">
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TeacherRecordOrderByWithRelationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    subjects?: SortOrder
    teacher?: UserOrderByWithRelationInput
  }

  export type TeacherRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teacherId?: string
    AND?: TeacherRecordWhereInput | TeacherRecordWhereInput[]
    OR?: TeacherRecordWhereInput[]
    NOT?: TeacherRecordWhereInput | TeacherRecordWhereInput[]
    subjects?: StringNullableListFilter<"TeacherRecord">
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "teacherId">

  export type TeacherRecordOrderByWithAggregationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    subjects?: SortOrder
    _count?: TeacherRecordCountOrderByAggregateInput
    _max?: TeacherRecordMaxOrderByAggregateInput
    _min?: TeacherRecordMinOrderByAggregateInput
  }

  export type TeacherRecordScalarWhereWithAggregatesInput = {
    AND?: TeacherRecordScalarWhereWithAggregatesInput | TeacherRecordScalarWhereWithAggregatesInput[]
    OR?: TeacherRecordScalarWhereWithAggregatesInput[]
    NOT?: TeacherRecordScalarWhereWithAggregatesInput | TeacherRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeacherRecord"> | string
    teacherId?: StringWithAggregatesFilter<"TeacherRecord"> | string
    subjects?: StringNullableListFilter<"TeacherRecord">
  }

  export type OpportunityPostWhereInput = {
    AND?: OpportunityPostWhereInput | OpportunityPostWhereInput[]
    OR?: OpportunityPostWhereInput[]
    NOT?: OpportunityPostWhereInput | OpportunityPostWhereInput[]
    id?: StringFilter<"OpportunityPost"> | string
    tittle?: StringFilter<"OpportunityPost"> | string
    description?: StringFilter<"OpportunityPost"> | string
    type?: EnumOpportunityTypesFilter<"OpportunityPost"> | $Enums.OpportunityTypes
    deadline?: DateTimeFilter<"OpportunityPost"> | Date | string
    city?: StringFilter<"OpportunityPost"> | string
    state?: StringFilter<"OpportunityPost"> | string
    hours?: IntFilter<"OpportunityPost"> | number
    publisherId?: StringFilter<"OpportunityPost"> | string
    publisher?: XOR<UserScalarRelationFilter, UserWhereInput>
    candidates?: UserListRelationFilter
  }

  export type OpportunityPostOrderByWithRelationInput = {
    id?: SortOrder
    tittle?: SortOrder
    description?: SortOrder
    type?: SortOrder
    deadline?: SortOrder
    city?: SortOrder
    state?: SortOrder
    hours?: SortOrder
    publisherId?: SortOrder
    publisher?: UserOrderByWithRelationInput
    candidates?: UserOrderByRelationAggregateInput
  }

  export type OpportunityPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OpportunityPostWhereInput | OpportunityPostWhereInput[]
    OR?: OpportunityPostWhereInput[]
    NOT?: OpportunityPostWhereInput | OpportunityPostWhereInput[]
    tittle?: StringFilter<"OpportunityPost"> | string
    description?: StringFilter<"OpportunityPost"> | string
    type?: EnumOpportunityTypesFilter<"OpportunityPost"> | $Enums.OpportunityTypes
    deadline?: DateTimeFilter<"OpportunityPost"> | Date | string
    city?: StringFilter<"OpportunityPost"> | string
    state?: StringFilter<"OpportunityPost"> | string
    hours?: IntFilter<"OpportunityPost"> | number
    publisherId?: StringFilter<"OpportunityPost"> | string
    publisher?: XOR<UserScalarRelationFilter, UserWhereInput>
    candidates?: UserListRelationFilter
  }, "id">

  export type OpportunityPostOrderByWithAggregationInput = {
    id?: SortOrder
    tittle?: SortOrder
    description?: SortOrder
    type?: SortOrder
    deadline?: SortOrder
    city?: SortOrder
    state?: SortOrder
    hours?: SortOrder
    publisherId?: SortOrder
    _count?: OpportunityPostCountOrderByAggregateInput
    _avg?: OpportunityPostAvgOrderByAggregateInput
    _max?: OpportunityPostMaxOrderByAggregateInput
    _min?: OpportunityPostMinOrderByAggregateInput
    _sum?: OpportunityPostSumOrderByAggregateInput
  }

  export type OpportunityPostScalarWhereWithAggregatesInput = {
    AND?: OpportunityPostScalarWhereWithAggregatesInput | OpportunityPostScalarWhereWithAggregatesInput[]
    OR?: OpportunityPostScalarWhereWithAggregatesInput[]
    NOT?: OpportunityPostScalarWhereWithAggregatesInput | OpportunityPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OpportunityPost"> | string
    tittle?: StringWithAggregatesFilter<"OpportunityPost"> | string
    description?: StringWithAggregatesFilter<"OpportunityPost"> | string
    type?: EnumOpportunityTypesWithAggregatesFilter<"OpportunityPost"> | $Enums.OpportunityTypes
    deadline?: DateTimeWithAggregatesFilter<"OpportunityPost"> | Date | string
    city?: StringWithAggregatesFilter<"OpportunityPost"> | string
    state?: StringWithAggregatesFilter<"OpportunityPost"> | string
    hours?: IntWithAggregatesFilter<"OpportunityPost"> | number
    publisherId?: StringWithAggregatesFilter<"OpportunityPost"> | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role: $Enums.UserRole
    studentRecord?: StudentRecordCreateNestedOneWithoutStudentInput
    teacherRecord?: TeacherRecordCreateNestedOneWithoutTeacherInput
    publishedPosts?: OpportunityPostCreateNestedManyWithoutPublisherInput
    appliedPosts?: OpportunityPostCreateNestedManyWithoutCandidatesInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role: $Enums.UserRole
    studentRecord?: StudentRecordUncheckedCreateNestedOneWithoutStudentInput
    teacherRecord?: TeacherRecordUncheckedCreateNestedOneWithoutTeacherInput
    publishedPosts?: OpportunityPostUncheckedCreateNestedManyWithoutPublisherInput
    appliedPosts?: OpportunityPostUncheckedCreateNestedManyWithoutCandidatesInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    studentRecord?: StudentRecordUpdateOneWithoutStudentNestedInput
    teacherRecord?: TeacherRecordUpdateOneWithoutTeacherNestedInput
    publishedPosts?: OpportunityPostUpdateManyWithoutPublisherNestedInput
    appliedPosts?: OpportunityPostUpdateManyWithoutCandidatesNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    studentRecord?: StudentRecordUncheckedUpdateOneWithoutStudentNestedInput
    teacherRecord?: TeacherRecordUncheckedUpdateOneWithoutTeacherNestedInput
    publishedPosts?: OpportunityPostUncheckedUpdateManyWithoutPublisherNestedInput
    appliedPosts?: OpportunityPostUncheckedUpdateManyWithoutCandidatesNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role: $Enums.UserRole
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type StudentRecordCreateInput = {
    id?: string
    complementaryHours: number
    course: string
    entrance: string
    finishedSubjects?: StudentRecordCreatefinishedSubjectsInput | string[]
    student: UserCreateNestedOneWithoutStudentRecordInput
  }

  export type StudentRecordUncheckedCreateInput = {
    id?: string
    studentId: string
    complementaryHours: number
    course: string
    entrance: string
    finishedSubjects?: StudentRecordCreatefinishedSubjectsInput | string[]
  }

  export type StudentRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    complementaryHours?: IntFieldUpdateOperationsInput | number
    course?: StringFieldUpdateOperationsInput | string
    entrance?: StringFieldUpdateOperationsInput | string
    finishedSubjects?: StudentRecordUpdatefinishedSubjectsInput | string[]
    student?: UserUpdateOneRequiredWithoutStudentRecordNestedInput
  }

  export type StudentRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    complementaryHours?: IntFieldUpdateOperationsInput | number
    course?: StringFieldUpdateOperationsInput | string
    entrance?: StringFieldUpdateOperationsInput | string
    finishedSubjects?: StudentRecordUpdatefinishedSubjectsInput | string[]
  }

  export type StudentRecordCreateManyInput = {
    id?: string
    studentId: string
    complementaryHours: number
    course: string
    entrance: string
    finishedSubjects?: StudentRecordCreatefinishedSubjectsInput | string[]
  }

  export type StudentRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    complementaryHours?: IntFieldUpdateOperationsInput | number
    course?: StringFieldUpdateOperationsInput | string
    entrance?: StringFieldUpdateOperationsInput | string
    finishedSubjects?: StudentRecordUpdatefinishedSubjectsInput | string[]
  }

  export type StudentRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    complementaryHours?: IntFieldUpdateOperationsInput | number
    course?: StringFieldUpdateOperationsInput | string
    entrance?: StringFieldUpdateOperationsInput | string
    finishedSubjects?: StudentRecordUpdatefinishedSubjectsInput | string[]
  }

  export type TeacherRecordCreateInput = {
    id?: string
    subjects?: TeacherRecordCreatesubjectsInput | string[]
    teacher: UserCreateNestedOneWithoutTeacherRecordInput
  }

  export type TeacherRecordUncheckedCreateInput = {
    id?: string
    teacherId: string
    subjects?: TeacherRecordCreatesubjectsInput | string[]
  }

  export type TeacherRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjects?: TeacherRecordUpdatesubjectsInput | string[]
    teacher?: UserUpdateOneRequiredWithoutTeacherRecordNestedInput
  }

  export type TeacherRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    subjects?: TeacherRecordUpdatesubjectsInput | string[]
  }

  export type TeacherRecordCreateManyInput = {
    id?: string
    teacherId: string
    subjects?: TeacherRecordCreatesubjectsInput | string[]
  }

  export type TeacherRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjects?: TeacherRecordUpdatesubjectsInput | string[]
  }

  export type TeacherRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    subjects?: TeacherRecordUpdatesubjectsInput | string[]
  }

  export type OpportunityPostCreateInput = {
    id?: string
    tittle: string
    description: string
    type: $Enums.OpportunityTypes
    deadline: Date | string
    city: string
    state: string
    hours: number
    publisher: UserCreateNestedOneWithoutPublishedPostsInput
    candidates?: UserCreateNestedManyWithoutAppliedPostsInput
  }

  export type OpportunityPostUncheckedCreateInput = {
    id?: string
    tittle: string
    description: string
    type: $Enums.OpportunityTypes
    deadline: Date | string
    city: string
    state: string
    hours: number
    publisherId: string
    candidates?: UserUncheckedCreateNestedManyWithoutAppliedPostsInput
  }

  export type OpportunityPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tittle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypesFieldUpdateOperationsInput | $Enums.OpportunityTypes
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    publisher?: UserUpdateOneRequiredWithoutPublishedPostsNestedInput
    candidates?: UserUpdateManyWithoutAppliedPostsNestedInput
  }

  export type OpportunityPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tittle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypesFieldUpdateOperationsInput | $Enums.OpportunityTypes
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    publisherId?: StringFieldUpdateOperationsInput | string
    candidates?: UserUncheckedUpdateManyWithoutAppliedPostsNestedInput
  }

  export type OpportunityPostCreateManyInput = {
    id?: string
    tittle: string
    description: string
    type: $Enums.OpportunityTypes
    deadline: Date | string
    city: string
    state: string
    hours: number
    publisherId: string
  }

  export type OpportunityPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tittle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypesFieldUpdateOperationsInput | $Enums.OpportunityTypes
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
  }

  export type OpportunityPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tittle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypesFieldUpdateOperationsInput | $Enums.OpportunityTypes
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    publisherId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StudentRecordNullableScalarRelationFilter = {
    is?: StudentRecordWhereInput | null
    isNot?: StudentRecordWhereInput | null
  }

  export type TeacherRecordNullableScalarRelationFilter = {
    is?: TeacherRecordWhereInput | null
    isNot?: TeacherRecordWhereInput | null
  }

  export type OpportunityPostListRelationFilter = {
    every?: OpportunityPostWhereInput
    some?: OpportunityPostWhereInput
    none?: OpportunityPostWhereInput
  }

  export type OpportunityPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StudentRecordCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    complementaryHours?: SortOrder
    course?: SortOrder
    entrance?: SortOrder
    finishedSubjects?: SortOrder
  }

  export type StudentRecordAvgOrderByAggregateInput = {
    complementaryHours?: SortOrder
  }

  export type StudentRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    complementaryHours?: SortOrder
    course?: SortOrder
    entrance?: SortOrder
  }

  export type StudentRecordMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    complementaryHours?: SortOrder
    course?: SortOrder
    entrance?: SortOrder
  }

  export type StudentRecordSumOrderByAggregateInput = {
    complementaryHours?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TeacherRecordCountOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    subjects?: SortOrder
  }

  export type TeacherRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
  }

  export type TeacherRecordMinOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
  }

  export type EnumOpportunityTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityTypes | EnumOpportunityTypesFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityTypes[] | ListEnumOpportunityTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityTypes[] | ListEnumOpportunityTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityTypesFilter<$PrismaModel> | $Enums.OpportunityTypes
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OpportunityPostCountOrderByAggregateInput = {
    id?: SortOrder
    tittle?: SortOrder
    description?: SortOrder
    type?: SortOrder
    deadline?: SortOrder
    city?: SortOrder
    state?: SortOrder
    hours?: SortOrder
    publisherId?: SortOrder
  }

  export type OpportunityPostAvgOrderByAggregateInput = {
    hours?: SortOrder
  }

  export type OpportunityPostMaxOrderByAggregateInput = {
    id?: SortOrder
    tittle?: SortOrder
    description?: SortOrder
    type?: SortOrder
    deadline?: SortOrder
    city?: SortOrder
    state?: SortOrder
    hours?: SortOrder
    publisherId?: SortOrder
  }

  export type OpportunityPostMinOrderByAggregateInput = {
    id?: SortOrder
    tittle?: SortOrder
    description?: SortOrder
    type?: SortOrder
    deadline?: SortOrder
    city?: SortOrder
    state?: SortOrder
    hours?: SortOrder
    publisherId?: SortOrder
  }

  export type OpportunityPostSumOrderByAggregateInput = {
    hours?: SortOrder
  }

  export type EnumOpportunityTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityTypes | EnumOpportunityTypesFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityTypes[] | ListEnumOpportunityTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityTypes[] | ListEnumOpportunityTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityTypesWithAggregatesFilter<$PrismaModel> | $Enums.OpportunityTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOpportunityTypesFilter<$PrismaModel>
    _max?: NestedEnumOpportunityTypesFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StudentRecordCreateNestedOneWithoutStudentInput = {
    create?: XOR<StudentRecordCreateWithoutStudentInput, StudentRecordUncheckedCreateWithoutStudentInput>
    connectOrCreate?: StudentRecordCreateOrConnectWithoutStudentInput
    connect?: StudentRecordWhereUniqueInput
  }

  export type TeacherRecordCreateNestedOneWithoutTeacherInput = {
    create?: XOR<TeacherRecordCreateWithoutTeacherInput, TeacherRecordUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: TeacherRecordCreateOrConnectWithoutTeacherInput
    connect?: TeacherRecordWhereUniqueInput
  }

  export type OpportunityPostCreateNestedManyWithoutPublisherInput = {
    create?: XOR<OpportunityPostCreateWithoutPublisherInput, OpportunityPostUncheckedCreateWithoutPublisherInput> | OpportunityPostCreateWithoutPublisherInput[] | OpportunityPostUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: OpportunityPostCreateOrConnectWithoutPublisherInput | OpportunityPostCreateOrConnectWithoutPublisherInput[]
    createMany?: OpportunityPostCreateManyPublisherInputEnvelope
    connect?: OpportunityPostWhereUniqueInput | OpportunityPostWhereUniqueInput[]
  }

  export type OpportunityPostCreateNestedManyWithoutCandidatesInput = {
    create?: XOR<OpportunityPostCreateWithoutCandidatesInput, OpportunityPostUncheckedCreateWithoutCandidatesInput> | OpportunityPostCreateWithoutCandidatesInput[] | OpportunityPostUncheckedCreateWithoutCandidatesInput[]
    connectOrCreate?: OpportunityPostCreateOrConnectWithoutCandidatesInput | OpportunityPostCreateOrConnectWithoutCandidatesInput[]
    connect?: OpportunityPostWhereUniqueInput | OpportunityPostWhereUniqueInput[]
  }

  export type StudentRecordUncheckedCreateNestedOneWithoutStudentInput = {
    create?: XOR<StudentRecordCreateWithoutStudentInput, StudentRecordUncheckedCreateWithoutStudentInput>
    connectOrCreate?: StudentRecordCreateOrConnectWithoutStudentInput
    connect?: StudentRecordWhereUniqueInput
  }

  export type TeacherRecordUncheckedCreateNestedOneWithoutTeacherInput = {
    create?: XOR<TeacherRecordCreateWithoutTeacherInput, TeacherRecordUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: TeacherRecordCreateOrConnectWithoutTeacherInput
    connect?: TeacherRecordWhereUniqueInput
  }

  export type OpportunityPostUncheckedCreateNestedManyWithoutPublisherInput = {
    create?: XOR<OpportunityPostCreateWithoutPublisherInput, OpportunityPostUncheckedCreateWithoutPublisherInput> | OpportunityPostCreateWithoutPublisherInput[] | OpportunityPostUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: OpportunityPostCreateOrConnectWithoutPublisherInput | OpportunityPostCreateOrConnectWithoutPublisherInput[]
    createMany?: OpportunityPostCreateManyPublisherInputEnvelope
    connect?: OpportunityPostWhereUniqueInput | OpportunityPostWhereUniqueInput[]
  }

  export type OpportunityPostUncheckedCreateNestedManyWithoutCandidatesInput = {
    create?: XOR<OpportunityPostCreateWithoutCandidatesInput, OpportunityPostUncheckedCreateWithoutCandidatesInput> | OpportunityPostCreateWithoutCandidatesInput[] | OpportunityPostUncheckedCreateWithoutCandidatesInput[]
    connectOrCreate?: OpportunityPostCreateOrConnectWithoutCandidatesInput | OpportunityPostCreateOrConnectWithoutCandidatesInput[]
    connect?: OpportunityPostWhereUniqueInput | OpportunityPostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type StudentRecordUpdateOneWithoutStudentNestedInput = {
    create?: XOR<StudentRecordCreateWithoutStudentInput, StudentRecordUncheckedCreateWithoutStudentInput>
    connectOrCreate?: StudentRecordCreateOrConnectWithoutStudentInput
    upsert?: StudentRecordUpsertWithoutStudentInput
    disconnect?: StudentRecordWhereInput | boolean
    delete?: StudentRecordWhereInput | boolean
    connect?: StudentRecordWhereUniqueInput
    update?: XOR<XOR<StudentRecordUpdateToOneWithWhereWithoutStudentInput, StudentRecordUpdateWithoutStudentInput>, StudentRecordUncheckedUpdateWithoutStudentInput>
  }

  export type TeacherRecordUpdateOneWithoutTeacherNestedInput = {
    create?: XOR<TeacherRecordCreateWithoutTeacherInput, TeacherRecordUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: TeacherRecordCreateOrConnectWithoutTeacherInput
    upsert?: TeacherRecordUpsertWithoutTeacherInput
    disconnect?: TeacherRecordWhereInput | boolean
    delete?: TeacherRecordWhereInput | boolean
    connect?: TeacherRecordWhereUniqueInput
    update?: XOR<XOR<TeacherRecordUpdateToOneWithWhereWithoutTeacherInput, TeacherRecordUpdateWithoutTeacherInput>, TeacherRecordUncheckedUpdateWithoutTeacherInput>
  }

  export type OpportunityPostUpdateManyWithoutPublisherNestedInput = {
    create?: XOR<OpportunityPostCreateWithoutPublisherInput, OpportunityPostUncheckedCreateWithoutPublisherInput> | OpportunityPostCreateWithoutPublisherInput[] | OpportunityPostUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: OpportunityPostCreateOrConnectWithoutPublisherInput | OpportunityPostCreateOrConnectWithoutPublisherInput[]
    upsert?: OpportunityPostUpsertWithWhereUniqueWithoutPublisherInput | OpportunityPostUpsertWithWhereUniqueWithoutPublisherInput[]
    createMany?: OpportunityPostCreateManyPublisherInputEnvelope
    set?: OpportunityPostWhereUniqueInput | OpportunityPostWhereUniqueInput[]
    disconnect?: OpportunityPostWhereUniqueInput | OpportunityPostWhereUniqueInput[]
    delete?: OpportunityPostWhereUniqueInput | OpportunityPostWhereUniqueInput[]
    connect?: OpportunityPostWhereUniqueInput | OpportunityPostWhereUniqueInput[]
    update?: OpportunityPostUpdateWithWhereUniqueWithoutPublisherInput | OpportunityPostUpdateWithWhereUniqueWithoutPublisherInput[]
    updateMany?: OpportunityPostUpdateManyWithWhereWithoutPublisherInput | OpportunityPostUpdateManyWithWhereWithoutPublisherInput[]
    deleteMany?: OpportunityPostScalarWhereInput | OpportunityPostScalarWhereInput[]
  }

  export type OpportunityPostUpdateManyWithoutCandidatesNestedInput = {
    create?: XOR<OpportunityPostCreateWithoutCandidatesInput, OpportunityPostUncheckedCreateWithoutCandidatesInput> | OpportunityPostCreateWithoutCandidatesInput[] | OpportunityPostUncheckedCreateWithoutCandidatesInput[]
    connectOrCreate?: OpportunityPostCreateOrConnectWithoutCandidatesInput | OpportunityPostCreateOrConnectWithoutCandidatesInput[]
    upsert?: OpportunityPostUpsertWithWhereUniqueWithoutCandidatesInput | OpportunityPostUpsertWithWhereUniqueWithoutCandidatesInput[]
    set?: OpportunityPostWhereUniqueInput | OpportunityPostWhereUniqueInput[]
    disconnect?: OpportunityPostWhereUniqueInput | OpportunityPostWhereUniqueInput[]
    delete?: OpportunityPostWhereUniqueInput | OpportunityPostWhereUniqueInput[]
    connect?: OpportunityPostWhereUniqueInput | OpportunityPostWhereUniqueInput[]
    update?: OpportunityPostUpdateWithWhereUniqueWithoutCandidatesInput | OpportunityPostUpdateWithWhereUniqueWithoutCandidatesInput[]
    updateMany?: OpportunityPostUpdateManyWithWhereWithoutCandidatesInput | OpportunityPostUpdateManyWithWhereWithoutCandidatesInput[]
    deleteMany?: OpportunityPostScalarWhereInput | OpportunityPostScalarWhereInput[]
  }

  export type StudentRecordUncheckedUpdateOneWithoutStudentNestedInput = {
    create?: XOR<StudentRecordCreateWithoutStudentInput, StudentRecordUncheckedCreateWithoutStudentInput>
    connectOrCreate?: StudentRecordCreateOrConnectWithoutStudentInput
    upsert?: StudentRecordUpsertWithoutStudentInput
    disconnect?: StudentRecordWhereInput | boolean
    delete?: StudentRecordWhereInput | boolean
    connect?: StudentRecordWhereUniqueInput
    update?: XOR<XOR<StudentRecordUpdateToOneWithWhereWithoutStudentInput, StudentRecordUpdateWithoutStudentInput>, StudentRecordUncheckedUpdateWithoutStudentInput>
  }

  export type TeacherRecordUncheckedUpdateOneWithoutTeacherNestedInput = {
    create?: XOR<TeacherRecordCreateWithoutTeacherInput, TeacherRecordUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: TeacherRecordCreateOrConnectWithoutTeacherInput
    upsert?: TeacherRecordUpsertWithoutTeacherInput
    disconnect?: TeacherRecordWhereInput | boolean
    delete?: TeacherRecordWhereInput | boolean
    connect?: TeacherRecordWhereUniqueInput
    update?: XOR<XOR<TeacherRecordUpdateToOneWithWhereWithoutTeacherInput, TeacherRecordUpdateWithoutTeacherInput>, TeacherRecordUncheckedUpdateWithoutTeacherInput>
  }

  export type OpportunityPostUncheckedUpdateManyWithoutPublisherNestedInput = {
    create?: XOR<OpportunityPostCreateWithoutPublisherInput, OpportunityPostUncheckedCreateWithoutPublisherInput> | OpportunityPostCreateWithoutPublisherInput[] | OpportunityPostUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: OpportunityPostCreateOrConnectWithoutPublisherInput | OpportunityPostCreateOrConnectWithoutPublisherInput[]
    upsert?: OpportunityPostUpsertWithWhereUniqueWithoutPublisherInput | OpportunityPostUpsertWithWhereUniqueWithoutPublisherInput[]
    createMany?: OpportunityPostCreateManyPublisherInputEnvelope
    set?: OpportunityPostWhereUniqueInput | OpportunityPostWhereUniqueInput[]
    disconnect?: OpportunityPostWhereUniqueInput | OpportunityPostWhereUniqueInput[]
    delete?: OpportunityPostWhereUniqueInput | OpportunityPostWhereUniqueInput[]
    connect?: OpportunityPostWhereUniqueInput | OpportunityPostWhereUniqueInput[]
    update?: OpportunityPostUpdateWithWhereUniqueWithoutPublisherInput | OpportunityPostUpdateWithWhereUniqueWithoutPublisherInput[]
    updateMany?: OpportunityPostUpdateManyWithWhereWithoutPublisherInput | OpportunityPostUpdateManyWithWhereWithoutPublisherInput[]
    deleteMany?: OpportunityPostScalarWhereInput | OpportunityPostScalarWhereInput[]
  }

  export type OpportunityPostUncheckedUpdateManyWithoutCandidatesNestedInput = {
    create?: XOR<OpportunityPostCreateWithoutCandidatesInput, OpportunityPostUncheckedCreateWithoutCandidatesInput> | OpportunityPostCreateWithoutCandidatesInput[] | OpportunityPostUncheckedCreateWithoutCandidatesInput[]
    connectOrCreate?: OpportunityPostCreateOrConnectWithoutCandidatesInput | OpportunityPostCreateOrConnectWithoutCandidatesInput[]
    upsert?: OpportunityPostUpsertWithWhereUniqueWithoutCandidatesInput | OpportunityPostUpsertWithWhereUniqueWithoutCandidatesInput[]
    set?: OpportunityPostWhereUniqueInput | OpportunityPostWhereUniqueInput[]
    disconnect?: OpportunityPostWhereUniqueInput | OpportunityPostWhereUniqueInput[]
    delete?: OpportunityPostWhereUniqueInput | OpportunityPostWhereUniqueInput[]
    connect?: OpportunityPostWhereUniqueInput | OpportunityPostWhereUniqueInput[]
    update?: OpportunityPostUpdateWithWhereUniqueWithoutCandidatesInput | OpportunityPostUpdateWithWhereUniqueWithoutCandidatesInput[]
    updateMany?: OpportunityPostUpdateManyWithWhereWithoutCandidatesInput | OpportunityPostUpdateManyWithWhereWithoutCandidatesInput[]
    deleteMany?: OpportunityPostScalarWhereInput | OpportunityPostScalarWhereInput[]
  }

  export type StudentRecordCreatefinishedSubjectsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutStudentRecordInput = {
    create?: XOR<UserCreateWithoutStudentRecordInput, UserUncheckedCreateWithoutStudentRecordInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentRecordInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentRecordUpdatefinishedSubjectsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutStudentRecordNestedInput = {
    create?: XOR<UserCreateWithoutStudentRecordInput, UserUncheckedCreateWithoutStudentRecordInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentRecordInput
    upsert?: UserUpsertWithoutStudentRecordInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentRecordInput, UserUpdateWithoutStudentRecordInput>, UserUncheckedUpdateWithoutStudentRecordInput>
  }

  export type TeacherRecordCreatesubjectsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutTeacherRecordInput = {
    create?: XOR<UserCreateWithoutTeacherRecordInput, UserUncheckedCreateWithoutTeacherRecordInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherRecordInput
    connect?: UserWhereUniqueInput
  }

  export type TeacherRecordUpdatesubjectsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutTeacherRecordNestedInput = {
    create?: XOR<UserCreateWithoutTeacherRecordInput, UserUncheckedCreateWithoutTeacherRecordInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherRecordInput
    upsert?: UserUpsertWithoutTeacherRecordInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeacherRecordInput, UserUpdateWithoutTeacherRecordInput>, UserUncheckedUpdateWithoutTeacherRecordInput>
  }

  export type UserCreateNestedOneWithoutPublishedPostsInput = {
    create?: XOR<UserCreateWithoutPublishedPostsInput, UserUncheckedCreateWithoutPublishedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPublishedPostsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutAppliedPostsInput = {
    create?: XOR<UserCreateWithoutAppliedPostsInput, UserUncheckedCreateWithoutAppliedPostsInput> | UserCreateWithoutAppliedPostsInput[] | UserUncheckedCreateWithoutAppliedPostsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAppliedPostsInput | UserCreateOrConnectWithoutAppliedPostsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutAppliedPostsInput = {
    create?: XOR<UserCreateWithoutAppliedPostsInput, UserUncheckedCreateWithoutAppliedPostsInput> | UserCreateWithoutAppliedPostsInput[] | UserUncheckedCreateWithoutAppliedPostsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAppliedPostsInput | UserCreateOrConnectWithoutAppliedPostsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumOpportunityTypesFieldUpdateOperationsInput = {
    set?: $Enums.OpportunityTypes
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPublishedPostsNestedInput = {
    create?: XOR<UserCreateWithoutPublishedPostsInput, UserUncheckedCreateWithoutPublishedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPublishedPostsInput
    upsert?: UserUpsertWithoutPublishedPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPublishedPostsInput, UserUpdateWithoutPublishedPostsInput>, UserUncheckedUpdateWithoutPublishedPostsInput>
  }

  export type UserUpdateManyWithoutAppliedPostsNestedInput = {
    create?: XOR<UserCreateWithoutAppliedPostsInput, UserUncheckedCreateWithoutAppliedPostsInput> | UserCreateWithoutAppliedPostsInput[] | UserUncheckedCreateWithoutAppliedPostsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAppliedPostsInput | UserCreateOrConnectWithoutAppliedPostsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAppliedPostsInput | UserUpsertWithWhereUniqueWithoutAppliedPostsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAppliedPostsInput | UserUpdateWithWhereUniqueWithoutAppliedPostsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAppliedPostsInput | UserUpdateManyWithWhereWithoutAppliedPostsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutAppliedPostsNestedInput = {
    create?: XOR<UserCreateWithoutAppliedPostsInput, UserUncheckedCreateWithoutAppliedPostsInput> | UserCreateWithoutAppliedPostsInput[] | UserUncheckedCreateWithoutAppliedPostsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAppliedPostsInput | UserCreateOrConnectWithoutAppliedPostsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAppliedPostsInput | UserUpsertWithWhereUniqueWithoutAppliedPostsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAppliedPostsInput | UserUpdateWithWhereUniqueWithoutAppliedPostsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAppliedPostsInput | UserUpdateManyWithWhereWithoutAppliedPostsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumOpportunityTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityTypes | EnumOpportunityTypesFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityTypes[] | ListEnumOpportunityTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityTypes[] | ListEnumOpportunityTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityTypesFilter<$PrismaModel> | $Enums.OpportunityTypes
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumOpportunityTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityTypes | EnumOpportunityTypesFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityTypes[] | ListEnumOpportunityTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityTypes[] | ListEnumOpportunityTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityTypesWithAggregatesFilter<$PrismaModel> | $Enums.OpportunityTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOpportunityTypesFilter<$PrismaModel>
    _max?: NestedEnumOpportunityTypesFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StudentRecordCreateWithoutStudentInput = {
    id?: string
    complementaryHours: number
    course: string
    entrance: string
    finishedSubjects?: StudentRecordCreatefinishedSubjectsInput | string[]
  }

  export type StudentRecordUncheckedCreateWithoutStudentInput = {
    id?: string
    complementaryHours: number
    course: string
    entrance: string
    finishedSubjects?: StudentRecordCreatefinishedSubjectsInput | string[]
  }

  export type StudentRecordCreateOrConnectWithoutStudentInput = {
    where: StudentRecordWhereUniqueInput
    create: XOR<StudentRecordCreateWithoutStudentInput, StudentRecordUncheckedCreateWithoutStudentInput>
  }

  export type TeacherRecordCreateWithoutTeacherInput = {
    id?: string
    subjects?: TeacherRecordCreatesubjectsInput | string[]
  }

  export type TeacherRecordUncheckedCreateWithoutTeacherInput = {
    id?: string
    subjects?: TeacherRecordCreatesubjectsInput | string[]
  }

  export type TeacherRecordCreateOrConnectWithoutTeacherInput = {
    where: TeacherRecordWhereUniqueInput
    create: XOR<TeacherRecordCreateWithoutTeacherInput, TeacherRecordUncheckedCreateWithoutTeacherInput>
  }

  export type OpportunityPostCreateWithoutPublisherInput = {
    id?: string
    tittle: string
    description: string
    type: $Enums.OpportunityTypes
    deadline: Date | string
    city: string
    state: string
    hours: number
    candidates?: UserCreateNestedManyWithoutAppliedPostsInput
  }

  export type OpportunityPostUncheckedCreateWithoutPublisherInput = {
    id?: string
    tittle: string
    description: string
    type: $Enums.OpportunityTypes
    deadline: Date | string
    city: string
    state: string
    hours: number
    candidates?: UserUncheckedCreateNestedManyWithoutAppliedPostsInput
  }

  export type OpportunityPostCreateOrConnectWithoutPublisherInput = {
    where: OpportunityPostWhereUniqueInput
    create: XOR<OpportunityPostCreateWithoutPublisherInput, OpportunityPostUncheckedCreateWithoutPublisherInput>
  }

  export type OpportunityPostCreateManyPublisherInputEnvelope = {
    data: OpportunityPostCreateManyPublisherInput | OpportunityPostCreateManyPublisherInput[]
    skipDuplicates?: boolean
  }

  export type OpportunityPostCreateWithoutCandidatesInput = {
    id?: string
    tittle: string
    description: string
    type: $Enums.OpportunityTypes
    deadline: Date | string
    city: string
    state: string
    hours: number
    publisher: UserCreateNestedOneWithoutPublishedPostsInput
  }

  export type OpportunityPostUncheckedCreateWithoutCandidatesInput = {
    id?: string
    tittle: string
    description: string
    type: $Enums.OpportunityTypes
    deadline: Date | string
    city: string
    state: string
    hours: number
    publisherId: string
  }

  export type OpportunityPostCreateOrConnectWithoutCandidatesInput = {
    where: OpportunityPostWhereUniqueInput
    create: XOR<OpportunityPostCreateWithoutCandidatesInput, OpportunityPostUncheckedCreateWithoutCandidatesInput>
  }

  export type StudentRecordUpsertWithoutStudentInput = {
    update: XOR<StudentRecordUpdateWithoutStudentInput, StudentRecordUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentRecordCreateWithoutStudentInput, StudentRecordUncheckedCreateWithoutStudentInput>
    where?: StudentRecordWhereInput
  }

  export type StudentRecordUpdateToOneWithWhereWithoutStudentInput = {
    where?: StudentRecordWhereInput
    data: XOR<StudentRecordUpdateWithoutStudentInput, StudentRecordUncheckedUpdateWithoutStudentInput>
  }

  export type StudentRecordUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    complementaryHours?: IntFieldUpdateOperationsInput | number
    course?: StringFieldUpdateOperationsInput | string
    entrance?: StringFieldUpdateOperationsInput | string
    finishedSubjects?: StudentRecordUpdatefinishedSubjectsInput | string[]
  }

  export type StudentRecordUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    complementaryHours?: IntFieldUpdateOperationsInput | number
    course?: StringFieldUpdateOperationsInput | string
    entrance?: StringFieldUpdateOperationsInput | string
    finishedSubjects?: StudentRecordUpdatefinishedSubjectsInput | string[]
  }

  export type TeacherRecordUpsertWithoutTeacherInput = {
    update: XOR<TeacherRecordUpdateWithoutTeacherInput, TeacherRecordUncheckedUpdateWithoutTeacherInput>
    create: XOR<TeacherRecordCreateWithoutTeacherInput, TeacherRecordUncheckedCreateWithoutTeacherInput>
    where?: TeacherRecordWhereInput
  }

  export type TeacherRecordUpdateToOneWithWhereWithoutTeacherInput = {
    where?: TeacherRecordWhereInput
    data: XOR<TeacherRecordUpdateWithoutTeacherInput, TeacherRecordUncheckedUpdateWithoutTeacherInput>
  }

  export type TeacherRecordUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjects?: TeacherRecordUpdatesubjectsInput | string[]
  }

  export type TeacherRecordUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjects?: TeacherRecordUpdatesubjectsInput | string[]
  }

  export type OpportunityPostUpsertWithWhereUniqueWithoutPublisherInput = {
    where: OpportunityPostWhereUniqueInput
    update: XOR<OpportunityPostUpdateWithoutPublisherInput, OpportunityPostUncheckedUpdateWithoutPublisherInput>
    create: XOR<OpportunityPostCreateWithoutPublisherInput, OpportunityPostUncheckedCreateWithoutPublisherInput>
  }

  export type OpportunityPostUpdateWithWhereUniqueWithoutPublisherInput = {
    where: OpportunityPostWhereUniqueInput
    data: XOR<OpportunityPostUpdateWithoutPublisherInput, OpportunityPostUncheckedUpdateWithoutPublisherInput>
  }

  export type OpportunityPostUpdateManyWithWhereWithoutPublisherInput = {
    where: OpportunityPostScalarWhereInput
    data: XOR<OpportunityPostUpdateManyMutationInput, OpportunityPostUncheckedUpdateManyWithoutPublisherInput>
  }

  export type OpportunityPostScalarWhereInput = {
    AND?: OpportunityPostScalarWhereInput | OpportunityPostScalarWhereInput[]
    OR?: OpportunityPostScalarWhereInput[]
    NOT?: OpportunityPostScalarWhereInput | OpportunityPostScalarWhereInput[]
    id?: StringFilter<"OpportunityPost"> | string
    tittle?: StringFilter<"OpportunityPost"> | string
    description?: StringFilter<"OpportunityPost"> | string
    type?: EnumOpportunityTypesFilter<"OpportunityPost"> | $Enums.OpportunityTypes
    deadline?: DateTimeFilter<"OpportunityPost"> | Date | string
    city?: StringFilter<"OpportunityPost"> | string
    state?: StringFilter<"OpportunityPost"> | string
    hours?: IntFilter<"OpportunityPost"> | number
    publisherId?: StringFilter<"OpportunityPost"> | string
  }

  export type OpportunityPostUpsertWithWhereUniqueWithoutCandidatesInput = {
    where: OpportunityPostWhereUniqueInput
    update: XOR<OpportunityPostUpdateWithoutCandidatesInput, OpportunityPostUncheckedUpdateWithoutCandidatesInput>
    create: XOR<OpportunityPostCreateWithoutCandidatesInput, OpportunityPostUncheckedCreateWithoutCandidatesInput>
  }

  export type OpportunityPostUpdateWithWhereUniqueWithoutCandidatesInput = {
    where: OpportunityPostWhereUniqueInput
    data: XOR<OpportunityPostUpdateWithoutCandidatesInput, OpportunityPostUncheckedUpdateWithoutCandidatesInput>
  }

  export type OpportunityPostUpdateManyWithWhereWithoutCandidatesInput = {
    where: OpportunityPostScalarWhereInput
    data: XOR<OpportunityPostUpdateManyMutationInput, OpportunityPostUncheckedUpdateManyWithoutCandidatesInput>
  }

  export type UserCreateWithoutStudentRecordInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role: $Enums.UserRole
    teacherRecord?: TeacherRecordCreateNestedOneWithoutTeacherInput
    publishedPosts?: OpportunityPostCreateNestedManyWithoutPublisherInput
    appliedPosts?: OpportunityPostCreateNestedManyWithoutCandidatesInput
  }

  export type UserUncheckedCreateWithoutStudentRecordInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role: $Enums.UserRole
    teacherRecord?: TeacherRecordUncheckedCreateNestedOneWithoutTeacherInput
    publishedPosts?: OpportunityPostUncheckedCreateNestedManyWithoutPublisherInput
    appliedPosts?: OpportunityPostUncheckedCreateNestedManyWithoutCandidatesInput
  }

  export type UserCreateOrConnectWithoutStudentRecordInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentRecordInput, UserUncheckedCreateWithoutStudentRecordInput>
  }

  export type UserUpsertWithoutStudentRecordInput = {
    update: XOR<UserUpdateWithoutStudentRecordInput, UserUncheckedUpdateWithoutStudentRecordInput>
    create: XOR<UserCreateWithoutStudentRecordInput, UserUncheckedCreateWithoutStudentRecordInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentRecordInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentRecordInput, UserUncheckedUpdateWithoutStudentRecordInput>
  }

  export type UserUpdateWithoutStudentRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    teacherRecord?: TeacherRecordUpdateOneWithoutTeacherNestedInput
    publishedPosts?: OpportunityPostUpdateManyWithoutPublisherNestedInput
    appliedPosts?: OpportunityPostUpdateManyWithoutCandidatesNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    teacherRecord?: TeacherRecordUncheckedUpdateOneWithoutTeacherNestedInput
    publishedPosts?: OpportunityPostUncheckedUpdateManyWithoutPublisherNestedInput
    appliedPosts?: OpportunityPostUncheckedUpdateManyWithoutCandidatesNestedInput
  }

  export type UserCreateWithoutTeacherRecordInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role: $Enums.UserRole
    studentRecord?: StudentRecordCreateNestedOneWithoutStudentInput
    publishedPosts?: OpportunityPostCreateNestedManyWithoutPublisherInput
    appliedPosts?: OpportunityPostCreateNestedManyWithoutCandidatesInput
  }

  export type UserUncheckedCreateWithoutTeacherRecordInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role: $Enums.UserRole
    studentRecord?: StudentRecordUncheckedCreateNestedOneWithoutStudentInput
    publishedPosts?: OpportunityPostUncheckedCreateNestedManyWithoutPublisherInput
    appliedPosts?: OpportunityPostUncheckedCreateNestedManyWithoutCandidatesInput
  }

  export type UserCreateOrConnectWithoutTeacherRecordInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeacherRecordInput, UserUncheckedCreateWithoutTeacherRecordInput>
  }

  export type UserUpsertWithoutTeacherRecordInput = {
    update: XOR<UserUpdateWithoutTeacherRecordInput, UserUncheckedUpdateWithoutTeacherRecordInput>
    create: XOR<UserCreateWithoutTeacherRecordInput, UserUncheckedCreateWithoutTeacherRecordInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeacherRecordInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeacherRecordInput, UserUncheckedUpdateWithoutTeacherRecordInput>
  }

  export type UserUpdateWithoutTeacherRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    studentRecord?: StudentRecordUpdateOneWithoutStudentNestedInput
    publishedPosts?: OpportunityPostUpdateManyWithoutPublisherNestedInput
    appliedPosts?: OpportunityPostUpdateManyWithoutCandidatesNestedInput
  }

  export type UserUncheckedUpdateWithoutTeacherRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    studentRecord?: StudentRecordUncheckedUpdateOneWithoutStudentNestedInput
    publishedPosts?: OpportunityPostUncheckedUpdateManyWithoutPublisherNestedInput
    appliedPosts?: OpportunityPostUncheckedUpdateManyWithoutCandidatesNestedInput
  }

  export type UserCreateWithoutPublishedPostsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role: $Enums.UserRole
    studentRecord?: StudentRecordCreateNestedOneWithoutStudentInput
    teacherRecord?: TeacherRecordCreateNestedOneWithoutTeacherInput
    appliedPosts?: OpportunityPostCreateNestedManyWithoutCandidatesInput
  }

  export type UserUncheckedCreateWithoutPublishedPostsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role: $Enums.UserRole
    studentRecord?: StudentRecordUncheckedCreateNestedOneWithoutStudentInput
    teacherRecord?: TeacherRecordUncheckedCreateNestedOneWithoutTeacherInput
    appliedPosts?: OpportunityPostUncheckedCreateNestedManyWithoutCandidatesInput
  }

  export type UserCreateOrConnectWithoutPublishedPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPublishedPostsInput, UserUncheckedCreateWithoutPublishedPostsInput>
  }

  export type UserCreateWithoutAppliedPostsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role: $Enums.UserRole
    studentRecord?: StudentRecordCreateNestedOneWithoutStudentInput
    teacherRecord?: TeacherRecordCreateNestedOneWithoutTeacherInput
    publishedPosts?: OpportunityPostCreateNestedManyWithoutPublisherInput
  }

  export type UserUncheckedCreateWithoutAppliedPostsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role: $Enums.UserRole
    studentRecord?: StudentRecordUncheckedCreateNestedOneWithoutStudentInput
    teacherRecord?: TeacherRecordUncheckedCreateNestedOneWithoutTeacherInput
    publishedPosts?: OpportunityPostUncheckedCreateNestedManyWithoutPublisherInput
  }

  export type UserCreateOrConnectWithoutAppliedPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppliedPostsInput, UserUncheckedCreateWithoutAppliedPostsInput>
  }

  export type UserUpsertWithoutPublishedPostsInput = {
    update: XOR<UserUpdateWithoutPublishedPostsInput, UserUncheckedUpdateWithoutPublishedPostsInput>
    create: XOR<UserCreateWithoutPublishedPostsInput, UserUncheckedCreateWithoutPublishedPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPublishedPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPublishedPostsInput, UserUncheckedUpdateWithoutPublishedPostsInput>
  }

  export type UserUpdateWithoutPublishedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    studentRecord?: StudentRecordUpdateOneWithoutStudentNestedInput
    teacherRecord?: TeacherRecordUpdateOneWithoutTeacherNestedInput
    appliedPosts?: OpportunityPostUpdateManyWithoutCandidatesNestedInput
  }

  export type UserUncheckedUpdateWithoutPublishedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    studentRecord?: StudentRecordUncheckedUpdateOneWithoutStudentNestedInput
    teacherRecord?: TeacherRecordUncheckedUpdateOneWithoutTeacherNestedInput
    appliedPosts?: OpportunityPostUncheckedUpdateManyWithoutCandidatesNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutAppliedPostsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAppliedPostsInput, UserUncheckedUpdateWithoutAppliedPostsInput>
    create: XOR<UserCreateWithoutAppliedPostsInput, UserUncheckedCreateWithoutAppliedPostsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAppliedPostsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAppliedPostsInput, UserUncheckedUpdateWithoutAppliedPostsInput>
  }

  export type UserUpdateManyWithWhereWithoutAppliedPostsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutAppliedPostsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
  }

  export type OpportunityPostCreateManyPublisherInput = {
    id?: string
    tittle: string
    description: string
    type: $Enums.OpportunityTypes
    deadline: Date | string
    city: string
    state: string
    hours: number
  }

  export type OpportunityPostUpdateWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string
    tittle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypesFieldUpdateOperationsInput | $Enums.OpportunityTypes
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    candidates?: UserUpdateManyWithoutAppliedPostsNestedInput
  }

  export type OpportunityPostUncheckedUpdateWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string
    tittle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypesFieldUpdateOperationsInput | $Enums.OpportunityTypes
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    candidates?: UserUncheckedUpdateManyWithoutAppliedPostsNestedInput
  }

  export type OpportunityPostUncheckedUpdateManyWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string
    tittle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypesFieldUpdateOperationsInput | $Enums.OpportunityTypes
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
  }

  export type OpportunityPostUpdateWithoutCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tittle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypesFieldUpdateOperationsInput | $Enums.OpportunityTypes
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    publisher?: UserUpdateOneRequiredWithoutPublishedPostsNestedInput
  }

  export type OpportunityPostUncheckedUpdateWithoutCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tittle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypesFieldUpdateOperationsInput | $Enums.OpportunityTypes
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    publisherId?: StringFieldUpdateOperationsInput | string
  }

  export type OpportunityPostUncheckedUpdateManyWithoutCandidatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tittle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumOpportunityTypesFieldUpdateOperationsInput | $Enums.OpportunityTypes
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    publisherId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutAppliedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    studentRecord?: StudentRecordUpdateOneWithoutStudentNestedInput
    teacherRecord?: TeacherRecordUpdateOneWithoutTeacherNestedInput
    publishedPosts?: OpportunityPostUpdateManyWithoutPublisherNestedInput
  }

  export type UserUncheckedUpdateWithoutAppliedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    studentRecord?: StudentRecordUncheckedUpdateOneWithoutStudentNestedInput
    teacherRecord?: TeacherRecordUncheckedUpdateOneWithoutTeacherNestedInput
    publishedPosts?: OpportunityPostUncheckedUpdateManyWithoutPublisherNestedInput
  }

  export type UserUncheckedUpdateManyWithoutAppliedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
import { GraphQLClient } from "graphql-request";
import * as Dom from "graphql-request/dist/types.dom";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  citext: any;
  jsonb: any;
  timestamp: string;
  timestamptz: string;
  uuid: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Boolean"]>;
  _gt?: InputMaybe<Scalars["Boolean"]>;
  _gte?: InputMaybe<Scalars["Boolean"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Boolean"]>;
  _lte?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<Scalars["Boolean"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]>;
  _gt?: InputMaybe<Scalars["Int"]>;
  _gte?: InputMaybe<Scalars["Int"]>;
  _in?: InputMaybe<Array<Scalars["Int"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Int"]>;
  _lte?: InputMaybe<Scalars["Int"]>;
  _neq?: InputMaybe<Scalars["Int"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "blocked_users" */
export type Blocked_Users = {
  __typename?: "blocked_users";
  /** An object relationship */
  blocked_follower?: Maybe<Friend>;
  /** An object relationship */
  blocked_profile: Profile;
  blocked_user_id: Scalars["uuid"];
  created_at: Scalars["timestamptz"];
  id: Scalars["uuid"];
  /** An object relationship */
  profile: Profile;
  updated_at: Scalars["timestamptz"];
  user_id: Scalars["uuid"];
};

/** order by aggregate values of table "blocked_users" */
export type Blocked_Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Blocked_Users_Max_Order_By>;
  min?: InputMaybe<Blocked_Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "blocked_users" */
export type Blocked_Users_Arr_Rel_Insert_Input = {
  data: Array<Blocked_Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Blocked_Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "blocked_users". All fields are combined with a logical 'AND'. */
export type Blocked_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Blocked_Users_Bool_Exp>>;
  _not?: InputMaybe<Blocked_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Blocked_Users_Bool_Exp>>;
  blocked_follower?: InputMaybe<Friend_Bool_Exp>;
  blocked_profile?: InputMaybe<Profile_Bool_Exp>;
  blocked_user_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "blocked_users" */
export enum Blocked_Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  BlockedUsersPkey = "blocked_users_pkey",
  /** unique or primary key constraint on columns "blocked_user_id", "user_id" */
  BlockedUsersUserIdBlockedUserIdKey = "blocked_users_user_id_blocked_user_id_key",
}

/** input type for inserting data into table "blocked_users" */
export type Blocked_Users_Insert_Input = {
  blocked_follower?: InputMaybe<Friend_Obj_Rel_Insert_Input>;
  blocked_profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  blocked_user_id?: InputMaybe<Scalars["uuid"]>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
};

/** order by max() on columns of table "blocked_users" */
export type Blocked_Users_Max_Order_By = {
  blocked_user_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "blocked_users" */
export type Blocked_Users_Min_Order_By = {
  blocked_user_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "blocked_users" */
export type Blocked_Users_Mutation_Response = {
  __typename?: "blocked_users_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Blocked_Users>;
};

/** input type for inserting object relation for remote table "blocked_users" */
export type Blocked_Users_Obj_Rel_Insert_Input = {
  data: Blocked_Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Blocked_Users_On_Conflict>;
};

/** on_conflict condition type for table "blocked_users" */
export type Blocked_Users_On_Conflict = {
  constraint: Blocked_Users_Constraint;
  update_columns?: Array<Blocked_Users_Update_Column>;
  where?: InputMaybe<Blocked_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "blocked_users". */
export type Blocked_Users_Order_By = {
  blocked_follower?: InputMaybe<Friend_Order_By>;
  blocked_profile?: InputMaybe<Profile_Order_By>;
  blocked_user_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "blocked_users" */
export enum Blocked_Users_Select_Column {
  /** column name */
  BlockedUserId = "blocked_user_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** placeholder for update columns of table "blocked_users" (current role has no relevant permissions) */
export enum Blocked_Users_Update_Column {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["citext"]>;
  _gt?: InputMaybe<Scalars["citext"]>;
  _gte?: InputMaybe<Scalars["citext"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["citext"]>;
  _in?: InputMaybe<Array<Scalars["citext"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["citext"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["citext"]>;
  _lt?: InputMaybe<Scalars["citext"]>;
  _lte?: InputMaybe<Scalars["citext"]>;
  _neq?: InputMaybe<Scalars["citext"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["citext"]>;
  _nin?: InputMaybe<Array<Scalars["citext"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["citext"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["citext"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["citext"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["citext"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["citext"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["citext"]>;
};

/** columns and relationships of "comment" */
export type Comment = {
  __typename?: "comment";
  body: Scalars["String"];
  /** An array relationship */
  child_comments: Array<Comment>;
  /** An aggregate relationship */
  child_comments_aggregate: Comment_Aggregate;
  created_at: Scalars["timestamp"];
  id: Scalars["uuid"];
  ms: Scalars["Int"];
  /** An object relationship */
  parent_comment?: Maybe<Comment>;
  parent_comment_id?: Maybe<Scalars["uuid"]>;
  posted_at: Scalars["timestamp"];
  /** An object relationship */
  profile?: Maybe<Profile>;
  seen_by_parent_at?: Maybe<Scalars["timestamptz"]>;
  seen_by_tape_owner_at?: Maybe<Scalars["timestamptz"]>;
  /** An object relationship */
  tape: Tape;
  tape_id: Scalars["uuid"];
  updated_at: Scalars["timestamp"];
  user_id: Scalars["uuid"];
};

/** columns and relationships of "comment" */
export type CommentChild_CommentsArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};

/** columns and relationships of "comment" */
export type CommentChild_Comments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};

/** aggregated selection of "comment" */
export type Comment_Aggregate = {
  __typename?: "comment_aggregate";
  aggregate?: Maybe<Comment_Aggregate_Fields>;
  nodes: Array<Comment>;
};

/** aggregate fields of "comment" */
export type Comment_Aggregate_Fields = {
  __typename?: "comment_aggregate_fields";
  avg?: Maybe<Comment_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Comment_Max_Fields>;
  min?: Maybe<Comment_Min_Fields>;
  stddev?: Maybe<Comment_Stddev_Fields>;
  stddev_pop?: Maybe<Comment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Comment_Stddev_Samp_Fields>;
  sum?: Maybe<Comment_Sum_Fields>;
  var_pop?: Maybe<Comment_Var_Pop_Fields>;
  var_samp?: Maybe<Comment_Var_Samp_Fields>;
  variance?: Maybe<Comment_Variance_Fields>;
};

/** aggregate fields of "comment" */
export type Comment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Comment_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "comment" */
export type Comment_Aggregate_Order_By = {
  avg?: InputMaybe<Comment_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Comment_Max_Order_By>;
  min?: InputMaybe<Comment_Min_Order_By>;
  stddev?: InputMaybe<Comment_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Comment_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Comment_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Comment_Sum_Order_By>;
  var_pop?: InputMaybe<Comment_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Comment_Var_Samp_Order_By>;
  variance?: InputMaybe<Comment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "comment" */
export type Comment_Arr_Rel_Insert_Input = {
  data: Array<Comment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Comment_On_Conflict>;
};

/** aggregate avg on columns */
export type Comment_Avg_Fields = {
  __typename?: "comment_avg_fields";
  ms?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "comment" */
export type Comment_Avg_Order_By = {
  ms?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "comment". All fields are combined with a logical 'AND'. */
export type Comment_Bool_Exp = {
  _and?: InputMaybe<Array<Comment_Bool_Exp>>;
  _not?: InputMaybe<Comment_Bool_Exp>;
  _or?: InputMaybe<Array<Comment_Bool_Exp>>;
  body?: InputMaybe<String_Comparison_Exp>;
  child_comments?: InputMaybe<Comment_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  ms?: InputMaybe<Int_Comparison_Exp>;
  parent_comment?: InputMaybe<Comment_Bool_Exp>;
  parent_comment_id?: InputMaybe<Uuid_Comparison_Exp>;
  posted_at?: InputMaybe<Timestamp_Comparison_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  seen_by_parent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  seen_by_tape_owner_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  tape?: InputMaybe<Tape_Bool_Exp>;
  tape_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "comment" */
export enum Comment_Constraint {
  /** unique or primary key constraint on columns "id" */
  CommentPkey = "comment_pkey",
}

/** input type for inserting data into table "comment" */
export type Comment_Insert_Input = {
  body?: InputMaybe<Scalars["String"]>;
  child_comments?: InputMaybe<Comment_Arr_Rel_Insert_Input>;
  ms?: InputMaybe<Scalars["Int"]>;
  parent_comment?: InputMaybe<Comment_Obj_Rel_Insert_Input>;
  parent_comment_id?: InputMaybe<Scalars["uuid"]>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  seen_by_parent_at?: InputMaybe<Scalars["timestamptz"]>;
  seen_by_tape_owner_at?: InputMaybe<Scalars["timestamptz"]>;
  tape?: InputMaybe<Tape_Obj_Rel_Insert_Input>;
  tape_id?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Comment_Max_Fields = {
  __typename?: "comment_max_fields";
  body?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  ms?: Maybe<Scalars["Int"]>;
  parent_comment_id?: Maybe<Scalars["uuid"]>;
  posted_at?: Maybe<Scalars["timestamp"]>;
  seen_by_parent_at?: Maybe<Scalars["timestamptz"]>;
  seen_by_tape_owner_at?: Maybe<Scalars["timestamptz"]>;
  tape_id?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamp"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "comment" */
export type Comment_Max_Order_By = {
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ms?: InputMaybe<Order_By>;
  parent_comment_id?: InputMaybe<Order_By>;
  posted_at?: InputMaybe<Order_By>;
  seen_by_parent_at?: InputMaybe<Order_By>;
  seen_by_tape_owner_at?: InputMaybe<Order_By>;
  tape_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Comment_Min_Fields = {
  __typename?: "comment_min_fields";
  body?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  ms?: Maybe<Scalars["Int"]>;
  parent_comment_id?: Maybe<Scalars["uuid"]>;
  posted_at?: Maybe<Scalars["timestamp"]>;
  seen_by_parent_at?: Maybe<Scalars["timestamptz"]>;
  seen_by_tape_owner_at?: Maybe<Scalars["timestamptz"]>;
  tape_id?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamp"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "comment" */
export type Comment_Min_Order_By = {
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ms?: InputMaybe<Order_By>;
  parent_comment_id?: InputMaybe<Order_By>;
  posted_at?: InputMaybe<Order_By>;
  seen_by_parent_at?: InputMaybe<Order_By>;
  seen_by_tape_owner_at?: InputMaybe<Order_By>;
  tape_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "comment" */
export type Comment_Mutation_Response = {
  __typename?: "comment_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Comment>;
};

/** input type for inserting object relation for remote table "comment" */
export type Comment_Obj_Rel_Insert_Input = {
  data: Comment_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Comment_On_Conflict>;
};

/** on_conflict condition type for table "comment" */
export type Comment_On_Conflict = {
  constraint: Comment_Constraint;
  update_columns?: Array<Comment_Update_Column>;
  where?: InputMaybe<Comment_Bool_Exp>;
};

/** Ordering options when selecting data from "comment". */
export type Comment_Order_By = {
  body?: InputMaybe<Order_By>;
  child_comments_aggregate?: InputMaybe<Comment_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ms?: InputMaybe<Order_By>;
  parent_comment?: InputMaybe<Comment_Order_By>;
  parent_comment_id?: InputMaybe<Order_By>;
  posted_at?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  seen_by_parent_at?: InputMaybe<Order_By>;
  seen_by_tape_owner_at?: InputMaybe<Order_By>;
  tape?: InputMaybe<Tape_Order_By>;
  tape_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: comment */
export type Comment_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "comment" */
export enum Comment_Select_Column {
  /** column name */
  Body = "body",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Ms = "ms",
  /** column name */
  ParentCommentId = "parent_comment_id",
  /** column name */
  PostedAt = "posted_at",
  /** column name */
  SeenByParentAt = "seen_by_parent_at",
  /** column name */
  SeenByTapeOwnerAt = "seen_by_tape_owner_at",
  /** column name */
  TapeId = "tape_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "comment" */
export type Comment_Set_Input = {
  seen_by_parent_at?: InputMaybe<Scalars["timestamptz"]>;
  seen_by_tape_owner_at?: InputMaybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Comment_Stddev_Fields = {
  __typename?: "comment_stddev_fields";
  ms?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "comment" */
export type Comment_Stddev_Order_By = {
  ms?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Comment_Stddev_Pop_Fields = {
  __typename?: "comment_stddev_pop_fields";
  ms?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "comment" */
export type Comment_Stddev_Pop_Order_By = {
  ms?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Comment_Stddev_Samp_Fields = {
  __typename?: "comment_stddev_samp_fields";
  ms?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "comment" */
export type Comment_Stddev_Samp_Order_By = {
  ms?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Comment_Sum_Fields = {
  __typename?: "comment_sum_fields";
  ms?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "comment" */
export type Comment_Sum_Order_By = {
  ms?: InputMaybe<Order_By>;
};

/** update columns of table "comment" */
export enum Comment_Update_Column {
  /** column name */
  SeenByParentAt = "seen_by_parent_at",
  /** column name */
  SeenByTapeOwnerAt = "seen_by_tape_owner_at",
}

/** aggregate var_pop on columns */
export type Comment_Var_Pop_Fields = {
  __typename?: "comment_var_pop_fields";
  ms?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "comment" */
export type Comment_Var_Pop_Order_By = {
  ms?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Comment_Var_Samp_Fields = {
  __typename?: "comment_var_samp_fields";
  ms?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "comment" */
export type Comment_Var_Samp_Order_By = {
  ms?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Comment_Variance_Fields = {
  __typename?: "comment_variance_fields";
  ms?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "comment" */
export type Comment_Variance_Order_By = {
  ms?: InputMaybe<Order_By>;
};

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: "files";
  bucketId: Scalars["String"];
  createdAt: Scalars["timestamptz"];
  etag?: Maybe<Scalars["String"]>;
  id: Scalars["uuid"];
  isUploaded?: Maybe<Scalars["Boolean"]>;
  mimeType?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Int"]>;
  updatedAt: Scalars["timestamptz"];
  uploadedByUserId?: Maybe<Scalars["uuid"]>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Bool_Exp>>;
  _not?: InputMaybe<Files_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Bool_Exp>>;
  bucketId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  etag?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isUploaded?: InputMaybe<Boolean_Comparison_Exp>;
  mimeType?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = "files_pkey",
}

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
  bucketId?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  etag?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  isUploaded?: InputMaybe<Scalars["Boolean"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Int"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
  __typename?: "files_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** input type for inserting object relation for remote table "storage.files" */
export type Files_Obj_Rel_Insert_Input = {
  data: Files_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns?: Array<Files_Update_Column>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isUploaded?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** select columns of table "storage.files" */
export enum Files_Select_Column {
  /** column name */
  BucketId = "bucketId",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Etag = "etag",
  /** column name */
  Id = "id",
  /** column name */
  IsUploaded = "isUploaded",
  /** column name */
  MimeType = "mimeType",
  /** column name */
  Name = "name",
  /** column name */
  Size = "size",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UploadedByUserId = "uploadedByUserId",
}

/** placeholder for update columns of table "storage.files" (current role has no relevant permissions) */
export enum Files_Update_Column {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** columns and relationships of "friend" */
export type Friend = {
  __typename?: "friend";
  /** An object relationship */
  blocked?: Maybe<Blocked_Users>;
  created_at: Scalars["timestamp"];
  /** An object relationship */
  friend_invite?: Maybe<Friend>;
  /** An object relationship */
  friend_profile?: Maybe<Profile>;
  friended_user_id: Scalars["uuid"];
  id: Scalars["uuid"];
  user_id: Scalars["uuid"];
  /** An object relationship */
  user_profile?: Maybe<Profile>;
};

/** order by aggregate values of table "friend" */
export type Friend_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Friend_Max_Order_By>;
  min?: InputMaybe<Friend_Min_Order_By>;
};

/** input type for inserting array relation for remote table "friend" */
export type Friend_Arr_Rel_Insert_Input = {
  data: Array<Friend_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Friend_On_Conflict>;
};

/** Boolean expression to filter rows from the table "friend". All fields are combined with a logical 'AND'. */
export type Friend_Bool_Exp = {
  _and?: InputMaybe<Array<Friend_Bool_Exp>>;
  _not?: InputMaybe<Friend_Bool_Exp>;
  _or?: InputMaybe<Array<Friend_Bool_Exp>>;
  blocked?: InputMaybe<Blocked_Users_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  friend_invite?: InputMaybe<Friend_Bool_Exp>;
  friend_profile?: InputMaybe<Profile_Bool_Exp>;
  friended_user_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_profile?: InputMaybe<Profile_Bool_Exp>;
};

/** unique or primary key constraints on table "friend" */
export enum Friend_Constraint {
  /** unique or primary key constraint on columns "id" */
  FriendPkey = "friend_pkey",
  /** unique or primary key constraint on columns "friended_user_id", "user_id" */
  UniqueFriendAddedFriendIdUserId = "unique_friend_added_friend_id_user_id",
}

/** input type for inserting data into table "friend" */
export type Friend_Insert_Input = {
  blocked?: InputMaybe<Blocked_Users_Obj_Rel_Insert_Input>;
  friend_invite?: InputMaybe<Friend_Obj_Rel_Insert_Input>;
  friend_profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  friended_user_id?: InputMaybe<Scalars["uuid"]>;
  user_profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
};

/** order by max() on columns of table "friend" */
export type Friend_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  friended_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "friend" */
export type Friend_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  friended_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "friend" */
export type Friend_Mutation_Response = {
  __typename?: "friend_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Friend>;
};

/** input type for inserting object relation for remote table "friend" */
export type Friend_Obj_Rel_Insert_Input = {
  data: Friend_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Friend_On_Conflict>;
};

/** on_conflict condition type for table "friend" */
export type Friend_On_Conflict = {
  constraint: Friend_Constraint;
  update_columns?: Array<Friend_Update_Column>;
  where?: InputMaybe<Friend_Bool_Exp>;
};

/** Ordering options when selecting data from "friend". */
export type Friend_Order_By = {
  blocked?: InputMaybe<Blocked_Users_Order_By>;
  created_at?: InputMaybe<Order_By>;
  friend_invite?: InputMaybe<Friend_Order_By>;
  friend_profile?: InputMaybe<Profile_Order_By>;
  friended_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_profile?: InputMaybe<Profile_Order_By>;
};

/** select columns of table "friend" */
export enum Friend_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  FriendedUserId = "friended_user_id",
  /** column name */
  Id = "id",
  /** column name */
  UserId = "user_id",
}

/** placeholder for update columns of table "friend" (current role has no relevant permissions) */
export enum Friend_Update_Column {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars["jsonb"]>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars["jsonb"]>;
  _eq?: InputMaybe<Scalars["jsonb"]>;
  _gt?: InputMaybe<Scalars["jsonb"]>;
  _gte?: InputMaybe<Scalars["jsonb"]>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars["String"]>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars["String"]>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars["String"]>>;
  _in?: InputMaybe<Array<Scalars["jsonb"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["jsonb"]>;
  _lte?: InputMaybe<Scalars["jsonb"]>;
  _neq?: InputMaybe<Scalars["jsonb"]>;
  _nin?: InputMaybe<Array<Scalars["jsonb"]>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<Users_Mutation_Response>;
  /** delete data from the table: "blocked_users" */
  delete_blocked_users?: Maybe<Blocked_Users_Mutation_Response>;
  /** delete single row from the table: "blocked_users" */
  delete_blocked_users_by_pk?: Maybe<Blocked_Users>;
  /** delete data from the table: "comment" */
  delete_comment?: Maybe<Comment_Mutation_Response>;
  /** delete single row from the table: "comment" */
  delete_comment_by_pk?: Maybe<Comment>;
  /** delete data from the table: "friend" */
  delete_friend?: Maybe<Friend_Mutation_Response>;
  /** delete single row from the table: "friend" */
  delete_friend_by_pk?: Maybe<Friend>;
  /** delete data from the table: "tape" */
  delete_tape?: Maybe<Tape_Mutation_Response>;
  /** delete single row from the table: "tape" */
  delete_tape_by_pk?: Maybe<Tape>;
  /** delete data from the table: "tape_like" */
  delete_tape_like?: Maybe<Tape_Like_Mutation_Response>;
  /** delete single row from the table: "tape_like" */
  delete_tape_like_by_pk?: Maybe<Tape_Like>;
  /** delete data from the table: "tape_share" */
  delete_tape_share?: Maybe<Tape_Share_Mutation_Response>;
  /** delete single row from the table: "tape_share" */
  delete_tape_share_by_pk?: Maybe<Tape_Share>;
  /** delete data from the table: "tape_snap_file" */
  delete_tape_snap_file?: Maybe<Tape_Snap_File_Mutation_Response>;
  /** delete single row from the table: "tape_snap_file" */
  delete_tape_snap_file_by_pk?: Maybe<Tape_Snap_File>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<Files_Mutation_Response>;
  /** insert data into the table: "blocked_users" */
  insert_blocked_users?: Maybe<Blocked_Users_Mutation_Response>;
  /** insert a single row into the table: "blocked_users" */
  insert_blocked_users_one?: Maybe<Blocked_Users>;
  /** insert data into the table: "comment" */
  insert_comment?: Maybe<Comment_Mutation_Response>;
  /** insert a single row into the table: "comment" */
  insert_comment_one?: Maybe<Comment>;
  /** insert data into the table: "friend" */
  insert_friend?: Maybe<Friend_Mutation_Response>;
  /** insert a single row into the table: "friend" */
  insert_friend_one?: Maybe<Friend>;
  /** insert data into the table: "poke" */
  insert_poke?: Maybe<Poke_Mutation_Response>;
  /** insert a single row into the table: "poke" */
  insert_poke_one?: Maybe<Poke>;
  /** insert data into the table: "profile" */
  insert_profile?: Maybe<Profile_Mutation_Response>;
  /** insert a single row into the table: "profile" */
  insert_profile_one?: Maybe<Profile>;
  /** insert data into the table: "tape" */
  insert_tape?: Maybe<Tape_Mutation_Response>;
  /** insert data into the table: "tape_like" */
  insert_tape_like?: Maybe<Tape_Like_Mutation_Response>;
  /** insert a single row into the table: "tape_like" */
  insert_tape_like_one?: Maybe<Tape_Like>;
  /** insert data into the table: "tape_listen" */
  insert_tape_listen?: Maybe<Tape_Listen_Mutation_Response>;
  /** insert a single row into the table: "tape_listen" */
  insert_tape_listen_one?: Maybe<Tape_Listen>;
  /** insert a single row into the table: "tape" */
  insert_tape_one?: Maybe<Tape>;
  /** insert data into the table: "tape_report" */
  insert_tape_report?: Maybe<Tape_Report_Mutation_Response>;
  /** insert data into the table: "tape_share" */
  insert_tape_share?: Maybe<Tape_Share_Mutation_Response>;
  /** insert a single row into the table: "tape_share" */
  insert_tape_share_one?: Maybe<Tape_Share>;
  /** insert data into the table: "tape_snap_file" */
  insert_tape_snap_file?: Maybe<Tape_Snap_File_Mutation_Response>;
  /** insert a single row into the table: "tape_snap_file" */
  insert_tape_snap_file_one?: Maybe<Tape_Snap_File>;
  /** update data of the table: "comment" */
  update_comment?: Maybe<Comment_Mutation_Response>;
  /** update single row of the table: "comment" */
  update_comment_by_pk?: Maybe<Comment>;
  /** update data of the table: "profile" */
  update_profile?: Maybe<Profile_Mutation_Response>;
  /** update single row of the table: "profile" */
  update_profile_by_pk?: Maybe<Profile>;
  /** update data of the table: "tape_listen" */
  update_tape_listen?: Maybe<Tape_Listen_Mutation_Response>;
  /** update single row of the table: "tape_listen" */
  update_tape_listen_by_pk?: Maybe<Tape_Listen>;
  /** update data of the table: "tape_share" */
  update_tape_share?: Maybe<Tape_Share_Mutation_Response>;
  /** update single row of the table: "tape_share" */
  update_tape_share_by_pk?: Maybe<Tape_Share>;
};

/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: Files_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Blocked_UsersArgs = {
  where: Blocked_Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Blocked_Users_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_CommentArgs = {
  where: Comment_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Comment_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_FriendArgs = {
  where: Friend_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Friend_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_TapeArgs = {
  where: Tape_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Tape_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_Tape_LikeArgs = {
  where: Tape_Like_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Tape_Like_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_Tape_ShareArgs = {
  where: Tape_Share_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Tape_Share_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_Tape_Snap_FileArgs = {
  where: Tape_Snap_File_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Tape_Snap_File_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: Files_Insert_Input;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Blocked_UsersArgs = {
  objects: Array<Blocked_Users_Insert_Input>;
  on_conflict?: InputMaybe<Blocked_Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Blocked_Users_OneArgs = {
  object: Blocked_Users_Insert_Input;
  on_conflict?: InputMaybe<Blocked_Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CommentArgs = {
  objects: Array<Comment_Insert_Input>;
  on_conflict?: InputMaybe<Comment_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Comment_OneArgs = {
  object: Comment_Insert_Input;
  on_conflict?: InputMaybe<Comment_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_FriendArgs = {
  objects: Array<Friend_Insert_Input>;
  on_conflict?: InputMaybe<Friend_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Friend_OneArgs = {
  object: Friend_Insert_Input;
  on_conflict?: InputMaybe<Friend_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PokeArgs = {
  objects: Array<Poke_Insert_Input>;
  on_conflict?: InputMaybe<Poke_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Poke_OneArgs = {
  object: Poke_Insert_Input;
  on_conflict?: InputMaybe<Poke_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ProfileArgs = {
  objects: Array<Profile_Insert_Input>;
  on_conflict?: InputMaybe<Profile_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Profile_OneArgs = {
  object: Profile_Insert_Input;
  on_conflict?: InputMaybe<Profile_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_TapeArgs = {
  objects: Array<Tape_Insert_Input>;
  on_conflict?: InputMaybe<Tape_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tape_LikeArgs = {
  objects: Array<Tape_Like_Insert_Input>;
  on_conflict?: InputMaybe<Tape_Like_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tape_Like_OneArgs = {
  object: Tape_Like_Insert_Input;
  on_conflict?: InputMaybe<Tape_Like_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tape_ListenArgs = {
  objects: Array<Tape_Listen_Insert_Input>;
  on_conflict?: InputMaybe<Tape_Listen_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tape_Listen_OneArgs = {
  object: Tape_Listen_Insert_Input;
  on_conflict?: InputMaybe<Tape_Listen_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tape_OneArgs = {
  object: Tape_Insert_Input;
  on_conflict?: InputMaybe<Tape_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tape_ReportArgs = {
  objects: Array<Tape_Report_Insert_Input>;
  on_conflict?: InputMaybe<Tape_Report_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tape_ShareArgs = {
  objects: Array<Tape_Share_Insert_Input>;
  on_conflict?: InputMaybe<Tape_Share_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tape_Share_OneArgs = {
  object: Tape_Share_Insert_Input;
  on_conflict?: InputMaybe<Tape_Share_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tape_Snap_FileArgs = {
  objects: Array<Tape_Snap_File_Insert_Input>;
  on_conflict?: InputMaybe<Tape_Snap_File_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tape_Snap_File_OneArgs = {
  object: Tape_Snap_File_Insert_Input;
  on_conflict?: InputMaybe<Tape_Snap_File_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_CommentArgs = {
  _set?: InputMaybe<Comment_Set_Input>;
  where: Comment_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Comment_By_PkArgs = {
  _set?: InputMaybe<Comment_Set_Input>;
  pk_columns: Comment_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ProfileArgs = {
  _set?: InputMaybe<Profile_Set_Input>;
  where: Profile_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Profile_By_PkArgs = {
  _set?: InputMaybe<Profile_Set_Input>;
  pk_columns: Profile_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Tape_ListenArgs = {
  _inc?: InputMaybe<Tape_Listen_Inc_Input>;
  _set?: InputMaybe<Tape_Listen_Set_Input>;
  where: Tape_Listen_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Tape_Listen_By_PkArgs = {
  _inc?: InputMaybe<Tape_Listen_Inc_Input>;
  _set?: InputMaybe<Tape_Listen_Set_Input>;
  pk_columns: Tape_Listen_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Tape_ShareArgs = {
  _set?: InputMaybe<Tape_Share_Set_Input>;
  where: Tape_Share_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Tape_Share_By_PkArgs = {
  _set?: InputMaybe<Tape_Share_Set_Input>;
  pk_columns: Tape_Share_Pk_Columns_Input;
};

/** columns and relationships of "notifications" */
export type Notifications = {
  __typename?: "notifications";
  body: Scalars["String"];
  created_at: Scalars["timestamptz"];
  id: Scalars["uuid"];
  link: Scalars["String"];
  name: Scalars["String"];
  sent_at?: Maybe<Scalars["timestamptz"]>;
  title: Scalars["String"];
  user_id: Scalars["uuid"];
};

/** Boolean expression to filter rows from the table "notifications". All fields are combined with a logical 'AND'. */
export type Notifications_Bool_Exp = {
  _and?: InputMaybe<Array<Notifications_Bool_Exp>>;
  _not?: InputMaybe<Notifications_Bool_Exp>;
  _or?: InputMaybe<Array<Notifications_Bool_Exp>>;
  body?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  link?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** Ordering options when selecting data from "notifications". */
export type Notifications_Order_By = {
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  sent_at?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "notifications" */
export enum Notifications_Select_Column {
  /** column name */
  Body = "body",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Link = "link",
  /** column name */
  Name = "name",
  /** column name */
  SentAt = "sent_at",
  /** column name */
  Title = "title",
  /** column name */
  UserId = "user_id",
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** columns and relationships of "poke" */
export type Poke = {
  __typename?: "poke";
  created_at: Scalars["timestamp"];
  date_key: Scalars["String"];
  id: Scalars["uuid"];
  /** An object relationship */
  recipient: Profile;
  recipient_user_id: Scalars["uuid"];
  /** An object relationship */
  sender: Profile;
  updated_at: Scalars["timestamp"];
  user_id: Scalars["uuid"];
};

/** order by aggregate values of table "poke" */
export type Poke_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Poke_Max_Order_By>;
  min?: InputMaybe<Poke_Min_Order_By>;
};

/** input type for inserting array relation for remote table "poke" */
export type Poke_Arr_Rel_Insert_Input = {
  data: Array<Poke_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Poke_On_Conflict>;
};

/** Boolean expression to filter rows from the table "poke". All fields are combined with a logical 'AND'. */
export type Poke_Bool_Exp = {
  _and?: InputMaybe<Array<Poke_Bool_Exp>>;
  _not?: InputMaybe<Poke_Bool_Exp>;
  _or?: InputMaybe<Array<Poke_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  date_key?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  recipient?: InputMaybe<Profile_Bool_Exp>;
  recipient_user_id?: InputMaybe<Uuid_Comparison_Exp>;
  sender?: InputMaybe<Profile_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "poke" */
export enum Poke_Constraint {
  /** unique or primary key constraint on columns "id" */
  PokePkey = "poke_pkey",
  /** unique or primary key constraint on columns "date_key", "recipient_user_id", "user_id" */
  PokeUserIdFriendIdDateKeyKey = "poke_user_id_friend_id_date_key_key",
}

/** input type for inserting data into table "poke" */
export type Poke_Insert_Input = {
  date_key?: InputMaybe<Scalars["String"]>;
  recipient?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  recipient_user_id?: InputMaybe<Scalars["uuid"]>;
  sender?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
};

/** order by max() on columns of table "poke" */
export type Poke_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date_key?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recipient_user_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "poke" */
export type Poke_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date_key?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recipient_user_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "poke" */
export type Poke_Mutation_Response = {
  __typename?: "poke_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Poke>;
};

/** on_conflict condition type for table "poke" */
export type Poke_On_Conflict = {
  constraint: Poke_Constraint;
  update_columns?: Array<Poke_Update_Column>;
  where?: InputMaybe<Poke_Bool_Exp>;
};

/** Ordering options when selecting data from "poke". */
export type Poke_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date_key?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  recipient?: InputMaybe<Profile_Order_By>;
  recipient_user_id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Profile_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "poke" */
export enum Poke_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DateKey = "date_key",
  /** column name */
  Id = "id",
  /** column name */
  RecipientUserId = "recipient_user_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** placeholder for update columns of table "poke" (current role has no relevant permissions) */
export enum Poke_Update_Column {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** columns and relationships of "profile" */
export type Profile = {
  __typename?: "profile";
  avatar_id?: Maybe<Scalars["uuid"]>;
  /** An array relationship */
  blocked: Array<Blocked_Users>;
  /** An array relationship */
  blocked_by: Array<Blocked_Users>;
  fcm_token?: Maybe<Scalars["String"]>;
  /** An array relationship */
  followers: Array<Friend>;
  /** An array relationship */
  friends: Array<Friend>;
  id: Scalars["uuid"];
  private: Scalars["Boolean"];
  /** An array relationship */
  received_pokes: Array<Poke>;
  /** An array relationship */
  tapes: Array<Tape>;
  /** An aggregate relationship */
  tapes_aggregate: Tape_Aggregate;
  /** An object relationship */
  user: Users;
  username?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "profile" */
export type ProfileBlockedArgs = {
  distinct_on?: InputMaybe<Array<Blocked_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Blocked_Users_Order_By>>;
  where?: InputMaybe<Blocked_Users_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileBlocked_ByArgs = {
  distinct_on?: InputMaybe<Array<Blocked_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Blocked_Users_Order_By>>;
  where?: InputMaybe<Blocked_Users_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileFollowersArgs = {
  distinct_on?: InputMaybe<Array<Friend_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Friend_Order_By>>;
  where?: InputMaybe<Friend_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileFriendsArgs = {
  distinct_on?: InputMaybe<Array<Friend_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Friend_Order_By>>;
  where?: InputMaybe<Friend_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileReceived_PokesArgs = {
  distinct_on?: InputMaybe<Array<Poke_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Poke_Order_By>>;
  where?: InputMaybe<Poke_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileTapesArgs = {
  distinct_on?: InputMaybe<Array<Tape_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tape_Order_By>>;
  where?: InputMaybe<Tape_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileTapes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tape_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tape_Order_By>>;
  where?: InputMaybe<Tape_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "profile". All fields are combined with a logical 'AND'. */
export type Profile_Bool_Exp = {
  _and?: InputMaybe<Array<Profile_Bool_Exp>>;
  _not?: InputMaybe<Profile_Bool_Exp>;
  _or?: InputMaybe<Array<Profile_Bool_Exp>>;
  avatar_id?: InputMaybe<Uuid_Comparison_Exp>;
  blocked?: InputMaybe<Blocked_Users_Bool_Exp>;
  blocked_by?: InputMaybe<Blocked_Users_Bool_Exp>;
  fcm_token?: InputMaybe<String_Comparison_Exp>;
  followers?: InputMaybe<Friend_Bool_Exp>;
  friends?: InputMaybe<Friend_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  private?: InputMaybe<Boolean_Comparison_Exp>;
  received_pokes?: InputMaybe<Poke_Bool_Exp>;
  tapes?: InputMaybe<Tape_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "profile" */
export enum Profile_Constraint {
  /** unique or primary key constraint on columns "username" */
  ProfileUsernameKey = "profile_username_key",
  /** unique or primary key constraint on columns "id" */
  UserProfilePkey = "user_profile_pkey",
}

/** input type for inserting data into table "profile" */
export type Profile_Insert_Input = {
  blocked?: InputMaybe<Blocked_Users_Arr_Rel_Insert_Input>;
  blocked_by?: InputMaybe<Blocked_Users_Arr_Rel_Insert_Input>;
  followers?: InputMaybe<Friend_Arr_Rel_Insert_Input>;
  friends?: InputMaybe<Friend_Arr_Rel_Insert_Input>;
  received_pokes?: InputMaybe<Poke_Arr_Rel_Insert_Input>;
  tapes?: InputMaybe<Tape_Arr_Rel_Insert_Input>;
  username?: InputMaybe<Scalars["String"]>;
};

/** response of any mutation on the table "profile" */
export type Profile_Mutation_Response = {
  __typename?: "profile_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Profile>;
};

/** input type for inserting object relation for remote table "profile" */
export type Profile_Obj_Rel_Insert_Input = {
  data: Profile_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Profile_On_Conflict>;
};

/** on_conflict condition type for table "profile" */
export type Profile_On_Conflict = {
  constraint: Profile_Constraint;
  update_columns?: Array<Profile_Update_Column>;
  where?: InputMaybe<Profile_Bool_Exp>;
};

/** Ordering options when selecting data from "profile". */
export type Profile_Order_By = {
  avatar_id?: InputMaybe<Order_By>;
  blocked_aggregate?: InputMaybe<Blocked_Users_Aggregate_Order_By>;
  blocked_by_aggregate?: InputMaybe<Blocked_Users_Aggregate_Order_By>;
  fcm_token?: InputMaybe<Order_By>;
  followers_aggregate?: InputMaybe<Friend_Aggregate_Order_By>;
  friends_aggregate?: InputMaybe<Friend_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  private?: InputMaybe<Order_By>;
  received_pokes_aggregate?: InputMaybe<Poke_Aggregate_Order_By>;
  tapes_aggregate?: InputMaybe<Tape_Aggregate_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: profile */
export type Profile_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "profile" */
export enum Profile_Select_Column {
  /** column name */
  AvatarId = "avatar_id",
  /** column name */
  FcmToken = "fcm_token",
  /** column name */
  Id = "id",
  /** column name */
  Private = "private",
  /** column name */
  Username = "username",
}

/** input type for updating data in table "profile" */
export type Profile_Set_Input = {
  avatar_id?: InputMaybe<Scalars["uuid"]>;
  fcm_token?: InputMaybe<Scalars["String"]>;
  private?: InputMaybe<Scalars["Boolean"]>;
  username?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "profile" */
export enum Profile_Update_Column {
  /** column name */
  AvatarId = "avatar_id",
  /** column name */
  FcmToken = "fcm_token",
  /** column name */
  Private = "private",
  /** column name */
  Username = "username",
}

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "blocked_users" */
  blocked_users: Array<Blocked_Users>;
  /** fetch data from the table: "blocked_users" using primary key columns */
  blocked_users_by_pk?: Maybe<Blocked_Users>;
  /** fetch data from the table: "comment" */
  comment: Array<Comment>;
  /** fetch aggregated fields from the table: "comment" */
  comment_aggregate: Comment_Aggregate;
  /** fetch data from the table: "comment" using primary key columns */
  comment_by_pk?: Maybe<Comment>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** fetch data from the table: "storage.files" */
  files: Array<Files>;
  /** fetch data from the table: "friend" */
  friend: Array<Friend>;
  /** fetch data from the table: "friend" using primary key columns */
  friend_by_pk?: Maybe<Friend>;
  /** fetch data from the table: "notifications" */
  notifications: Array<Notifications>;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table: "poke" */
  poke: Array<Poke>;
  /** fetch data from the table: "poke" using primary key columns */
  poke_by_pk?: Maybe<Poke>;
  /** fetch data from the table: "profile" */
  profile: Array<Profile>;
  /** fetch data from the table: "profile" using primary key columns */
  profile_by_pk?: Maybe<Profile>;
  /** fetch data from the table: "tape" */
  tape: Array<Tape>;
  /** fetch aggregated fields from the table: "tape" */
  tape_aggregate: Tape_Aggregate;
  /** fetch data from the table: "tape" using primary key columns */
  tape_by_pk?: Maybe<Tape>;
  /** fetch data from the table: "tape_like" */
  tape_like: Array<Tape_Like>;
  /** fetch data from the table: "tape_like" using primary key columns */
  tape_like_by_pk?: Maybe<Tape_Like>;
  /** fetch data from the table: "tape_listen" */
  tape_listen: Array<Tape_Listen>;
  /** fetch aggregated fields from the table: "tape_listen" */
  tape_listen_aggregate: Tape_Listen_Aggregate;
  /** fetch data from the table: "tape_listen" using primary key columns */
  tape_listen_by_pk?: Maybe<Tape_Listen>;
  /** fetch data from the table: "tape_share" */
  tape_share: Array<Tape_Share>;
  /** fetch data from the table: "tape_share" using primary key columns */
  tape_share_by_pk?: Maybe<Tape_Share>;
  /** fetch data from the table: "tape_snap_file" */
  tape_snap_file: Array<Tape_Snap_File>;
  /** fetch data from the table: "tape_snap_file" using primary key columns */
  tape_snap_file_by_pk?: Maybe<Tape_Snap_File>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
};

export type Query_RootBlocked_UsersArgs = {
  distinct_on?: InputMaybe<Array<Blocked_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Blocked_Users_Order_By>>;
  where?: InputMaybe<Blocked_Users_Bool_Exp>;
};

export type Query_RootBlocked_Users_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootCommentArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};

export type Query_RootComment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};

export type Query_RootComment_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootFileArgs = {
  id: Scalars["uuid"];
};

export type Query_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

export type Query_RootFriendArgs = {
  distinct_on?: InputMaybe<Array<Friend_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Friend_Order_By>>;
  where?: InputMaybe<Friend_Bool_Exp>;
};

export type Query_RootFriend_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};

export type Query_RootNotifications_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootPokeArgs = {
  distinct_on?: InputMaybe<Array<Poke_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Poke_Order_By>>;
  where?: InputMaybe<Poke_Bool_Exp>;
};

export type Query_RootPoke_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootProfileArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};

export type Query_RootProfile_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootTapeArgs = {
  distinct_on?: InputMaybe<Array<Tape_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tape_Order_By>>;
  where?: InputMaybe<Tape_Bool_Exp>;
};

export type Query_RootTape_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tape_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tape_Order_By>>;
  where?: InputMaybe<Tape_Bool_Exp>;
};

export type Query_RootTape_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootTape_LikeArgs = {
  distinct_on?: InputMaybe<Array<Tape_Like_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tape_Like_Order_By>>;
  where?: InputMaybe<Tape_Like_Bool_Exp>;
};

export type Query_RootTape_Like_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootTape_ListenArgs = {
  distinct_on?: InputMaybe<Array<Tape_Listen_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tape_Listen_Order_By>>;
  where?: InputMaybe<Tape_Listen_Bool_Exp>;
};

export type Query_RootTape_Listen_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tape_Listen_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tape_Listen_Order_By>>;
  where?: InputMaybe<Tape_Listen_Bool_Exp>;
};

export type Query_RootTape_Listen_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootTape_ShareArgs = {
  distinct_on?: InputMaybe<Array<Tape_Share_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tape_Share_Order_By>>;
  where?: InputMaybe<Tape_Share_Bool_Exp>;
};

export type Query_RootTape_Share_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootTape_Snap_FileArgs = {
  distinct_on?: InputMaybe<Array<Tape_Snap_File_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tape_Snap_File_Order_By>>;
  where?: InputMaybe<Tape_Snap_File_Bool_Exp>;
};

export type Query_RootTape_Snap_File_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootUserArgs = {
  id: Scalars["uuid"];
};

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "blocked_users" */
  blocked_users: Array<Blocked_Users>;
  /** fetch data from the table: "blocked_users" using primary key columns */
  blocked_users_by_pk?: Maybe<Blocked_Users>;
  /** fetch data from the table: "comment" */
  comment: Array<Comment>;
  /** fetch aggregated fields from the table: "comment" */
  comment_aggregate: Comment_Aggregate;
  /** fetch data from the table: "comment" using primary key columns */
  comment_by_pk?: Maybe<Comment>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** fetch data from the table: "storage.files" */
  files: Array<Files>;
  /** fetch data from the table: "friend" */
  friend: Array<Friend>;
  /** fetch data from the table: "friend" using primary key columns */
  friend_by_pk?: Maybe<Friend>;
  /** fetch data from the table: "notifications" */
  notifications: Array<Notifications>;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table: "poke" */
  poke: Array<Poke>;
  /** fetch data from the table: "poke" using primary key columns */
  poke_by_pk?: Maybe<Poke>;
  /** fetch data from the table: "profile" */
  profile: Array<Profile>;
  /** fetch data from the table: "profile" using primary key columns */
  profile_by_pk?: Maybe<Profile>;
  /** fetch data from the table: "tape" */
  tape: Array<Tape>;
  /** fetch aggregated fields from the table: "tape" */
  tape_aggregate: Tape_Aggregate;
  /** fetch data from the table: "tape" using primary key columns */
  tape_by_pk?: Maybe<Tape>;
  /** fetch data from the table: "tape_like" */
  tape_like: Array<Tape_Like>;
  /** fetch data from the table: "tape_like" using primary key columns */
  tape_like_by_pk?: Maybe<Tape_Like>;
  /** fetch data from the table: "tape_listen" */
  tape_listen: Array<Tape_Listen>;
  /** fetch aggregated fields from the table: "tape_listen" */
  tape_listen_aggregate: Tape_Listen_Aggregate;
  /** fetch data from the table: "tape_listen" using primary key columns */
  tape_listen_by_pk?: Maybe<Tape_Listen>;
  /** fetch data from the table: "tape_share" */
  tape_share: Array<Tape_Share>;
  /** fetch data from the table: "tape_share" using primary key columns */
  tape_share_by_pk?: Maybe<Tape_Share>;
  /** fetch data from the table: "tape_snap_file" */
  tape_snap_file: Array<Tape_Snap_File>;
  /** fetch data from the table: "tape_snap_file" using primary key columns */
  tape_snap_file_by_pk?: Maybe<Tape_Snap_File>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
};

export type Subscription_RootBlocked_UsersArgs = {
  distinct_on?: InputMaybe<Array<Blocked_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Blocked_Users_Order_By>>;
  where?: InputMaybe<Blocked_Users_Bool_Exp>;
};

export type Subscription_RootBlocked_Users_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootCommentArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};

export type Subscription_RootComment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};

export type Subscription_RootComment_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootFileArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

export type Subscription_RootFriendArgs = {
  distinct_on?: InputMaybe<Array<Friend_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Friend_Order_By>>;
  where?: InputMaybe<Friend_Bool_Exp>;
};

export type Subscription_RootFriend_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};

export type Subscription_RootNotifications_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootPokeArgs = {
  distinct_on?: InputMaybe<Array<Poke_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Poke_Order_By>>;
  where?: InputMaybe<Poke_Bool_Exp>;
};

export type Subscription_RootPoke_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootProfileArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};

export type Subscription_RootProfile_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootTapeArgs = {
  distinct_on?: InputMaybe<Array<Tape_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tape_Order_By>>;
  where?: InputMaybe<Tape_Bool_Exp>;
};

export type Subscription_RootTape_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tape_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tape_Order_By>>;
  where?: InputMaybe<Tape_Bool_Exp>;
};

export type Subscription_RootTape_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootTape_LikeArgs = {
  distinct_on?: InputMaybe<Array<Tape_Like_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tape_Like_Order_By>>;
  where?: InputMaybe<Tape_Like_Bool_Exp>;
};

export type Subscription_RootTape_Like_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootTape_ListenArgs = {
  distinct_on?: InputMaybe<Array<Tape_Listen_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tape_Listen_Order_By>>;
  where?: InputMaybe<Tape_Listen_Bool_Exp>;
};

export type Subscription_RootTape_Listen_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tape_Listen_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tape_Listen_Order_By>>;
  where?: InputMaybe<Tape_Listen_Bool_Exp>;
};

export type Subscription_RootTape_Listen_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootTape_ShareArgs = {
  distinct_on?: InputMaybe<Array<Tape_Share_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tape_Share_Order_By>>;
  where?: InputMaybe<Tape_Share_Bool_Exp>;
};

export type Subscription_RootTape_Share_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootTape_Snap_FileArgs = {
  distinct_on?: InputMaybe<Array<Tape_Snap_File_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tape_Snap_File_Order_By>>;
  where?: InputMaybe<Tape_Snap_File_Bool_Exp>;
};

export type Subscription_RootTape_Snap_File_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootUserArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "tape" */
export type Tape = {
  __typename?: "tape";
  /** An array relationship */
  comments: Array<Comment>;
  /** An aggregate relationship */
  comments_aggregate: Comment_Aggregate;
  created_at: Scalars["timestamp"];
  duration: Scalars["Int"];
  expires_at: Scalars["timestamptz"];
  /** An object relationship */
  file: Files;
  file_id: Scalars["uuid"];
  id: Scalars["uuid"];
  is_multicast: Scalars["Boolean"];
  is_public: Scalars["Boolean"];
  path: Scalars["String"];
  private_comments: Scalars["Boolean"];
  /** An object relationship */
  profile?: Maybe<Profile>;
  /** An array relationship */
  tape_friends: Array<Friend>;
  /** An array relationship */
  tape_likes: Array<Tape_Like>;
  /** An array relationship */
  tape_listens: Array<Tape_Listen>;
  /** An aggregate relationship */
  tape_listens_aggregate: Tape_Listen_Aggregate;
  /** An array relationship */
  tape_shares: Array<Tape_Share>;
  /** An array relationship */
  tape_snap_files: Array<Tape_Snap_File>;
  updated_at: Scalars["timestamp"];
  user_id: Scalars["uuid"];
  waves: Scalars["jsonb"];
};

/** columns and relationships of "tape" */
export type TapeCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};

/** columns and relationships of "tape" */
export type TapeComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};

/** columns and relationships of "tape" */
export type TapeTape_FriendsArgs = {
  distinct_on?: InputMaybe<Array<Friend_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Friend_Order_By>>;
  where?: InputMaybe<Friend_Bool_Exp>;
};

/** columns and relationships of "tape" */
export type TapeTape_LikesArgs = {
  distinct_on?: InputMaybe<Array<Tape_Like_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tape_Like_Order_By>>;
  where?: InputMaybe<Tape_Like_Bool_Exp>;
};

/** columns and relationships of "tape" */
export type TapeTape_ListensArgs = {
  distinct_on?: InputMaybe<Array<Tape_Listen_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tape_Listen_Order_By>>;
  where?: InputMaybe<Tape_Listen_Bool_Exp>;
};

/** columns and relationships of "tape" */
export type TapeTape_Listens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tape_Listen_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tape_Listen_Order_By>>;
  where?: InputMaybe<Tape_Listen_Bool_Exp>;
};

/** columns and relationships of "tape" */
export type TapeTape_SharesArgs = {
  distinct_on?: InputMaybe<Array<Tape_Share_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tape_Share_Order_By>>;
  where?: InputMaybe<Tape_Share_Bool_Exp>;
};

/** columns and relationships of "tape" */
export type TapeTape_Snap_FilesArgs = {
  distinct_on?: InputMaybe<Array<Tape_Snap_File_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tape_Snap_File_Order_By>>;
  where?: InputMaybe<Tape_Snap_File_Bool_Exp>;
};

/** columns and relationships of "tape" */
export type TapeWavesArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "tape" */
export type Tape_Aggregate = {
  __typename?: "tape_aggregate";
  aggregate?: Maybe<Tape_Aggregate_Fields>;
  nodes: Array<Tape>;
};

/** aggregate fields of "tape" */
export type Tape_Aggregate_Fields = {
  __typename?: "tape_aggregate_fields";
  avg?: Maybe<Tape_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Tape_Max_Fields>;
  min?: Maybe<Tape_Min_Fields>;
  stddev?: Maybe<Tape_Stddev_Fields>;
  stddev_pop?: Maybe<Tape_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tape_Stddev_Samp_Fields>;
  sum?: Maybe<Tape_Sum_Fields>;
  var_pop?: Maybe<Tape_Var_Pop_Fields>;
  var_samp?: Maybe<Tape_Var_Samp_Fields>;
  variance?: Maybe<Tape_Variance_Fields>;
};

/** aggregate fields of "tape" */
export type Tape_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tape_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "tape" */
export type Tape_Aggregate_Order_By = {
  avg?: InputMaybe<Tape_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tape_Max_Order_By>;
  min?: InputMaybe<Tape_Min_Order_By>;
  stddev?: InputMaybe<Tape_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Tape_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Tape_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Tape_Sum_Order_By>;
  var_pop?: InputMaybe<Tape_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Tape_Var_Samp_Order_By>;
  variance?: InputMaybe<Tape_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tape" */
export type Tape_Arr_Rel_Insert_Input = {
  data: Array<Tape_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Tape_On_Conflict>;
};

/** aggregate avg on columns */
export type Tape_Avg_Fields = {
  __typename?: "tape_avg_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "tape" */
export type Tape_Avg_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tape". All fields are combined with a logical 'AND'. */
export type Tape_Bool_Exp = {
  _and?: InputMaybe<Array<Tape_Bool_Exp>>;
  _not?: InputMaybe<Tape_Bool_Exp>;
  _or?: InputMaybe<Array<Tape_Bool_Exp>>;
  comments?: InputMaybe<Comment_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  duration?: InputMaybe<Int_Comparison_Exp>;
  expires_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  file?: InputMaybe<Files_Bool_Exp>;
  file_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_multicast?: InputMaybe<Boolean_Comparison_Exp>;
  is_public?: InputMaybe<Boolean_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
  private_comments?: InputMaybe<Boolean_Comparison_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  tape_friends?: InputMaybe<Friend_Bool_Exp>;
  tape_likes?: InputMaybe<Tape_Like_Bool_Exp>;
  tape_listens?: InputMaybe<Tape_Listen_Bool_Exp>;
  tape_shares?: InputMaybe<Tape_Share_Bool_Exp>;
  tape_snap_files?: InputMaybe<Tape_Snap_File_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  waves?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "tape" */
export enum Tape_Constraint {
  /** unique or primary key constraint on columns "id" */
  TapePkey = "tape_pkey",
}

/** input type for inserting data into table "tape" */
export type Tape_Insert_Input = {
  comments?: InputMaybe<Comment_Arr_Rel_Insert_Input>;
  duration?: InputMaybe<Scalars["Int"]>;
  expires_at?: InputMaybe<Scalars["timestamptz"]>;
  file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  file_id?: InputMaybe<Scalars["uuid"]>;
  is_multicast?: InputMaybe<Scalars["Boolean"]>;
  is_public?: InputMaybe<Scalars["Boolean"]>;
  path?: InputMaybe<Scalars["String"]>;
  private_comments?: InputMaybe<Scalars["Boolean"]>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  tape_friends?: InputMaybe<Friend_Arr_Rel_Insert_Input>;
  tape_likes?: InputMaybe<Tape_Like_Arr_Rel_Insert_Input>;
  tape_listens?: InputMaybe<Tape_Listen_Arr_Rel_Insert_Input>;
  tape_reports?: InputMaybe<Tape_Report_Arr_Rel_Insert_Input>;
  tape_shares?: InputMaybe<Tape_Share_Arr_Rel_Insert_Input>;
  tape_snap_files?: InputMaybe<Tape_Snap_File_Arr_Rel_Insert_Input>;
  waves?: InputMaybe<Scalars["jsonb"]>;
};

/** columns and relationships of "tape_like" */
export type Tape_Like = {
  __typename?: "tape_like";
  created_at: Scalars["timestamp"];
  id: Scalars["uuid"];
  /** An object relationship */
  tape: Tape;
  tape_id: Scalars["uuid"];
  updated_at: Scalars["timestamp"];
  user_id: Scalars["uuid"];
};

/** order by aggregate values of table "tape_like" */
export type Tape_Like_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tape_Like_Max_Order_By>;
  min?: InputMaybe<Tape_Like_Min_Order_By>;
};

/** input type for inserting array relation for remote table "tape_like" */
export type Tape_Like_Arr_Rel_Insert_Input = {
  data: Array<Tape_Like_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Tape_Like_On_Conflict>;
};

/** Boolean expression to filter rows from the table "tape_like". All fields are combined with a logical 'AND'. */
export type Tape_Like_Bool_Exp = {
  _and?: InputMaybe<Array<Tape_Like_Bool_Exp>>;
  _not?: InputMaybe<Tape_Like_Bool_Exp>;
  _or?: InputMaybe<Array<Tape_Like_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  tape?: InputMaybe<Tape_Bool_Exp>;
  tape_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "tape_like" */
export enum Tape_Like_Constraint {
  /** unique or primary key constraint on columns "id" */
  TapeLikePkey = "tape_like_pkey",
  /** unique or primary key constraint on columns "tape_id", "user_id" */
  UniqueTapeLikeTapeIdUserId = "unique_tape_like_tape_id_user_id",
}

/** input type for inserting data into table "tape_like" */
export type Tape_Like_Insert_Input = {
  tape?: InputMaybe<Tape_Obj_Rel_Insert_Input>;
  tape_id?: InputMaybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "tape_like" */
export type Tape_Like_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tape_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "tape_like" */
export type Tape_Like_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tape_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tape_like" */
export type Tape_Like_Mutation_Response = {
  __typename?: "tape_like_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Tape_Like>;
};

/** on_conflict condition type for table "tape_like" */
export type Tape_Like_On_Conflict = {
  constraint: Tape_Like_Constraint;
  update_columns?: Array<Tape_Like_Update_Column>;
  where?: InputMaybe<Tape_Like_Bool_Exp>;
};

/** Ordering options when selecting data from "tape_like". */
export type Tape_Like_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tape?: InputMaybe<Tape_Order_By>;
  tape_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "tape_like" */
export enum Tape_Like_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  TapeId = "tape_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** placeholder for update columns of table "tape_like" (current role has no relevant permissions) */
export enum Tape_Like_Update_Column {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** columns and relationships of "tape_listen" */
export type Tape_Listen = {
  __typename?: "tape_listen";
  created_at: Scalars["timestamp"];
  duration?: Maybe<Scalars["Int"]>;
  id: Scalars["uuid"];
  posted_at: Scalars["timestamp"];
  /** An object relationship */
  tape: Tape;
  tape_id: Scalars["uuid"];
  /** An object relationship */
  tape_share?: Maybe<Tape_Share>;
  tape_share_id?: Maybe<Scalars["uuid"]>;
  updated_at: Scalars["timestamp"];
  /** An object relationship */
  user: Users;
  user_id: Scalars["uuid"];
};

/** aggregated selection of "tape_listen" */
export type Tape_Listen_Aggregate = {
  __typename?: "tape_listen_aggregate";
  aggregate?: Maybe<Tape_Listen_Aggregate_Fields>;
  nodes: Array<Tape_Listen>;
};

/** aggregate fields of "tape_listen" */
export type Tape_Listen_Aggregate_Fields = {
  __typename?: "tape_listen_aggregate_fields";
  avg?: Maybe<Tape_Listen_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Tape_Listen_Max_Fields>;
  min?: Maybe<Tape_Listen_Min_Fields>;
  stddev?: Maybe<Tape_Listen_Stddev_Fields>;
  stddev_pop?: Maybe<Tape_Listen_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tape_Listen_Stddev_Samp_Fields>;
  sum?: Maybe<Tape_Listen_Sum_Fields>;
  var_pop?: Maybe<Tape_Listen_Var_Pop_Fields>;
  var_samp?: Maybe<Tape_Listen_Var_Samp_Fields>;
  variance?: Maybe<Tape_Listen_Variance_Fields>;
};

/** aggregate fields of "tape_listen" */
export type Tape_Listen_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tape_Listen_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "tape_listen" */
export type Tape_Listen_Aggregate_Order_By = {
  avg?: InputMaybe<Tape_Listen_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tape_Listen_Max_Order_By>;
  min?: InputMaybe<Tape_Listen_Min_Order_By>;
  stddev?: InputMaybe<Tape_Listen_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Tape_Listen_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Tape_Listen_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Tape_Listen_Sum_Order_By>;
  var_pop?: InputMaybe<Tape_Listen_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Tape_Listen_Var_Samp_Order_By>;
  variance?: InputMaybe<Tape_Listen_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tape_listen" */
export type Tape_Listen_Arr_Rel_Insert_Input = {
  data: Array<Tape_Listen_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Tape_Listen_On_Conflict>;
};

/** aggregate avg on columns */
export type Tape_Listen_Avg_Fields = {
  __typename?: "tape_listen_avg_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "tape_listen" */
export type Tape_Listen_Avg_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tape_listen". All fields are combined with a logical 'AND'. */
export type Tape_Listen_Bool_Exp = {
  _and?: InputMaybe<Array<Tape_Listen_Bool_Exp>>;
  _not?: InputMaybe<Tape_Listen_Bool_Exp>;
  _or?: InputMaybe<Array<Tape_Listen_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  duration?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  posted_at?: InputMaybe<Timestamp_Comparison_Exp>;
  tape?: InputMaybe<Tape_Bool_Exp>;
  tape_id?: InputMaybe<Uuid_Comparison_Exp>;
  tape_share?: InputMaybe<Tape_Share_Bool_Exp>;
  tape_share_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "tape_listen" */
export enum Tape_Listen_Constraint {
  /** unique or primary key constraint on columns "id" */
  TapeListenPkey = "tape_listen_pkey",
  /** unique or primary key constraint on columns "tape_id", "user_id" */
  TapeListenUserIdTapeIdKey = "tape_listen_user_id_tape_id_key",
}

/** input type for incrementing numeric columns in table "tape_listen" */
export type Tape_Listen_Inc_Input = {
  duration?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "tape_listen" */
export type Tape_Listen_Insert_Input = {
  duration?: InputMaybe<Scalars["Int"]>;
  posted_at?: InputMaybe<Scalars["timestamp"]>;
  tape?: InputMaybe<Tape_Obj_Rel_Insert_Input>;
  tape_id?: InputMaybe<Scalars["uuid"]>;
  tape_share?: InputMaybe<Tape_Share_Obj_Rel_Insert_Input>;
  tape_share_id?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Tape_Listen_Max_Fields = {
  __typename?: "tape_listen_max_fields";
  created_at?: Maybe<Scalars["timestamp"]>;
  duration?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["uuid"]>;
  posted_at?: Maybe<Scalars["timestamp"]>;
  tape_id?: Maybe<Scalars["uuid"]>;
  tape_share_id?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamp"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "tape_listen" */
export type Tape_Listen_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  posted_at?: InputMaybe<Order_By>;
  tape_id?: InputMaybe<Order_By>;
  tape_share_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tape_Listen_Min_Fields = {
  __typename?: "tape_listen_min_fields";
  created_at?: Maybe<Scalars["timestamp"]>;
  duration?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["uuid"]>;
  posted_at?: Maybe<Scalars["timestamp"]>;
  tape_id?: Maybe<Scalars["uuid"]>;
  tape_share_id?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamp"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "tape_listen" */
export type Tape_Listen_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  posted_at?: InputMaybe<Order_By>;
  tape_id?: InputMaybe<Order_By>;
  tape_share_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tape_listen" */
export type Tape_Listen_Mutation_Response = {
  __typename?: "tape_listen_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Tape_Listen>;
};

/** on_conflict condition type for table "tape_listen" */
export type Tape_Listen_On_Conflict = {
  constraint: Tape_Listen_Constraint;
  update_columns?: Array<Tape_Listen_Update_Column>;
  where?: InputMaybe<Tape_Listen_Bool_Exp>;
};

/** Ordering options when selecting data from "tape_listen". */
export type Tape_Listen_Order_By = {
  created_at?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  posted_at?: InputMaybe<Order_By>;
  tape?: InputMaybe<Tape_Order_By>;
  tape_id?: InputMaybe<Order_By>;
  tape_share?: InputMaybe<Tape_Share_Order_By>;
  tape_share_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tape_listen */
export type Tape_Listen_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "tape_listen" */
export enum Tape_Listen_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Duration = "duration",
  /** column name */
  Id = "id",
  /** column name */
  PostedAt = "posted_at",
  /** column name */
  TapeId = "tape_id",
  /** column name */
  TapeShareId = "tape_share_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "tape_listen" */
export type Tape_Listen_Set_Input = {
  duration?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Tape_Listen_Stddev_Fields = {
  __typename?: "tape_listen_stddev_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "tape_listen" */
export type Tape_Listen_Stddev_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tape_Listen_Stddev_Pop_Fields = {
  __typename?: "tape_listen_stddev_pop_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "tape_listen" */
export type Tape_Listen_Stddev_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tape_Listen_Stddev_Samp_Fields = {
  __typename?: "tape_listen_stddev_samp_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "tape_listen" */
export type Tape_Listen_Stddev_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Tape_Listen_Sum_Fields = {
  __typename?: "tape_listen_sum_fields";
  duration?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "tape_listen" */
export type Tape_Listen_Sum_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** update columns of table "tape_listen" */
export enum Tape_Listen_Update_Column {
  /** column name */
  Duration = "duration",
}

/** aggregate var_pop on columns */
export type Tape_Listen_Var_Pop_Fields = {
  __typename?: "tape_listen_var_pop_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "tape_listen" */
export type Tape_Listen_Var_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tape_Listen_Var_Samp_Fields = {
  __typename?: "tape_listen_var_samp_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "tape_listen" */
export type Tape_Listen_Var_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Tape_Listen_Variance_Fields = {
  __typename?: "tape_listen_variance_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "tape_listen" */
export type Tape_Listen_Variance_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Tape_Max_Fields = {
  __typename?: "tape_max_fields";
  created_at?: Maybe<Scalars["timestamp"]>;
  duration?: Maybe<Scalars["Int"]>;
  expires_at?: Maybe<Scalars["timestamptz"]>;
  file_id?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  path?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamp"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "tape" */
export type Tape_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tape_Min_Fields = {
  __typename?: "tape_min_fields";
  created_at?: Maybe<Scalars["timestamp"]>;
  duration?: Maybe<Scalars["Int"]>;
  expires_at?: Maybe<Scalars["timestamptz"]>;
  file_id?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  path?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamp"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "tape" */
export type Tape_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tape" */
export type Tape_Mutation_Response = {
  __typename?: "tape_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Tape>;
};

/** input type for inserting object relation for remote table "tape" */
export type Tape_Obj_Rel_Insert_Input = {
  data: Tape_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Tape_On_Conflict>;
};

/** on_conflict condition type for table "tape" */
export type Tape_On_Conflict = {
  constraint: Tape_Constraint;
  update_columns?: Array<Tape_Update_Column>;
  where?: InputMaybe<Tape_Bool_Exp>;
};

/** Ordering options when selecting data from "tape". */
export type Tape_Order_By = {
  comments_aggregate?: InputMaybe<Comment_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  file?: InputMaybe<Files_Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_multicast?: InputMaybe<Order_By>;
  is_public?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  private_comments?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  tape_friends_aggregate?: InputMaybe<Friend_Aggregate_Order_By>;
  tape_likes_aggregate?: InputMaybe<Tape_Like_Aggregate_Order_By>;
  tape_listens_aggregate?: InputMaybe<Tape_Listen_Aggregate_Order_By>;
  tape_shares_aggregate?: InputMaybe<Tape_Share_Aggregate_Order_By>;
  tape_snap_files_aggregate?: InputMaybe<Tape_Snap_File_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  waves?: InputMaybe<Order_By>;
};

/** input type for inserting array relation for remote table "tape_report" */
export type Tape_Report_Arr_Rel_Insert_Input = {
  data: Array<Tape_Report_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Tape_Report_On_Conflict>;
};

/** Boolean expression to filter rows from the table "tape_report". All fields are combined with a logical 'AND'. */
export type Tape_Report_Bool_Exp = {
  _and?: InputMaybe<Array<Tape_Report_Bool_Exp>>;
  _not?: InputMaybe<Tape_Report_Bool_Exp>;
  _or?: InputMaybe<Array<Tape_Report_Bool_Exp>>;
};

/** unique or primary key constraints on table "tape_report" */
export enum Tape_Report_Constraint {
  /** unique or primary key constraint on columns "id" */
  TapeReportPkey = "tape_report_pkey",
}

/** input type for inserting data into table "tape_report" */
export type Tape_Report_Insert_Input = {
  tape_id?: InputMaybe<Scalars["uuid"]>;
};

/** response of any mutation on the table "tape_report" */
export type Tape_Report_Mutation_Response = {
  __typename?: "tape_report_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
};

/** on_conflict condition type for table "tape_report" */
export type Tape_Report_On_Conflict = {
  constraint: Tape_Report_Constraint;
  update_columns?: Array<Tape_Report_Update_Column>;
  where?: InputMaybe<Tape_Report_Bool_Exp>;
};

/** placeholder for update columns of table "tape_report" (current role has no relevant permissions) */
export enum Tape_Report_Update_Column {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** select columns of table "tape" */
export enum Tape_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Duration = "duration",
  /** column name */
  ExpiresAt = "expires_at",
  /** column name */
  FileId = "file_id",
  /** column name */
  Id = "id",
  /** column name */
  IsMulticast = "is_multicast",
  /** column name */
  IsPublic = "is_public",
  /** column name */
  Path = "path",
  /** column name */
  PrivateComments = "private_comments",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
  /** column name */
  Waves = "waves",
}

/** columns and relationships of "tape_share" */
export type Tape_Share = {
  __typename?: "tape_share";
  created_at: Scalars["timestamp"];
  /** An object relationship */
  friend_profile?: Maybe<Profile>;
  /** An object relationship */
  friend_user: Users;
  friend_user_id: Scalars["uuid"];
  id: Scalars["uuid"];
  listened_at?: Maybe<Scalars["timestamptz"]>;
  posted_at: Scalars["timestamp"];
  /** An object relationship */
  tape: Tape;
  tape_id: Scalars["uuid"];
  updated_at: Scalars["timestamp"];
  /** An object relationship */
  user: Users;
  user_id: Scalars["uuid"];
};

/** order by aggregate values of table "tape_share" */
export type Tape_Share_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tape_Share_Max_Order_By>;
  min?: InputMaybe<Tape_Share_Min_Order_By>;
};

/** input type for inserting array relation for remote table "tape_share" */
export type Tape_Share_Arr_Rel_Insert_Input = {
  data: Array<Tape_Share_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Tape_Share_On_Conflict>;
};

/** Boolean expression to filter rows from the table "tape_share". All fields are combined with a logical 'AND'. */
export type Tape_Share_Bool_Exp = {
  _and?: InputMaybe<Array<Tape_Share_Bool_Exp>>;
  _not?: InputMaybe<Tape_Share_Bool_Exp>;
  _or?: InputMaybe<Array<Tape_Share_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  friend_profile?: InputMaybe<Profile_Bool_Exp>;
  friend_user?: InputMaybe<Users_Bool_Exp>;
  friend_user_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  listened_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  posted_at?: InputMaybe<Timestamp_Comparison_Exp>;
  tape?: InputMaybe<Tape_Bool_Exp>;
  tape_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "tape_share" */
export enum Tape_Share_Constraint {
  /** unique or primary key constraint on columns "id" */
  TapeSharePkey = "tape_share_pkey",
}

/** input type for inserting data into table "tape_share" */
export type Tape_Share_Insert_Input = {
  friend_profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  friend_user_id?: InputMaybe<Scalars["uuid"]>;
  tape?: InputMaybe<Tape_Obj_Rel_Insert_Input>;
  tape_id?: InputMaybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "tape_share" */
export type Tape_Share_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  friend_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  listened_at?: InputMaybe<Order_By>;
  posted_at?: InputMaybe<Order_By>;
  tape_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "tape_share" */
export type Tape_Share_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  friend_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  listened_at?: InputMaybe<Order_By>;
  posted_at?: InputMaybe<Order_By>;
  tape_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tape_share" */
export type Tape_Share_Mutation_Response = {
  __typename?: "tape_share_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Tape_Share>;
};

/** input type for inserting object relation for remote table "tape_share" */
export type Tape_Share_Obj_Rel_Insert_Input = {
  data: Tape_Share_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Tape_Share_On_Conflict>;
};

/** on_conflict condition type for table "tape_share" */
export type Tape_Share_On_Conflict = {
  constraint: Tape_Share_Constraint;
  update_columns?: Array<Tape_Share_Update_Column>;
  where?: InputMaybe<Tape_Share_Bool_Exp>;
};

/** Ordering options when selecting data from "tape_share". */
export type Tape_Share_Order_By = {
  created_at?: InputMaybe<Order_By>;
  friend_profile?: InputMaybe<Profile_Order_By>;
  friend_user?: InputMaybe<Users_Order_By>;
  friend_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  listened_at?: InputMaybe<Order_By>;
  posted_at?: InputMaybe<Order_By>;
  tape?: InputMaybe<Tape_Order_By>;
  tape_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tape_share */
export type Tape_Share_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "tape_share" */
export enum Tape_Share_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  FriendUserId = "friend_user_id",
  /** column name */
  Id = "id",
  /** column name */
  ListenedAt = "listened_at",
  /** column name */
  PostedAt = "posted_at",
  /** column name */
  TapeId = "tape_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "tape_share" */
export type Tape_Share_Set_Input = {
  listened_at?: InputMaybe<Scalars["timestamptz"]>;
};

/** update columns of table "tape_share" */
export enum Tape_Share_Update_Column {
  /** column name */
  ListenedAt = "listened_at",
}

/** columns and relationships of "tape_snap_file" */
export type Tape_Snap_File = {
  __typename?: "tape_snap_file";
  created_at: Scalars["timestamp"];
  file_id: Scalars["uuid"];
  id: Scalars["uuid"];
  path: Scalars["String"];
  second: Scalars["Int"];
  /** An object relationship */
  tape: Tape;
  tape_id: Scalars["uuid"];
  updated_at: Scalars["timestamp"];
};

/** order by aggregate values of table "tape_snap_file" */
export type Tape_Snap_File_Aggregate_Order_By = {
  avg?: InputMaybe<Tape_Snap_File_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tape_Snap_File_Max_Order_By>;
  min?: InputMaybe<Tape_Snap_File_Min_Order_By>;
  stddev?: InputMaybe<Tape_Snap_File_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Tape_Snap_File_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Tape_Snap_File_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Tape_Snap_File_Sum_Order_By>;
  var_pop?: InputMaybe<Tape_Snap_File_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Tape_Snap_File_Var_Samp_Order_By>;
  variance?: InputMaybe<Tape_Snap_File_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tape_snap_file" */
export type Tape_Snap_File_Arr_Rel_Insert_Input = {
  data: Array<Tape_Snap_File_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Tape_Snap_File_On_Conflict>;
};

/** order by avg() on columns of table "tape_snap_file" */
export type Tape_Snap_File_Avg_Order_By = {
  second?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tape_snap_file". All fields are combined with a logical 'AND'. */
export type Tape_Snap_File_Bool_Exp = {
  _and?: InputMaybe<Array<Tape_Snap_File_Bool_Exp>>;
  _not?: InputMaybe<Tape_Snap_File_Bool_Exp>;
  _or?: InputMaybe<Array<Tape_Snap_File_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  file_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
  second?: InputMaybe<Int_Comparison_Exp>;
  tape?: InputMaybe<Tape_Bool_Exp>;
  tape_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "tape_snap_file" */
export enum Tape_Snap_File_Constraint {
  /** unique or primary key constraint on columns "id" */
  TapeMediaPkey = "tape_media_pkey",
}

/** input type for inserting data into table "tape_snap_file" */
export type Tape_Snap_File_Insert_Input = {
  file_id?: InputMaybe<Scalars["uuid"]>;
  path?: InputMaybe<Scalars["String"]>;
  second?: InputMaybe<Scalars["Int"]>;
  tape?: InputMaybe<Tape_Obj_Rel_Insert_Input>;
  tape_id?: InputMaybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "tape_snap_file" */
export type Tape_Snap_File_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  second?: InputMaybe<Order_By>;
  tape_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "tape_snap_file" */
export type Tape_Snap_File_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  second?: InputMaybe<Order_By>;
  tape_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tape_snap_file" */
export type Tape_Snap_File_Mutation_Response = {
  __typename?: "tape_snap_file_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Tape_Snap_File>;
};

/** on_conflict condition type for table "tape_snap_file" */
export type Tape_Snap_File_On_Conflict = {
  constraint: Tape_Snap_File_Constraint;
  update_columns?: Array<Tape_Snap_File_Update_Column>;
  where?: InputMaybe<Tape_Snap_File_Bool_Exp>;
};

/** Ordering options when selecting data from "tape_snap_file". */
export type Tape_Snap_File_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  second?: InputMaybe<Order_By>;
  tape?: InputMaybe<Tape_Order_By>;
  tape_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "tape_snap_file" */
export enum Tape_Snap_File_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  FileId = "file_id",
  /** column name */
  Id = "id",
  /** column name */
  Path = "path",
  /** column name */
  Second = "second",
  /** column name */
  TapeId = "tape_id",
  /** column name */
  UpdatedAt = "updated_at",
}

/** order by stddev() on columns of table "tape_snap_file" */
export type Tape_Snap_File_Stddev_Order_By = {
  second?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "tape_snap_file" */
export type Tape_Snap_File_Stddev_Pop_Order_By = {
  second?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "tape_snap_file" */
export type Tape_Snap_File_Stddev_Samp_Order_By = {
  second?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "tape_snap_file" */
export type Tape_Snap_File_Sum_Order_By = {
  second?: InputMaybe<Order_By>;
};

/** placeholder for update columns of table "tape_snap_file" (current role has no relevant permissions) */
export enum Tape_Snap_File_Update_Column {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** order by var_pop() on columns of table "tape_snap_file" */
export type Tape_Snap_File_Var_Pop_Order_By = {
  second?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "tape_snap_file" */
export type Tape_Snap_File_Var_Samp_Order_By = {
  second?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "tape_snap_file" */
export type Tape_Snap_File_Variance_Order_By = {
  second?: InputMaybe<Order_By>;
};

/** aggregate stddev on columns */
export type Tape_Stddev_Fields = {
  __typename?: "tape_stddev_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "tape" */
export type Tape_Stddev_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tape_Stddev_Pop_Fields = {
  __typename?: "tape_stddev_pop_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "tape" */
export type Tape_Stddev_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tape_Stddev_Samp_Fields = {
  __typename?: "tape_stddev_samp_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "tape" */
export type Tape_Stddev_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Tape_Sum_Fields = {
  __typename?: "tape_sum_fields";
  duration?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "tape" */
export type Tape_Sum_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** placeholder for update columns of table "tape" (current role has no relevant permissions) */
export enum Tape_Update_Column {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** aggregate var_pop on columns */
export type Tape_Var_Pop_Fields = {
  __typename?: "tape_var_pop_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "tape" */
export type Tape_Var_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tape_Var_Samp_Fields = {
  __typename?: "tape_var_samp_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "tape" */
export type Tape_Var_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Tape_Variance_Fields = {
  __typename?: "tape_variance_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "tape" */
export type Tape_Variance_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["timestamp"]>;
  _gt?: InputMaybe<Scalars["timestamp"]>;
  _gte?: InputMaybe<Scalars["timestamp"]>;
  _in?: InputMaybe<Array<Scalars["timestamp"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["timestamp"]>;
  _lte?: InputMaybe<Scalars["timestamp"]>;
  _neq?: InputMaybe<Scalars["timestamp"]>;
  _nin?: InputMaybe<Array<Scalars["timestamp"]>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["timestamptz"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]>>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  __typename?: "users";
  activeMfaType?: Maybe<Scalars["String"]>;
  avatarUrl: Scalars["String"];
  createdAt: Scalars["timestamptz"];
  defaultRole: Scalars["String"];
  disabled: Scalars["Boolean"];
  displayName: Scalars["String"];
  email?: Maybe<Scalars["citext"]>;
  emailVerified: Scalars["Boolean"];
  id: Scalars["uuid"];
  isAnonymous: Scalars["Boolean"];
  lastSeen?: Maybe<Scalars["timestamptz"]>;
  locale: Scalars["String"];
  metadata?: Maybe<Scalars["jsonb"]>;
  newEmail?: Maybe<Scalars["citext"]>;
  otpHash?: Maybe<Scalars["String"]>;
  otpHashExpiresAt: Scalars["timestamptz"];
  otpMethodLastUsed?: Maybe<Scalars["String"]>;
  passwordHash?: Maybe<Scalars["String"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
  phoneNumberVerified: Scalars["Boolean"];
  ticket?: Maybe<Scalars["String"]>;
  ticketExpiresAt: Scalars["timestamptz"];
  totpSecret?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["timestamptz"];
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType?: InputMaybe<String_Comparison_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  defaultRole?: InputMaybe<String_Comparison_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  ticket?: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  __typename?: "users_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  disabled?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isAnonymous?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = "activeMfaType",
  /** column name */
  AvatarUrl = "avatarUrl",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DefaultRole = "defaultRole",
  /** column name */
  Disabled = "disabled",
  /** column name */
  DisplayName = "displayName",
  /** column name */
  Email = "email",
  /** column name */
  EmailVerified = "emailVerified",
  /** column name */
  Id = "id",
  /** column name */
  IsAnonymous = "isAnonymous",
  /** column name */
  LastSeen = "lastSeen",
  /** column name */
  Locale = "locale",
  /** column name */
  Metadata = "metadata",
  /** column name */
  NewEmail = "newEmail",
  /** column name */
  OtpHash = "otpHash",
  /** column name */
  OtpHashExpiresAt = "otpHashExpiresAt",
  /** column name */
  OtpMethodLastUsed = "otpMethodLastUsed",
  /** column name */
  PasswordHash = "passwordHash",
  /** column name */
  PhoneNumber = "phoneNumber",
  /** column name */
  PhoneNumberVerified = "phoneNumberVerified",
  /** column name */
  Ticket = "ticket",
  /** column name */
  TicketExpiresAt = "ticketExpiresAt",
  /** column name */
  TotpSecret = "totpSecret",
  /** column name */
  UpdatedAt = "updatedAt",
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["uuid"]>;
  _gt?: InputMaybe<Scalars["uuid"]>;
  _gte?: InputMaybe<Scalars["uuid"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["uuid"]>;
  _lte?: InputMaybe<Scalars["uuid"]>;
  _neq?: InputMaybe<Scalars["uuid"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]>>;
};

export type GetProfileQueryVariables = Exact<{
  userUID: Scalars["uuid"];
}>;

export type GetProfileQuery = {
  __typename?: "query_root";
  profile_by_pk?: {
    __typename?: "profile";
    avatar_id?: string | null;
    id: string;
    private: boolean;
    username?: string | null;
  } | null;
};

export type GetTapeByIdQueryVariables = Exact<{
  id: Scalars["uuid"];
}>;

export type GetTapeByIdQuery = {
  __typename?: "query_root";
  tape_by_pk?: {
    __typename?: "tape";
    id: string;
    path: string;
    created_at: string;
    duration: number;
    profile?: { __typename?: "profile"; username?: string | null } | null;
    tape_snap_files: Array<{
      __typename?: "tape_snap_file";
      id: string;
      path: string;
      second: number;
    }>;
    comments: Array<{
      __typename?: "comment";
      id: string;
      body: string;
      created_at: string;
      profile?: { __typename?: "profile"; username?: string | null } | null;
      child_comments: Array<{
        __typename?: "comment";
        id: string;
        body: string;
        created_at: string;
        profile?: { __typename?: "profile"; username?: string | null } | null;
      }>;
    }>;
  } | null;
};

export type InsertTapeSnapsMutationVariables = Exact<{
  snaps: Array<Tape_Snap_File_Insert_Input> | Tape_Snap_File_Insert_Input;
}>;

export type InsertTapeSnapsMutation = {
  __typename?: "mutation_root";
  insert_tape_snap_file?: {
    __typename?: "tape_snap_file_mutation_response";
    returning: Array<{ __typename?: "tape_snap_file"; id: string }>;
  } | null;
};

export type InsertTapeMutationVariables = Exact<{
  file_id?: InputMaybe<Scalars["uuid"]>;
  duration?: InputMaybe<Scalars["Int"]>;
  path?: InputMaybe<Scalars["String"]>;
  waves?: InputMaybe<Scalars["jsonb"]>;
  expires_at?: InputMaybe<Scalars["timestamptz"]>;
  is_public?: InputMaybe<Scalars["Boolean"]>;
  is_multicast?: InputMaybe<Scalars["Boolean"]>;
  private_comments?: InputMaybe<Scalars["Boolean"]>;
}>;

export type InsertTapeMutation = {
  __typename?: "mutation_root";
  insert_tape_one?: { __typename?: "tape"; id: string } | null;
};

export type UpdateUsernameMutationVariables = Exact<{
  username: Scalars["String"];
  userUID: Scalars["uuid"];
}>;

export type UpdateUsernameMutation = {
  __typename?: "mutation_root";
  update_profile_by_pk?: {
    __typename?: "profile";
    id: string;
    username?: string | null;
  } | null;
};

export type TapeFragment = {
  __typename?: "tape";
  id: string;
  duration: number;
  created_at: string;
  path: string;
  is_public: boolean;
  tape_snap_files: Array<{ __typename?: "tape_snap_file"; id: string }>;
  comments_aggregate: {
    __typename?: "comment_aggregate";
    aggregate?: {
      __typename?: "comment_aggregate_fields";
      count: number;
    } | null;
  };
};

export type ProfileFragment = {
  __typename?: "profile";
  id: string;
  username?: string | null;
  avatar_id?: string | null;
  tapes: Array<{
    __typename?: "tape";
    id: string;
    duration: number;
    created_at: string;
    path: string;
    is_public: boolean;
    tape_snap_files: Array<{ __typename?: "tape_snap_file"; id: string }>;
    comments_aggregate: {
      __typename?: "comment_aggregate";
      aggregate?: {
        __typename?: "comment_aggregate_fields";
        count: number;
      } | null;
    };
  }>;
};

export type GetTapesQueryVariables = Exact<{
  now?: InputMaybe<Scalars["timestamptz"]>;
  user_id: Scalars["uuid"];
}>;

export type GetTapesQuery = {
  __typename?: "query_root";
  me?: {
    __typename?: "profile";
    id: string;
    username?: string | null;
    avatar_id?: string | null;
    tapes: Array<{
      __typename?: "tape";
      id: string;
      duration: number;
      created_at: string;
      path: string;
      is_public: boolean;
      tape_snap_files: Array<{ __typename?: "tape_snap_file"; id: string }>;
      comments_aggregate: {
        __typename?: "comment_aggregate";
        aggregate?: {
          __typename?: "comment_aggregate_fields";
          count: number;
        } | null;
      };
    }>;
  } | null;
  friend: Array<{
    __typename?: "friend";
    friend_profile?: {
      __typename?: "profile";
      id: string;
      username?: string | null;
      avatar_id?: string | null;
      tapes: Array<{
        __typename?: "tape";
        id: string;
        duration: number;
        created_at: string;
        path: string;
        is_public: boolean;
        tape_snap_files: Array<{ __typename?: "tape_snap_file"; id: string }>;
        comments_aggregate: {
          __typename?: "comment_aggregate";
          aggregate?: {
            __typename?: "comment_aggregate_fields";
            count: number;
          } | null;
        };
      }>;
    } | null;
  }>;
};

export type InsertCommentMutationVariables = Exact<{
  body: Scalars["String"];
  ms: Scalars["Int"];
  parent_comment_id?: InputMaybe<Scalars["uuid"]>;
  tape_id: Scalars["uuid"];
  seen_by_tape_owner_at?: InputMaybe<Scalars["timestamptz"]>;
}>;

export type InsertCommentMutation = {
  __typename?: "mutation_root";
  insert_comment_one?: { __typename?: "comment"; id: string } | null;
};

export const TapeFragmentDoc = gql`
  fragment Tape on tape {
    id
    duration
    created_at
    path
    is_public
    tape_snap_files(limit: 1) {
      id
    }
    comments_aggregate {
      aggregate {
        count
      }
    }
  }
`;
export const ProfileFragmentDoc = gql`
  fragment Profile on profile {
    id
    username
    avatar_id
    tapes(
      order_by: { created_at: desc }
      where: { expires_at: { _gt: $now } }
      limit: 10
    ) {
      ...Tape
    }
  }
  ${TapeFragmentDoc}
`;
export const GetProfileDocument = gql`
  query GetProfile($userUID: uuid!) {
    profile_by_pk(id: $userUID) {
      avatar_id
      id
      private
      username
    }
  }
`;
export const GetTapeByIdDocument = gql`
  query GetTapeById($id: uuid!) {
    tape_by_pk(id: $id) {
      id
      path
      created_at
      duration
      profile {
        username
      }
      tape_snap_files {
        id
        path
        second
      }
      comments(
        where: { parent_comment_id: { _is_null: true } }
        order_by: { created_at: desc }
      ) {
        id
        body
        created_at
        profile {
          username
        }
        child_comments(order_by: { created_at: asc }) {
          id
          body
          created_at
          profile {
            username
          }
        }
      }
    }
  }
`;
export const InsertTapeSnapsDocument = gql`
  mutation InsertTapeSnaps($snaps: [tape_snap_file_insert_input!]!) {
    insert_tape_snap_file(objects: $snaps) {
      returning {
        id
      }
    }
  }
`;
export const InsertTapeDocument = gql`
  mutation InsertTape(
    $file_id: uuid
    $duration: Int
    $path: String
    $waves: jsonb
    $expires_at: timestamptz
    $is_public: Boolean = false
    $is_multicast: Boolean = false
    $private_comments: Boolean = false
  ) {
    insert_tape_one(
      object: {
        file_id: $file_id
        is_public: $is_public
        is_multicast: $is_multicast
        duration: $duration
        path: $path
        private_comments: $private_comments
        waves: $waves
        expires_at: $expires_at
      }
    ) {
      id
    }
  }
`;
export const UpdateUsernameDocument = gql`
  mutation UpdateUsername($username: String!, $userUID: uuid!) {
    update_profile_by_pk(
      pk_columns: { id: $userUID }
      _set: { username: $username }
    ) {
      id
      username
    }
  }
`;
export const GetTapesDocument = gql`
  query GetTapes($now: timestamptz, $user_id: uuid!) {
    me: profile_by_pk(id: $user_id) {
      ...Profile
    }
    friend(
      where: { user_id: { _eq: $user_id } }
      order_by: {
        friend_profile: {
          tapes_aggregate: { max: { created_at: desc_nulls_last } }
        }
      }
    ) {
      friend_profile {
        ...Profile
      }
    }
  }
  ${ProfileFragmentDoc}
`;
export const InsertCommentDocument = gql`
  mutation InsertComment(
    $body: String!
    $ms: Int!
    $parent_comment_id: uuid
    $tape_id: uuid!
    $seen_by_tape_owner_at: timestamptz
  ) {
    insert_comment_one(
      object: {
        body: $body
        ms: $ms
        parent_comment_id: $parent_comment_id
        tape_id: $tape_id
        seen_by_tape_owner_at: $seen_by_tape_owner_at
      }
    ) {
      id
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    GetProfile(
      variables: GetProfileQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetProfileQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetProfileQuery>(GetProfileDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetProfile",
        "query"
      );
    },
    GetTapeById(
      variables: GetTapeByIdQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetTapeByIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetTapeByIdQuery>(GetTapeByIdDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetTapeById",
        "query"
      );
    },
    InsertTapeSnaps(
      variables: InsertTapeSnapsMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<InsertTapeSnapsMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<InsertTapeSnapsMutation>(
            InsertTapeSnapsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "InsertTapeSnaps",
        "mutation"
      );
    },
    InsertTape(
      variables?: InsertTapeMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<InsertTapeMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<InsertTapeMutation>(InsertTapeDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "InsertTape",
        "mutation"
      );
    },
    UpdateUsername(
      variables: UpdateUsernameMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<UpdateUsernameMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateUsernameMutation>(
            UpdateUsernameDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "UpdateUsername",
        "mutation"
      );
    },
    GetTapes(
      variables: GetTapesQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetTapesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetTapesQuery>(GetTapesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetTapes",
        "query"
      );
    },
    InsertComment(
      variables: InsertCommentMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<InsertCommentMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<InsertCommentMutation>(
            InsertCommentDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "InsertComment",
        "mutation"
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;

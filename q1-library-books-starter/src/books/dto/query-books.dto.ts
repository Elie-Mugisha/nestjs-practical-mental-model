// TODO (Task 3): query-string parameters for GET /books
//   author?    string  (case-insensitive "contains" match)
//   genre?     string  (case-insensitive exact match on one of the book's genres)
//   available? boolean (the query string arrives as the TEXT "true" / "false")
//   page       integer >= 1, default 1
//   limit      integer 1..50, default 10
export class QueryBooksDto {}

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Prisma Commands

Initial migration:
```bash
npx prisma migrate dev --name init
```

To update the schema:
```bash
npx prisma generate
```

After that run:
```bash
npx prisma migrate dev
```

To interact with the dabase:
```bash
npx prisma studio
```

## Using the REST API

You can also access the REST API of the API server directly. It is running on the same host machine and port and can be accessed via the `/api` route (in this case that is `localhost:3000/api/`, so you can e.g. reach the API with [`localhost:3000/api/feed`](http://localhost:3000/api/feed)).

### `GET`

- `/api/book/:id`: Fetch a single book by its `id`
- `/api/feed`: Fetch all _published_ books
- `/api/filterBooks?searchString={searchString}`: Filter books by `title` or `content`

### `POST`

- `/api/post`: Create a new book
  - Body:
    - `title: String` (required): The title of the post
    - `content: String` (optional): The content of the post
    - `authorEmail: String` (required): The email of the user that creates the book
- `/api/author`: Create a new author
  - Body:
    - `email: String` (required): The email address of the user
    - `name: String` (optional): The name of the user

### `PUT`

- `/api/publish/:id`: Publish a book by its `id`

### `DELETE`
  
- `/api/book/:id`: Delete a book by its `id`
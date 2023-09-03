# BlogApp-Back-End

## Introduction
This the BlogApp Database where we create a blog, Like Unlike and comment.

## Tasks
This project involves implementing the following tasks:

### 1) Create a Post using POST
- **Endpoint**: `http://localhost:4000/api/v1/posts/create`
- **Method**: POST
- **Request Body**: JSON
    ```json
    {
        "title": "Dummy Post2",
        "body": "Dummy Post1"
    }
    ```
- **Description**: This task involves creating a new post with a title and body.

### 2) Fetching Posts using GET
- **Endpoint**: `http://localhost:4000/api/v1/posts`
- **Method**: GET
- **Description**: This task involves fetching a list of posts.

### 3) Create Comment using POST
- **Endpoint**: `http://localhost:4000/api/v1/comments/create`
- **Method**: POST
- **Request Body**: JSON
    ```json
    {
        "post": "6429343f2b912f721b9c50b8",
        "user": "Lakshyadeep",
        "body": "This is the Second Comment"
    }
    ```
- **Description**: This task involves creating a comment for a specific post.

### 4) Like the Post Using POST
- **Endpoint**: `http://localhost:4000/api/v1/likes/like`
- **Method**: POST
- **Request Body**: JSON
    ```json
    {
        "post": "6429343f2b912f721b9c50b8",
        "user": "Lakshyadeep"
    }
    ```
- **Description**: This task involves liking a specific post.

### 5) Unlike the Post Using POST
- **Endpoint**: `http://localhost:4000/api/v1/likes/unlike`
- **Method**: POST
- **Request Body**: JSON
    ```json
    {
        "post": "6429343f2b912f721b9c50b8",
        "like": "64293e833d3611dfcad7a664"
    }
    ```
- **Description**: This task involves unliking a specific post.

## Models
This project uses the following data models:

### Post Model
- **Fields**:
  - title: string
  - body: string
  - likes: [id, ref-like model]
  - comments: [id, ref-comment model]

### Like Model
- **Fields**:
  - post: [id, ref-post]
  - user: string

### Comment Model
- **Fields**:
  - post: [id, ref-post]
  - body: string
  - user: string



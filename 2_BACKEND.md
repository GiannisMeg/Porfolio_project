# Final Assessment - Backend Structure

(This is a markdown .MD file, if you are reading this in vs-code, right click the file and select `Open Preview`)

## What are we building?

-  [Frontend starter](https://github.com/Codaisseur/react-redux-template)
-  [Backend starter](https://github.com/Codaisseur/new-express-template)

## Wireframe

You will be provided with a wireframe that shows an overview of the app along with this README

## Entities

### User

| key       | data type | required | notes                              |
| --------- | --------- | -------- | ---------------------------------- |
| id        | Integer   | yes      | Already implemented                |
| name      | String    | yes      | Already implemented                |
| email     | String    | yes      | Already implemented, unique        |
| password  | String    | yes      | Already implemented, password hash |
| isRealtor | Boolean   | no       |                                    |
| createdAt | Date      | yes      | Already implemented                |
| updatedAt | Date      | yes      | Already implemented                |

**Relations:**

-  User has many Listings
-  User has many Offers

### Listings

| key       | data type | required | notes                           |
| --------- | --------- | -------- | ------------------------------- |
| id        | Integer   | yes      | Already added by model:generate |
| address   | String    | yes      |                                 |
| available | Boolean   | yes      | Default value: true             |
| price     | Integer   | yes      |                                 |
| bedrooms  | Integer   | yes      |                                 |
| imageUrl  | Text      | yes      |                                 |
| userId    | Integer   | yes      | Foreign key (references a user) |
| createdAt | Date      | yes      | Already added by model:generate |
| updatedAt | Date      | yes      | Already added by model:generate |

**Relations:**

-  Listings belongs to User (only realtors)
-  Listings have many Offers

### Offers

| key       | data type | required | notes                               |
| --------- | --------- | -------- | ----------------------------------- |
| id        | Integer   | yes      | Already added by model:generate     |
| email     | String    | yes      |                                     |
| amount    | Integer   | yes      |                                     |
| accepted  | Boolean   | yes      | Default value: false                |
| createdAt | Date      | yes      | Already added by model:generate     |
| updatedAt | Date      | yes      | Already added by model:generate     |
| listingId | Integer   | yes      | Foreign key (references an listing) |
| userId    | Integer   | yes      | Foreign key (references a user)     |

**Relations:**

-  Offers belongs to Listings
-  Offers belongs to Users

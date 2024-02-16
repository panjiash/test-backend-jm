# TEST-BACKEND-JASAMARGA_Panji Ashriyandi

Dibuat untuk kebutuhan tes masuk pada Perusahaan Jasa Marga.

Ada 2 langkah untuk menginstall aplikasi ini:

## 1. Dockerfile

Clone repository

```bash
  git clone https://github.com/panjiash/test-backend-jm.git
```

Masuk ke directory

```bash
  cd test-backend-jm
```

Jalankan Dockerfile

```bash
  docker build -t testpanji .
  docker run -dit --name testpnji -p 5003:5003 testpanji
```

## 2. Manual Installation

### Buat Database

Untuk apliaksi ini yang saya gunakan adalah database mysql, jalankan command ini untuk membuat database.

```bash
  create database data_kepegawaian;
```

### Installation

Clone repository

```bash
  git clone https://github.com/panjiash/test-backend-jm.git
```

Setelah cloning repo, lalu masuk ke directory aplikasi lalu install aplikasi dengan lakukan command dibawah ini:

```bash
  cd test-backend-jm/PROJECT_FOLDER/
  npm install
```

### Run App

Setelah berada di dalam folder aplikasi Lalu jalankan command dibawah ini untuk memulai aplikasi:

```bash
  node index.js
```

Setelah menjalankan aplikasi index.js, aplikasi akan otomatis membuat table table dan menjalankan port 5003.

## API Reference

#### Get all employee

```http
  GET http://localhost:5003/employee
```

#### Get one employee

```http
  GET http://localhost:5003/employee/${id}
```

| Parameter | Type      | Description                       |
| :-------- | :-------- | :-------------------------------- |
| `id`      | `integer` | **Required**. Id of item to fetch |

#### Post employee

```http
  POST http://localhost:5003/employee
```

```json
{
  "nik": "1102",
  "name": "Budi",
  "start_date": "2022-12-12",
  "end_date": "2029-12-12",
  "created_by": "admin",
  "updated_by": "admin",
  "profile": {
    "place_of_birth": "Jakarta",
    "date_of_birth": "1997-05-02",
    "gender": "Laki-Laki",
    "is_married": 1,
    "prof_pict": ""
  },
  "family_data": [
    {
      "name": "Marni",
      "identifier": "32100594109960002",
      "job": "Ibu Rumah Tangga",
      "place_of_birth": "Denpasar",
      "date_of_birth": "1995-10-17",
      "religion": "Islam",
      "is_life": 1,
      "is_divorced": 0,
      "relation_status": "Istri"
    },
    {
      "name": "Clara",
      "identifier": "32100594109020004",
      "job": "Pelajar",
      "place_of_birth": "Bangkalan",
      "date_of_birth": "2008-10-17",
      "religion": "Islam",
      "is_life": 1,
      "is_divorced": 0,
      "relation_status": "Anak"
    },
    {
      "name": "Stephanie",
      "identifier": "32100594109020005",
      "job": "Pelajar",
      "place_of_birth": "Bangkalan",
      "date_of_birth": "2008-10-17",
      "religion": "Islam",
      "is_life": 1,
      "is_divorced": 0,
      "relation_status": "Anak"
    }
  ],
  "education": [
    {
      "name": "SMKN 7 Jakarta",
      "level": "SMA",
      "description": "Sekolah Menengah Atas"
    }
  ]
}
```

#### Update Employee

```http
  PUT http://localhost:5003/employee/${id}
```

```json
{
  "nik": "1102",
  "name": "Budi",
  "start_date": "2022-12-12",
  "end_date": "2029-12-12",
  "created_by": "admin",
  "updated_by": "admin",
  "profile": {
    "place_of_birth": "Jakarta",
    "date_of_birth": "1997-05-02",
    "gender": "Laki-Laki",
    "is_married": 1,
    "prof_pict": ""
  },
  "family_data": [
    {
      "name": "Marni",
      "identifier": "32100594109960002",
      "job": "Ibu Rumah Tangga",
      "place_of_birth": "Denpasar",
      "date_of_birth": "1995-10-17",
      "religion": "Islam",
      "is_life": 1,
      "is_divorced": 0,
      "relation_status": "Istri"
    },
    {
      "name": "Clara",
      "identifier": "32100594109020004",
      "job": "Pelajar",
      "place_of_birth": "Bangkalan",
      "date_of_birth": "2008-10-17",
      "religion": "Islam",
      "is_life": 1,
      "is_divorced": 0,
      "relation_status": "Anak"
    },
    {
      "name": "Stephanie",
      "identifier": "32100594109020005",
      "job": "Pelajar",
      "place_of_birth": "Bangkalan",
      "date_of_birth": "2008-10-17",
      "religion": "Islam",
      "is_life": 1,
      "is_divorced": 0,
      "relation_status": "Anak"
    }
  ],
  "education": [
    {
      "id": 1,
      "name": "SMKN 7 Jakarta",
      "level": "SMA",
      "description": "Sekolah Menengah Atas"
    }
  ]
}
```

#### Delete Employee

```http
  DELETE http://localhost:5003/employee/${id}
```

| Parameter | Type      | Description                       |
| :-------- | :-------- | :-------------------------------- |
| `id`      | `integer` | **Required**. Id of item to fetch |

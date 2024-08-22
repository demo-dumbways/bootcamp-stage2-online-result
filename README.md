## React in Practice

### Kenapa Kita Perlu Men-struktur Project dengan Baik di React?

1. Supaya mudah di-maintain (mudah dipelihara, diatur).
2. Mempercepat detect masalah.
3. Supaya tidak pusing bila project semakin besar.

###  Pengenalan React Bulletproof

Kali ini kita akan mengambil referensi struktur project yang baik dari [React Bulletproof](https://github.com/alan2207/bulletproof-react)

Walaupun React Bulletproof ini opinionated (alias nggak wajib buat diikuti, berdasarkan opini pembuatnya saja), tapi sudah banyak orang yang pakai sebagai pondasi dalam membuat project react.

Tujuannya ya tadi, supaya projectnya nanti konsisten dan mudah digunakan bersama juga. 

### Struktur Folder 

Berikut struktur folder yang akan kita buat kurang lebih gambarannya sebagai berikut, walaupun nggak sama persis tapi setidaknya kita mengambil inspirasi dari situ ya :

```txt
src
   ├── components/          # Component secara global
   ├── features/            # Fitur yang dimiliki, misal auth, dashboard, order, dst
   ├── hooks/               # Custom hooks
   ├── routes/              # Route components (halaman)
   ├── services/            # API calls, external services
   ├── stores/              # Global state management
   ├── styles/              # Global styles
   ├── utils/               # Utility functions
   ├── main.tsx             # Root file
   └── App.tsx              # Root component
```

Lebih detailnya bisa baca langsung di sumbernya :
https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md

### Tao of React

Aku sarankan kamu untuk membaca website berikut supaya nantinya terbiasa membuat kode yang berkualitas :

https://alexkondov.com/tao-of-react/


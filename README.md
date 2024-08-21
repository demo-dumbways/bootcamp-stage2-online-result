## TypeScript di React

### Setup Proyek React Menggunakan Vite dan TypeScript

#### Setup Proyek

- Untuk memulai, kita akan menggunakan Vite yang merupakan tool build cepat untuk aplikasi modern.

- Jalankan perintah berikut di terminal untuk membuat proyek React baru dengan TypeScript:

  ```bash
  npm create vite@latest
  ```

- Isikan nama projectnya
- Pilih `React`
- Pilih `TypeScript`

- Contohnya sebagai berikut :

  ![alt text](image.png)

  ```bash
  cd nama-projectmu
  npm install
  npm run dev
  ```

- Hasilnya :

  ![alt text](image-1.png)

#### Struktur Proyek 

Vite akan menghasilkan struktur proyek dengan file `.tsx` yang sudah siap digunakan dengan TypeScript.

### Penggunaan Tipe TypeScript di Komponen React

#### Definisi Props dengan TypeScript

Kamu bisa mendefinisikan tipe props yang diterima oleh komponen dengan membuat interface atau type.

Contoh:

```jsx
// src/components/Button.tsx
interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export function Button({ onClick, label }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
```

Challenge : kenapa disini kita membutuhkan `export` ya pada function Button?

Lalu coba, gunakan component tersebut :

```jsx
// src/App.tsx
import { Button } from "./components/Button";

function App() {
  return <Button label="Halo Guys" onClick={() => console.log("test")}/>;
}

export default App;
```
Kamu juga bisa melakukan pengembangan supaya button tersebut lebih customizable, contoh :

```jsx
// src/components/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button({ onClick, label }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
```

Challenge : coba pikirkan apa bedanya

#### State dengan TypeScript

Untuk mendefinisikan tipe state di komponen React, gunakan `useState` dengan tipe generik.

Contoh:
```jsx
// src/components/Counter.tsx

import { Counter } from "./components/Counter";

function App() {
  return <Counter />;
}

export default App;
```

### Props dan State dengan TypeScript, Termasuk Penanganan Tipe Kompleks

#### Props dengan Tipe Kompleks

Props bisa menggunakan tipe kompleks seperti objek atau array, dan TypeScript akan membantu memastikan tipe tersebut konsisten.

Contoh:

```jsx
interface User {
  id: number;
  name: string;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => (
  <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);
```

#### State dengan Objek

Kamu juga bisa menggunakan objek sebagai state dan TypeScript akan memeriksa tipe dari setiap properti.

Contoh:

```jsx
interface FormState {
  username: string;
  age: number;
}

const [formState, setFormState] = useState<FormState>({
  username: "",
  age: 0,
});
```

### Penggunaan TypeScript dengan Hooks (useState, useEffect) dan Custom Hooks

#### `useState` dengan TypeScript

Ketika menggunakan `useState`, kamu bisa menentukan tipe state untuk memastikan data yang dikelola sesuai dengan ekspektasi.

Contoh:

```jsx
const [isLoading, setIsLoading] = useState<boolean>(true);
```

#### `useEffect` dengan TypeScript

`useEffect` bisa digunakan dengan TypeScript tanpa banyak perubahan, namun pastikan dependency array sesuai dengan tipe yang diharapkan.

Contoh:

```jsx
useEffect(() => {
  console.log("Component did mount");
}, []);
```

#### Custom Hooks dengan TypeScript

Custom hooks bisa dibuat dengan TypeScript untuk mendukung berbagai skenario yang lebih kompleks.

Contoh:

```jsx
const useFetchData = <T,>(
  url: string
): { data: T | null; error: string | null } => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch(setError);
  }, [url]);

  return { data, error };
};
```

Dengan menggunakan TypeScript di React, kode yang dihasilkan akan lebih aman dan mudah untuk di-maintain, serta mengurangi risiko bug.

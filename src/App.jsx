import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

// 1. Soxta Postlar ma'lumotlari
const postsData = [
  {
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
  },
  {
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
  },
  {
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque"
  },
  {
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae"
  },
  {
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas"
  },
  {
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni meiores excepturi ut commodi dolor voluptatum modi aut vitae"
  },
  {
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut"
  }
];

// 2. Navigatsiya menyusi va navigatsiya tugmalari (Orqaga va Home)
function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const getLinkClass = (path) => location.pathname === path ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      {/* 1 marta orqaga qaytish tugmasi */}
      <button className="nav-btn back-btn" onClick={() => navigate(-1)}>
        ← Orqaga
      </button>

      {/* To'g'ridan-to'g'ri Home'ga qaytish tugmasi */}
      <Link to="/" className="nav-btn home-btn">
        🏠 Home
      </Link>

      <span className="nav-divider">|</span>

      {/* Asosiy 5 ta bo'lim */}
      <Link to="/" className={getLinkClass('/')}>Home</Link>
      <Link to="/users" className={getLinkClass('/users')}>Users</Link>
      <Link to="/posts" className={getLinkClass('/posts')}>Posts</Link>
      <Link to="/cart" className={getLinkClass('/cart')}>Cart</Link>
      <Link to="/login" className={getLinkClass('/login')}>Login</Link>
    </nav>
  );
}

// 3. Posts Sahifasi va Modal oynasi
function Posts() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="posts-container">
      <h1 className="menu-title">Menu</h1>

      {/* Grid ko'rinishidagi postlar */}
      <div className="posts-grid">
        {postsData.map((post) => (
          <div
            key={post.id}
            className="post-card"
            onClick={() => setSelectedPost(post)}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

      {/* Post ustiga bosganda ochiladigan katta modal oyna */}
      {selectedPost && (
        <div className="modal-backdrop" onClick={() => setSelectedPost(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedPost(null)}>✕</button>
            <span className="post-id">Post #{selectedPost.id}</span>
            <h2>{selectedPost.title}</h2>
            <hr />
            <p className="modal-body">{selectedPost.body}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Qolgan oddiy sahifalar
const Home = () => <div className="page"><h2>Home Bosh sahifa</h2></div>;
const Users = () => <div className="page"><h2>Users Sahifasi</h2></div>;
const Cart = () => <div className="page"><h2>Cart Savatcha</h2></div>;
const Login = () => <div className="page"><h2>Login Sahifasi</h2></div>;

// Asosiy App Komponenti
export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
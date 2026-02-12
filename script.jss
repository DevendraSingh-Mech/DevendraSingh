/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  display: flex;
  min-height: 100vh;
  background: #0a192f;
  color: #cbd5e1;
  scroll-behavior: smooth;
}

/* SIDEBAR */
.sidebar {
  width: 280px;
  background: #112240;
  padding: 40px 20px;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-photo {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 3px solid #64ffda;
  margin-bottom: 20px;
  object-fit: cover;
}

.profile-card h2 {
  color: #64ffda;
  font-size: 1.8rem;
  margin-bottom: 6px;
}

.role {
  font-style: italic;
  color: #8892b0;
  margin-bottom: 20px;
  font-weight: 500;
  text-align: center;
}

hr {
  width: 80%;
  border: 1px solid #233554;
  margin-bottom: 20px;
}

.contact-info p {
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.contact-info a {
  color: #64ffda;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

.sidebar-nav ul {
  list-style: none;
  width: 100%;
  padding-left: 0;
}

.sidebar-nav ul li {
  margin-bottom: 15px;
}

.sidebar-nav ul li a {
  color: #8892b0;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  display: block;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.sidebar-nav ul li a:hover,
.sidebar-nav ul li a.active {
  background: #64ffda;
  color: #0a192f;
}

.social-links {
  margin-top: auto;
  font-size: 0.9rem;
  color: #8892b0;
}

.social-links a {
  color: #64ffda;
  text-decoration: none;
  margin: 0 6px;
}

.social-links a:hover {
  text-decoration: underline;
}

/* MAIN CONTENT */
.main-content {
  margin-left: 280px;
  padding: 40px 50px;
  max-width: 900px;
  flex-grow: 1;
  overflow-x: hidden;
}

.section {
  margin-bottom: 60px;
}

.section h1 {
  font-size: 2.5rem;
  color: #64ffda;
  margin-bottom: 20px;
}

.section p {
  line-height: 1.6;
  color: #cbd5e1;
  font-size: 1.1rem;
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 15px;
}

.skill-grid span {
  background: #233554;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  color: #64ffda;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
}

.skill-grid span:hover {
  transform: translateY(-6px) scale(1.05);
  box-shadow: 0 15px 30px rgba(100, 255, 218, 0.3);
  background: #0a192f;
}

/* Experience Cards */
.exp-card {
  background: #112240;
  border-radius: 12px;
  padding: 20px 25px;
  margin-bottom: 20px;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
}

.exp-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.6);
  border: 1px solid #64ffda;
}

.exp-card h3 {
  color: #64ffda;
  margin-bottom: 5px;
}

.company {
  font-style: italic;
  color: #8892b0;
  margin-bottom: 10px;
}

.duration {
  font-weight: 600;
  color: #22c55e;
  margin-bottom: 10px;
}

.exp-list {
  list-style-type: disc;
  padding-left: 20px;
  color: #cbd5e1;
  line-height: 1.5;
}

/* Certifications */
.cert-card-pro {
  background: #112240;
  border-radius: 12px;
  padding: 20px 25px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
}

.cert-card-pro:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.6);
  border: 1px solid #64ffda;
}

.cert-header h3 {
  color: #64ffda;
  margin-bottom: 4px;
}

.issuer {
  font-style: italic;
  color: #8892b0;
  font-size: 0.9rem;
}

/* Contact Section */
.contact-section p,
.contact-section a {
  font-size: 1.1rem;
  color: #64ffda;
  text-decoration: none;
}

.contact-section a:hover {
  text-decoration: underline;
}

/* Reveal animations */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 768px) {
  body {
    flex-direction: column;
  }
  .sidebar {
    position: relative;
    width: 100%;
    height: auto;
    padding: 20px;
    flex-direction: row;
    overflow: visible;
  }
  .profile-card {
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
  .profile-photo {
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }
  .main-content {
    margin-left: 0;
    padding: 20px 15px;
  }
  .sidebar-nav ul {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .sidebar-nav ul li {
    margin: 0 10px;
  }
}

'use client'
import { useEffect } from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'


export default function Home() {
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger')
    const navMenu = document.querySelector('.nav-menu ul')
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active')
      })
    }
  }, [])

  return (
    <>
      <header>
        <h2 className="portfolio-title">Meu Portfólio</h2>
        <div className="hamburger">☰</div>
        <nav className="nav-menu">
          <ul>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#github">GitHub</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
        <h1 className="name">Caique<br />Kenji</h1>
        <img
          src="/Images/321334935_1186378145596829_1572258022869376268_n.jpg"
          alt="Profile"
          className="profile-image"
        />
        <div className="social-icons">
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </header>

      <section id="projects" className="projects">
        <h2>Meus Projetos</h2>
        <div className="project-container">
          <div className="project-card">
            <img src="/Images/axolote1.jpg" alt="Project" />
            <h3>Anxiety</h3>
            <p>Monitore seus estudos e gerencie sua Ansiedade!</p>
            <button onClick={() => window.location.href='https://github.com/KenjiCaique/Anxiety-TCC'}>
              Acessar
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>Sobre Mim</h2>
        <p>Olá! Me chamo Caique e estou iniciando minha jornada no mundo da tecnologia.</p>
        <p>Fiz o curso técnico de Desenvolvimento de Sistemas na ETEC Camargo Aranha...</p>
        <p>Atualmente, estou aprofundando meus estudos por conta própria...</p>
        <p>No entanto, meu grande objetivo profissional é atuar na área de Segurança da Informação...</p>
        <p>Estou sempre estudando, praticando e buscando projetos que me desafiem a aprender mais.</p>
      </section>

      <section id="github" className="github">
        <h2>Meu GitHub</h2>
        <p></p>
        <button onClick={() => window.location.href='https://github.com/KenjiCaique'}>
          Saiba Mais
        </button>
      </section>

      <section id="contact" className="contact">
        <h2>Entre em Contato</h2>
        <div className="contact-form">
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="E-mail" required />
          <textarea placeholder="Mensagem" required></textarea>
          <button type="submit">Enviar</button>
        </div>
      </section>

     <footer>
  <div className="contacts">
    <h3>Contatos</h3>
    <div className="social-links">
      <a href="https://github.com/KenjiCaique" target="_blank"><FaGithub size={24} /></a>
      <a href="https://www.instagram.com/caiqueky/" target="_blank"><FaInstagram size={24} /></a>
      <a href="mailto:caiquekenjiyafuco@gmail.com"><MdEmail size={24} /></a>
    </div>
  </div>

  <p>© 2025 Caique Kenji Yafuco</p>
  <p>Olá, mundo!</p>
</footer>

    </>
  )
}

import { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import axios from 'axios';


function Navbar(){
  const [isLogged, setIsLogged] = useState(false);
  const [canRender, setCanRender] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/user")
      .then((res) => {
        setIsLogged(true);
        setCanRender(true);
      })
      .catch((error) => {
        setIsLogged(false);
        setCanRender(true);
      });
  }, []);

    function handleLogout(){
      try{
        axios.get("http://localhost:3000/api/logout");
        setIsLogged(false);
      }catch{

      }
    }


    return (
        <nav className={styles.Navbar}>
          <ul>
            <li className={styles.logo}>
                東京都
            </li>
            <li>
              <Link href="/">
                Início
              </Link>
            </li>
            <li>
              <Link href="/atracoes">
                 Atrações
              </Link>
            </li>
            <li>
              <Link href="/ingressos">
                Ingressos
              </Link>
            </li>

            {!isLogged && canRender &&(
          <>
            <li>
              <Link href="/cadastro">Cadastro</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </>
        )}
          {isLogged && canRender &&(
          <>
            <li>
              <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
            
          </ul>
        </nav>
      );
}

export default Navbar;
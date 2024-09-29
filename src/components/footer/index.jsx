import styles from './styles.module.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer(){
    return (
    <div className={styles.container}>
        
        <div>  
            <a
                href="https://github.com/yuri046?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
            >
                <FaGithub size={30}  />
            </a>
            <a
                href="https://www.linkedin.com/in/yuri-santos-860aa01b7/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
            >
                <FaLinkedin size={30}  />
            </a>
            </div>
            <div>
            <p>&copy; 2024 Yuri Santos. Todos os direitos reservados.</p>
            </div>
    </div>
    )
}
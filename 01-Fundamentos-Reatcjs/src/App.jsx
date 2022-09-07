import { Header } from "./Components/Header";
import { Post } from "./Post";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./Components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="John"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Et temporibus incidunt voluptates quae eum modi non beatae! Qui ullam voluptate iusto,
              ducimus ut architecto ex hic eligendi perferendis molestiae consequatur!"
          />
          <Post
            author="André"
            content="Construindo componentes reutilizaveis"
          />
        </main>
      </div>
    </div>
  );
}

import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post
        author="John"
        content="orem ipsum dolor sit amet consectetur adipisicing elit. 
                     Et temporibus incidunt voluptates quae eum modi non beatae! Qui ullam voluptate iusto,
                    ducimus ut architecto ex hic eligendi perferendis molestiae consequatur!"
      />
      <Post author="André" content="Construindo componentes reutilizaveis" />
    </div>
  );
}

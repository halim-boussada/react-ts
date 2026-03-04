import axios from "axios";
import { useEffect, useState } from "react";
type Post = {
  title: string;
  body: string;
  tags: string[];
};
function Posts() {
  const [postList, setPostList] = useState<Post[]>([]);
    async function getPosts() {
      const {
        data,
      }: {
        data: {
          posts: Post[];
        };
      } = await axios.get("https://dummyjson.com/posts");
      setPostList(data.posts);
    }
  useEffect(() => {

    getPosts();
  }, []);
  return (
    <div>
      <ul>
        {postList.map((e: Post, index: number) => {
          return (
            <div key={index}>
              <li>{e.title}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Posts;

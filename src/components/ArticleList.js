
import Article from "./Article"
function ArticleList({posts}){
    const postsArray = posts.map((post)=>{
        return (
            <Article
              key={post.id}
              title={post.title}
              date={post.date}
              preview={post.preview}
              minutes={post.minutes}
            />
          );
    })
    return <main>{postsArray}</main>
    
}

export default ArticleList
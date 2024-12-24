import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

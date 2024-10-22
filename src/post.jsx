import { useEffect, useState } from 'react';
import axios from 'axios';

const Post = () => {
    const [post, setPost] = useState([]);
    
    useEffect(() => {
        axios.get('https://grazy.pythonanywhere.com/test/posts')
            .then(response => {
                setPost(response.data); // Update post state with fetched data
            })
            .catch(error => console.error('Error fetching posts:', error));
    }, []);
    
    return (
        <div>
            <ul className='post-info'>
                {post.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.descriptions}</p>
                        {post.image && <img src={post.image} alt={post.title} />} {/* Added alt text */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Post;

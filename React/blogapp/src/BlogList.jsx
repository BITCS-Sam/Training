import { Link, useHistory } from 'react-router-dom';

const BlogList = ({ blogs }) => {
    const history = useHistory();

    const handleClick = (id) => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-list">
            {blogs.map(blog => (
                <div className="blog-preview displayFlex" key={blog.id} >
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                    <div style={{ display: "flex", }}>
                        <Link to={`blog/edit/${blog.id}`} className='control-btn edit'>Edit</Link>
                        <div onClick={() => { handleClick(blog.id) }} className='control-btn delete'>Delete</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
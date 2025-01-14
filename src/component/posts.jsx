import React from 'react';

function Posts({data}) {
    return (
        <div className="container">
            <h1 className="display-4 text-center py-1">Posts</h1>

            <ul className="list-group pb-5">

                {
                    data.slice(0,5).map((item, index) => (
                        <li className="list-group-item list-group-item-action  align-items-center justify-content-between" key={index}>
                            <span className="item-text fw-bold">{item.title}</span>
                            <p className="item-text mt-2">{item.body}</p>
                        </li>
                    ))
                }
            </ul>

        </div>

    );
}

export default Posts;
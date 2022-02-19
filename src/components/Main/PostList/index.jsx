import React from 'react'
import ReactStars from "react-rating-stars-component"
import { useSelector } from "react-redux"
import './postlist.scss'

function PostList(props) {
  const productPageList = useSelector(state => state.productList.productPageList)

  return (
    <div>
      <ul className="post-list">
        {productPageList &&
          productPageList.map((post) => (
            <li className="post-list-item" key={post.objectID}>
              <div className="list-item-image">
                <img src={post.image} alt="img" />
              </div>
              <div className="list-item-content">
                <p className="content-top">{post.name}</p>
                <div className="content-bottom">
                  <ReactStars
                    classNames={'starts-item'}
                    count={6}
                    value={post.rating}
                    size={14}
                    isHalf={true}
                  />
                  <span className="list-item-price">${post.price}</span>
                </div>
              </div>
            </li>
        ))}
      </ul>
    </div>
  )
}
export default PostList
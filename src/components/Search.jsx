import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text"placeholder='find a user' />
      </div>
      <div className="userChat">
        <img src="https://res.cloudinary.com/purnesh/image/upload/f_auto/v1496132668/postergully02.jpg" alt="" />
        <div className="userChatInfo">
            <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search

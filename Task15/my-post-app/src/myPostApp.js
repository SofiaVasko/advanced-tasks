import React from 'react'

export function MyPostComponent(props) {
const { author, content, image, date, iconHeart, iconRepost } = props

return (
<div className="post">
<div className="author">
<img src={author.photo} alt={author.name}/>
<div className='author-information'>
<h2 className='title'>{author.name}</h2> 
<h5 className='pseudotitle'>{author.nickname}</h5>
<h5 className='date'>{date}</h5>
</div>
</div>
<p className='content'>{content}</p>
<img src={image} alt="Post"/>
<div className='icons'>
<div> 
<img src={iconHeart} alt="icon Heart"/>
<span className='infoIcon'>591</span>
</div>
<div> 
<img src={iconRepost} alt="icon Repost"/>
<span className='infoIcon'>921</span>
</div>
</div>
</div>
)
}
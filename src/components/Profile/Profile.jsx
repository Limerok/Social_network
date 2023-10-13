import style from './Profile.module.css'

export const Profile = () => {
  return (
    <>
      <div className={style.baner}>
        <img className={style.baner_img} src="https://kartinkin.net/uploads/posts/2022-03/1647988933_1-kartinkin-net-p-panoramnie-kartinki-1.jpg" />
      </div>
      
      <div>IMG + profil</div>

        <ul className={style.posts}>
          <li className='post'>
            Post 1
          </li>
          <li className='post'>
            Post 2
          </li>
          <li className='post'>
            Post 2
          </li>
          <li className='post'>
            Post 2
          </li>
          <li className='post'>
            Post 2
          </li>
          <li className='post'>
            Post 2
          </li>
          <li className='post'>
            Post 2
          </li>
          <li className='post'>
            Post 2
          </li>
          <li className='post'>
            Post 2
          </li>
        </ul>
    </>
  );
};

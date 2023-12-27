import React from 'react'

const Mid = () => {
  return (
    <div>
        <div className='mid-wrap'>
            <div className='mid-img'>
                <img src='https://www.ford.co.kr/content/ford/kr/ko_kr/home/jcr:content/par/billboard_1608625802/imageComponent/image.imgs.full.high.jpg' />
            </div>

            <div className='mid-text'>
              <h2 className='text-top'>FORD EXPLORER</h2>
              <p className='text-center'>지금 바로 만나보세요</p>
              <div className='text-bottom'>자세히 보기</div>
            </div>
        </div>

        <div className='text'>
          <div className='txt'>
            <h2>What's happening at Ford</h2>
            <h2>포드에서 전하는 최신 정보와 특별한 이야기를 만나보세요</h2>
          </div>

          <div className='ecoboost'>
            <div className='ecoboost-img'>
              <img src='https://www.ford.co.kr/content/ford/kr/ko_kr/home/jcr:content/par/brandgallery_1292910928/image2/image.imgs.full.high.jpg/1570435721949.jpg' />
            </div>
            
            <div className='ecoboost-text'>
              <div className='ecoboost-background'></div>
              <p>ECOBOOST</p>
            </div>
          </div>

          <div className='ranger-gallery'>
            <a href=''>
              <img src='https://www.ford.co.kr/content/ford/kr/ko_kr/home/jcr:content/par/brandgallery_1292910928/image1/image.imgs.full.high.jpg/1674050558173.jpg' />
              <div className='ranger-gallery-background'></div>
              <div className='ranger-gallery-text'>
                
                <p>RANGER Gallery</p>
              </div>
            </a>
          </div>

         </div>
    </div>
  )
}

export default Mid
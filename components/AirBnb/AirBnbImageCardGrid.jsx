import React from 'react'
import AirBnbImageCard from './AirBnbImageCard'
import AirBnb from '@app/airbnbUi/page'

const AirBnbImageCardGrid = () => {
  const img_1 = ['img1', 'img12', 'img13', 'img14']
  const img_2 = ['img3', 'img4', 'img5', 'img6']
  const img_3 = ['img4', 'img5', 'img6', 'img7']
  const img_4 = ['img13', 'img14', 'img15', 'img16']
  const img_5 = ['img3', 'img4', 'img5', 'img6']
  const img_6 = ['img4', 'img5', 'img6', 'img7']
  const img_7 = ['img13', 'img14', 'img15', 'img16']
  const img_8 = ['img3', 'img4', 'img5', 'img6']
  const img_9 = ['img4', 'img5', 'img6', 'img7']
  const img_10 = ['img13', 'img14', 'img15', 'img16']
  const img_11 = ['img3', 'img4', 'img5', 'img6']
  const img_12 = ['img4', 'img5', 'img6', 'img7']
  const img_13 = ['img13', 'img14', 'img15', 'img16']
  const img_14 = ['img3', 'img4', 'img5', 'img6']
  const img_15 = ['img4', 'img5', 'img6', 'img7']
  const img_16 = ['img13', 'img14', 'img15', 'img16']
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 mt-2 gap-4 items-start'>
      <AirBnbImageCard images={img_16} place='Tokyo, Japan' rating='4.97' distance='1,609' dates='8-15 Mar' price='187' />
      <AirBnbImageCard images={img_1} place='Rome, Italy' rating='4.9' distance='5,609' dates='15-20 Feb' price='297' />
      <AirBnbImageCard images={img_2} place='Berlin, Germany' rating='4.8' distance='3,609' dates='1-10 Mar' price='287' />
      <AirBnbImageCard images={img_3} place='New York, USA' rating='4.7' distance='7,609' dates='8-15 Mar' price='387' />
      <AirBnbImageCard images={img_4} place='London, UK' rating='4.6' distance='4,609' dates='8-15 Mar' price='287' />
      <AirBnbImageCard images={img_5} place='Sydney, Australia' rating='4.5' distance='9,609' dates='8-15 Mar' price='487' />
      <AirBnbImageCard images={img_6} place='Dubai, UAE' rating='4.4' distance='6,609' dates='8-15 Mar' price='387' />
      <AirBnbImageCard images={img_7} place='Cape Town, South Africa' rating='4.3' distance='8,609' dates='8-15 Mar' price='287' />
      <AirBnbImageCard images={img_8} place='Rio de Janeiro, Brazil' rating='4.2' distance='10,609' dates='8-15 Mar' price='387' />
      <AirBnbImageCard images={img_9} place='Mumbai, India' rating='4.1' distance='11,609' dates='8-15 Mar' price='287' />
      <AirBnbImageCard images={img_10} place='Beijing, China' rating='4.0' distance='12,609' dates='8-15 Mar' price='387' />
      <AirBnbImageCard images={img_11} place='Moscow, Russia' rating='3.9' distance='13,609' dates='8-15 Mar' price='287' />
      <AirBnbImageCard images={img_12} place='Cairo, Egypt' rating='3.8' distance='14,609' dates='8-15 Mar' price='387' />
      <AirBnbImageCard images={img_13} place='Buenos Aires, Argentina' rating='3.7' distance='15,609' dates='8-15 Mar' price='287' />
      <AirBnbImageCard images={img_14} place='Mexico City, Mexico' rating='3.6' distance='16,609' dates='8-15 Mar' price='387' />
      <AirBnbImageCard images={img_15} place='Paris, France' rating='3.5' distance='17,609' dates='8-15 Mar' price='287' />


    </div>
  )
}

export default AirBnbImageCardGrid
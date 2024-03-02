import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiMessageRounded, BiUpload } from 'react-icons/bi'
import { FaRetweet } from 'react-icons/fa'

const FeedCard: React.FC = () => {
  return (
    <div className='border border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer'>
    <div className="grid grid-cols-12"> 
       <div className="col-span-1">
           <Image className='rounded' src="/Avatar.jfif" alt={''}  width={50} height={50}/>
       </div>
       <div className="col-span-11 ml-2">
           <h5>Shibraj Deb</h5>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero omnis similique mollitia necessitatibus sunt soluta.</p>

           <div className='flex justify-between mt-5 text-xl items-center p-2 pr-10'>
            <div>
            <BiMessageRounded />
            </div>

            <div>
            <FaRetweet />
            </div>

            <div>
            <AiOutlineHeart />
            </div>

            <div>
            <BiUpload />
            </div>
           </div>
       </div>
    </div>
    </div>
  )
}

export default FeedCard

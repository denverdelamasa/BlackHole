import Spline from '@splinetool/react-spline';

import GithubButton from './components/GithubButton';

export default function App() {
  return (
    <div className="w-full h-screen relative">
      <Spline scene="https://prod.spline.design/n2CH0UOQvPEkWv2j/scene.splinecode" />
      
      <nav className="absolute top-2 left-1/2 transform -translate-x-1/2 flex items-center justify-between p-4 w-6xl md:w-[80%] rounded-2xl border-opacity-20 backdrop-blur-[5px] backdrop-contrast-200 backdrop-saturate-50 shadow-lg z-10">
        <span className="">
          <a href="https://denverdelamasa.vercel.app" target="_blank" className=''>
            <img src="/avatar.png" alt=""  className='w-8 h-8 border-1 border-gray-400'/>
          </a>
        </span>
        <GithubButton/>
      </nav>
    </div>
  );
}
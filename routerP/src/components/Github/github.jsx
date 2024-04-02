import { data } from 'autoprefixer';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //        fetch('https://api.github.com/users/huamanraj')
    //        .then(res => res.json())
    //        .then(data => {
    //         console.log(data);
    //         setData(data)
    //        })
    // },[])

    const data = useLoaderData()
    // from hook
    return (
        <div className='flex justify-center '>
            <div className='text-centre m-4 p-5 rounded-3xl text-2xl bg-gray-400'>
            <img className='rounded-3xl p-5 bg-' src={data.avatar_url} alt="gitprofile" width={200} />
               Github Followers: {data.followers}



               </div>
            
        </div>
        
    );
}

export default Github;

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/huamanraj')
     return response.json()

}

import { useDispatch, useSelector } from 'react-redux'
import warning from '../assets/danger.png'
import { useEffect } from 'react'
import { getProjects } from '../actions/projects'

export const Hero = () => {
    const dispatch = useDispatch()
    useEffect(() => {


        dispatch(getProjects(1))
    }, [])
    const { projects } = useSelector((state) => (state.projects))

    return (
        <div>
            <div className="p-8">
                <h1 className="text-3xl text-white mb-4">What's New!</h1>
                <div>
                    <div className="bg-darker-blue/60 backdrop:blur-md rounded-2xl p-8 w-80 text-white">
                        {/* <span className="w-full h-40 bg-white block rounded-2xl"></span> */}
                        <h1 className="text-lg font-bold">Underwate Vehicle D-90</h1>
                        <p className="mt-4">This vehicle has been tested to go till the deepest depths of the world aiding your water expedition!</p>
                    </div>
                </div>
            </div>
            <div>
                  <h1 className="text-3xl text-white mx-8">Warning!</h1>
                <div className="bg-darker-blue/60 p-2 mx-8 rounded-2xl text-white flex backdrop:blur-md">
                    <div className="">
                        <span className="w-28 h-28 block rounded-2xl p-4">
                            <img src={warning} alt="" />
                        </span>
                    </div>
                    <div className="mx-2 ">
                        <h1 className="font-bold text-lg">Pressure</h1>
                        <p>The Mariana Trench has the world’s deepest known point, the Challenger Deep, reaching nearly 11,000 meters (36,000 feet). Pressure here can exceed 1,000 times atmospheric pressure, posing extreme risks for any underwater vehicle.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}